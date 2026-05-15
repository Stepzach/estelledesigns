export default async (request, context) => {
  const url = new URL(request.url);
  const itemParam = url.searchParams.get('item');

  // 1. If there's no ?item= in the URL, do nothing. Just load the normal page.
  if (!itemParam) {
    return context.next();
  }

  // 2. Fetch the standard index.html page
  const response = await context.next();
  let html = await response.text();

  // 3. Parse the item parameter (e.g., "prints/my-artwork")
  const [sectionKey, slug] = itemParam.split('/');
  if (!sectionKey || !slug) return new Response(html, response);

  // 4. Map your sections to the Google Sheets GID
  const sections = {
    prints: '611338961',
    commercial: '553657743',
    ecards: '410511174',
    brand: '834260665',
    custom: '1262380022'
  };

  const gid = sections[sectionKey];
  if (!gid) return new Response(html, response);

  // 5. Fetch the Google Sheet CSV
  const sheetUrl = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSqEPfwqk0ju0h0kXT7IWt9iUoykb6PhJgCPTDNWnmC3zuPTMYbjhG7fzV6dNBs7LZzNeTtysfopkAv/pub?output=csv&gid=${gid}`;
  
  try {
    const csvRes = await fetch(sheetUrl);
    const csvText = await csvRes.text();
    
    // Very basic CSV parsing to find the row matching our slug
    const rows = csvText.split('\n');
    const headers = rows[0].split(',');
    
    // Find column indexes
    const titleIdx = headers.findIndex(h => h.trim() === 'TITLE');
    const imgIdx = headers.findIndex(h => h.trim() === 'IMAGE');
    const descIdx = headers.findIndex(h => h.trim() === 'PIN_DESC');

    let matchedRow = null;

    // Loop through rows to find the match (Note: A proper CSV parser is better, but this works for basic text)
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(',');
      // Generate a slug from the title or image just like common.js does
      const rowTitle = cols[titleIdx] ? cols[titleIdx].trim() : '';
      const rowImg = cols[imgIdx] ? cols[imgIdx].trim() : '';
      
      let rowSlug = '';
      if (rowTitle) {
        rowSlug = rowTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      } else if (rowImg) {
        rowSlug = rowImg.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }

      if (rowSlug === slug) {
        matchedRow = cols;
        break;
      }
    }

    // 6. If we found the artwork, inject the Open Graph tags into the HTML
    if (matchedRow) {
      const title = matchedRow[titleIdx] || 'Estelle Stephens';
      const image = matchedRow[imgIdx] || '';
      const desc = matchedRow[descIdx] || title;

      // Replace the default meta tags in your HTML with the dynamic ones
      html = html.replace(
        /<meta property="og:title" content="[^"]*">/i, 
        `<meta property="og:title" content="${title}">`
      );
      html = html.replace(
        /<meta property="og:description" content="[^"]*">/i, 
        `<meta property="og:description" content="${desc}">`
      );
      html = html.replace(
        /<meta property="og:image" content="[^"]*">/i, 
        `<meta property="og:image" content="${image}">`
      );
    }
    
    return new Response(html, response);

  } catch (error) {
    // If the fetch fails, just return the normal HTML
    return new Response(html, response);
  }
};

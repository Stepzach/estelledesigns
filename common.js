/* ═══════════════════════════════════════════
   common.js — shared across all ES pages
   ─────────────────────────────────────────
   • Nav / burger / drawer
   • Scroll reveal
   • Section data loading (PapaParse & Local)
   • Gallery renderer
   • Item overlay (slide-up, preserves scroll)
   • Meta injection
   • Shimmer skeleton helpers
═══════════════════════════════════════════ */

/* ── Hardcoded Art Prints Data ── */
const PRINTS_DATA = [

  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7529.jpeg?tr=w-1300&updatedAt=1777801530867",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1879817261/red-lace-lingerie-art-print-trendy",
    "ALT_TEXT": "A beautiful and delicate illustration of a matching red lace lingerie set, including an intricate underwire bra and a matching thong. The set features fine embroidery and scalloped edges. In the center, the words 'J’adore' are written in an elegant red cursive script with a small heart, against a soft cream background.",
    "TAGS": "Red Lingerie Art, Lace Bra Illustration, Parisian Chic Wall Decor, J'adore Print, Romantic Bedroom Art, Estelle Designs, Bridal Shower Gift, French Style Poster.",
    "TITLE": "\"Jadore\" Red Lace Lingerie Art | Chic Parisian Bedroom Decor",
    "PIN_DESC": "Romance is in the air! The \"J'adore\" print by Estelle Designs is a chic and delicate tribute to French elegance. Featuring an intricate red lace lingerie set, this illustration is the perfect addition to a stylish dressing room or a romantic bedroom gallery wall. A stunning gift for the lover of all things chic. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7543.jpeg?tr=w-1300&updatedAt=1777801530556",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1880879497/pink-leather-jacket-art-print-rock-chick",
    "ALT_TEXT": "A stylish illustration of the back of a light pink leather moto jacket. The jacket features silver studs along the collar, shoulders, and sleeves, with silver zippers on the cuffs. The words 'ROCK CHICK' are written across the upper back in bold, red-burgundy block letters against a soft cream background.",
    "TAGS": "Rock Chick Art, Pink Leather Jacket Print, Studded Moto Jacket Decor, Edgy Feminine Wall Art, Estelle Designs, Fashion Illustration, Teen Room Decor, Cool Girl Aesthetic.",
    "TITLE": "\"Rock Chick\" Pink Studded Jacket Art | Edgy Fashion Decor",
    "PIN_DESC": "Soft pink meets heavy metal! The \"Rock Chick\" print by Estelle Designs is the ultimate edgy-chic addition to your space. Featuring a studded pink leather jacket with bold lettering, it’s the perfect piece for a stylish bedroom or a music-inspired gallery wall. A must-have gift for the rebel at heart! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7538.jpeg?tr=w-1300&updatedAt=1777801530357",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1867171592/pink-cowgirl-boots-art-print-girly",
    "ALT_TEXT": "A vertical illustration of a pair of pink cowboy boots arranged in a mirrored layout. The boots feature intricate white celestial designs including a crescent moon, stars, and sunburst patterns, along with delicate botanical accents. The boots have dark heels and are set against a soft, textured pale pink background.",
    "TAGS": "Celestial Cowboy Boots, Pink Western Art, Boho Cowgirl Decor, Moon and Stars Illustration, Estelle Designs, Pink Aesthetic Wall Art, Coastal Cowgirl Poster, Mystical Western Print.",
    "TITLE": "Pink Celestial Cowboy Boots Art | Boho Western Aesthetic Decor",
    "PIN_DESC": "For the cowgirl with her head in the stars! ✨ The \"Cosmic Cowgirl\" print by Estelle Designs features dreamy pink western boots with intricate celestial details. Perfect for adding a whimsical, boho-western touch to your bedroom or apartment. A must-have for the pink-obsessed dreamer! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7534.jpeg?tr=w-1300&updatedAt=1777801529977",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1852132223/dramatic-exit-art-print-funny-hallway",
    "ALT_TEXT": "A stylish fashion illustration featuring a woman with dark hair and long black opera gloves peeking out from behind a tall dusty rose curtain. The words 'DRAMATIC EXIT' are centered on the curtain in bold black and white block lettering. The background is a textured cream color.",
    "TAGS": "Dramatic Exit Art, Fashion Illustration, Opera Gloves Print, Dusty Rose Wall Decor, Hollywood Glamour Poster, Estelle Designs, Sassy Statement Art, Vanity Room Decor.",
    "TITLE": "\"Dramatic Exit\" Fashion Art Print | Chic Pink & Black Decor",
    "PIN_DESC": "Always leave them wanting more! 🎭✨ The \"Dramatic Exit\" print by Estelle Designs is the ultimate tribute to high-fashion flair and cinematic style. Featuring elegant opera gloves and bold typography, it’s the perfect addition to a stylish dressing room or a chic apartment gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7536.jpeg?tr=w-1300&updatedAt=1777801529825",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1867728826/french-couple-art-print-retro-parisian",
    "ALT_TEXT": "A charming vintage-style illustration of a couple from the waist down. The man is wearing striped trousers and brown brogues, while the woman is in a cream patterned skirt and pink kitten heels with bows, with one leg playfully lifted. The words 'C’EST L’AMOUR' are written in bold red letters with small hearts as apostrophes against a soft cream background.",
    "TAGS": "C'est L'amour Print, Vintage Romance Art, Couple Illustration, Parisian Style Decor, Anniversary Gift Ideas, Estelle Designs, Retro Fashion Wall Art, Valentine's Day Art.",
    "TITLE": "\"C'est L'amour\" Vintage Romance Print | Chic Couple Illustration",
    "PIN_DESC": "Romance is always in style! 🥂💖 The \"C'est L'amour\" print by Estelle Designs is a playful and elegant tribute to classic love. Featuring vintage fashion and a whimsical Parisian vibe, it’s the perfect addition to your bedroom decor or a romantic gallery wall. A unique gift for weddings and anniversaries! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7532.jpeg?tr=w-1300&updatedAt=1777801529442",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1855138937/vintage-fashion-wall-art-retro-fashion",
    "ALT_TEXT": "A humorous fashion illustration of a woman in a tan pencil skirt and matching high heels walking forward while carrying a massive, precarious stack of bright orange designer shoe boxes. The boxes obscure her upper body and feature the bold black text: \"I DON'T KNOW WHAT I WANT BUT I WANT IT SO BAD.\" The background is a soft, textured cream.",
    "TAGS": "Funny Fashion Art, Shopping Illustration, Orange Shoe Boxes Print, Retail Therapy Decor, Estelle Designs, Wardrobe Wall Art, Gift for Shoe Lovers, Chic Humorous Poster.",
    "TITLE": "Funny Shopping Art Print | \"I Want It So Bad\" Fashion Decor",
    "PIN_DESC": "The struggle is real (and stylish)! 👠🧡 \"Retail Therapy\" by Estelle Designs is the ultimate tribute to the thrill of the hunt. Featuring a precarious stack of designer boxes and a witty quote, this print is the perfect addition to a chic closet or dressing room. A hilarious gift for the fashion-obsessed! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7533.jpeg?tr=w-1300&updatedAt=1777801529315",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1879690085/retro-fashion-print-girly-hot-pink",
    "ALT_TEXT": "A dynamic fashion illustration of a woman with blonde hair mid-leap, wearing a voluminous, ethereal hot pink dress that appears to flow around her like a cloud. She is barefoot with arms outstretched against a soft cream background. The text 'WHEN IN DOUBT DANCE IT OUT' is written in bold pink block letters at the bottom.",
    "TAGS": "Dance It Out Art, Pink Dress Illustration, Motivational Wall Decor, Fashion Movement Print, Estelle Designs, Joyful Art Poster, Dancer Gift Ideas, Vibrant Feminine Decor.",
    "TITLE": "\"Dance It Out\" High-Fashion Art Print | Vibrant Pink Statement Decor",
    "PIN_DESC": "Turn up the volume on your home decor! 💃✨ The \"Dance It Out\" print by Estelle Designs is a celebration of joy and freedom. Featuring a stunning pink dress in motion and a motivational quote, it’s the perfect piece to bring high energy and high fashion to your space. A must-have for the modern \"main character.\" Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7539.jpeg?tr=w-1300&updatedAt=1777801529318",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1867602478/retro-makeup-art-print-beyoutiful-beauty",
    "ALT_TEXT": "A chic fashion illustration showing the reflection of a woman in a gold circular vanity mirror as she applies mascara. She has bold eyeliner and pink lips. Below the mirror, the word 'Beyoutiful' is written in a black and pink script font against a soft, textured cream background.",
    "TAGS": "Beyoutiful Art Print, Makeup Room Decor, Vanity Mirror Illustration, Beauty Affirmation Wall Art, Estelle Designs, Mascara Art Poster, Gift for Makeup Lovers, Glamorous Bedroom Art.",
    "TITLE": "\"Beyoutiful\" Makeup Art Print | Chic Vanity & Beauty Decor",
    "PIN_DESC": "Your daily dose of glam and confidence! 💄✨ The \"Beyoutiful\" print by Estelle Designs features a stunning mirror reflection and a powerful play on words. Perfect for your makeup vanity or dressing room, this chic illustration celebrates the art of being yourself. A must-have for every beauty lover! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7530.jpeg?tr=w-1300&updatedAt=1777801529049",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1879786107/red-lipstick-art-print-trendy-french",
    "ALT_TEXT": "A chic fashion illustration of an elegant hand with red manicured nails holding an open tube of red lipstick. The wrist is adorned with a thick, multi-strand pearl bracelet with a gold clasp. The word 'amour' is written above in a textured red script, all set against a soft, cream-colored background.",
    "TAGS": "Amour Art Print, Red Lipstick Illustration, Pearl Bracelet Wall Art, Parisian Fashion Decor, Estelle Designs, Glamour Wall Art, Gift for Beauty Enthusiasts, Romantic Bedroom Decor.",
    "TITLE": "\"Amour\" Red Lipstick & Pearls Art | Chic Parisian Beauty Decor",
    "PIN_DESC": "Classic elegance never goes out of style. 💄✨ The \"Amour\" print by Estelle Designs is a tribute to timeless beauty, featuring a bold red lip and luxurious pearls. Perfect for adding a touch of Parisian romance to your vanity or dressing room. A stunning gift for the woman who loves all things chic! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7540.jpeg?tr=w-1300&updatedAt=1777801528524",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4301498866/funny-laundry-room-art-print-fuck",
    "ALT_TEXT": "A bold and humorous typographic illustration featuring a dark red clothes hanger. Hanging from the hanger by thin gold strings are the words 'FUCK LAUNDRY STAY NAKED' in large, blocky, red distressed lettering. The background is a soft, textured cream color.",
    "TAGS": "Funny Laundry Art, Stay Naked Print, Typographic Wall Decor, Humorous Home Decor, Estelle Designs, Laundry Room Poster, Edgy Typographic Art, Sassy Housewarming Gift.",
    "TITLE": "Funny Laundry Room Art | \"Stay Naked\" Typographic Print",
    "PIN_DESC": "Because laundry is the worst. 🧺🚫 The \"Stay Naked\" print by Estelle Designs is the ultimate rebellious addition to your laundry room or closet. Featuring bold red typography and a cheeky message, it’s the perfect way to add a touch of humor to your daily chores. A hilarious gift for the friend who's over the folding! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7537.jpeg?tr=w-1300&updatedAt=1777801527723",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1868087702/poolside-art-print-more-amor-por-favor",
    "ALT_TEXT": "A chic fashion illustration of a woman from the neck down wearing a white one-piece swimsuit. The swimsuit features the phrase 'MORE AMOR POR FAVOR' in bold pink block letters. She is holding a pair of yellow-rimmed sunglasses in one hand, adorned with several rings. The background is a soft, textured cream with warm skin tones throughout.",
    "TAGS": "More Amor Por Favor Art, Summer Fashion Illustration, Swimsuit Wall Decor, Tropical Vibe Poster, Estelle Designs, Beach House Art, Pink and White Fashion Print, Vacation Aesthetic Decor.",
    "TITLE": "\"More Amor Por Favor\" Art Print | Chic Summer Fashion Decor",
    "PIN_DESC": "Summer state of mind! ☀️💖 The \"More Amor Por Favor\" print by Estelle Designs is a vibrant tribute to sun, style, and love. Featuring a trendy swimsuit and retro shades, it’s the perfect piece to brighten up your vanity or coastal-inspired living space. A must-have gift for the travel lover or sun-seeker! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7535.jpeg?tr=w-1300&updatedAt=1777801526854",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1825283094/pink-sunglasses-art-print-trendy-girly",
    "ALT_TEXT": "A vibrant fashion illustration featuring four different styles of bright pink sunglasses stacked vertically. The styles include cat-eye, oval, and rectangular frames with slightly tinted lenses. The background consists of vertical baby pink and white stripes, creating a playful and preppy aesthetic.",
    "TAGS": "Pink Sunglasses Art, Retro Eyewear Print, Fashion Accessory Illustration, Pink Aesthetic Wall Art, Estelle Designs, Preppy Room Decor, Trendy Vanity Art, Cat Eye Sunglasses Poster.",
    "TITLE": "\"Pink Shades\" Retro Fashion Art Print | Trendy Pink Sunglasses Decor",
    "PIN_DESC": "Summer vibes all year round! 🕶️💖 The \"Pink Shades\" print by Estelle Designs is a must-have for the fashion-obsessed. Featuring a stack of iconic retro sunglasses on a cute striped background, this illustration is the ultimate accessory for your walls. Perfect for a chic vanity or a pink-themed bedroom! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7900.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4298806250/perfume-bottle-art-print-set-sassy",
    "ALT_TEXT": "Three stylish perfume bottle illustrations arranged horizontally. The first is a round pink bottle with a honeycomb gold cap and a red bow, labeled \"NORMAL GETS YOU NOWHERE.\" The second is a rectangular gold bottle with a blue bow, labeled \"NEW PLAN FUCK IT.\" The third is a vintage-style teal flacon with a red bow, labeled \"DO IT FOR THE PLOT.\" All set against a soft cream background.",
    "TAGS": "Perfume Bottle Art, Chic Vanity Decor, Fashionable Mantras, Luxury Beauty Illustration, Estelle Designs, Sassy Wall Art, Glamorous Home Office Decor, Do It For The Plot Art.",
    "TITLE": "Luxury Perfume Trio Art Print | \"Normal Gets You Nowhere\" & Sassy Beauty Decor",
    "PIN_DESC": "Life is better with a signature scent and a bold attitude! 🎀✨ The Essence Collection by Estelle Designs features three chic perfume bottles with witty mantras. Perfect for your vanity, walk-in closet, or gallery wall, these illustrations bring high-fashion vibes and a touch of sass to your home. Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7899.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4298806250/perfume-bottle-art-print-set-sassy",
    "ALT_TEXT": "Three stylish perfume bottle illustrations arranged horizontally. The first is a round pink bottle with a honeycomb gold cap and a red bow, labeled \"NORMAL GETS YOU NOWHERE.\" The second is a rectangular gold bottle with a blue bow, labeled \"NEW PLAN FUCK IT.\" The third is a vintage-style teal flacon with a red bow, labeled \"DO IT FOR THE PLOT.\" All set against a soft cream background.",
    "TAGS": "Perfume Bottle Art, Chic Vanity Decor, Fashionable Mantras, Luxury Beauty Illustration, Estelle Designs, Sassy Wall Art, Glamorous Home Office Decor, Do It For The Plot Art.",
    "TITLE": "Luxury Perfume Trio Art Print | \"New Plan, Fuck It\" & Sassy Beauty Decor",
    "PIN_DESC": "Life is better with a signature scent and a bold attitude! 🎀✨ The Essence Collection by Estelle Designs features three chic perfume bottles with witty mantras. Perfect for your vanity, walk-in closet, or gallery wall, these illustrations bring high-fashion vibes and a touch of sass to your home. Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7898.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4298806250/perfume-bottle-art-print-set-sassy",
    "ALT_TEXT": "Three stylish perfume bottle illustrations arranged horizontally. The first is a round pink bottle with a honeycomb gold cap and a red bow, labeled \"NORMAL GETS YOU NOWHERE.\" The second is a rectangular gold bottle with a blue bow, labeled \"NEW PLAN FUCK IT.\" The third is a vintage-style teal flacon with a red bow, labeled \"DO IT FOR THE PLOT.\" All set against a soft cream background.",
    "TAGS": "Perfume Bottle Art, Chic Vanity Decor, Fashionable Mantras, Luxury Beauty Illustration, Estelle Designs, Sassy Wall Art, Glamorous Home Office Decor, Do It For The Plot Art.",
    "TITLE": "Luxury Perfume Trio Art Print | \"Do It For The Plot\" & Sassy Beauty Decor",
    "PIN_DESC": "Life is better with a signature scent and a bold attitude! 🎀✨ The Essence Collection by Estelle Designs features three chic perfume bottles with witty mantras. Perfect for your vanity, walk-in closet, or gallery wall, these illustrations bring high-fashion vibes and a touch of sass to your home. Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Fashion",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7544.jpeg?tr=w-1300&updatedAt=1777801529492",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1882257605/pink-sunglasses-art-print-la-vie-en-rose",
    "ALT_TEXT": "A stylish illustration of round sunglasses with rosy pink lenses. The white frames feature the phrase 'LA VIE EN ROSE' repeated in pink lettering around each lens. The sunglasses have gold metal hardware and are set against a soft, textured pale pink background.",
    "TAGS": "La Vie En Rose Art, Pink Sunglasses Print, Fashion Accessory Illustration, Chic Wall Decor, Estelle Designs, Pink Aesthetic Poster, French Quote Art, Trendy Vanity Decor.",
    "TITLE": "\"La Vie En Rose\" Sunglasses Art Print | Trendy Pink Fashion Decor",
    "PIN_DESC": "Life is better in pink! 🕶️💖 The \"La Vie En Rose\" print by Estelle Designs is the ultimate accessory for your walls. Featuring retro-chic round sunglasses with a classic French sentiment, it’s the perfect addition to a stylish bedroom or fashion-forward office. A must-have gift for the girl who always looks on the bright side! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Cats & Dogs",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7541.jpeg?tr=w-1300&updatedAt=1777801529304",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1880513407/homebody-black-cat-art-print-introvert",
    "ALT_TEXT": "A stylish illustration of a woman with long brown hair lying down and peeking out from behind a stretched-out black cat with yellow eyes. The scene is set against a soft, textured cream background. The words 'it's too peopley outside' are written in a playful pink cursive script at the top.",
    "TAGS": "Introvert Art Print, Black Cat Wall Decor, Too Peopley Outside Poster, Funny Cat Mom Gift, Estelle Designs, Homebody Illustration, Sassy Wall Art, Minimalist Living Room Decor.",
    "TITLE": "\"It's Too Peopley Outside\" Art Print | Funny Black Cat & Introvert Decor",
    "PIN_DESC": "Current mood: staying in! 🐈‍⬛✨ The \"Too Peopley\" print by Estelle Designs is the ultimate anthem for introverts and cat lovers everywhere. Featuring a chic illustration and a relatable quote, it’s the perfect addition to your cozy home sanctuary. A must-have gift for the cat mom in your life! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Cats & Dogs",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7542.jpeg?tr=w-1300&updatedAt=1777801528829",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1879853793/dogtrovert-art-print-vintage-dog-quote",
    "ALT_TEXT": "A chic fashion illustration of a woman with short dark hair wearing a pink top and long white opera gloves. She is hugging a brown dog that has several red lipstick kiss marks on its face. The word 'dogtrovert' is written in a red cursive script at the top, against a soft cream and light pink background.",
    "TAGS": "Dogtrovert Art Print, Dog Mom Illustration, Fashionable Pet Art, Woman Hugging Dog Poster, Estelle Designs, Pink Aesthetic Wall Art, Gift for Dog Lovers, Chic Animal Illustration.",
    "TITLE": "\"Dogtrovert\" Fashion Art Print | Chic Dog Mum Decor",
    "PIN_DESC": "Preferred company: my dog. 🐾💖 The \"Dogtrovert\" print by Estelle Designs is a stylish tribute to the ultimate bond between a pet and their person. Featuring elegant opera gloves and plenty of puppy kisses, this whimsical illustration is the perfect addition to a chic home office or bedroom. A must-have gift for the proud dog mom! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Cats & Dogs",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7531.jpeg?tr=w-1300&updatedAt=1777801527864",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1880286817/catrovert-art-print-bengal-cat-funny-pet",
    "ALT_TEXT": "A chic and cozy fashion illustration of a person lying in bed under soft pink satin sheets. One hand with red manicured nails is raised, holding a patterned coffee mug. A beautiful Bengal cat with spotted fur lies playfully on its back against the person's side. The word 'catrovert' is written in a red cursive script at the top against a cream background.",
    "TAGS": "Catrovert Art Print, Bengal Cat Illustration, Coffee and Cats Art, Cozy Morning Decor, Estelle Designs, Homebody Gift Ideas, Pink Satin Aesthetic, Whimsical Pet Wall Art.",
    "TITLE": "\"Catrovert\" Art Print | Cozy Bengal Cat & Coffee Decor",
    "PIN_DESC": "The perfect morning doesn't exist—oh wait, yes it does! ☕🐾 The \"Catrovert\" print by Estelle Designs is a tribute to the slow life. Featuring a spotted Bengal cat and a hot cup of coffee, this chic illustration is the ultimate cozy addition to your bedroom or living space. A thoughtful gift for the cat mom who loves her quiet time! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Cats & Dogs",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7528.jpeg?tr=w-1300&updatedAt=1777801527753",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1880305263/funny-black-cat-art-print-retro-cat",
    "ALT_TEXT": "A stylish fashion illustration featuring a black cat with bright yellow eyes walking confidently between a pair of bare legs. The words 'ALL GUESTS MUST BE APPROVED BY THE CAT' are written in bold pink block lettering on the right side. The background is a soft, textured cream color.",
    "TAGS": "Black Cat Art Print, Cat Guest Policy Poster, Funny Cat Decor, Estelle Designs, Entryway Wall Art, Modern Cat Illustration, Gift for Cat Lovers, Sassy Home Decor.",
    "TITLE": "Funny Black Cat Art Print | \"All Guests Must Be Approved\" Decor",
    "PIN_DESC": "The cat makes the rules! 🐈‍⬛💖 The \"Gatekeeper\" print by Estelle Designs is a stylish and humorous tribute to the feline in charge. Featuring bold pink typography and a sleek black cat, it’s the perfect addition to your entryway or gallery wall. A must-have gift for the cat mom with an attitude! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Cats & Dogs",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7911.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4413616653/cavalier-king-charles-spaniel-dog-art",
    "ALT_TEXT": "A charming and humorous illustration of a brown and white Cavalier King Charles Spaniel dog. The dog is sitting inside a large, luxury-style pink leather handbag and wearing a matching pink patterned headscarf tied under its chin. The background is a soft, textured cream color.",
    "TAGS": "Cavalier King Charles Spaniel Art, Dog in Handbag Print, Pink Fashion Pet Decor, Humorous Dog Illustration, Estelle Designs, Luxury Pet Art, Gift for Spaniel Owners, Glamour Dog Poster.",
    "TITLE": "Funny Cavalier King Charles Art Print | Dog in Pink Handbag Decor",
    "PIN_DESC": "Ready for departure! ✈️💖 The \"Jet-Set Joy\" print by Estelle Designs is the ultimate tribute to the high-maintenance traveler. Featuring a sweet Cavalier in a pink bag and headscarf, this whimsical illustration adds a touch of luxury and humor to your home. A must-have for dog moms who love to travel in style! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Cats & Dogs",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%202.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/4519620559",
    "ALT_TEXT": "A humorous, vintage-style bathroom art print featuring a fluffy long-haired cat with large brown eyes and brown, white, and black tabby patches. The cat is peeking into the frame from the right side. The background has a split design: a textured, distressed light pinkish-cream top half and a solid white bottom half. The top section features the words \"WELCOME TO THE LOO\" in a tall, condensed muted blue font. The bottom white section contains the text \"THE CAT WILL BE WITH YOU SHORTLY\" in a tall, condensed charcoal grey font.",
    "TAGS": "welcome to the loo, funny bathroom art, cat toilet sign, restroom humor print, guest wc wall decor, cute fluffy cat poster, humorous bathroom quotes, powder room wall art, cheeky cat illustration, vintage toilet decor",
    "TITLE": "Funny Cat Bathroom Decor | Welcome to the Loo Art Print",
    "PIN_DESC": "Add some humor to your guest bathroom or powder room with this adorable \"Welcome to the Loo\" wall art print. Featuring a charming, fluffy long-haired cat peeking in to say hello, this high-quality graphic poster perfectly blends a vintage pastel aesthetic with a cheeky restroom quote. It is an ideal home decor gift idea for cat lovers, new homeowners, or anyone looking to update their restroom with a lighthearted touch.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Cats & Dogs",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7910.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4413644163/english-bulldog-art-print-retro-dog",
    "ALT_TEXT": "A stylish and humorous illustration of an English Bulldog sitting and looking slightly to the side. The bulldog is accessorized with a tan designer-style bucket hat, a thick gold chain necklace, and a dark brown leather belt bag worn across its chest. The background is a soft, textured cream color.",
    "TAGS": "English Bulldog Art Print, Streetwear Dog Illustration, Gold Chain Bulldog Decor, Funny Dog Wall Art, Estelle Designs, Urban Pet Portrait, Fashionable Bulldog Poster, Gift for Bulldog Owners.",
    "TITLE": "\"The Street King\" Bulldog Art Print | Streetwear & Urban Dog Decor",
    "PIN_DESC": "Swagger on four legs! 🐾🔥 \"The Street King\" by Estelle Designs is a tribute to the stylish English Bulldog. Featuring a tan bucket hat, gold chain, and a trendy belt bag, this chic illustration is the perfect way to add some urban personality to your gallery wall. A must-have for every bulldog parent! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Cats & Dogs",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7909.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4413749579/shih-tzu-dog-art-print-retro-dog-lover",
    "ALT_TEXT": "A humorous and detailed illustration of a small dog looking directly at the viewer. The dog has many pink foam hair rollers in its top hair and is wearing several strands of elegant white pearls around its neck. The background is a soft, textured cream color.",
    "TAGS": "Funny Yorkie Art, funny Shih Tzu art, Dog in Hair Rollers, Pearls and Pups Print, Humorous Pet Portrait, Estelle Designs, Glamour Dog Decor, Gift for Yorkie Owners, Kitsch Animal Art, gift for Shih Tzu owners",
    "TITLE": "Funny Small Dog Art Print | Dog in Hair Rollers & Pearls Decor",
    "PIN_DESC": "Paws-itively glamorous! 💅✨ The \"Sunday Morning Glamour\" print by Estelle Designs is the ultimate tribute to the high-maintenance pup in your life. Featuring a Yorkie or Shih Tzu in pink rollers and pearls, this whimsical illustration adds a touch of humor and style to your vanity or bathroom. A must-have gift for dog moms and glam lovers! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Cats & Dogs",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4518362387/funny-cat-art-print-for-above-toilet",
    "ALT_TEXT": "A humorous vintage-style illustration of a black and white long-haired cat wearing a leopard print headscarf, dark cat-eye sunglasses, and carrying a matching leopard print purse. The cat holds a smoking cigarette in one paw against a textured cream background. Curving text at the top reads \"Please close the lid\" and cursive text at the bottom reads \"the cat has a drinking problem!\".",
    "TAGS": "cat bathroom art, funny bathroom print, close the lid sign, toilet lid reminder, vintage cat art, leopard print decor, retro bathroom wall art, funny cat lover gift, toilet humor print, powder room decor, guest WC sign, black and white cat, cheeky bathroom art, sassy cat print, dressing room decor, quirky wall art, kitsch home decor, pastel retro aesthetic, framed cat print, toilet drinking problem, please close the lid cat sign, cat has a drinking problem print, vintage cat with sunglasses art, leopard print cat wall decor, humorous guest toilet art UK, close the lid sign, cat bathroom art, funny restroom print, drinking problem cat, retro bathroom decor, guest WC wall art, sassy cat print, leopard print cat, funny cat lover gift, vintage bathroom sign, powder room wall art, humorous toilet art, quirky home decor",
    "TITLE": "Funny Cat Bathroom Wall Art | Retro Bathroom Decor Idea",
    "PIN_DESC": "Bring some vintage humor to your bathroom styling with this sassy cat wall art print. Featuring a glamorous black and white cat in leopard print accessories and the witty quote, \"Please close the lid, the cat has a drinking problem!\", it makes the perfect playful addition to a guest bathroom or powder room gallery wall. Savvy bathroom decor inspiration for cat lovers.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Cats & Dogs",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7677.jpeg?tr=w-1300&updatedAt=1777897126775",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1853254170/retro-french-dachshund-art-print-funny",
    "ALT_TEXT": "A charming digital illustration of a brown dachshund dressed in a blue and white striped sweater, a light blue beret, and red heart-shaped sunglasses. The word \"BONJOUR\" is written below in bold, red-and-white block letters. The dog has a playful expression, and the background is a clean, textured off-white.",
    "TAGS": "Dachshund Art Print, French Bulldog Decor, Bonjour Wall Art, Funny Dog Illustration, Estelle Designs, Kids & Bathroom Collection, Parisian Style Decor, Nursery Dog Art, Heart Sunglasses Print.",
    "TITLE": "\"Bonjour\" Dachshund Art Print | Chic Parisian Dog Decor",
    "PIN_DESC": "J'adore this pup! 🐾❤️ The Parisian Pup from the Kids & Bathroom Collection by Estelle Designs is the ultimate \"cool dog\" art. With his striped sweater and heart sunglasses, this dachshund illustration brings a touch of whimsical French style to your nursery or gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7447.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1894181969/retro-pool-art-print-woman-with-striped",
    "ALT_TEXT": "Vintage-style illustration of a woman from behind, wrapped in a blue and white striped towel with the word HOLIDAY written in pink across it, soft pastel background.",
    "TAGS": "Coastal Chic Wall Art, Holiday Typography Print, Striped Beach Towel Decor, Vintage Summer Illustration, Travel Aesthetic Art, Estelle Designs, Modern Beach House Decor.",
    "TITLE": "Vintage Holiday Beach Art | Coastal Chic Striped Towel Print",
    "PIN_DESC": "Dive into summer with this retro-aesthetic pool art collection by Estelle Designs. Featuring vintage poolside vibes and French Riviera-inspired pastel colors, these high-quality Giclée prints are the perfect holiday home decor for your summer house or pool house. From underwater swimming art to classic retro posters, bring the ultimate vacation feel to your walls. Available as instant digital downloads or premium art prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2023.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1879332612/girl-diver-art-print-retro-swimming-pool",
    "ALT_TEXT": "Vintage-style illustration of a woman in a white striped swimsuit and swim cap performing a graceful swan dive against a soft blue sky with hazy light bokeh.",
    "TAGS": "Diving Girl Art Print, Coastal Wall Decor, Vintage Beach Illustration, Retro Swimsuit Aesthetic, Swan Dive Art, Estelle Designs, Modern Beach House Decor.",
    "TITLE": "Vintage Diving Girl Art Print | Coastal Blue Wall Decor",
    "PIN_DESC": "Transform your space into a permanent vacation with Estelle Designs’ Pool Collection. Inspired by 1970s retro aesthetic and sun-drenched French Riviera summers, these vintage art prints feature soothing pastel colors and iconic poolside imagery. Ideal for pool house decor, bathroom wall art, or creating a cohesive summer vibe in your living room. Refresh your home with underwater art and nostalgic summer house prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2028.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1881304722/woman-diving-art-print-retro-pool-house",
    "ALT_TEXT": "Vintage-style illustration of a person's legs sticking out of a pool during a splash, featuring turquoise water and a soft peach-colored sky.",
    "TAGS": "Pool House Decor, Funny Bathroom Art, Summer Splash Illustration, Retro Coastal Wall Art, Turquoise and Peach Decor, Estelle Designs, Whimsical Vacation Print.",
    "TITLE": "Retro Summer Pool Splash Art | Fun Coastal Wall Decor",
    "PIN_DESC": "Dreamy poolside art for the vintage lover. This collection by Estelle Designs captures the essence of summer with retro posters, pastel French Riviera vibes, and underwater swimming scenes. Perfect for holiday home styling and pool house decor. Shop the collection at Estelle Designs.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2026.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1895484177/poolside-art-print-woman-sunbathing",
    "ALT_TEXT": "Vintage-style illustration of a woman in a white bikini and large sun hat lounging by a swimming pool with a drink, featuring soft pastel tones.",
    "TAGS": "Poolside Wall Art, Chic Summer Illustration, Vintage Beach Decor, Sun Hat Art Print, Retro Vacation Aesthetic, Estelle Designs, Modern Coastal Decor.",
    "TITLE": "Vintage Poolside Glamour Art | Chic Woman in Sun Hat Print",
    "PIN_DESC": "Dive into summer with this retro-aesthetic pool art collection by Estelle Designs. Featuring vintage poolside vibes and French Riviera-inspired pastel colors, these high-quality Giclée prints are the perfect holiday home decor for your summer house or pool house. From underwater swimming art to classic retro posters, bring the ultimate vacation feel to your walls. Available as instant digital downloads or premium art prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2025.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1881298488/woman-sunbathing-art-print-retro",
    "ALT_TEXT": "Vintage-style illustration of a woman in a white bikini and straw hat lying flat along the edge of a turquoise pool, one arm reaching into the water, against a soft peach background.",
    "TAGS": "Minimalist Beach Art, Poolside Wall Decor, Chic Summer Illustration, White Bikini Art Print, Coastal Relaxation Decor, Estelle Designs, Modern Retro Art.",
    "TITLE": "Minimalist Poolside Art Print | Chic Summer Relaxation Decor",
    "PIN_DESC": "Transform your space into a permanent vacation with Estelle Designs’ Pool Collection. Inspired by 1970s retro aesthetic and sun-drenched French Riviera summers, these vintage art prints feature soothing pastel colors and iconic poolside imagery. Ideal for pool house decor, bathroom wall art, or creating a cohesive summer vibe in your living room. Refresh your home with underwater art and nostalgic summer house prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2015__X0pa1UQO.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1881249560/poolside-woman-art-print-retro-summer",
    "ALT_TEXT": "Vintage-style illustration of a woman in a white bikini and white sunglasses lounging on a pink float in a turquoise swimming pool under a soft peach sky.",
    "TAGS": "Pool Float Art Print, Chic Summer Wall Decor, Pink and Blue Coastal Art, Retro Sunglasses Illustration, Beach House Fashion Art, Estelle Designs, Modern Poolside Decor.",
    "TITLE": "Chic Pool Float Art Print | Retro Pink and Blue Summer Decor",
    "PIN_DESC": "Dreamy poolside art for the vintage lover. This collection by Estelle Designs captures the essence of summer with retro posters, pastel French Riviera vibes, and underwater swimming scenes. Perfect for holiday home styling and pool house decor. Shop the collection at Estelle Designs.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2022.jpg?tr=w-1300&updatedAt=1777394548885",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1880343866/retro-woman-on-pool-float-art-print-pool",
    "ALT_TEXT": "Vintage-style aerial illustration of a woman in a white bikini and white-rimmed sunglasses floating on a pink raft in blue water with sun reflections.",
    "TAGS": "Aerial Pool Art, Coastal Wall Decor, Pink Raft Illustration, Retro Summer Aesthetic, High-Fashion Beach Art, Estelle Designs, Modern Luxury Print.",
    "TITLE": "Retro Pool Float Art Print | Aerial Beach House Wall Decor",
    "PIN_DESC": "Dive into summer with this retro-aesthetic pool art collection by Estelle Designs. Featuring vintage poolside vibes and French Riviera-inspired pastel colors, these high-quality Giclée prints are the perfect holiday home decor for your summer house or pool house. From underwater swimming art to classic retro posters, bring the ultimate vacation feel to your walls. Available as instant digital downloads or premium art prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%207.jpg?tr=w-1300&updatedAt=1777394548574",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1895539987/retro-woman-swimming-pool-art-print",
    "ALT_TEXT": "Vintage-style illustration of a woman in a white high-waisted bikini and white-rimmed sunglasses floating in a blue pool with sun-dappled water and a soft shadow below.",
    "TAGS": "Pool Art Print, Minimalist Coastal Decor, White Bikini Art, Retro Summer Illustration, Floating Girl Wall Art, Estelle Designs, Modern Beach House Decor.",
    "TITLE": "Minimalist Floating Girl Art Print | Blue Water Retro Pool Decor",
    "PIN_DESC": "Transform your space into a permanent vacation with Estelle Designs’ Pool Collection. Inspired by 1970s retro aesthetic and sun-drenched French Riviera summers, these vintage art prints feature soothing pastel colors and iconic poolside imagery. Ideal for pool house decor, bathroom wall art, or creating a cohesive summer vibe in your living room. Refresh your home with underwater art and nostalgic summer house prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2017.jpg?tr=w-1300&updatedAt=1781855439427",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1879321636/retro-girl-diver-art-print-woman-on-dive",
    "ALT_TEXT": "Vintage-style illustration of a woman in a white striped swimsuit and cap standing poised on a diving board against a soft, warm neutral background.",
    "TAGS": "Diving Art Print, Vintage Coastal Wall Decor, Retro Swimsuit Illustration, Mid-Century Modern Beach Art, Estelle Designs, Minimalist Summer Print.",
    "TITLE": "Vintage Diver Art Print | Mid-Century Modern Coastal Decor",
    "PIN_DESC": "Dreamy poolside art for the vintage lover. This collection by Estelle Designs captures the essence of summer with retro posters, pastel French Riviera vibes, and underwater swimming scenes. Perfect for holiday home styling and pool house decor. Shop the collection at Estelle Designs.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%204.jpg?tr=w-1300&updatedAt=1777394544658",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1892906761/retro-swimming-pool-art-print-boy-on",
    "ALT_TEXT": "Vintage-style aerial illustration of a woman in a striped swimsuit on a pink and white inner tube, floating in a pool with light blue stripes on the bottom.",
    "TAGS": "Aerial Pool Art, Coastal Graphic Decor, Striped Water Print, Vintage Summer Illustration, Pink and Blue Wall Art, Estelle Designs, Modern Beach House Decor.",
    "TITLE": "Aerial Pool Art Print | Blue Striped Water Retro Decor",
    "PIN_DESC": "Dive into summer with this retro-aesthetic pool art collection by Estelle Designs. Featuring vintage poolside vibes and French Riviera-inspired pastel colors, these high-quality Giclée prints are the perfect holiday home decor for your summer house or pool house. From underwater swimming art to classic retro posters, bring the ultimate vacation feel to your walls. Available as instant digital downloads or premium art prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%206.jpg?tr=w-1300&updatedAt=1777394545229",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1877948524/girl-jumping-pool-art-print-retro-summer",
    "ALT_TEXT": "Vintage-style illustration of a young girl in a blue and white striped swimsuit and blue goggles jumping into a pool under a soft peach-colored sky.",
    "TAGS": "Kids Pool Decor, Summer Art Print, Girl Jumping Illustration, Coastal Nursery Wall Art, Vintage Summer Decor, Estelle Designs, Playroom Wall Art.",
    "TITLE": "Joyful Kids Pool Art | Girl Jumping in Water Retro Print",
    "PIN_DESC": "Transform your space into a permanent vacation with Estelle Designs’ Pool Collection. Inspired by 1970s retro aesthetic and sun-drenched French Riviera summers, these vintage art prints feature soothing pastel colors and iconic poolside imagery. Ideal for pool house decor, bathroom wall art, or creating a cohesive summer vibe in your living room. Refresh your home with underwater art and nostalgic summer house prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2021.jpg?tr=w-1300&updatedAt=1777394538568",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1893516017/dive-board-art-print-retro-summer",
    "ALT_TEXT": "Vintage-style illustration of a woman with blonde hair in a white striped swimsuit mid-air after jumping from a high diving board against a soft blue sky.",
    "TAGS": "High Dive Art Print, Coastal Wall Decor, Vintage Beach Illustration, Retro Swimsuit Aesthetic, Summer Adventure Art, Estelle Designs, Modern Beach House Decor.",
    "TITLE": "Vintage High Dive Art Print | Retro Coastal Wall Decor",
    "PIN_DESC": "Dreamy poolside art for the vintage lover. This collection by Estelle Designs captures the essence of summer with retro posters, pastel French Riviera vibes, and underwater swimming scenes. Perfect for holiday home styling and pool house decor. Shop the collection at Estelle Designs.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7452.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1895505413/retro-woman-on-dive-board-art-print",
    "ALT_TEXT": "Vintage-style illustration of a woman in a white striped swimsuit and pink cap standing on a high diving board with her back to the water, against a soft blue sky.",
    "TAGS": "High Dive Wall Art, Vintage Coastal Decor, Retro Swimsuit Illustration, Mid-Century Beach Art, Estelle Designs, Sophisticated Summer Print, Diving Board Art.",
    "TITLE": "Vintage High Dive Art | Retro Woman in Striped Swimsuit Print",
    "PIN_DESC": "Dive into summer with this retro-aesthetic pool art collection by Estelle Designs. Featuring vintage poolside vibes and French Riviera-inspired pastel colors, these high-quality Giclée prints are the perfect holiday home decor for your summer house or pool house. From underwater swimming art to classic retro posters, bring the ultimate vacation feel to your walls. Available as instant digital downloads or premium art prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2016.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1892136785/boy-and-golden-retriever-jumping-in-pool",
    "ALT_TEXT": "Vintage-style illustration of a young boy in striped trunks and a Golden Retriever jumping into a turquoise pool under a soft peach-colored sky.",
    "TAGS": "Golden Retriever Art Print, Boy and Dog Wall Art, Kids Pool Decor, Summer Joy Illustration, Coastal Nursery Decor, Estelle Designs, Dog Lover Gift.",
    "TITLE": "Boy and Golden Retriever Pool Art | Joyful Summer Kids Print",
    "PIN_DESC": "Transform your space into a permanent vacation with Estelle Designs’ Pool Collection. Inspired by 1970s retro aesthetic and sun-drenched French Riviera summers, these vintage art prints feature soothing pastel colors and iconic poolside imagery. Ideal for pool house decor, bathroom wall art, or creating a cohesive summer vibe in your living room. Refresh your home with underwater art and nostalgic summer house prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2011.jpg?tr=w-1300&updatedAt=1777394549020",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1447498199/underwater-swimming-pool-art-print-retro",
    "ALT_TEXT": "Vintage-style underwater illustration of a person plunging into teal water with a large white splash and bubbles.",
    "TAGS": "Underwater Art Print, Coastal Wall Decor, Teal Beach Illustration, Splash Art Print, Modern Beach House Decor, Estelle Designs, Summer Vacation Aesthetic.",
    "TITLE": "Underwater Splash Art Print | Teal Coastal Wall Decor",
    "PIN_DESC": "Dreamy poolside art for the vintage lover. This collection by Estelle Designs captures the essence of summer with retro posters, pastel French Riviera vibes, and underwater swimming scenes. Perfect for holiday home styling and pool house decor. Shop the collection at Estelle Designs.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%205.jpg?tr=w-1300&updatedAt=1777394548798",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1714539757/swimming-pool-art-print-retro-underwater",
    "ALT_TEXT": "Vintage-style point-of-view illustration of a person's legs dangling into clear turquoise swimming pool water with sun-dappled reflections and a tiled edge.",
    "TAGS": "Poolside POV Art, Tropical Water Print, Beach House Wall Decor, Summer Vacation Illustration, Turquoise Bathroom Art, Estelle Designs, Modern Retro Coastal Print.",
    "TITLE": "Summer Pool POV Art Print | Tropical Turquoise Water Decor",
    "PIN_DESC": "Dive into summer with this retro-aesthetic pool art collection by Estelle Designs. Featuring vintage poolside vibes and French Riviera-inspired pastel colors, these high-quality Giclée prints are the perfect holiday home decor for your summer house or pool house. From underwater swimming art to classic retro posters, bring the ultimate vacation feel to your walls. Available as instant digital downloads or premium art prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2018.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1881295606/retro-pool-art-print-woman-with-sun",
    "ALT_TEXT": "Vintage-style illustration of a woman in a white bikini standing behind a leopard-print fringed umbrella at the edge of a blue pool under a peach sky.",
    "TAGS": "Leopard Print Wall Art, Chic Summer Illustration, Vintage Poolside Decor, Fringed Umbrella Art, Retro Beach Aesthetic, Estelle Designs, Modern Coastal Fashion Print.",
    "TITLE": "Retro Leopard Print Beach Umbrella Art | Chic Poolside Decor",
    "PIN_DESC": "Transform your space into a permanent vacation with Estelle Designs’ Pool Collection. Inspired by 1970s retro aesthetic and sun-drenched French Riviera summers, these vintage art prints feature soothing pastel colors and iconic poolside imagery. Ideal for pool house decor, bathroom wall art, or creating a cohesive summer vibe in your living room. Refresh your home with underwater art and nostalgic summer house prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2031.jpg?tr=w-1300&updatedAt=1777394536415",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1727990687/sunset-dive-art-print-vintage-swimming",
    "ALT_TEXT": "Vintage-style illustration of a young boy in striped trunks jumping from a high diving board into a hazy, warm peach-colored sky.",
    "TAGS": "Kids Diving Art Print, Retro Summer Wall Decor, Boy Jumping Illustration, Coastal Playroom Art, Vintage Beach House Decor, Estelle Designs, High Board Diving Print.",
    "TITLE": "Vintage Boy Diving Art Print | Retro High Board Summer Decor",
    "PIN_DESC": "Dreamy poolside art for the vintage lover. This collection by Estelle Designs captures the essence of summer with retro posters, pastel French Riviera vibes, and underwater swimming scenes. Perfect for holiday home styling and pool house decor. Shop the collection at Estelle Designs.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2027.jpg?tr=w-1300&updatedAt=1777394547431",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1711878345/aerial-swimming-pool-art-print-retro",
    "ALT_TEXT": "Vintage-style point-of-view illustration of legs dangling from an orange inner tube into clear turquoise pool water with sun-dappled reflections.",
    "TAGS": "Pool POV Art, Orange and Blue Decor, Coastal Wall Art, Summer Float Illustration, Minimalist Beach House Print, Estelle Designs, Modern Retro Water Art.",
    "TITLE": "Minimalist Pool POV Art Print | Orange and Turquoise Summer Decor",
    "PIN_DESC": "Dive into summer with this retro-aesthetic pool art collection by Estelle Designs. Featuring vintage poolside vibes and French Riviera-inspired pastel colors, these high-quality Giclée prints are the perfect holiday home decor for your summer house or pool house. From underwater swimming art to classic retro posters, bring the ultimate vacation feel to your walls. Available as instant digital downloads or premium art prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2020.jpg?tr=w-1300&updatedAt=1777394543999",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1877952356/girl-jumping-into-pool-art-print-retro",
    "ALT_TEXT": "Vintage-style illustration of a young girl in a white cherry-print swimsuit and pink goggles jumping into a turquoise pool with a pink inner tube under a peach sky.",
    "TAGS": "Kids Pool Art, Cherry Swimsuit Print, Pink Nursery Decor, Retro Summer Illustration, Girl Jumping into Pool Art, Estelle Designs, Playroom Wall Decor.",
    "TITLE": "Joyful Little Girl Pool Art | Pink Cherry Swimsuit Retro Print",
    "PIN_DESC": "Transform your space into a permanent vacation with Estelle Designs’ Pool Collection. Inspired by 1970s retro aesthetic and sun-drenched French Riviera summers, these vintage art prints feature soothing pastel colors and iconic poolside imagery. Ideal for pool house decor, bathroom wall art, or creating a cohesive summer vibe in your living room. Refresh your home with underwater art and nostalgic summer house prints.",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2034.jpg?tr=w-1300&updatedAt=1777394548952",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1782797241/retro-pool-art-print-woman-on-pink-float",
    "ALT_TEXT": "Vintage-style illustration of a woman's legs extended over a large pink inner tube in a turquoise pool with sun-dappled water.",
    "TAGS": "Pink Pool Art, Coastal Minimalist Decor, Summer Float Illustration, Retro Beach House Print, Pastel Wall Art, Estelle Designs, Modern Luxury Coastal Decor.",
    "TITLE": "Minimalist Pink Pool Float Art Print | Retro Coastal Wall Decor",
    "PIN_DESC": "Dreamy poolside art for the vintage lover. This collection by Estelle Designs captures the essence of summer with retro posters, pastel French Riviera vibes, and underwater swimming scenes. Perfect for holiday home styling and pool house decor. Shop the collection at Estelle Designs.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2010.jpg?tr=w-1300&updatedAt=1777394547750",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4325309556/retro-swimming-pool-art-print-little-boy",
    "ALT_TEXT": "Vintage-style underwater illustration of a young boy in coral trunks holding his nose and plunging into turquoise water with lots of white bubbles.",
    "TAGS": "Underwater Kids Art, Boy Swimming Print, Turquoise Bathroom Decor, Summer Splash Illustration, Coastal Nursery Wall Art, Estelle Designs, Retro Pool Decor.",
    "TITLE": "Underwater Boy Splash Art Print | Retro Summer Kids Decor",
    "PIN_DESC": "Dive into summer with this retro-aesthetic pool art collection by Estelle Designs. Featuring vintage poolside vibes and French Riviera-inspired pastel colors, these high-quality Giclée prints are the perfect holiday home decor for your summer house or pool house. From underwater swimming art to classic retro posters, bring the ultimate vacation feel to your walls. Available as instant digital downloads or premium art prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%208.jpg?tr=w-1300&updatedAt=1777394545962",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4324199879/kids-pool-art-print-vintage-summer-wall",
    "ALT_TEXT": "Vintage-style illustration of three children seen from behind—a toddler in orange water wings, a girl in a red bikini, and a boy in yellow trunks—jumping into a turquoise pool under a peach sky.",
    "TAGS": "Sibling Wall Art, Kids Pool Decor, Summer Joy Illustration, Coastal Playroom Art, Vintage Beach House Decor, Estelle Designs, Children Jumping in Pool Print.",
    "TITLE": "Joyful Siblings Pool Art | Kids Jumping in Water Retro Print",
    "PIN_DESC": "Transform your space into a permanent vacation with Estelle Designs’ Pool Collection. Inspired by 1970s retro aesthetic and sun-drenched French Riviera summers, these vintage art prints feature soothing pastel colors and iconic poolside imagery. Ideal for pool house decor, bathroom wall art, or creating a cohesive summer vibe in your living room. Refresh your home with underwater art and nostalgic summer house prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2014.jpg?tr=w-1300&updatedAt=1781376453907",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1880039466/underwater-girl-art-print-retro-swimming",
    "ALT_TEXT": "Vintage-style underwater illustration of a young girl in a yellow swimsuit holding her nose and plunging into turquoise water with an explosion of white bubbles.",
    "TAGS": "Underwater Kids Art, Girl Swimming Print, Yellow Swimsuit Illustration, Turquoise Bathroom Decor, Summer Splash Wall Art, Estelle Designs, Retro Pool Decor.",
    "TITLE": "Underwater Girl Splash Art Print | Retro Yellow Swimsuit Kids Decor",
    "PIN_DESC": "Dreamy poolside art for the vintage lover. This collection by Estelle Designs captures the essence of summer with retro posters, pastel French Riviera vibes, and underwater swimming scenes. Perfect for holiday home styling and pool house decor. Shop the collection at Estelle Designs.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7453.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1880547480/woman-diving-art-print-retro-swimming",
    "ALT_TEXT": "Vintage-style illustration of a woman in a white striped swimsuit and white swim cap diving underwater through turquoise water with white bubbles.",
    "TAGS": "Underwater Diving Art, Coastal Wall Decor, Vintage Swimsuit Illustration, Retro Beach House Print, Turquoise Bathroom Art, Estelle Designs, Modern Coastal Living.",
    "TITLE": "Vintage Diving Art Print | Retro Coastal Bathroom Decor",
    "PIN_DESC": "Dive into summer with this retro-aesthetic pool art collection by Estelle Designs. Featuring vintage poolside vibes and French Riviera-inspired pastel colors, these high-quality Giclée prints are the perfect holiday home decor for your summer house or pool house. From underwater swimming art to classic retro posters, bring the ultimate vacation feel to your walls. Available as instant digital downloads or premium art prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%209.jpg?tr=w-1300&updatedAt=1777394548686",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4345397105/retro-girl-swimming-pool-art-print",
    "ALT_TEXT": "Vintage-style illustration of a woman swimming just beneath the surface of clear turquoise water with white bubbles and sun-dappled reflections.",
    "TAGS": "Underwater Swimming Art, Coastal Wall Decor, Vintage Beach Illustration, Retro Pool House Print, Turquoise Bathroom Art, Estelle Designs, Modern Coastal Living.",
    "TITLE": "Ethereal Swimming Art Print | Retro Coastal Bathroom Decor",
    "PIN_DESC": "Transform your space into a permanent vacation with Estelle Designs’ Pool Collection. Inspired by 1970s retro aesthetic and sun-drenched French Riviera summers, these vintage art prints feature soothing pastel colors and iconic poolside imagery. Ideal for pool house decor, bathroom wall art, or creating a cohesive summer vibe in your living room. Refresh your home with underwater art and nostalgic summer house prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7904.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1825930213/retro-woman-diver-print-set-minimalist",
    "ALT_TEXT": "A three-panel vintage-style illustration of a woman in a red and white striped swimsuit diving into a pool, shown in three stages: takeoff, pike position, and entry.",
    "TAGS": "Diver Triptych Art, Vintage Coastal Prints, Retro Swimsuit Illustration, 3-Piece Wall Art, Mid-Century Beach Decor, Estelle Designs, Summer Motion Art.",
    "TITLE": "Vintage Diver Triptych Art | Retro Woman Diving Sequence Print",
    "PIN_DESC": "Dreamy poolside art for the vintage lover. This collection by Estelle Designs captures the essence of summer with retro posters, pastel French Riviera vibes, and underwater swimming scenes. Perfect for holiday home styling and pool house decor. Shop the collection at Estelle Designs.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7905.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1825930213/retro-woman-diver-print-set-minimalist",
    "ALT_TEXT": "A three-panel vintage-style illustration of a woman in a red and white striped swimsuit diving into a pool, shown in three stages: takeoff, pike position, and entry.",
    "TAGS": "Diver Triptych Art, Vintage Coastal Prints, Retro Swimsuit Illustration, 3-Piece Wall Art, Mid-Century Beach Decor, Estelle Designs, Summer Motion Art.",
    "TITLE": "Vintage Diver Triptych Art | Retro Woman Diving Sequence Print",
    "PIN_DESC": "Dreamy poolside art for the vintage lover. This collection by Estelle Designs captures the essence of summer with retro posters, pastel French Riviera vibes, and underwater swimming scenes. Perfect for holiday home styling and pool house decor. Shop the collection at Estelle Designs.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Pool",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7906.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1825930213/retro-woman-diver-print-set-minimalist",
    "ALT_TEXT": "A three-panel vintage-style illustration of a woman in a red and white striped swimsuit diving into a pool, shown in three stages: takeoff, pike position, and entry.",
    "TAGS": "Diver Triptych Art, Vintage Coastal Prints, Retro Swimsuit Illustration, 3-Piece Wall Art, Mid-Century Beach Decor, Estelle Designs, Summer Motion Art.",
    "TITLE": "Vintage Diver Triptych Art | Retro Woman Diving Sequence Print",
    "PIN_DESC": "Dreamy poolside art for the vintage lover. This collection by Estelle Designs captures the essence of summer with retro posters, pastel French Riviera vibes, and underwater swimming scenes. Perfect for holiday home styling and pool house decor. Shop the collection at Estelle Designs.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Retro",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7490.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1702237120/retro-radio-art-print-girly-pastel-pink",
    "ALT_TEXT": "A digital illustration of a vintage-style portable radio in soft pink faux leather with gold knobs, a cream-colored handle, and a classic tuning dial showing AM and FM frequencies.",
    "TAGS": "Vintage Radio Art, Retro Music Decor, Pink and Gold Wall Art, Mid-Century Modern Illustration, Music Lover Gift, Nostalgic Home Decor, Analog Radio Print.",
    "TITLE": "Vintage Retro Radio Art Print | Chic Pink & Gold Music Decor",
    "PIN_DESC": "Add a melodic touch to your walls with \"The Golden Frequency.\" This stunning vintage-style radio illustration blends soft pink textures with glamorous gold details, making it the ultimate statement piece for a retro-inspired room or a chic home office. Perfect for those who love mid-century aesthetics and classic sound. Shop our full collection of nostalgic Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Retro",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7492.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/978790856/vintage-typewriter-art-print-retro",
    "ALT_TEXT": "A digital illustration of a vintage golden-orange typewriter with a sheet of white paper inserted. The paper features the typed quote: 'You are the author of your own life story.' The typewriter has classic black and cream keys on a soft, neutral background.",
    "TAGS": "Typewriter Art, Motivational Quote Print, Writer Gift, Vintage Office Decor, Inspirational Wall Art, Estelle Designs, Graduation Gift, Dark Academia Aesthetic.",
    "TITLE": "Vintage Typewriter Art | \"You Are The Author Of Your Own Life Story\"",
    "PIN_DESC": "Write your own destiny! The \"Author’s Desk\" print by Estelle Designs combines vintage charm with a motivational message. This golden typewriter illustration is the perfect decor for writers, book lovers, and dreamers. Elevate your office or study space with this timeless piece of inspirational art. Shop our collection of high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Retro",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7493.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1840432646/retro-movie-night-art-print-home-theater",
    "ALT_TEXT": "A retro rubber-hose style cartoon illustration of a smiling soda cup mascot holding a film clapperboard and giving a thumbs up. The text 'MOVIE NIGHT' is written in a film-strip font at the top, and 'SHOW TIME' is at the bottom between two decorative film borders on a soft cream background.",
    "TAGS": "Movie Night Art, Retro Cinema Poster, Home Theater Decor, Cartoon Mascot Illustration, Vintage Movie Wall Art, Estelle Designs, Movie Room Gift, Mid-Century Animation Style.",
    "TITLE": "Retro Movie Night Art Print | Vintage Cinema Mascot Decor",
    "PIN_DESC": "Bring back the magic of the movies with the \"Movie Night Showtime\" art print by Estelle Designs. This adorable retro cartoon mascot is the perfect addition to your home theater or cozy media room. Featuring classic animation vibes and a charming vintage palette, it’s a total scene-stealer for any wall. Shop our collection of high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Retro",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7491.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1838858070/retro-rotary-phone-art-print-funny",
    "ALT_TEXT": "Bring back the magic of the movies with the \"Movie Night Showtime\" art print by Estelle Designs. This adorable retro cartoon mascot is the perfect addition to your home theater or cozy media room. Featuring classic animation vibes and a charming vintage palette, it’s a total scene-stealer for any wall. Shop our collection of high-quality Giclée prints and digital downloads today!Vintage Phone Art, Dining Room Wall Decor, Rotary Phone Illustration, Kitchen Wall Art, Tech-Free Zone Decor, Estelle Designs, Nostalgic Home Print, Family Dinner Rule Art.",
    "TAGS": "Vintage Phone Art, Dining Room Wall Decor, Rotary Phone Illustration, Kitchen Wall Art, Tech-Free Zone Decor, Estelle Designs, Nostalgic Home Print, Family Dinner Rule Art.",
    "TITLE": "Vintage Rotary Phone Art | \"Phones Off At The Dinner Table\" Print",
    "PIN_DESC": "Disconnect to reconnect! The \"Dinner Connection\" print by Estelle Designs is the perfect nostalgic reminder to put away the screens and enjoy the company. This stylish mustard-yellow rotary phone illustration is a great addition to your kitchen or dining area decor. A must-have for creating a cozy, intentional home environment. Shop our collection of high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Retro",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7494.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1502279362/retro-movie-night-poster-home-theater",
    "ALT_TEXT": "A retro rubber-hose style cartoon illustration of a smiling popcorn bucket mascot holding a vintage film camera and giving a thumbs up. The text 'MOVIE NIGHT' is written in a film-strip font at the top, and 'SHOW TIME' is at the bottom between two decorative film borders on a soft cream background.",
    "TAGS": "Popcorn Art Print, Movie Night Decor, Home Theater Wall Art, Retro Cartoon Mascot, Vintage Cinema Illustration, Estelle Designs, Movie Room Gift, 1930s Animation Style.",
    "TITLE": "Retro Popcorn Mascot Art | Movie Night & Home Theater Decor",
    "PIN_DESC": "It’s showtime! Add a touch of vintage cinema charm to your walls with the \"Popcorn Showtime\" art print by Estelle Designs. This cute retro mascot is perfect for your home theater, media room, or kitchen. Featuring classic animation vibes and a nostalgic color story, it’s the perfect gift for movie lovers. Shop our collection of high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Retro",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7495.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/992730543/retro-yellow-roller-skate-art-print",
    "ALT_TEXT": "A digital illustration of a vintage-style quad roller skate in a warm yellow-orange color. The skate features a pastel green and pink rainbow stripe on the side, white laces, and wheels with pink stars in the center, set against a clean white background.",
    "TAGS": "Retro Roller Skate Art, Vintage 70s Decor, Groovy Wall Art, Roller Disco Poster, Yellow Roller Skate Illustration, Estelle Designs, Teen Room Decor, Pastel Rainbow Aesthetic.",
    "TITLE": "Vintage Roller Skate Art | 70s Groovy Retro Wall Decor",
    "PIN_DESC": "Get your groove on with the \"Golden Hour Gliding\" roller skate print by Estelle Designs. This sunny, retro-inspired illustration is perfect for adding a pop of 70s nostalgia to your home. Featuring a classic yellow quad skate and cute star wheels, it’s a must-have for skaters and lovers of the vintage aesthetic. Shop our collection of high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Retro",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7499.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1294413386/pink-electric-guitar-art-print-retro",
    "ALT_TEXT": "Get your groove on with the \"Golden Hour Gliding\" roller skate print by Estelle Designs. This sunny, retro-inspired illustration is perfect for adding a pop of 70s nostalgia to your home. Featuring a classic yellow quad skate and cute star wheels, it’s a must-have for skaters and lovers of the vintage aesthetic. Shop our collection of high-quality Giclée prints and digital downloads today!Electric Guitar Art, Shell Pink Guitar Print, Vintage Music Decor, Rock and Roll Wall Art, Musician Gift, Estelle Designs, Pastel Retro Decor, Guitarist Studio Art.",
    "TAGS": "Electric Guitar Art, Shell Pink Guitar Print, Vintage Music Decor, Rock and Roll Wall Art, Musician Gift, Estelle Designs, Pastel Retro Decor, Guitarist Studio Art.",
    "TITLE": "Vintage Shell Pink Electric Guitar Art | Retro Music Decor",
    "PIN_DESC": "For the love of music and style! The \"Pastel Strings\" electric guitar print by Estelle Designs brings a soft, retro vibe to your home decor. Featuring a classic guitar in a stunning shell pink finish, it’s the perfect addition to a music room or a feminine gallery wall. Ideal for guitar players and vintage enthusiasts alike. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Retro",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7895.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1276610031/retro-cinema-art-prints-movie-night",
    "ALT_TEXT": "A set of three vintage-style movie illustrations with a VHS camcorder viewfinder overlay. The left panel shows a film clapperboard; the center shows a striped popcorn bucket labeled 'Movie Night'; the right shows a vintage cinema ticket. All three have time stamps and playback icons on a cream background.",
    "TAGS": "Movie Night Triptych, VHS Aesthetic Art, Home Theater Wall Decor, Retro Cinema Prints, Popcorn and Movie Ticket Art, Estelle Designs, 90s Nostalgia Decor, Film Buff Gift Set.",
    "TITLE": "Retro VHS Movie Night Print Set | Cinema Triptych Wall Art",
    "PIN_DESC": "Elevate your movie room with \"The Feature Presentation\" triptych by Estelle Designs. This 3-piece set features a nostalgic VHS camcorder aesthetic with classic cinema icons like popcorn and film clappers. Perfect for creating a retro 90s vibe in your home theater or lounge. Grab the full set as a Giclée print or digital download and start the show!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Retro",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7896.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1276610031/retro-cinema-art-prints-movie-night",
    "ALT_TEXT": "A set of three vintage-style movie illustrations with a VHS camcorder viewfinder overlay. The left panel shows a film clapperboard; the center shows a striped popcorn bucket labeled 'Movie Night'; the right shows a vintage cinema ticket. All three have time stamps and playback icons on a cream background.",
    "TAGS": "Movie Night Triptych, VHS Aesthetic Art, Home Theater Wall Decor, Retro Cinema Prints, Popcorn and Movie Ticket Art, Estelle Designs, 90s Nostalgia Decor, Film Buff Gift Set.",
    "TITLE": "Retro VHS Movie Night Print Set | Cinema Triptych Wall Art",
    "PIN_DESC": "Elevate your movie room with \"The Feature Presentation\" triptych by Estelle Designs. This 3-piece set features a nostalgic VHS camcorder aesthetic with classic cinema icons like popcorn and film clappers. Perfect for creating a retro 90s vibe in your home theater or lounge. Grab the full set as a Giclée print or digital download and start the show!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Retro",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7897.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1276610031/retro-cinema-art-prints-movie-night",
    "ALT_TEXT": "A set of three vintage-style movie illustrations with a VHS camcorder viewfinder overlay. The left panel shows a film clapperboard; the center shows a striped popcorn bucket labeled 'Movie Night'; the right shows a vintage cinema ticket. All three have time stamps and playback icons on a cream background.",
    "TAGS": "Movie Night Triptych, VHS Aesthetic Art, Home Theater Wall Decor, Retro Cinema Prints, Popcorn and Movie Ticket Art, Estelle Designs, 90s Nostalgia Decor, Film Buff Gift Set.",
    "TITLE": "Retro VHS Movie Night Print Set | Cinema Triptych Wall Art",
    "PIN_DESC": "Elevate your movie room with \"The Feature Presentation\" triptych by Estelle Designs. This 3-piece set features a nostalgic VHS camcorder aesthetic with classic cinema icons like popcorn and film clappers. Perfect for creating a retro 90s vibe in your home theater or lounge. Grab the full set as a Giclée print or digital download and start the show!",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Travel",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7489.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1856692392/morocco-art-print-retro-fashion",
    "ALT_TEXT": "A fashion illustration travel poster for Morocco featuring a woman's leg in a colorful pom-pom heel and a woven wicker bag, set against a background of traditional Moroccan zellige floor tiles with the text 'soaking up the souks MOROCCO'.",
    "TAGS": "Morocco Travel Poster, Fashion Illustration, Marrakech Art Print, Boho Wall Decor, Zellige Tile Art, Estelle Designs, Travel Gift Idea, Colorful Fashion Art.",
    "TITLE": "Morocco Fashion Travel Poster | Vibrant Boho Wall Art",
    "PIN_DESC": "Get lost in the magic of Marrakech with the \"Soaking up the Souks\" art print by Estelle Designs. This chic fashion illustration captures the ultimate Moroccan vacation vibe, featuring colorful boho accessories and traditional architecture. Perfect for fashion lovers and world travelers looking to add a pop of color to their home decor. Explore our full collection of travel-inspired Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Travel",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7483.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1856793404/london-art-print-retro-couple-tea-love",
    "ALT_TEXT": "A romantic vintage-style illustration of a couple hugging under a large plaid umbrella in London. The woman wears white gloves and holds a pink floral teapot and teacup behind the man's back. The London skyline with Big Ben is visible in the background against a soft pink sky.",
    "TAGS": "London Travel Poster, Romantic London Art, British Tea Illustration, Vintage Travel Print, London Skyline Wall Art, Estelle Designs, Gift for Tea Lovers, Anglophile Home Decor.",
    "TITLE": "London Travel Poster | Romantic Vintage Tea Illustration",
    "PIN_DESC": "Fall in love with London all over again with the \"Steeped in Love and Tea\" art print by Estelle Designs. This whimsical illustration of a couple sharing a cozy moment in the rain is the perfect addition to a romantic gallery wall or a chic home office. Featuring iconic landmarks and a charming British tea theme, it’s a must-have for anyone who leaves their heart in London. Shop our travel-inspired Giclée prints and digital downloads!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Travel",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7484.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1856799168/mexico-art-print-woman-with-coconut",
    "ALT_TEXT": "A vibrant fashion illustration travel poster for Mexico. A woman in a white floral bikini and a straw hat with the text 'ADIOS BITCHACHOS' holds a coconut drink with a red straw and green umbrella that says 'HELLO MEXICO'. The background features subtle palm leaf shadows.",
    "TAGS": "Mexico Travel Poster, Funny Travel Art, Fashion Illustration, Adios Bitchachos Print, Tropical Wall Decor, Estelle Designs, Home Bar Art, Colorful Vacation Poster.",
    "TITLE": "Cheeky Mexico Travel Poster | Adios Bitchachos Fashion Art",
    "PIN_DESC": "Ready for a vacation? Pack your bags with the \"Adios Bitchachos\" Mexico travel print by Estelle Designs. This fun and stylish fashion illustration is perfect for adding a tropical, bold vibe to your space. Featuring a chic summer outfit and a coconut cocktail, it’s a must-have for your home bar or summer gallery wall. Shop our collection of travel-inspired Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Travel",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7488.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1870910397/retro-italy-travel-poster-amalfi-coast",
    "ALT_TEXT": "A vintage-style travel poster for Italy. A woman in a pink striped romper holds an Aperol Spritz and a mesh bag of lemons, standing next to a man on a light blue Vespa holding a gelato. The text reads 'I don't need therapy, just ITALY' with a Mediterranean coastal town in the background",
    "TAGS": "Italy Travel Poster, Amalfi Coast Art, Vintage Vespa Illustration, Aperol Spritz Wall Art, Italian Summer Decor, Estelle Designs, Travel Quote Print, Mediterranean Lifestyle Art.",
    "TITLE": "Retro Italy Travel Poster | \"I Don't Need Therapy, Just Italy\" Art",
    "PIN_DESC": "Dream of the Amalfi Coast with the \"Just Italy\" art print by Estelle Designs. This stunning retro fashion illustration features all the staples of an Italian vacation: Vespas, gelato, and a sunset spritz. Perfect for adding a touch of Mediterranean glamour to your home decor. Explore our full collection of travel-inspired Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Travel",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7487.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1870925607/cannes-art-print-french-riviera-retro",
    "ALT_TEXT": "A vintage-style travel poster for Cannes. A woman in a white swimsuit and a large yellow-and-white striped sun hat sits on the edge of a boat named 'La Côte d'Azur'. In the background, the iconic Cannes beachfront is visible with palm trees, blue and orange striped umbrellas, and grand white hotels under a soft pastel sky.",
    "TAGS": "Cannes Travel Poster, French Riviera Art, La Côte d’Azur Print, Vintage Beach Illustration, South of France Decor, Estelle Designs, Luxury Travel Wall Art, Mediterranean Aesthetic.",
    "TITLE": "Cannes Travel Poster | Vintage French Riviera Beach Art",
    "PIN_DESC": "Dream of the South of France with the \"Cannes: La Côte d’Azur\" art print by Estelle Designs. This stunning vintage-inspired fashion illustration captures the ultimate European summer vibe, featuring the iconic Cannes beachfront and a chic poolside aesthetic. Perfect for lovers of luxury travel and Mediterranean decor. Shop our full collection of travel-inspired Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Travel",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7486.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1856710802/brazil-art-print-retro-carnival-fashion",
    "ALT_TEXT": "A vibrant fashion illustration travel poster for Brazil. A woman with long brown hair stands with her back to the viewer, wearing a white bikini with pearl fringe accents against a background of yellow and cream wavy stripes. The text reads 'OI BRAZIL TE AMO' in a playful teal and black font.",
    "TAGS": "Brazil Travel Poster, Rio de Janeiro Art, Fashion Illustration, Tropical Wall Decor, Summer Vibe Print, Estelle Designs, Ipanema Beach Decor, Latin America Travel Gift.",
    "TITLE": "Brazil Travel Poster Art | \"Oi Brazil, Te Amo\" Fashion Illustration",
    "PIN_DESC": "Capture the magic of a Brazilian summer with the \"Oi Brazil, Te Amo\" art print by Estelle Designs. This chic, sunny illustration features a stylish traveler and bold yellow waves, making it the perfect addition to a tropical gallery wall or modern beach house. Great for world travelers and fashion lovers alike! Shop our travel-inspired Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Travel",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7485.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1856704388/pink-cowgirl-boots-in-blue-convertible",
    "ALT_TEXT": "A vintage-style travel poster for Texas featuring a light blue classic convertible driving through a desert landscape with saguaro cacti. A person's legs, wearing ornate tan cowboy boots with spurs, are kicked up over the side of the car. The text reads 'head over boots for TEXAS'.",
    "TAGS": "Texas Travel Poster, Cowboy Boot Art, Western Wall Decor, Vintage Car Illustration, Desert Landscape Print, Estelle Designs, Lone Star State Decor, Coastal Cowboy Aesthetic.",
    "TITLE": "Texas Travel Poster | Head Over Boots Cowboy Art Print",
    "PIN_DESC": "Giddy up! Dream of the desert with the \"Head Over Boots\" Texas travel print by Estelle Designs. This chic Western-inspired illustration features a vintage convertible and stunning cowboy boots, making it the perfect addition to a modern rustic home or a coastal cowboy gallery wall. A must-have for Texas lovers and road trip dreamers! Shop our collection of high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Travel",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7482.jpeg?tr=w-1300&updatedAt=1777800171645",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1870920039/hollywood-art-print-retro-glam-fashion",
    "ALT_TEXT": "A vintage-style fashion illustration of a blonde woman in a white lace dress with her back turned, reaching one hand up toward a glowing 'HOLLYWOOD' sign in the hills. The text at the bottom reads 'also known as delulu-land' against a soft pink and gold sunset background.",
    "TAGS": "Hollywood Travel Poster, Delulu-land Art Print, Funny Fashion Illustration, Los Angeles Wall Decor, Glamour Girl Art, Estelle Designs, Pink Sunset Wall Art, Trendy Room Decor.",
    "TITLE": "Hollywood Travel Poster | Funny \"Delulu-land\" Glamour Art",
    "PIN_DESC": "Dream big with the \"Hollywood: Delulu-land\" art print by Estelle Designs. This chic fashion illustration blends Old Hollywood glamour with modern internet humor, making it the ultimate piece for your dressing room or home office. Featuring a stunning starlet and a dreamy California sunset, it’s the perfect gift for your \"delusional\" bestie or yourself! Shop our collection of high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7469.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/1872731197",
    "ALT_TEXT": "Vintage-style illustration of a father and young son in straw hats fishing by a lake, wearing matching pink patterned swim trunks, soft pastel mountains in the background.",
    "TAGS": "Fishing Art Print, Father and Son Art, Lake House Wall Decor, Vintage Summer Aesthetic, Retro Coastal Prints, Estelle Designs, Nursery Lake Decor.",
    "TITLE": "Vintage Father and Son Fishing Art | Retro Lake Life Decor",
    "PIN_DESC": "Capture the heart of the lake with the Summer Collection by Estelle Designs. From peaceful moments fishing on the pier with Dad to golden hour lake dips at sunset, these art prints celebrate the best of lake living. Perfect as a sentimental gift or rustic lake house decor, our collection features scenes of fishing with brothers, jumping in the lake, and quiet evenings on the water. Bring the \"Lake Life\" aesthetic to your home with these high-quality vintage-inspired prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7473.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/1859723426",
    "ALT_TEXT": "Vintage-style illustration of a girl in a cherry-print romper playing leapfrog at the beach, featuring the text \"wild like the west\" and soft pastel sand and water tones.",
    "TAGS": "Coastal Cowgirl Decor, Wild Like The West Art, Beach House Wall Art, Aesthetic Dorm Room Decor, Vintage Summer Illustration, Estelle Designs, Trendy Coastal Prints.",
    "TITLE": "Coastal Cowgirl Art Print | Wild Like The West Vintage Wall Decor",
    "PIN_DESC": "Soak up the sun with the Summer Collection by Estelle Designs. Featuring dreamy scenes of beach life—from reading in the sand to enjoying ice cream by the shore—this collection captures the ultimate vacation vibe. Perfect for beach house decor or a summer house refresh, these fun art prints bring the warmth of a holiday home to your walls year-round. Embrace the \"slow living\" beach life with high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7459.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/1850257285",
    "ALT_TEXT": "Vintage-style illustration of a woman in a sun hat floating in a pool, holding a sign that says \"Everything is Figureoutable\" with a reflection in the water.",
    "TAGS": "Motivational Wall Art, Everything is Figureoutable, Poolside Art Print, Coastal Office Decor, Aesthetic Beach House Art, Estelle Designs, Positive Affirmation Print.",
    "TITLE": "Motivational Pool Art Print | Everything Is Figureoutable Coastal Decor",
    "PIN_DESC": "Transform your space into a coastal sanctuary with Estelle Designs. Our Beach House Collection features playful and relaxing art prints, including sunbathing scenes, ice cream treats, and peaceful moments reading by the ocean. Ideal for summer home decor, holiday rentals, or lake house living, these vibrant pieces are designed to make every day feel like a trip to the beach. Shop our customizable wall art for the perfect beach life aesthetic.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7475.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/1873922125",
    "ALT_TEXT": "Vintage-style illustration of a toddler boy in blue overalls and a straw hat fishing off a wooden dock with a bulldog sitting beside him, soft pastel lake background.",
    "TAGS": "Lake House Nursery Decor, Boy and Dog Art, Bulldog Gift Ideas, Vintage Fishing Print, Little Boy Bedroom Art, Summer Cottage Wall Decor, Estelle Designs.",
    "TITLE": "Vintage Lake House Nursery Art | Boy and Bulldog Fishing Print",
    "PIN_DESC": "Capture the heart of the lake with the Summer Collection by Estelle Designs. From peaceful moments fishing on the pier with Dad to golden hour lake dips at sunset, these art prints celebrate the best of lake living. Perfect as a sentimental gift or rustic lake house decor, our collection features scenes of fishing with brothers, jumping in the lake, and quiet evenings on the water. Bring the \"Lake Life\" aesthetic to your home with these high-quality vintage-inspired prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7478.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/1466430945",
    "ALT_TEXT": "Vintage-style silhouette illustration of three children jumping into a lake at sunset, featuring a glowing golden sun and textured amber sky.",
    "TAGS": "Lake House Silhouette Art, Sunset Jump Print, Golden Hour Wall Decor, Vintage Summer Lake Life, Kids Jumping Into Water Art, Estelle Designs, Summer Cottage Aesthetic.",
    "TITLE": "Sunset Lake Life Art | Kids Jumping Off Dock Silhouette Print",
    "PIN_DESC": "Soak up the sun with the Summer Collection by Estelle Designs. Featuring dreamy scenes of beach life—from reading in the sand to enjoying ice cream by the shore—this collection captures the ultimate vacation vibe. Perfect for beach house decor or a summer house refresh, these fun art prints bring the warmth of a holiday home to your walls year-round. Embrace the \"slow living\" beach life with high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7476.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/1859736140",
    "ALT_TEXT": "Vintage-style illustration of a woman in a large straw hat and white swimsuit lounging on a beach with a dachshund on her lap, holding a cocktail and a book, with the text \"don't wake the dreamers.\"",
    "TAGS": "Coastal Chic Decor, Dachshund Art Print, Beach House Wall Art, Aperol Spritz Art, Summer Lifestyle Illustration, Estelle Designs, Quiet Luxury Aesthetic.",
    "TITLE": "Coastal Chic Art Print | Don't Wake The Dreamers Beach Decor",
    "PIN_DESC": "Transform your space into a coastal sanctuary with Estelle Designs. Our Beach House Collection features playful and relaxing art prints, including sunbathing scenes, ice cream treats, and peaceful moments reading by the ocean. Ideal for summer home decor, holiday rentals, or lake house living, these vibrant pieces are designed to make every day feel like a trip to the beach. Shop our customizable wall art for the perfect beach life aesthetic.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7472.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/1859710156",
    "ALT_TEXT": "Vintage-style illustration of a woman in a large straw hat and pink swimsuit sitting on a beach under a striped umbrella, with a book and sunglasses nearby and the text \"a book a day keeps reality away!\"",
    "TAGS": "Coastal Chic Decor, Book Lover Gift Ideas, Beach House Wall Art, Reading Nook Decor, Summer Lifestyle Illustration, Estelle Designs, Quiet Luxury Aesthetic.",
    "TITLE": "Coastal Chic Art Print | Book Lover Beach House Decor",
    "PIN_DESC": "Soak up the sun with the Summer Collection by Estelle Designs. Featuring dreamy scenes of beach life—from reading in the sand to enjoying ice cream by the shore—this collection captures the ultimate vacation vibe. Perfect for beach house decor or a summer house refresh, these fun art prints bring the warmth of a holiday home to your walls year-round. Embrace the \"slow living\" beach life with high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7466.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/1865182143",
    "ALT_TEXT": "Vintage-style silhouette illustration of two children and a dog jumping into a lake at sunset, featuring a soft pink and golden sky with hazy sunbeams.",
    "TAGS": "Lake House Silhouette Art, Kids and Dog Art Print, Sunset Wall Decor, Vintage Summer Aesthetic, Dog Lover Lake Gift, Estelle Designs, Summer Cottage Lifestyle.",
    "TITLE": "Sunset Lake Life Art | Kids and Dog Jumping Silhouette Print",
    "PIN_DESC": "Capture the heart of the lake with the Summer Collection by Estelle Designs. From peaceful moments fishing on the pier with Dad to golden hour lake dips at sunset, these art prints celebrate the best of lake living. Perfect as a sentimental gift or rustic lake house decor, our collection features scenes of fishing with brothers, jumping in the lake, and quiet evenings on the water. Bring the \"Lake Life\" aesthetic to your home with these high-quality vintage-inspired prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7462.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/1836044446",
    "ALT_TEXT": "Vintage-style illustration of a woman in a white swimsuit and diving fins free-diving underwater, featuring soft blue water and hazy light bokeh.",
    "TAGS": "Diving Girl Art Print, Coastal Wall Decor, Vintage Beach Illustration, Underwater Art, White Swimsuit Aesthetic, Estelle Designs, Modern Beach House Decor.",
    "TITLE": "Vintage Diving Girl Art Print | Coastal Deep Blue Wall Decor",
    "PIN_DESC": "Soak up the sun with the Summer Collection by Estelle Designs. Featuring dreamy scenes of beach life—from reading in the sand to enjoying ice cream by the shore—this collection captures the ultimate vacation vibe. Perfect for beach house decor or a summer house refresh, these fun art prints bring the warmth of a holiday home to your walls year-round. Embrace the \"slow living\" beach life with high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7474.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1859716080/retro-woman-ice-cream-art-print-summer",
    "ALT_TEXT": "Vintage-style illustration of a stylish woman in a headscarf, cat-eye sunglasses, and a pink romper holding a mint ice cream cone at the beach, soft pastel tones.",
    "TAGS": "European Summer Art, Retro Fashion Illustration, Coastal Chic Decor, Cat Eye Sunglasses Art, Vintage Summer Aesthetic, Estelle Designs, Trendy Apartment Wall Art.",
    "TITLE": "Vintage European Summer Art | Retro Coastal Chic Wall Decor",
    "PIN_DESC": "Transform your space into a coastal sanctuary with Estelle Designs. Our Beach House Collection features playful and relaxing art prints, including sunbathing scenes, ice cream treats, and peaceful moments reading by the ocean. Ideal for summer home decor, holiday rentals, or lake house living, these vibrant pieces are designed to make every day feel like a trip to the beach. Shop our customizable wall art for the perfect beach life aesthetic.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7467.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1872927567/kids-and-dog-lake-jump-art-print-summer",
    "ALT_TEXT": "Vintage-style illustration of a boy in blue trunks, a girl in a pink swimsuit, and a black and white spaniel jumping into a lake, soft pink sky background.",
    "TAGS": "Lake House Kids Decor, Kids and Dog Art Print, Summer Cottage Wall Art, Vintage Lake Life, Spaniel Dog Art, Estelle Designs, Playroom Gallery Wall.",
    "TITLE": "Joyful Lake Life Art | Kids and Dog Jumping Into Water Print",
    "PIN_DESC": "Elevate your cabin style with Estelle Designs’ Lake House Collection. Whether you’re looking for \"jumping in the lake\" action shots or serene \"lake dip at sunset\" visuals, this collection is designed for the ultimate summer house aesthetic. Featuring themes of lake fishing, fishing with your dog, and life on the pier, these prints are the perfect addition to any gallery wall. Available in various sizes to fit your lake house bedroom, living room, or entryway.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7471.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1859128216/woman-cycling-art-print-vintage-coastal",
    "ALT_TEXT": "Vintage-style illustration of a girl in a green outfit riding a green bicycle with a puppy in the front basket on a wooden pier, featuring a soft pink sky.",
    "TAGS": "Bicycle Art Print, Dog in Bike Basket, Coastal Wall Decor, Vintage Summer Illustration, Beach House Entryway Art, Estelle Designs, Sage Green Aesthetic.",
    "TITLE": "Vintage Coastal Bicycle Art | Girl and Dog on Bike Pier Print",
    "PIN_DESC": "Soak up the sun with the Summer Collection by Estelle Designs. Featuring dreamy scenes of beach life—from reading in the sand to enjoying ice cream by the shore—this collection captures the ultimate vacation vibe. Perfect for beach house decor or a summer house refresh, these fun art prints bring the warmth of a holiday home to your walls year-round. Embrace the \"slow living\" beach life with high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7463.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1475936507/retro-lake-house-sign-printable",
    "ALT_TEXT": "Vintage-style typography art print with a mint green border and text that reads \"Welcome to the Lake House - This is our happy place\" on a cream background.",
    "TAGS": "Lake House Sign, Entryway Wall Art, Typography Print, Vintage Lake Decor, Coastal Cottage Sign, Estelle Designs, Happy Place Art.",
    "TITLE": "Vintage Lake House Sign Art | Welcome To The Lake House Decor",
    "PIN_DESC": "Elevate your cabin style with Estelle Designs’ Lake House Collection. Whether you’re looking for \"jumping in the lake\" action shots or serene \"lake dip at sunset\" visuals, this collection is designed for the ultimate summer house aesthetic. Featuring themes of lake fishing, fishing with your dog, and life on the pier, these prints are the perfect addition to any gallery wall. Available in various sizes to fit your lake house bedroom, living room, or entryway.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7464.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1850343551/cliff-jumping-art-print-retro-coastal",
    "ALT_TEXT": "Vintage-style illustration of a woman in a pink swimsuit jumping off a cliff into a lake, featuring the text \"This Must Be The Place\" in a bold blue font.",
    "TAGS": "This Must Be The Place Art, Cliff Jumping Print, Lake House Wall Decor, Summer Adventure Illustration, Retro Coastal Wall Art, Estelle Designs, Travel Aesthetic Decor.",
    "TITLE": "This Must Be The Place Art Print | Cliff Jumping Lake House Decor",
    "PIN_DESC": "Soak up the sun with the Summer Collection by Estelle Designs. Featuring dreamy scenes of beach life—from reading in the sand to enjoying ice cream by the shore—this collection captures the ultimate vacation vibe. Perfect for beach house decor or a summer house refresh, these fun art prints bring the warmth of a holiday home to your walls year-round. Embrace the \"slow living\" beach life with high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7477.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1452721856/vintage-boy-and-dog-fishing-art-print",
    "ALT_TEXT": "Vintage-style illustration of a young boy in a straw hat and blue swim trunks fishing off a wooden dock with a golden dog by his side, soft hazy mountain background.",
    "TAGS": "Lake House Nursery Decor, Boy and Dog Art, Golden Retriever Gift, Fishing Wall Art, Vintage Summer Illustration, Estelle Designs, Kids Bedroom Lake Decor.",
    "TITLE": "Vintage Boy and Dog Fishing Art | Lake House Nursery Decor",
    "PIN_DESC": "Elevate your cabin style with Estelle Designs’ Lake House Collection. Whether you’re looking for \"jumping in the lake\" action shots or serene \"lake dip at sunset\" visuals, this collection is designed for the ultimate summer house aesthetic. Featuring themes of lake fishing, fishing with your dog, and life on the pier, these prints are the perfect addition to any gallery wall. Available in various sizes to fit your lake house bedroom, living room, or entryway.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7468.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1872933723/lake-art-print-kids-and-dog-jumping",
    "ALT_TEXT": "Vintage-style illustration of a girl in a red swimsuit, a boy in floral trunks, and a golden dog jumping into a lake, featuring a soft pink sky and blue water.",
    "TAGS": "Lake House Kids Decor, Kids and Dog Art Print, Summer Cottage Wall Art, Vintage Lake Life, Golden Retriever Art, Estelle Designs, Playroom Gallery Wall.",
    "TITLE": "Summer Lake Life Art | Kids and Dog Jumping Splash Print",
    "PIN_DESC": "Elevate your cabin style with Estelle Designs’ Lake House Collection. Whether you’re looking for \"jumping in the lake\" action shots or serene \"lake dip at sunset\" visuals, this collection is designed for the ultimate summer house aesthetic. Featuring themes of lake fishing, fishing with your dog, and life on the pier, these prints are the perfect addition to any gallery wall. Available in various sizes to fit your lake house bedroom, living room, or entryway.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7470.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1872995243/kids-jumping-into-lake-art-print-summer",
    "ALT_TEXT": "Vintage-style illustration of three children jumping off a dock into a lake, featuring a toddler in orange arm floaties and a soft pink-hued summer sky.",
    "TAGS": "Lake House Kids Decor, Siblings Art Print, Summer Vacation Wall Art, Vintage Lake Life Illustration, Kids in Water Wings Art, Estelle Designs, Nursery Lake Decor.",
    "TITLE": "Nostalgic Lake Life Art | Siblings Jumping Off Dock Print",
    "PIN_DESC": "Elevate your cabin style with Estelle Designs’ Lake House Collection. Whether you’re looking for \"jumping in the lake\" action shots or serene \"lake dip at sunset\" visuals, this collection is designed for the ultimate summer house aesthetic. Featuring themes of lake fishing, fishing with your dog, and life on the pier, these prints are the perfect addition to any gallery wall. Available in various sizes to fit your lake house bedroom, living room, or entryway.",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7460.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/1886988479",
    "ALT_TEXT": "Vintage-style illustration of two girls in a pink lake; one is wading while the other has her legs up in the air inside a green and white striped inner tube, soft pink sky background.",
    "TAGS": "Lake House Decor, Retro Summer Art, Inner Tube Illustration, Beach House Wall Art, Pink Aesthetic Decor, Estelle Designs, Whimsical Summer Print.",
    "TITLE": "Retro Lake Life Art | Summer Inner Tube Fun Wall Decor",
    "PIN_DESC": "Elevate your cabin style with Estelle Designs’ Lake House Collection. Whether you’re looking for \"jumping in the lake\" action shots or serene \"lake dip at sunset\" visuals, this collection is designed for the ultimate summer house aesthetic. Featuring themes of lake fishing, fishing with your dog, and life on the pier, these prints are the perfect addition to any gallery wall. Available in various sizes to fit your lake house bedroom, living room, or entryway.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7461.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/4302189838",
    "ALT_TEXT": "Vintage-style illustration of a woman's legs crossed in a striped beach chair, holding a white pillow over her face that says \"Resting Beach Face\" in blue textured font.",
    "TAGS": "Funny Beach Art, Resting Beach Face Print, Coastal Chic Decor, Summer Pun Gift, Beach House Wall Art, Estelle Designs, Retro Vacation Aesthetic.",
    "TITLE": "Funny Beach House Art | Resting Beach Face Retro Print",
    "PIN_DESC": "Lake House Wall Art & Decor",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Summer",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7465.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/4351841383",
    "ALT_TEXT": "Vintage-style illustration of two young boys in pink floral swim trunks and hats fishing off a dock with a small dark dog sitting between them, soft blue water and hazy background.",
    "TAGS": "Lake House Kids Decor, Brothers Art Print, French Bulldog Gift, Fishing Wall Art, Vintage Summer Illustration, Estelle Designs, Nursery Lake Decor, Pink and Blue Nursery.",
    "TITLE": "Vintage Brothers Fishing Art | Lake House Kids Decor",
    "PIN_DESC": "Elevate your cabin style with Estelle Designs’ Lake House Collection. Whether you’re looking for \"jumping in the lake\" action shots or serene \"lake dip at sunset\" visuals, this collection is designed for the ultimate summer house aesthetic. Featuring themes of lake fishing, fishing with your dog, and life on the pier, these prints are the perfect addition to any gallery wall. Available in various sizes to fit your lake house bedroom, living room, or entryway.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7505.jpeg?tr=w-1300&updatedAt=1777800753462",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1821615637/pink-field-hockey-art-print-preppy",
    "ALT_TEXT": "A preppy field hockey illustration featuring crossed peach-colored sticks with red grips and a pink ball with a heart detail. The text 'Field HOCKEY' is at the top with a red heart, and the words 'scoop ★ push ★ flick' are at the bottom. A subtle floral wreath is in the background on a cream-colored base.",
    "TAGS": "Field Hockey Art, Preppy Sports Decor, Field Hockey Poster, Dorm Room Wall Art, Athlete Gift for Girls, Estelle Designs, Pastel Sports Illustration, Field Hockey Coach Gift.",
    "TITLE": "Field Hockey Art Print | Preppy Sports Decor & Gift Ideas",
    "PIN_DESC": "Score a style goal with the \"Field Hockey Heart\" art print by Estelle Designs. This chic and preppy sports illustration is the perfect decor for field hockey players and sports-themed bedrooms. Featuring a soft pastel color palette and classic field hockey terms, it's a winning gift for any athlete. Shop our collection of high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7500.jpeg?tr=w-1300&updatedAt=1777800753615",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1821563889/retro-pickleball-art-print-trendy-sports",
    "ALT_TEXT": "A preppy pickleball illustration featuring two crossed pink paddles with heart details and a red pickleball above them. The text 'PICKLEBALL' is arched at the top with a small red heart, and the phrase 'keep the ball in play' is at the bottom. A subtle floral wreath sits in the background on a cream base.",
    "TAGS": "Pickleball Art, Preppy Sports Decor, Pickleball Poster, Gift for Pickleball Players, Pink Sports Wall Art, Estelle Designs, Pastel Athletic Illustration, Country Club Aesthetic.",
    "TITLE": "Pickleball Art Print | Preppy Pink Sports Decor & Gift Ideas",
    "PIN_DESC": "Stay in the game with the \"Pickleball Love\" art print by Estelle Designs. This trendy and preppy illustration is the ultimate decor for pickleball lovers and country club style enthusiasts. Featuring a soft pink and red palette, it’s a perfect gift for your doubles partner or a stylish addition to your home gym or office. Shop our collection of high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7510.jpeg?tr=w-1300&updatedAt=1777800754708",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1821384167/retro-padel-art-print-trendy-sports-wall",
    "ALT_TEXT": "A preppy padel sport illustration with the text 'In my PADEL era' in a collegiate block font. Two crossed red padel rackets with heart-shaped cutouts are featured below a red ball and a subtle laurel wreath on a cream background.",
    "TAGS": "Padel Art Print, In My Era Poster, Preppy Sports Decor, Padel Racket Illustration, Dorm Room Wall Art, Estelle Designs, Sporty Girl Aesthetic, Trendy Athlete Gift.",
    "TITLE": "In My Padel Era Art Print | Preppy Sports & Dorm Decor",
    "PIN_DESC": "Are you in your padel era? 🎾 This trendy preppy sports print by Estelle Designs is the ultimate wall art for athletes who love a clean, aesthetic look. Featuring a bold \"In My Era\" quote and cute heart-accented padel rackets, it's perfect for a bedroom or dorm. A winning gift for any padel player! Shop our high-quality Giclée prints and digital downloads now.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7501.jpeg?tr=w-1300&updatedAt=1777800762804",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1389153838/retro-lacrosse-wall-art-trendy-dorm",
    "ALT_TEXT": "A vintage-style lacrosse illustration featuring two crossed orange lacrosse sticks and a red ball. The word 'LACROSSE' is written in a bold, peach-colored collegiate font across the center. A subtle laurel wreath and four small stars at the top and bottom complete the design on a warm cream background.",
    "TAGS": "Lacrosse Art Print, Lax Wall Decor, Preppy Sports Poster, Gift for Lacrosse Players, Collegiate Lacrosse Art, Estelle Designs, Vintage Athletic Illustration, Dorm Room Wall Art.",
    "TITLE": "Vintage Lacrosse Art Print | Preppy Lax & Dorm Decor",
    "PIN_DESC": "Score big with your home decor! 🥍 The \"Lax Love\" lacrosse print by Estelle Designs is the ultimate wall art for athletes who love a classic, preppy look. Featuring a nostalgic collegiate font and warm sunset tones, it’s the perfect addition to a bedroom, locker room, or dorm. A thoughtful gift for any lacrosse enthusiast! Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2016.jpg?tr=w-1300&updatedAt=1781183126872",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/4520173927",
    "ALT_TEXT": "An art print featuring a repeating pattern of stylized tennis balls in retro pastel colors including soft pink, light yellow, and baby blue over a muted green background. The tennis balls have a slightly distressed, vintage texture. Several balls feature pink typography with tennis-related terms like MATCH POINT, LOVE ALL, STAY FOCUSED, ADVANTAGE, PLAY ON, DEUCE, QUIET PLEASE, and FOCUS.",
    "TAGS": "pastel-tennis-art, retro-sports-print, vintage-wall-decor, tennis-ball-pattern, cute-aesthetic-poster, girly-preppy-room-decor, tennis-lover-gift, pastel-pink-and-blue, distressed-texture-art, unique-sports-illustration",
    "TITLE": "Pastel Retro Tennis Art Print | Cute Preppy Room Decor",
    "PIN_DESC": "Add a touch of vintage sport aesthetic to your space with this pastel tennis ball pattern art print. Featuring soft pink, light yellow, and baby blue tennis balls with classic court quotes on a muted green background, this distressed texture poster is perfect for a girly gallery wall, trendy apartment decor, or a unique gift for tennis lovers.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2013.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/4518816540",
    "ALT_TEXT": "A vintage-style graphic illustration of the front half of a classic road bicycle. The frame is a muted teal green with terracotta orange accents on the headset and lugs, featuring a yellow brake lever and dropped handlebars. The large front wheel has detailed spokes and a brown-rimmed tire, set against a textured, distressed light cream background. The cursive text \"Pedal Power\" is written in dark charcoal grey just above the tire.",
    "TAGS": "vintage bicycle art, retro cycling print, pedal power poster, cyclist gift idea, bike enthusiast art, minimalist wall decor, road bike illustration, mid century modern, garage wall art, cycling club quote, classic bike poster, unique bike gifts, sports wall print, pedal power wall decor, vintage bike illustration, retro road bike poster, cycling gifts for men, cycling gifts for women, commuter bike art, bicycle hub wall art",
    "TITLE": "Retro Cycling Wall Art | Vintage Bicycle Print Gift Idea",
    "PIN_DESC": "Fuel your passion for the open road with this stylish \"Pedal Power\" vintage bicycle print. Featuring a beautiful retro road bike illustration in minimalist teal, orange, and cream tones, this graphic poster is perfect for styling a home office, living room gallery wall, or a cyclist's training space. An ideal home decor gift idea for bicycle enthusiasts and cycling club members.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2014.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/4518869945",
    "ALT_TEXT": "A vintage-style graphic illustration of two bright red cherries designed to look like heavy Olympic barbell weight plates. The left plate features the text \"CHERRY-PICK\" curved along the top edge, and the right plate reads \"YOUR GAINS\" along the bottom, with \"45 LBS\" printed near the center ring. The plates connect to light green stems and a large leaf, all set against a textured, light cream background with distressed, scratched border edges.",
    "TAGS": "cherry gym art, funny lifting print, cherry pick your gains, retro gym decor, cute workout poster, fitness wall art, weightlifting gifts, home gym sign, pastel fitness print, unique barbell art, aesthetic gym poster, women who lift, quirky exercise decor",
    "TITLE": "Quirky Home Gym Decor | Cherry-Pick Your Gains Fitness Print",
    "PIN_DESC": "Level up your workout space with this fun and stylish \"Cherry-Pick Your Gains\" wall art print. Combining a retro vintage pastel aesthetic with fitness motivation, this cheeky illustration transforms classic cherries into heavy barbell weight plates. It is the perfect piece of gym inspiration to hang in your garage studio, home gym setup, or fitness corner. A wonderful gift for weightlifters and gym lovers who appreciate a bit of humor.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2017.jpg?tr=w-1300&updatedAt=1781298185957",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/4520992760",
    "ALT_TEXT": "Minimalist retro tennis art print featuring a textured cream background and an abstract white tennis ball line with the word LOVE in a vintage orange font.",
    "TAGS": "minimalist-tennis-art, retro-sports-print, pastel-vintage-decor, abstract-tennis-line, love-tennis-poster",
    "TITLE": "Retro Minimalist Tennis Art Print | Vintage Pastel Wall Decor",
    "PIN_DESC": "Elevate your space with this ultra-minimalist tennis art print. Featuring a soft pastel cream background, an abstract tennis ball line texture, and a vintage-style 'LOVE' graphic, this print is perfect for adding a subtle retro sports aesthetic to your gallery wall. Shop this minimal tennis poster for your home gym, bedroom, or living room decor.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2018.jpg?tr=w-1300&updatedAt=1781353184490",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/4521258003",
    "ALT_TEXT": "Minimalist golf art print featuring a vintage sage green and cream striped background with a central golf ball illustration containing the witty phrase PAR-TEE animal.",
    "TAGS": "funny-golf-print, par-tee-animal, minimalist-sports-art, retro-golf-decor, pastel-striped-poster",
    "TITLE": "Funny Par-Tee Animal Golf Art Print | Retro Minimalist Decor",
    "PIN_DESC": "Add some clever humor to your walls with this minimalist golf art print. Featuring a retro sage green and cream striped background and a stylized golf ball graphic with the text 'PAR-TEE animal', it balances a clean vintage aesthetic with a witty pun. Perfect for styling a modern home office, bar area, or unique gallery wall.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/4_To_5_RATIO%2019.jpg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/listing/4521337774",
    "ALT_TEXT": "Minimalist vintage sports art print featuring the word ROWING stacked vertically in a retro pink font with small hearts, flanked by symmetric rows of stylized wooden boat oars on a textured off-white background.",
    "TAGS": "vintage-rowing-print, retro-crew-poster, pastel-sports-art, minimalist-oars-decor, cute-rower-gift",
    "TITLE": "Retro Minimalist Rowing Art Print | Vintage Pastel Sports Decor",
    "PIN_DESC": "Bring a charming retro aesthetic to your walls with this minimalist rowing art print. Featuring the word 'ROWING' stylized vertically with sweet heart accents and surrounded by symmetrical wooden oars, this design perfectly balances vintage varsity style with a soft pastel color palette. It makes a beautiful addition to a college dorm, home gym, bedroom, or unique sports gallery wall.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7509.jpeg?tr=w-1300&updatedAt=1777800762051",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1780614725/apres-pickleball-art-print-retro-martini",
    "ALT_TEXT": "A playful illustration of a blonde woman in athletic attire and a visor, lounging inside a large pink martini glass. She is holding a striped pickleball paddle and a pickleball. The text 'APRÈS PICKLEBALL' is featured in pink at the top on a light cream background.",
    "TAGS": "Pickleball Art, Après Pickleball Print, Pink Martini Illustration, Gift for Pickleball Players, Trendy Wall Art, Estelle Designs, Home Bar Decor, Sporty Chic Aesthetic.",
    "TITLE": "Après Pickleball Art Print | Fun Pickleball Girl Martini Decor",
    "PIN_DESC": "From the court to the cocktail! 🍸 The \"Après Pickleball Martini\" print by Estelle Designs is the perfect way to celebrate your favorite hobby. This trendy pink illustration is a must-have for pickleball enthusiasts and lovers of the preppy lifestyle. Great for home bars, she-sheds, or as a unique gift for your doubles partner. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sports & Gym",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7508.jpeg?tr=w-1300&updatedAt=1777800762093",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1780662091/apres-tennis-art-print-retro-girly-room",
    "ALT_TEXT": "A playful illustration of a blonde woman in a white tennis outfit and visor, lounging inside a large pink martini glass. She holds a vintage wooden tennis racket and a tennis ball. The text 'après Tennis' is written in a pink cursive script at the top on a soft cream background.",
    "TAGS": "Tennis Art Print, Après Tennis Poster, Pink Martini Illustration, Gift for Tennis Players, Country Club Wall Decor, Estelle Designs, Home Bar Art, Preppy Tennis Lifestyle.",
    "TITLE": "Après Tennis Art Print | Chic Tennis Girl Martini Wall Decor",
    "PIN_DESC": "Game, set, and a glass of something pink! 🎾 The \"Après Tennis Martini\" print by Estelle Designs is the ultimate way to celebrate your favorite sport. This trendy and nostalgic illustration is perfect for tennis enthusiasts who love a clean, aesthetic look. Ideal for home bars, dressing rooms, or as a unique gift for a tennis coach or partner. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7518.jpeg?tr=w-1300&updatedAt=1777801211340",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1351887852/retro-ski-goggles-art-print-mountain",
    "ALT_TEXT": "A creative illustration of a pair of peach-framed ski goggles with a tricolor strap. The lens reflects a serene mountain landscape featuring a ski lift, evergreen trees, and a bright sun with a lens flare effect on a soft off-white background",
    "TAGS": "Skiing Art Print, Winter Sports Wall Decor, Ski Goggle Illustration, Mountain Landscape Art, Skier Gift Ideas, Estelle Designs, Ski Lodge Decor, Reflective Art Print.",
    "TITLE": "Ski Goggle Mountain Reflection Art | Winter Cabin Wall Decor",
    "PIN_DESC": "Capture the magic of the slopes with \"First Tracks\" by Estelle Designs. ⛷️ This unique illustration features a serene mountain reflection in a pair of stylish ski goggles, complete with a bright winter sun and pine trees. Perfect for adding a touch of alpine charm to your home or ski lodge. A great gift for anyone who lives for winter adventures! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7520.jpeg?tr=w-1300&updatedAt=1777801211813",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/979228806/pastel-ski-art-print-retro-winter-sports",
    "ALT_TEXT": "A charming illustration featuring four sets of skis and matching poles in a vertical row. The skis come in a palette of slate blue, sage green, golden yellow, and dusty rose, each with unique patterns like stripes and stars. The background is a soft, off-white cream.",
    "TAGS": "Ski Art Print, Winter Sports Wall Decor, Retro Ski Illustration, Pastel Mountain Art, Skier Gift Ideas, Estelle Designs, Ski Lodge Gallery Wall, Vintage Winter Poster",
    "TITLE": "The Ski Lineup Art Print | Retro Pastel Winter Sports Decor",
    "PIN_DESC": "Get ready for the mountains with \"The Ski Lineup\" by Estelle Designs. ⛷️ This charming illustration features a colorful array of vintage-style skis and poles, perfect for adding a touch of alpine style to your home or cabin. With its soft slate, sage, and rose tones, it's a beautiful choice for a nursery or a modern entryway. A must-have for ski enthusiasts! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7421.jpeg?tr=w-1300&updatedAt=1777801212297",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1642827781/apres-ski-pastel-art-print-retro",
    "ALT_TEXT": "A playful illustration of a woman with dark hair wearing a blue and white knit beanie and ski boots, lounging inside a giant pink martini glass. Her skis lean against the side of the glass, and she holds a colorful cocktail with a striped straw. The text 'APRÈS-SKI' is featured in blue at the top.",
    "TAGS": "Après-Ski Art, Ski Girl Gift, Pink Martini Illustration, Winter Cabin Decor, Home Bar Wall Art, Estelle Designs, Ski Lodge Style, Whimsical Sports Art.",
    "TITLE": "Après-Ski Art Print | Fun Ski Girl Martini Winter Decor",
    "PIN_DESC": "From the black diamond to the bar! 🍸 The \"Après-Ski Martini\" print by Estelle Designs is the ultimate tribute to the best part of a ski trip. This trendy pink illustration is a must-have for winter sports enthusiasts and lovers of the mountain lifestyle. Perfect for a cozy cabin, home bar, or a fun bedroom gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7522.jpeg?tr=w-1300&updatedAt=1777801216531",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1717485163/retro-ski-lift-art-print-pink-apres-ski",
    "ALT_TEXT": "A whimsical illustration of a woman with short dark hair and a blue knit beanie sitting inside a vintage pink and white gondola. She is holding an orange spritz cocktail. A pair of skis is tucked into the rack on the outside of the gondola, which is suspended over a snow-covered mountain peak against a pale blue sky.",
    "TAGS": "Gondola Art Print, Ski Lifestyle Decor, Pink Mountain Art, Après-Ski Wall Art, Gift for Skiers, Estelle Designs, Pastel Winter Illustration, Luxury Alpine Decor.",
    "TITLE": "Pink Gondola Art Print | Chic Après-Ski & Mountain Decor",
    "PIN_DESC": "Take your decor to new heights! 🚠 The \"Skyline Spritz\" print by Estelle Designs is a whimsical and trendy tribute to the glamorous side of skiing. Featuring a vintage pink gondola and a refreshing mountain cocktail, it’s the perfect addition to a cozy cabin or a modern gallery wall. A stunning gift for the ski lover who appreciates a touch of luxury. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7526.jpeg?tr=w-1300&updatedAt=1777801217107",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1805642225/retro-ski-art-print-trendy-ski-cabin",
    "ALT_TEXT": "Take your decor to new heights! 🚠 The \"Skyline Spritz\" print by Estelle Designs is a whimsical and trendy tribute to the glamorous side of skiing. Featuring a vintage pink gondola and a refreshing mountain cocktail, it’s the perfect addition to a cozy cabin or a modern gallery wall. A stunning gift for the ski lover who appreciates a touch of luxury. Shop our high-quality Giclée prints and digital downloads today!In My Ski Era, Ski Art Print, Mountain Lifestyle Decor, Retro Ski Poster, Winter Cabin Wall Art, Estelle Designs, Skiing Gift, Trendy Athletic Illustration.",
    "TAGS": "In My Ski Era, Ski Art Print, Mountain Lifestyle Decor, Retro Ski Poster, Winter Cabin Wall Art, Estelle Designs, Skiing Gift, Trendy Athletic Illustration.",
    "TITLE": "In My Ski Era Art Print | Trendy Mountain & Cabin Decor",
    "PIN_DESC": "Are you officially in your ski era? ⛷️ This aesthetic mountain print by Estelle Designs is the perfect way to show off your love for the slopes. Featuring a minimalist design and a modern \"era\" quote, it’s the ultimate wall art for a cozy cabin or a dorm room. A winning gift for any skier! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7519.jpeg?tr=w-1300&updatedAt=1777801218474",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1873987908/retro-snowboarder-art-print-ski-cabin",
    "ALT_TEXT": "A dynamic illustration of a snowboarder in a brown jumpsuit and tan helmet performing a jump against a pale blue, snowy sky. The underside of the white snowboard features the text 'WHO'S GOING TO STOP ME' in orange block letters. Below the jumper is a snowy mountain ridge.",
    "TAGS": "Snowboarding Art Print, Motivational Sports Wall Art, Winter Action Poster, Gift for Snowboarders, Mountain House Decor, Estelle Designs, Retro Winter Illustration, Extreme Sports Wall Art.",
    "TITLE": "Snowboarding Art Print | \"Who's Going To Stop Me\" Motivation",
    "PIN_DESC": "Take your walls to new heights! 🏂 The \"Unstoppable\" snowboarding print by Estelle Designs is a bold tribute to the spirit of adventure. Featuring a vintage-inspired palette and a powerful motivational quote, it’s the perfect addition to a teen's bedroom or a cozy cabin gallery wall. A winning gift for the snowboarder who knows no limits. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7512.jpeg?tr=w-1300&updatedAt=1777801218625",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1873975322/retro-ski-lift-art-print-out-of-office",
    "ALT_TEXT": "A retro-style illustration of an orange and cream ski gondola suspended over a snowy mountain ridge. A skier is seen from behind inside the gondola, and the words 'OUT OF OFFICE' are written in bold white letters on the side of the car. The background is a soft, light blue winter sky.",
    "TAGS": "Out of Office Art, Ski Gondola Decor, Vintage Winter Poster, Skier Gift Ideas, Mountain Cabin Wall Art, Estelle Designs, Home Office Decor, Retro Ski Illustration.",
    "TITLE": "Out of Office Art Print | Vintage Ski Gondola Decor",
    "PIN_DESC": "The only OOO message you need! 🚠 The \"Out of Office\" ski print by Estelle Designs is a playful and nostalgic tribute to winter holidays. Featuring a retro orange gondola and a crisp mountain view, it’s the perfect addition to your workspace or ski cabin. A thoughtful and fun gift for skiers and mountain lovers. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7517.jpeg?tr=w-1300&updatedAt=1777801218640",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1845983566/minimalist-snowboard-art-print-trendy",
    "ALT_TEXT": "A dynamic illustration of a snowboarder in a tan hoodie and rust-colored pants carving through deep snow. The rider is wearing a vintage-style helmet and goggles. The text 'SEND IT!' is written in a stylized orange font at the bottom right. The background is a soft, warm cream color with snow spray effects.",
    "TAGS": "Send It Art Print, Snowboarding Wall Decor, Motivational Winter Poster, Gift for Snowboarders, Mountain House Decor, Estelle Designs, Retro Winter Illustration, Extreme Sports Wall Art.",
    "TITLE": "\"Send It!\" Snowboarding Art Print | Vintage Mountain Decor",
    "PIN_DESC": "Full speed ahead! 🏂 The \"Send It!\" snowboarding print by Estelle Designs is a bold tribute to the spirit of adventure. Featuring a vintage-inspired palette and a classic mountain phrase, it’s the perfect addition to a teen's bedroom or a cozy cabin gallery wall. A winning gift for the snowboarder who lives for the powder. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7516.jpeg?tr=w-1300&updatedAt=1777801218981",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1888038907/skiing-labrador-art-print-winter-cabin",
    "ALT_TEXT": "A charming illustration of a golden retriever puppy standing on a pair of pink skis. The dog is wearing a pink and white patterned beanie and pink fur-trimmed ski boots, looking up with big brown eyes against a soft blue and snowy white background.",
    "TAGS": "Dog Art Print, Golden Retriever Illustration, Skiing Dog Poster, Winter Nursery Decor, Gift for Dog Lovers, Estelle Designs, Whimsical Animal Art, Pink Ski Decor.",
    "TITLE": "Adorable Skiing Dog Art Print | Golden Retriever Winter Decor",
    "PIN_DESC": "The cutest pro on the slopes! 🐾 The \"Ski Pup\" print by Estelle Designs is a must-have for anyone who loves dogs and skiing. Featuring a golden retriever puppy in pink ski gear, this whimsical illustration adds a touch of sweetness to any room. Perfect for nurseries, kids' rooms, or as a unique gift for dog lovers. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7524.jpeg?tr=w-1300&updatedAt=1777801219016",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1845510546/retro-ski-art-print-ski-ya-later-winter",
    "ALT_TEXT": "A top-down POV illustration of a skier in tan gear and white boots looking down at their wood-toned skis with white stripes. Snow is spraying around the skis on a soft, light pink-cream background. The text 'ski ya later!' is written in a playful orange cursive at the bottom.",
    "TAGS": "Ski Ya Later Art, Funny Ski Print, Skier POV Illustration, Retro Winter Wall Art, Mountain Cabin Decor, Estelle Designs, Skiing Pun Poster, Preppy Winter Art.",
    "TITLE": "\"Ski Ya Later!\" Art Print | Fun & Retro Skier POV Decor",
    "PIN_DESC": "See you on the slopes! ⛷️ This \"Ski Ya Later!\" print by Estelle Designs is a playful and stylish tribute to your favorite winter hobby. With its unique POV perspective and warm, sun-faded colors, it adds a touch of personality to any room. A winning gift for skiers and lovers of a good pun! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7525.jpeg?tr=w-1300&updatedAt=1777801219023",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1888131783/ski-dog-art-print-retro-mountain-cabin",
    "ALT_TEXT": "A charming illustration of a reddish-brown long-haired dog sitting in the snow. The dog is wearing fuzzy blue earmuffs, vintage-style ski goggles, and a slate blue vest that says 'UP TO SNOW GOOD' in white block letters. The background features a soft blue sky and a snowy mountain landscape.",
    "TAGS": "Up to Snow Good, Dog Art Print, Skiing Dog Illustration, Winter Pun Wall Decor, Gift for Dog Lovers, Estelle Designs, Whimsical Sports Art, Ski Lodge Kids Decor.",
    "TITLE": "\"Up to Snow Good\" Dog Art Print | Cute Ski & Winter Decor",
    "PIN_DESC": "This pup is ready for the powder! 🐾 The \"Up to Snow Good\" print by Estelle Designs is a hilarious and sweet tribute to our furry winter companions. Featuring a dog in full ski gear and a punny vest, it’s the perfect way to add personality to a nursery, mudroom, or cabin gallery wall. A must-have gift for dog-loving skiers! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7513.jpeg?tr=w-1300&updatedAt=1777801219210",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1873875948/dogs-on-ski-lift-art-print-retro-winter",
    "ALT_TEXT": "A charming illustration of a dachshund and a French bulldog sitting together on a vintage orange ski chairlift. The dachshund wears a green knit beanie with goggles, and the Frenchie wears fuzzy green earmuffs and a matching sweater. Two pairs of green skis are tucked behind them as they ride over a snowy mountain ridge under a soft blue sky.",
    "TAGS": "Dogs on Chairlift, Skiing Dog Art, Winter Wall Decor, Gift for Dog Lovers, Whimsical Animal Illustration, Estelle Designs, Ski Lodge Nursery Art, Dachshund and Frenchie Art.",
    "TITLE": "Dogs on a Ski Chairlift Art Print | Whimsical Mountain & Cabin Decor",
    "PIN_DESC": "Next stop: The Summit! 🐾 The \"Top of the Mountain\" print by Estelle Designs is the ultimate whimsical tribute to our favorite ski companions. Featuring a dachshund and Frenchie in their winter best, this charming illustration adds a touch of playfulness to any gallery wall or kids' room. A must-have gift for dog-loving winter sports fans! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7514.jpeg?tr=w-1300&updatedAt=1777801219346",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1888169353/retro-woman-skier-art-print-vintage-ski",
    "ALT_TEXT": "A vintage-style illustration of a stylish woman skiing down a mountain. She is wearing a mustard yellow oversized hoodie with 'KILLING IT' in orange block letters, rust-colored leggings with white stripes, a cream helmet, and goggles. She holds her ski poles high against a snowy mountain background and a pale blue sky.",
    "TAGS": "Killing It Art Print, Ski Girl Wall Decor, Retro Ski Fashion, Motivational Sports Art, Estelle Designs, Vintage Winter Poster, Ski Lodge Aesthetic, Trendy Athlete Gift.",
    "TITLE": "\"Killing It\" Retro Ski Art | Stylish Winter Fashion Decor",
    "PIN_DESC": "Confidence is the best accessory on the slopes! ⛷️ The \"Killing It\" ski print by Estelle Designs is a chic tribute to vintage mountain fashion and bold feminine energy. Featuring trendy mustard and rust tones, it’s the perfect addition to a stylish bedroom or home office. A must-have gift for the girl who always crushes it on the mountain! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7521.jpeg?tr=w-1300&updatedAt=1777801219575",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1888125861/saint-bernard-ski-lift-art-print-vintage",
    "ALT_TEXT": "Confidence is the best accessory on the slopes! ⛷️ The \"Killing It\" ski print by Estelle Designs is a chic tribute to vintage mountain fashion and bold feminine energy. Featuring trendy mustard and rust tones, it’s the perfect addition to a stylish bedroom or home office. A must-have gift for the girl who always crushes it on the mountain! Shop our high-quality Giclée prints and digital downloads today.Saint Bernard Art, Gone Skiing Print, Dog in Gondola Illustration, Ski Cabin Wall Decor, Gift for Dog Lovers, Estelle Designs, Vintage Winter Poster, Alpine Rescue Dog Art.",
    "TAGS": "Saint Bernard Art, Gone Skiing Print, Dog in Gondola Illustration, Ski Cabin Wall Decor, Gift for Dog Lovers, Estelle Designs, Vintage Winter Poster, Alpine Rescue Dog Art.",
    "TITLE": "Saint Bernard \"Gone Skiing\" Art Print | Cute Mountain Cabin Decor",
    "PIN_DESC": "The best kind of mountain rescue! 🐾 The \"Gone Skiing\" Saint Bernard print by Estelle Designs is a cozy and whimsical tribute to the world's most iconic mountain dog. Featuring a vintage orange gondola and a happy pup, it’s the perfect addition to a ski lodge or a rustic entryway. A thoughtful gift for dog lovers and ski enthusiasts alike! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7523.jpeg?tr=w-1300&updatedAt=1777801219558",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1771704880/pastel-pink-ski-art-print-retro-winter",
    "ALT_TEXT": "A beautiful illustration of a pair of crossed dusty rose skis resting on soft, white snow. The skis feature vintage-style stripes and a small star detail near the tips, with detailed bindings in a warm tan and brown tone.",
    "TAGS": "Pink Ski Art, Retro Winter Decor, Vintage Mountain Poster, Skier Gift Ideas, Estelle Designs, Dusty Rose Wall Art, Ski Lodge Aesthetic, Feminine Sports Illustration.",
    "TITLE": "Retro Pink Skis Art Print | Chic Mountain & Cabin Decor",
    "PIN_DESC": "Bring the \"après-ski\" vibe home! ⛷️ The \"Starry Slopes\" print by Estelle Designs is a beautiful tribute to vintage mountain style. Featuring dusty rose skis with retro star details, it’s the perfect piece for a stylish gallery wall or a cozy winter bedroom. A stunning gift for the mountain lover in your life. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7515.jpeg?tr=w-1300&updatedAt=1777801219637",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1873850110/dogs-on-ski-lift-art-print-winter-cabin",
    "ALT_TEXT": "A whimsical illustration of a small Jack Russell Terrier and a fluffy Goldendoodle riding an orange vintage ski chairlift together. The Jack Russell wears a teal knit beanie, and the Goldendoodle wears a peach-colored hat and matching scarf. Two sets of skis (yellow and slate blue) are behind them as they ascend over a snowy mountain ridge under a soft blue sky.",
    "TAGS": "Dogs on Chairlift, Goldendoodle Art, Jack Russell Terrier Print, Skiing Dog Illustration, Winter Nursery Wall Art, Estelle Designs, Ski Lodge Decor, Whimsical Pet Art.",
    "TITLE": "Dogs on a Ski Chairlift Art Print | Goldendoodle & Jack Russell Decor",
    "PIN_DESC": "The cutest commute on the mountain! 🚠 \"Mountain Besties\" by Estelle Designs features a Jack Russell and a Goldendoodle riding a vintage chairlift in their winter finest. This whimsical illustration is the perfect addition to a cozy cabin, a child’s bedroom, or a pet-lover’s home. A unique gift for skiers and dog lovers alike! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7593.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1814334899/cross-country-skiing-art-print-snowy",
    "ALT_TEXT": "A vertical illustration of two cross-country skiers from behind, gliding down a snowy path lined with tall, thin, leafless trees. The scene is bathed in a warm, golden sunlight that creates long shadows across the snow. The colors are soft cream, peach, and warm brown.",
    "TAGS": "Cross Country Skiing Art, Forest Winter Print, Nordic Skiing Decor, Mountain Cabin Wall Art, Estelle Designs, Vintage Winter Landscape, Golden Hour Illustration, Nature Lover Gift.",
    "TITLE": "Cross-Country Skiing Forest Art Print | Warm Golden Hour Winter Decor",
    "PIN_DESC": "Escape to the quiet of the woods. ❄️ The \"Winter Glow\" print by Estelle Designs is a beautiful tribute to the serenity of Nordic skiing. Featuring two skiers on a sun-drenched forest trail, this warm and atmospheric illustration is the perfect addition to a cozy cabin or a modern gallery wall. A thoughtful gift for the winter adventurer. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7595.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1814322043/snowshoeing-art-print-winter-forest",
    "ALT_TEXT": "A vertical illustration of a person snowshoeing down a snowy forest path with a brown dog by their side. They are walking away from the viewer through rows of tall, slender, leafless trees. The scene is filled with soft, warm golden light, casting long shadows across the white snow. The color palette is composed of gentle creams, tans, and warm browns.",
    "TAGS": "Snowshoeing Art Print, Dog and Owner Art, Winter Forest Illustration, Cabin Wall Decor, Estelle Designs, Minimalist Winter Landscape, Golden Hour Art, Gift for Hikers.",
    "TITLE": "Snowshoeing with Dog Art Print | Warm Winter Forest Decor",
    "PIN_DESC": "The best kind of winter morning. 🐾 \"Winter Walk\" by Estelle Designs is a peaceful tribute to snowy adventures with your furry friend. This warm, golden-hour illustration of a snowshoer in a quiet forest is perfect for adding a touch of serene nature to your home or cabin. A lovely gift for hikers and dog lovers! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7596.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1846286600/retro-ice-skating-art-print-winter",
    "ALT_TEXT": "A graceful illustration of a girl with long auburn hair ice skating. She is wearing a tan patterned knit sweater, a matching beanie with a pom-pom, and rust-colored leggings. She is captured mid-glide with arms outstretched against a soft cream background with snow-like speckles. The words 'glide and shine!' are written in elegant orange cursive at the bottom left.",
    "TAGS": "Ice Skating Art Print, Vintage Winter Wall Decor, Figure Skater Gift, Glide and Shine Poster, Estelle Designs, Retro Winter Illustration, Feminine Sports Art, Minimalist Holiday Decor.",
    "TITLE": "\"Glide and Shine\" Ice Skating Art Print | Elegant Winter & Holiday Decor",
    "PIN_DESC": "Grace on ice! ⛸️ The \"Glide and Shine\" print by Estelle Designs is a beautiful tribute to the magic of winter skating. With its retro-chic style and warm, sun-faded colors, it adds a touch of timeless elegance to a gallery wall or cozy bedroom. A thoughtful gift for skaters and mountain lovers alike. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7592.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1822669967/winter-swim-art-print-retro-lake-scene",
    "ALT_TEXT": "A serene illustration of three women with their backs to the viewer, wearing colorful beanies (peach, teal, and pink) while soaking in a body of water during a snowfall. A majestic snowy mountain range and a forest line are visible in the background under a warm, golden sunset light.",
    "TAGS": "Cold Plunge Art, Winter Swimming Print, Wild Swimming Decor, Mountain Lake Poster, Estelle Designs, Après-Ski Wall Art, Hot Spring Illustration, Wellness Gift Ideas.",
    "TITLE": "Winter Cold Plunge Art Print | Mountain Wellness Decor",
    "PIN_DESC": "The ultimate winter reset. ❄️✨ The \"Winter Dip\" print by Estelle Designs captures the serene beauty of cold-water therapy under a golden mountain sunset. Whether you love wild swimming or a warm hot spring soak, this atmospheric illustration adds a touch of calm to any space. A thoughtful gift for your favorite swim buddies! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7594.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1800943994/personalized-christmas-bauble-family",
    "ALT_TEXT": "A horizontal holiday-themed illustration featuring four vintage-style pink glass ornaments hanging from red ribbons against a light pink background. Each ornament is hand-lettered with a name: Dad, Mom, Harry, and Sophie. The bottom of the print features the text 'THE Smith FAMILY' in a mix of green block letters and red cursive.",
    "TAGS": "Personalized Christmas Art, Custom Family Ornament Print, Pink Holiday Decor, Vintage Ornament Illustration, Estelle Designs, Family Name Holiday Poster, Custom Gift Ideas, Pastel Christmas Wall Art.",
    "TITLE": "Custom Family Ornament Art | Personalised Pink Christmas Decor",
    "PIN_DESC": "Make the holidays extra special with a custom family keepsake! 🎄 This personalized ornament print by Estelle Designs features vintage pink ornaments and hand-lettered names for the whole family. Perfect for your holiday mantel or as a unique Christmas gift. Customize yours today with high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Ski & winter",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7527.jpeg?tr=w-1300&updatedAt=1777801209641",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1794496192/personalized-family-ski-boots-print",
    "ALT_TEXT": "A personalized illustration of four pairs of ski boots in decreasing sizes, representing a family. The boots are in blue, pink, sage green, and yellow. Below the boots, the text reads 'HAPPY FAMILY' with a heart, and personalized names 'Dad, Mom, Harry, Gigi' in a cursive font on a cream background.",
    "TAGS": "Personalized Family Art, Ski Boot Illustration, Winter Cabin Decor, Custom Family Portrait, Skier Gift Idea, Estelle Designs, Mountain House Wall Art, Custom Name Art Print.",
    "TITLE": "Personalised Ski Boot Family Art | Unique Skier Gift Ideas",
    "PIN_DESC": "Capture your family's mountain adventures! ⛷️ The \"Winter Family\" personalized ski boot print by Estelle Designs is a one-of-a-kind way to celebrate your crew. Featuring custom names and a charming retro-pastel palette, it’s the perfect addition to your ski lodge or home entryway. A thoughtful gift for skiing families and winter enthusiasts. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Nautical",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7650.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1837159549/retro-motorboat-art-print-coastal-blue",
    "ALT_TEXT": "A high-angle nautical illustration of a vintage wooden speedboat cruising through textured light blue water. One woman in a sun hat is sunbathing on the back deck, while another woman in a white hat sits in the cockpit. The boat leaves a white wake behind it against a minimalist blue ocean background.",
    "TAGS": "Aerial Boat Art, Nautical Collection, Vintage Speedboat Illustration, Riva Boat Print, Estelle Designs, Coastal Luxury Decor, Blue and Tan Maritime Art, Lake House Wall Decor, Nautical Poster.",
    "TITLE": "\"The Riva Retreat\" Nautical Art Print | Aerial Speedboat Poster",
    "PIN_DESC": "Escape to the coast! 🚤 Mediterranean dreams come to life in \"The Riva Retreat,\" part of the Nautical Collection by Estelle Designs. This chic aerial illustration of a vintage wooden boat is the ultimate statement piece for your coastal gallery wall. Perfect for bringing a touch of maritime glamour to your home. Shop our high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Nautical",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7646.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1837141991/retro-woman-waterskiing-art-print-blue",
    "ALT_TEXT": "dynamic nautical illustration from a side profile of a blonde woman in a pink and white striped bikini sailing. She is hanging off the side of a sailboat in a trapeze harness, pulling on a line to trim the sail. The background features a misty green shoreline and a calm blue sea with white water spray at the bottom.",
    "TAGS": "Sailing Art Print, Nautical Collection, Trapezing Illustration, Yachting Wall Art, Estelle Designs, Vintage Sailing Poster, Women’s Sailing Gift, Coastal Home Decor, Sailboat Rigging Art.",
    "TITLE": "\"Hanging on the Wind\" Nautical Art | Performance Sailing Decor",
    "PIN_DESC": "Feel the spray! ⛵🌊 \"Hanging on the Wind\" from the Nautical Collection by Estelle Designs captures the precision and thrill of sailing. This chic illustration of a sailor leaning off the boat is the perfect addition to a beach house or yacht club gallery wall. Celebrate the spirit of adventure with our high-quality Giclée prints.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Nautical",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7643.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1837176219/retro-sailboat-art-print-minimalist",
    "ALT_TEXT": "An aerial bird's-eye view illustration of a classic wooden sailboat with a large white sail cruising through textured blue water. The boat casts a long, distinct shadow to the right, and a bright white wake trails behind the hull. The water is a serene cornflower blue with subtle white spray details.",
    "TAGS": "Aerial Sailboat Art, Nautical Collection, Wooden Yacht Illustration, Minimalist Sailing Print, Estelle Designs, Modern Coastal Decor, Blue Nautical Poster, Gift for Sailors, Yacht Shadow Art.",
    "TITLE": "\"The Solitary Sailor\" Art Print | Aerial Sailboat & Nautical Decor",
    "PIN_DESC": "Pure tranquility. ⛵🌊 \"The Solitary Sailor\" from the Nautical Collection by Estelle Designs offers a unique overhead perspective on the beauty of sailing. With its calming blue tones and elegant wooden textures, this illustration is the perfect anchor for a modern beach house interior. Shop our high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Nautical",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7649.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1837150097/retro-sailboat-art-print-vintage",
    "ALT_TEXT": "A chic vintage-style fashion illustration of a woman standing on the bow of a white yacht. She is wearing a white and navy trimmed nautical two-piece suit with gold buttons and a white swim cap. She has one arm raised as if waving or shielding her eyes, and her shadow is cast elegantly onto the large white sail behind her.",
    "TAGS": "Nautical Fashion Art, Yachting Illustration, Vintage Sailing Poster, Nautical Collection, Estelle Designs, Navy and White Beach Decor, Sailor Girl Art Print, Coastal Luxury Wall Art, Maritime Fashion.",
    "TITLE": "\"The Lookout\" Nautical Art Print | Vintage Yachting Fashion Decor",
    "PIN_DESC": "Smooth sailing and high style. ⛵✨ \"The Lookout\" from the Nautical Collection by Estelle Designs captures the elegance of a vintage yachting adventure. This chic illustration, featuring a nautical two-piece and a striking sail shadow, is the perfect anchor for your coastal gallery wall. Shop our premium Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Nautical",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7644.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1752732503/couple-on-boat-art-print-retro-nautical",
    "ALT_TEXT": "A first-person perspective illustration looking out from the back of a boat. Two people are lounging on opposite sides of the boat's white cushioned seating, reaching out to hold hands in the center. Only their legs and arms are visible. The background shows a calm, light green sea, a hazy mountain, and soft bokeh light orbs in the sky.",
    "TAGS": "Romantic Nautical Art, Boat Life Illustration, Couple Holding Hands Print, Nautical Collection, Estelle Designs, Coastal Romance Decor, Minimalist Beach Art, Gift for Couples, Seafoam Green Wall Art.",
    "TITLE": "\"The Lovers' Wake\" Art Print | Romantic Coastal & Boat Decor",
    "PIN_DESC": "Just you, me, and the sea. 🌊❤️ \"The Lovers' Wake\" from the Nautical Collection by Estelle Designs captures the intimacy of a day on the water. This perspective-style illustration is a beautiful, understated way to bring romance into your coastal home. Shop our high-quality Giclée prints and digital downloads for your anniversary or beach house.",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Nautical",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7647.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1890646223/retro-sailboat-art-print-pink-coastal",
    "ALT_TEXT": "An impressionistic nautical illustration of four small white-sailed dinghies racing across a lake at sunset. The water and sky are bathed in warm peach and golden tones. A large, misty mountain rises in the background, and soft pink lens flare orbs drift across the center of the image.",
    "TAGS": "Sailing Regatta Art, Nautical Collection, Sunset Sailboat Poster, Lake Life Illustration, Estelle Designs, Peach and Gold Coastal Decor, Dinghy Racing Print, Yacht Club Wall Art, Warm Toned Maritime Art.",
    "TITLE": "\"The Golden Regatta\" Art Print | Sunset Sailing & Lake House Decor",
    "PIN_DESC": "Chasing the light. ⛵✨ \"The Golden Regatta\" from the Nautical Collection by Estelle Designs captures the serene beauty of a sunset sail. This warm, impressionistic illustration is the perfect way to bring the peace of the lake into your home. A stunning addition to any coastal or cottage-style gallery wall. Shop our high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Nautical",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7642.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1876509500/retro-sailboat-art-print-coastal",
    "ALT_TEXT": "A dynamic nautical illustration of a sailor in a white cap and gear leaning far back out of a small white-sailed dinghy to balance it against the wind. The boat is cutting through light blue water with a large white spray. The background features a misty green shoreline and mountains under a pale, bright sky with soft lens flare effects.",
    "TAGS": "Dinghy Sailing Art, Nautical Collection, Performance Sailing Illustration, Yachting Wall Art, Estelle Designs, Laser Sailing Print, Coastal Home Decor, Boathouse Art, Gift for Sailors.",
    "TITLE": "\"The Solo Sailor\" Art Print | Performance Sailing & Coastal Decor",
    "PIN_DESC": "Master the waves! ⛵🌊 \"The Solo Sailor\" from the Nautical Collection by Estelle Designs captures the precision and adrenaline of performance sailing. This chic, high-action illustration is the perfect statement piece for your beach house or sailing club gallery wall. Shop our high-quality Giclée prints and digital downloads to bring the spirit of the sea home.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Nautical",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7641.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1876364218/boy-and-dog-sailing-art-print-retro",
    "ALT_TEXT": "A charming nautical illustration of a young boy and a Golden Retriever sitting together on a small white-sailed sailboat. The boy is smiling at his dog as they glide across calm, pale green water. The background features a soft peach sky, a misty mountain, and a delicate trail of bokeh light orbs.",
    "TAGS": "Nautical Collection, Boy and Dog Art, Golden Retriever Illustration, Sailing with Dogs Print, Estelle Designs, Nursery Nautical Decor, Coastal Family Art, Lake House Wall Art, Puppy and Sailboat Poster.",
    "TITLE": "\"The First Mate\" Nautical Art Print | Boy and Golden Retriever Sailing",
    "PIN_DESC": "The ultimate sailing duo! ⛵🐾 \"The First Mate\" from the Nautical Collection by Estelle Designs celebrates the bond between a boy and his dog on a peaceful afternoon at sea. This sweet, sun-drenched illustration is a must-have for dog lovers and coastal nurseries. Shop our high-quality Giclée prints and digital downloads to add some heart to your gallery wall.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Nautical",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7648.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1734458558/retro-boating-art-print-sage-green",
    "ALT_TEXT": "A first-person perspective nautical illustration showing a person's sun-kissed leg with red-painted toenails resting on the edge of a white boat. A sailboat line stretches across the frame. The background features a calm, light green sea, a hazy mountain range, and soft golden bokeh light orbs in a pale sky.",
    "TAGS": "Nautical Art, Summer Boat Art, First Person Illustration, Beach House Decor, Estelle Designs, Nautical Collection, Coastal Lifestyle Print, Mint and Peach Wall Art, Sunbathing Poster.",
    "TITLE": "\"The Serene Sailor\" Art Print | Minimalist Coastal & Boat Decor",
    "PIN_DESC": "Current mood: Out of Office. 🛥️✨ \"The Serene Sailor\" from the Nautical Collection by Estelle Designs is all about the quiet beauty of a day at sea. This chic, perspective-driven illustration is the perfect way to bring sun-drenched coastal vibes into your home. Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Nautical",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7645.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1734154738/retro-sailboat-art-print-pink-girly",
    "ALT_TEXT": "A vintage-style fashion illustration of a blonde woman with a retro hairstyle seen from behind. She is wearing a chic red one-piece swimsuit and is leaning gracefully off the bow of a sailboat, holding onto the rigging with one hand and reaching out with the other. The background is a soft, misty pink with ethereal white bokeh light effects.",
    "TAGS": "Vintage Sailing Art, Nautical Collection, Glamour Fashion Illustration, Red Swimsuit Art, Estelle Designs, Yacht Club Decor, Retro Beach Poster, Coastal Luxury Wall Art, Maritime Fashion Print.",
    "TITLE": "\"The Gilded Sail\" Art Print | Vintage Maritime Glamour & Decor",
    "PIN_DESC": "Set sail in style! ⛵❤️ \"The Gilded Sail\" from the Nautical Collection by Estelle Designs captures the breathtaking elegance of a vintage sailing adventure. With its chic red swimsuit and dreamy pink palette, this illustration is the ultimate anchor for a sophisticated coastal home. Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Kids",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7680.jpeg?tr=w-1300&updatedAt=1777897135778",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1854141708/singing-gorilla-shower-karaoke-art-print",
    "ALT_TEXT": "A hilarious digital illustration of a large brown gorilla sitting in a vintage clawfoot bathtub, singing into a showerhead like a microphone. The gorilla holds a bar of soap in one hand, with a rubber duck perched on the edge of the tub. The words \"SHOWER KARAOKE\" are written in bold pink and red text above. A soft green striped shower curtain hangs to the right, and pink bubbles float in the air",
    "TAGS": "Funny Bathroom Art, Gorilla Illustration, Shower Karaoke Print, Kids Bathroom Decor, Estelle Designs, Kids & Bathroom Collection, Animal Bath Art, Whimsical Wall Decor, Playful Powder Room Poster.",
    "TITLE": "\"Shower Karaoke\" Art Print | Funny Gorilla Bathroom Decor",
    "PIN_DESC": "Sing your heart out! 🎤🦍 The Shower Star from the Kids & Bathroom Collection by Estelle Designs brings a whole lot of personality to your walls. This funny illustration of a gorilla in a bathtub is the perfect way to make guests smile and keep bath time fun for the kids. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Kids",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7678.jpeg?tr=w-1300&updatedAt=1777897125338",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1867427303/retro-frog-basketball-art-print-trendy",
    "ALT_TEXT": "A playful digital illustration of a green frog dressed in orange basketball shorts with white stripes, a backward orange baseball cap, white crew socks, and orange high-top sneakers. The frog is spinning an orange basketball on one finger. The design has a hand-drawn, textured feel on a clean white background.",
    "TAGS": "Basketball Art for Kids, Frog Illustration, Sports Nursery Decor, Kids Playroom Wall Art, Estelle Designs, Kids & Bathroom Collection, Orange and Green Decor, Boys Bedroom Poster, Whimsical Sports Art.",
    "TITLE": "\"The Jump Shot\" Basketball Frog Art | Sports Kids Room & Playroom Decor",
    "PIN_DESC": "Nothing but net! 🏀🐸 The Jump Shot from the Kids & Bathroom Collection by Estelle Designs is a total win for any sports-themed room. This cool basketball-spinning frog illustration is the perfect way to bring energy and style to your kid's gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Kids",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7672.jpeg?tr=w-1300&updatedAt=1777897125156",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1867434419/rabbit-in-jeep-art-print-love-heart",
    "ALT_TEXT": "A charming digital illustration of a peach-colored bunny driving a vintage sage green truck. Tied to the roof with a pink striped ribbon is a massive red heart. The truck has a license plate that reads \"LOVE\" in red letters. The design has a soft, hand-drawn texture on a clean white background.",
    "TAGS": "Bunny Nursery Art, Vintage Truck Illustration, Heart Wall Art, Kids Room Decor, Estelle Designs, Kids & Bathroom Collection, Sage Green Nursery Decor, Whimsical Animal Art, Love Themed Kids Poster.",
    "TITLE": "\"The Love Delivery\" Bunny Art | Sweet Vintage Truck Nursery Decor",
    "PIN_DESC": "Special delivery! 🐰❤️🚙 The Love Delivery from the Kids & Bathroom Collection by Estelle Designs is the sweetest way to decorate a nursery or playroom. This vintage-inspired illustration of a bunny driving a truck full of love is perfect for a whimsical gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Kids",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7673.jpeg?tr=w-1300&updatedAt=1777897122577",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1853243470/pink-elephant-duck-pool-float-art-print",
    "ALT_TEXT": "A charming digital illustration of a small pink elephant wearing green and white striped swim trunks, sitting on a yellow rubber duck pool floatie. The elephant's trunk is raised, spraying three teal water droplets into the air. The design has a soft, grainy vintage texture on a clean white background.",
    "TAGS": "Elephant Nursery Art, Duck Floatie Illustration, Kids Bathroom Decor, Whimsical Animal Art, Estelle Designs, Kids & Bathroom Collection, Pink and Yellow Nursery Art, Cute Animal Bathroom Poster, Playful Wall Decor.",
    "TITLE": "\"The Splashing Pachyderm\" Art Print | Cute Elephant Bathroom & Nursery Decor",
    "PIN_DESC": "Splish splash! 🐘🐤 The Splashing Pachyderm from the Kids & Bathroom Collection by Estelle Designs is the ultimate addition to a fun-filled space. This adorable pink elephant on a duck floatie brings a touch of whimsical adventure to any kids' bathroom or nursery. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Kids",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7674.jpeg?tr=w-1300&updatedAt=1777897121153",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1867447487/sleeping-sloth-on-moon-print-nursery",
    "ALT_TEXT": "A gentle digital illustration of a brown sloth sleeping soundly on a glowing yellow crescent moon. The moon has a cute face with large eyes, long lashes, and rosy cheeks. Three small yellow stars float around them against a crisp white background. The artwork features a soft, grainy pencil-style texture.",
    "TAGS": "Sloth Nursery Art, Moon and Stars Illustration, Kids Bedroom Wall Decor, Celestial Nursery Decor, Estelle Designs, Kids & Bathroom Collection, Neutral Nursery Art, Sleeping Animal Poster, Whimsical Night Sky Art.",
    "TITLE": "\"Midnight Snooze\" Sloth Art | Dreamy Moon & Stars Nursery Decor",
    "PIN_DESC": "Sweet dreams are made of this! 🌙🦥 Midnight Snooze from the Kids & Bathroom Collection by Estelle Designs is the perfect calming touch for a nursery. This adorable sleeping sloth on a crescent moon brings a warm, cozy glow to any kids' gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Kids",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7679.jpeg?tr=w-1300&updatedAt=1777897127593",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/992738661/retro-rocket-art-print-vintage-outer",
    "ALT_TEXT": "A charming digital illustration of a vintage-style rocket ship angled upward. The rocket is primarily golden-mustard yellow with a white and yellow checkered pattern on the body and a circular brown porthole window. The design features a subtle distressed texture and sits on a clean, off-white background with a soft shadow.",
    "TAGS": "Rocket Ship Art, Space Nursery Decor, Kids Room Wall Art, Vintage Rocket Illustration, Estelle Designs, Kids & Bathroom Collection, Checkered Rocket Print, Boys Bedroom Decor, Mid-Century Modern Kids Art.",
    "TITLE": "\"To The Moon\" Retro Rocket Art | Checkered Space Nursery & Kids Decor",
    "PIN_DESC": "Blast off! 🚀✨ To The Moon from the Kids & Bathroom Collection by Estelle Designs is the perfect piece for your little astronaut. This vintage-inspired checkered rocket ship adds a touch of retro charm and a pop of mustard yellow to any nursery or playroom gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Kids",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7681.jpeg?tr=w-1300&updatedAt=1777897136535",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1798731486/retro-game-controller-art-print-gamer",
    "ALT_TEXT": "A trendy digital illustration featuring the word \"GAME\" in large, orange collegiate-style block letters. In place of the letter \"M,\" there is a vintage-style game controller with checkered patterns on the handles. The entire design sits on a muted light grey and cream checkered background with a subtle vintage texture.",
    "TAGS": "Gamer Wall Art, Kids Room Decor, Retro Video Game Poster, Checkered Art Print, Estelle Designs, Kids & Bathroom Collection, Playroom Wall Decor, Boys Bedroom Ideas, Varsity Style Gaming Art.",
    "TITLE": "\"Level Up\" Retro Gamer Art | Checkered Kids Room & Playroom Decor",
    "PIN_DESC": "Game on! 🎮✨ Level Up from the Kids & Bathroom Collection by Estelle Designs is the ultimate addition to a modern gamer's room. With its cool checkered background and retro varsity vibes, this game controller illustration is perfect for a playroom gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Kids",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7676.jpeg?tr=w-1300&updatedAt=1777897123999",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1853258278/retro-lion-surfing-art-print-beach",
    "ALT_TEXT": "A playful digital illustration of a cute lion cub balancing on a white surfboard. The lion is doing a handstand-style trick with its legs in the air, wearing pink and white striped swim trunks. Its mane is blowing in the wind, and it has a sweet, smiling expression. The design has a soft, textured feel on a clean white background.",
    "TAGS": "Lion Nursery Art, Surfing Animal Illustration, Kids Bathroom Wall Decor, Beach Theme Nursery, Estelle Designs, Kids & Bathroom Collection, Coastal Kids Decor, Surfer Lion Print, Whimsical Animal Poster.",
    "TITLE": "\"The Mane Event\" Surfing Lion Art | Coastal Kids Room & Bathroom Decor",
    "PIN_DESC": "Hang ten! 🏄‍♂️🦁 The Mane Event from the Kids & Bathroom Collection by Estelle Designs is the ultimate summer vibe for your little one's room. This adorable surfing lion cub illustration adds a touch of sun-drenched adventure to any gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7663.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1903004473/funny-chocolate-ice-cream-cone-print",
    "ALT_TEXT": "A witty digital illustration of a dropped chocolate ice cream cone lying splattered on the ground. Above the mess, the text reads \"Pardon my French but...\" in a light script, followed by a large, bold, blocky \"merde!\" in a deep mauve-pink. The background is a soft, textured cream color with a subtle shadow cast by the cone.",
    "TAGS": "Funny Food Art, Dropped Ice Cream Illustration, Merde Wall Art, French Pun Print, Estelle Designs, Food Drinks and Floral Collection, Sassy Kitchen Decor, Relatable Home Art, Witty Gift for Friends.",
    "TITLE": "\"Pardon My French\" Art Print | Funny Dropped Ice Cream Decor",
    "PIN_DESC": "Mood: Merde. 🍦💩 Pardon My French from the Food, Drinks and Floral Collection by Estelle Designs is the honest kitchen art you’ve been looking for. This chic-meets-cheeky dropped ice cream illustration is the perfect way to laugh off a bad day. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7652.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1720908427/honey-bear-art-print-vintage-kitchen",
    "ALT_TEXT": "A charming digital illustration of a classic plastic honey bear bottle with \"YUMMY HONEY\" embossed on its chest. Golden honey is drizzling down from the yellow cap, pooling at the bottom. The background features soft pink and white vertical stripes with a vintage, textured finish.",
    "TAGS": "Honey Bear Art, Kitchen Wall Decor, Vintage Food Illustration, Estelle Designs, Food Drinks and Floral Collection, Honey Bottle Print, Pink Striped Art, Nursery Decor, Retro Pantry Poster.",
    "TITLE": "\"Yummy Honey\" Bear Art | Sweet & Retro Kitchen Decor",
    "PIN_DESC": "Sweet as can be! 🍯🧸 The Golden Bear from the Food, Drinks and Floral Collection by Estelle Designs is a nostalgic nod to a kitchen classic. This glowing honey bear illustration adds a warm, whimsical touch to your kitchen or nursery gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7655.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1902937863/funny-french-fries-print-retro-kitchen",
    "ALT_TEXT": "A vibrant digital illustration of a red and white striped container of golden french fries. The container features a heart-shaped sticker with the words \"LOVE SWEET LOVE.\" Above the fries, the text \"FRIES ARE MY LOVE LANGUAGE\" is written in a bold, mustard-yellow collegiate font, with a small red heart replacing the 'O' in LOVE. The background is a soft, textured cream color.",
    "TAGS": "Funny Food Art, French Fries Illustration, Love Language Print, Kitchen Wall Decor, Estelle Designs, Food Drinks and Floral Collection, Retro Food Poster, Relatable Art Print, Gift for Foodies.",
    "TITLE": "\"Fries Are My Love Language\" Art Print | Funny Kitchen & Foodie Decor",
    "PIN_DESC": "Speak my language! 🍟❤️ The Language of Fries from the Food, Drinks and Floral Collection by Estelle Designs is the ultimate relatable art for your kitchen or dining space. This bold, vintage-inspired french fry illustration adds a playful touch to any gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7659.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4295310964/retro-fruit-popsicle-print-trendy-summer",
    "ALT_TEXT": "A vibrant digital illustration of a rocket-shaped popsicle in layers of red, orange, and yellow on a wooden stick. The words \"JUST CHILLIN’\" are written across the center in a bold, white collegiate-style font with a red outline. The background is a soft, textured pale pink.",
    "TAGS": "Popsicle Art Print, Summer Wall Decor, Just Chillin Art, Retro Food Illustration, Estelle Designs, Food Drinks and Floral Collection, Colorful Nursery Art, Kitchen Poster, Nostalgic Art Print.",
    "TITLE": "\"Just Chillin’\" Art Print | Retro Popsicle & Summer Decor",
    "PIN_DESC": "Summer vibes only! 🍦☀️ Just Chillin’ from the Food, Drinks and Floral Collection by Estelle Designs is a nostalgic trip to the ice cream truck. This vibrant rocket popsicle illustration adds a playful, colorful touch to any nursery or kitchen gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7651.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1844794923/retro-popcorn-cinema-art-print-vintage",
    "ALT_TEXT": "A charming digital illustration of a classic red and white striped popcorn bucket overflowing with buttery yellow popcorn. The bucket features a white oval label with \"pop corn\" written in a red script font. Below the bucket, the words \"LE CINÉMA\" are written in a bold, black, art-deco inspired stencil font. The background is a soft, textured cream color.",
    "TAGS": "Popcorn Art Print, Movie Theater Decor, Le Cinema Wall Art, Vintage Food Illustration, Estelle Designs, Food Drinks and Floral Collection, Retro Kitchen Poster, Home Theater Decor, French Cinema Art.",
    "TITLE": "\"Le Cinéma\" Popcorn Art Print | Vintage Theater & Home Decor",
    "PIN_DESC": "Lights, camera, snacks! 🍿🎬 Le Cinéma from the Food, Drinks and Floral Collection by Estelle Designs is a tribute to the timeless joy of the movies. This vintage-inspired popcorn illustration adds a touch of retro glamour and French flair to your home theater or gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7657.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1890215476/funny-chocolate-bar-poster-retro-kitchen",
    "ALT_TEXT": "A chic digital illustration of a partially unwrapped bar of milk chocolate in a pale blue wrapper. The wrapper features elegant blue script that reads \"artisan chocolatier depuis 1884.\" A white sticker on the bottom of the bar reads \"I RUN ON CHOCOLATE AND SARCASM\" in clean black capital letters. The background is a soft, textured peach color.",
    "TAGS": "Chocolate Art Print, Funny Kitchen Decor, Artisan Chocolatier Illustration, Sarcasm Art, Estelle Designs, Food Drinks and Floral Collection, Office Wall Art, Gift for Chocolate Lovers, Blue and Peach Decor.",
    "TITLE": "\"The Daily Fuel\" Chocolate Art Print | Funny & Chic Kitchen Decor",
    "PIN_DESC": "My two main food groups. 🍫😏 The Daily Fuel from the Food, Drinks and Floral Collection by Estelle Designs is the perfect mix of vintage Parisian aesthetic and modern sarcasm. This chic chocolate bar illustration is a must-have for your office or kitchen gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7671.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/942301221/retro-gumball-machine-art-print-sweet",
    "ALT_TEXT": "A digital illustration of a retro light blue gumball machine filled with colorful pastel gumballs. The glass globe features a red circular logo that reads \"BALL GUM ONE CENT\" and \"PURE CHEWING GUM.\" A single yellow gumball is shown sitting in the dispenser tray at the bottom. The background is a clean, textured off-white.",
    "TAGS": "Gumball Machine Art, Retro Candy Illustration, Vintage Nursery Decor, Estelle Designs, Food Drinks and Floral Collection, Colorful Wall Art, Playroom Decor, Mid-Century Modern Kitchen, Nostalgic Candy Poster.",
    "TITLE": "\"The Penny Gumball\" Art Print | Vintage Candy & Playroom Decor",
    "PIN_DESC": "Sweeten your space! 🍬✨ The Penny Gumball from the Food, Drinks and Floral Collection by Estelle Designs is a nostalgic nod to classic candy shops. This colorful, vintage-inspired gumball machine illustration is a must-have for a nursery, playroom, or retro kitchen. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7661.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1886358858/french-cherry-jadore-art-print-retro",
    "ALT_TEXT": "A romantic digital illustration of two bright red cherries shaped like hearts hanging from a single green stem. The green leaves at the top feature a small heart cutout and the word \"CHÉRI\" in thin green letters. Across the two red heart cherries, the phrase \"J'ADORE\" is written in bold white block letters. The background is a soft, textured pale pink.",
    "TAGS": "French Art Print, Heart Cherry Illustration, J'adore Wall Art, Romantic Food Art, Estelle Designs, Food Drinks and Floral Collection, Pink and Red Decor, Parisian Style Poster, Valentine's Day Gift Art.",
    "TITLE": "\"J'adore Chéri\" Art Print | Romantic French Heart Cherry Decor",
    "PIN_DESC": "Sweet like a cherry! 🍒❤️ J'adore Chéri from the Food, Drinks and Floral Collection by Estelle Designs brings a touch of Parisian romance to your home. This chic heart-shaped cherry illustration is the perfect way to say \"I love you\" through art. Ideal for bedroom gallery walls or Valentine's gifting. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7662.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1886374244/french-lemon-kitchen-poster-trendy",
    "ALT_TEXT": "A cheerful digital illustration of two bright yellow lemons hanging from a green stem with two leaves. One leaf features a small heart-shaped cutout and the word \"AMOUR\" in thin green letters. Across the two lemons, the word \"CITRONNÉ\" is written in bold white block letters. The background is a soft, textured pale pink.",
    "TAGS": "Lemon Art Print, French Botanical Illustration, Citronne Amour Wall Art, Mediterranean Decor, Estelle Designs, Food Drinks and Floral Collection, Yellow and Pink Kitchen Art, Citrus Fruit Poster, Coastal Kitchen Decor.",
    "TITLE": "\"Citronné Amour\" Art Print | Zesty French Lemon & Kitchen Decor",
    "PIN_DESC": "Sweet, tart, and full of love! 🍋✨ Citronné Amour from the Food, Drinks and Floral Collection by Estelle Designs is a tribute to sunny days and fresh starts. This chic lemon illustration with a romantic French twist is the perfect way to brighten up your kitchen gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7660.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1811285411/funny-rose-wine-art-print-girly-bar-cart",
    "ALT_TEXT": "A surreal digital illustration of a glamorous woman in a blue striped swimsuit and sunglasses floating in a lifebuoy inside a large glass of rosé wine. She is sipping from a red and white striped straw. Below the glass, a small red logo features two cherries and the text \"LA VIE EN ROSÉ\" in a semi-circle. The background is a clean, textured off-white.",
    "TAGS": "Wine Art Print, Rosé Wine Illustration, La Vie en Rose Wall Art, Surreal Food Art, Estelle Designs, Home Bar Decor, Summer Vacation Poster, Glamorous Drink Art, Whimsical Kitchen Decor.",
    "TITLE": "\"La Vie en Rosé\" Wine Art Print | Surreal & Chic Home Bar Decor",
    "PIN_DESC": "Life is better in pink! 🍷✨ La Vie en Rosé from the Food, Drinks and Floral Collection by Estelle Designs is a playful tribute to wine lovers and summer vibes. This chic illustration of a woman floating in a wine glass adds a touch of surreal glamour to your kitchen or bar area. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7656.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4296141602/espresso-martini-art-print-trendy-bar",
    "ALT_TEXT": "A chic digital illustration of an espresso martini in a crystal-style martini glass, complete with a creamy foam top and three coffee beans. Below the glass, the words \"a TINI bit TIPSY\" are written in a mix of light blue block letters and upside-down gold script. The background is a soft, textured off-white.",
    "TAGS": "Espresso Martini Art, Cocktail Illustration, Funny Bar Art, A Tini Bit Tipsy Print, Estelle Designs, Food Drinks and Floral Collection, Bar Cart Decor, Home Bar Wall Art, Modern Kitchen Poster.",
    "TITLE": "\"A Tini Bit Tipsy\" Art Print | Espresso Martini & Bar Cart Decor",
    "PIN_DESC": "Martini o'clock! 🍸☕ A Tini Bit Tipsy from the Food, Drinks and Floral Collection by Estelle Designs is the perfect chic-meets-cheeky addition to your home bar. This espresso martini illustration with its playful typography is a must-have for your gallery wall or bar cart styling. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7658.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4296551966/champagne-art-print-retro-bubbly-bar",
    "ALT_TEXT": "A chic digital illustration of a woman in a sparkling black evening gown and white opera gloves hugging a giant green champagne bottle. The bottle has a pink foil top with a large pink and white striped bow and a label that reads \"LET'S POP OPEN THE BUBBLY!\" in red text. The background is a soft, textured pale pink.",
    "TAGS": "Champagne Art Print, Cocktail Illustration, Let's Pop Open The Bubbly, Fashion Drink Art, Estelle Designs, Food Drinks and Floral Collection, Bar Cart Decor, Glamorous Home Decor, Celebration Wall Art.",
    "TITLE": "\"The Champagne Celebration\" Art Print | Glamour Bar Cart Decor",
    "PIN_DESC": "Cheers to the good life! 🥂✨ The Champagne Celebration from the Food, Drinks and Floral Collection by Estelle Designs is the ultimate \"pop, clink, fizz\" for your walls. This chic illustration of a glamorous woman with a giant champagne bottle is a must-have for your home bar or gallery wall. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7665.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1890666942/gummy-bears-art-print-retro-kitchen",
    "ALT_TEXT": "A playful digital illustration of seven translucent gummy bears in a rainbow of colors (yellow, orange, pink, light blue, purple, dark blue, and green) arranged on a soft pink textured background. In the bottom right corner, the words \"LOVE YOU BEARY MUCH\" are written in a charming, stamped red font",
    "TAGS": "Gummy Bear Art, Candy Illustration, Love You Beary Much Print, Funny Food Art, Estelle Designs, Food Drinks and Floral Collection, Pastel Nursery Decor, Kids Room Wall Art, Rainbow Candy Poster.",
    "TITLE": "\"Love You Beary Much\" Gummy Bear Art | Sweet & Playful Room Decor",
    "PIN_DESC": "Sweetness overload! 🧸🌈 The Sweetest Sentiment from the Food, Drinks and Floral Collection by Estelle Designs is the perfect way to say \"I love you\" with a side of nostalgia. This colorful gummy bear illustration adds a bright, happy vibe to any nursery or kitchen. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7666.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4295555671/candy-love-hearts-art-print-fuck-it",
    "ALT_TEXT": "A colorful digital illustration of six pastel-colored candy conversation hearts (yellow, purple, pink, green, orange, and blue) scattered on a light mint green background. The hearts are arranged to spell out \"F U C K i T\" in embossed red lettering. The style is soft and textured with a subtle sparkle.",
    "TAGS": "Funny Food Art, Conversation Hearts Illustration, Pastel Candy Wall Art, Edgy Home Decor, Estelle Designs, Food Drinks and Floral Collection, Colorful Dorm Decor, Sassy Art Print, Aesthetic Candy Poster.",
    "TITLE": "\"Sweet Rebellion\" Funny Candy Art | Edgy Pastel Room Decor",
    "PIN_DESC": "Sugar, spice, and a whole lot of \"whatever.\" 🍬✨ Sweet Rebellion from the Food, Drinks and Floral Collection by Estelle Designs is the perfect mix of nostalgic candy aesthetic and bold modern humor. Give your gallery wall an edgy upgrade with this pastel conversation heart print. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7670.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4297344264/pink-floral-bouquet-art-print-girly",
    "ALT_TEXT": "A romantic digital illustration of a large bouquet of peach and pink hydrangeas and poppies arranged in a cream-colored round hat box. The front of the box features a red oval vintage-style logo that says \"AMORE MIO\" in stylized white and pink lettering. The background is a soft, textured cream color.",
    "TAGS": "Floral Art Print, Hydrangea Illustration, Vintage Hat Box Art, Amore Mio Art, Estelle Designs, Food Drinks and Floral Collection, Romantic Wall Decor, Shabby Chic Floral Poster, Peach and Pink Home Decor.",
    "TITLE": "\"Amore Mio\" Vintage Floral Art | Romantic Pink Hydrangea Decor",
    "PIN_DESC": "My love! 🌸✨ Amore Mio from the Food, Drinks and Floral Collection by Estelle Designs is a tribute to classic romance. This chic illustration of a Parisian-style floral hat box is the perfect way to bring a soft, feminine touch to your gallery wall. Perfect for Valentine's Day gifts or coastal cottage interiors. Shop our high-quality Giclée prints and digital downloads.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7664.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1832768772/vintage-cherry-ice-cream-art-print-retro",
    "ALT_TEXT": "A vintage-style digital illustration of a pink scoop of ice cream in a waffle cone, topped with a single red cherry with a small pink bow tied to the stem. The word \"CHERRY\" is written in a bold, arched red collegiate font across the scoop. The phrases \"YOU ARE MY\" and \"ON TOP\" frame the image in a thin red script. The piece is enclosed in a red decorative block border on a pale pink textured background.",
    "TAGS": "Ice Cream Art Print, Cherry on Top Illustration, Food Drinks and Floral Collection, Estelle Designs, Vintage Kitchen Decor, Pink Nursery Wall Art, Retro Dessert Poster, Romantic Food Pun, Cute Gift for Her.",
    "TITLE": "\"Cherry On Top\" Art Print | Retro Ice Cream & Kitchen Decor",
    "PIN_DESC": "The perfect finishing touch! 🍦🍒 The Sweetest Topping from the Food, Drinks and Floral Collection by Estelle Designs is a nostalgic nod to summer treats and sweet sentiments. This vintage-inspired ice cream illustration adds a pop of color and charm to any nursery or café-style kitchen. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7901.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4296492331/vegetable-art-prints-set-home-grown",
    "ALT_TEXT": "A digital illustration triptych of three glass mason jars on a textured cream background. The first jar is filled with brown mushrooms, the second with red onions, and the third with green pea pods. Each jar has a light blue tint and a vintage-style cream label that reads \"HOME GROWN\" in a rustic brown font.",
    "TAGS": "Home Grown Art, Kitchen Wall Decor, Mason Jar Illustration, Botanical Vegetable Art, Estelle Designs, Food Drinks and Floral Collection, Cottagecore Kitchen, Vintage Pantry Art, Mushroom and Onion Print.",
    "TITLE": "\"The Harvest Trio\" Art Print | Rustic Kitchen & Pantry Decor",
    "PIN_DESC": "From the garden to your gallery wall! 🌿🫙 The Harvest Trio from the Food, Drinks and Floral Collection by Estelle Designs celebrates the artisanal beauty of home-grown produce. This vintage-inspired triptych of mason jars is the perfect rustic touch for a farmhouse kitchen or pantry. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7902.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4296492331/vegetable-art-prints-set-home-grown",
    "ALT_TEXT": "A digital illustration triptych of three glass mason jars on a textured cream background. The first jar is filled with brown mushrooms, the second with red onions, and the third with green pea pods. Each jar has a light blue tint and a vintage-style cream label that reads \"HOME GROWN\" in a rustic brown font.",
    "TAGS": "Home Grown Art, Kitchen Wall Decor, Mason Jar Illustration, Botanical Vegetable Art, Estelle Designs, Food Drinks and Floral Collection, Cottagecore Kitchen, Vintage Pantry Art, Mushroom and Onion Print.",
    "TITLE": "\"The Harvest Trio\" Art Print | Rustic Kitchen & Pantry Decor",
    "PIN_DESC": "From the garden to your gallery wall! 🌿🫙 The Harvest Trio from the Food, Drinks and Floral Collection by Estelle Designs celebrates the artisanal beauty of home-grown produce. This vintage-inspired triptych of mason jars is the perfect rustic touch for a farmhouse kitchen or pantry. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Sip, bloom & bite",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7903.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/4296492331/vegetable-art-prints-set-home-grown",
    "ALT_TEXT": "A digital illustration triptych of three glass mason jars on a textured cream background. The first jar is filled with brown mushrooms, the second with red onions, and the third with green pea pods. Each jar has a light blue tint and a vintage-style cream label that reads \"HOME GROWN\" in a rustic brown font.",
    "TAGS": "Home Grown Art, Kitchen Wall Decor, Mason Jar Illustration, Botanical Vegetable Art, Estelle Designs, Food Drinks and Floral Collection, Cottagecore Kitchen, Vintage Pantry Art, Mushroom and Onion Print.",
    "TITLE": "\"The Harvest Trio\" Art Print | Rustic Kitchen & Pantry Decor",
    "PIN_DESC": "From the garden to your gallery wall! 🌿🫙 The Harvest Trio from the Food, Drinks and Floral Collection by Estelle Designs celebrates the artisanal beauty of home-grown produce. This vintage-inspired triptych of mason jars is the perfect rustic touch for a farmhouse kitchen or pantry. Shop our high-quality Giclée prints and digital downloads today!",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7564.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1868899006/retro-waterskiing-art-print-summer-lake",
    "ALT_TEXT": "Retro illustration of a man water skiing on a lake with trees in the background, pastel colors, lake house wall art.",
    "TAGS": "Lake Life, Water Skiing Art, Vintage Summer Decor, Lake House Wall Art, Summer Vacation Prints, Retro Sports Poster, Estelle Designs.",
    "TITLE": "Water Skiing Art Print | Vintage Lake Life Aesthetic",
    "PIN_DESC": "Celebrate the adventurous spirit of summer at the lake. This high-quality art print by Estelle Designs features a dynamic water skiing scene, blending high-energy action with a serene, vintage-inspired color palette. Whether you’re decorating a coastal retreat, a rustic lake house, or looking for the perfect gift for an outdoor enthusiast, The Water Skier offers a cohesive, high-impact aesthetic. Available in various Giclée print sizes or as a convenient digital printable for immediate home styling.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7563.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1886141465/girl-waterskiing-art-print-retro-lake",
    "ALT_TEXT": "Illustration of a girl water skiing and jumping over a wake on a lake, vintage style with pastel tones and soft lighting.",
    "TAGS": "Lake House Wall Art, Water Skiing Illustration, Summer Home Decor, Retro Lake Life, Vintage Coastal Prints, Estelle Designs, Girl Sports Art.",
    "TITLE": "Vintage Lake Life Art | Girl Water Skiing Print",
    "PIN_DESC": "Experience the joy of lake living with The Summer Jump. This vibrant art print by Estelle Designs captures a playful moment of water skiing action, set against a serene, painterly background. Designed with a vintage aesthetic in mind, this piece is ideal for beach houses, lakeside cottages, or any space needing a touch of summer nostalgia. Crafted for a cohesive look, it pairs beautifully with other prints in our Summer Lake Collection. Choose from professional Giclée prints or high-resolution digital files for a custom DIY project.",
    "BEST_SELLER": "",
    "SHORT": "yes"
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7562.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1870271100/little-girl-kneeboarding-art-print-retro",
    "ALT_TEXT": "Illustration of a young girl in sunglasses and a life vest kneeboarding on a lake, with a warm orange and pink sun-drenched background and vintage aesthetic.",
    "TAGS": "Lake House Decor, Kids Lake Art, Kneeboarding Illustration, Summer House Wall Art, Vintage Lake Life, Estelle Designs, Playful Summer Prints.",
    "TITLE": "Retro Lake Life Art | Little Girl Kneeboarding Print",
    "PIN_DESC": "Capture the pure joy of summer with The Little Kneeboarder. This charming art print by Estelle Designs features a playful, high-energy scene of life at the lake, complete with retro sunglasses and sun-soaked autumn-toned trees. Designed with a nostalgic aesthetic, this piece is ideal for vacation homes, beach houses, or as a fun addition to a nursery or kids' space. It pairs perfectly with our other \"Summer Lake\" prints for a cohesive, high-impact visual story. Available in professional Giclée sizes or as a digital download.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7561.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1883700195/wake-girl-art-print-blue-lake-nautical",
    "ALT_TEXT": "Retro-style illustration of a girl wakeboarding and catching air on a lake, featuring soft pastel tones and a vintage summer aesthetic.",
    "TAGS": "Lake House Wall Art, Wakeboarding Art Print, Vintage Summer Aesthetic, Summer House Decor, Lake Life Art, Estelle Designs, Action Sports Illustration.",
    "TITLE": "Retro Wakeboarding Art | Vintage Lake Life Wall Decor",
    "PIN_DESC": "Elevate your summer home decor with The Wakeboard Jump. This high-impact art print by Estelle Designs features a dynamic wakeboarding scene, blending athletic energy with a soft, sun-drenched palette. Whether you’re styling a modern lake house or looking for a unique gift for a water sports lover, this piece offers a unique, high-impact aesthetic. It is designed to work seamlessly as a standalone piece or as part of our \"Summer Lake\" collection set. Choose from various customizable Giclée print sizes or high-resolution digital files.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7560.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1868547926/girl-wakeboarding-art-print-retro-blush",
    "ALT_TEXT": "Illustration of a girl wakeboarding during sunset with golden hour lighting, soft peach and tan tones, vintage lake house aesthetic.",
    "TAGS": "Lake House Wall Art, Sunset Lake Decor, Wakeboarding Illustration, Golden Hour Aesthetic, Summer Vacation Art, Estelle Designs, Vintage Watersports Print.",
    "TITLE": "Golden Hour Wakeboarding Art | Vintage Lake Life Wall Decor",
    "PIN_DESC": "Bring the warmth of a lakeside sunset into your home with Golden Hour Glide. This evocative art print by Estelle Designs features a wakeboarder in motion, highlighted by the soft, hazy light of a summer evening. The painterly style and nostalgic color palette make it a versatile choice for holiday homes, modern nurseries, or living spaces seeking a touch of \"Lake Life\" serenity. This piece is part of our Summer Lake Collection and pairs elegantly with our other water sports illustrations. Choose from professional Giclée sizes or high-resolution digital files.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7559.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1870733472/waterskiing-boy-art-print-retro-summer",
    "ALT_TEXT": "Illustration of a young boy in a life vest water skiing on a lake, smiling and waving with a splash of water, vintage aesthetic with pastel blue and green tones.",
    "TAGS": "Lake House Decor, Kids Summer Art, Water Skiing Illustration, Vintage Lake Life, Summer Cottage Wall Art, Estelle Designs, Nursery Lake Decor.",
    "TITLE": "Vintage Lake Life Art | Little Boy Water Skiing Print",
    "PIN_DESC": "Relive the magic of summer's first adventures with The Young Skier. This charming art print by Estelle Designs features a playful scene of a boy water skiing, set against a soft, sun-drenched lakeside backdrop. Its nostalgic style and bright palette make it an ideal choice for kids' rooms, vacation homes, or any space celebrating life at the lake. Part of our \"Summer Lake\" collection, this piece is designed to work beautifully as a standalone print or as part of a curated set. Available in professional Giclée sizes or high-resolution digital files.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7558.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1883960701/waterskiing-girl-art-print-retro-lake",
    "ALT_TEXT": "Vintage-style illustration of a little girl water skiing on a lake with a soft pink sky and blurred trees in the background, pastel aesthetic.",
    "TAGS": "Pink Lake Art, Nursery Lake Decor, Little Girl Skier, Summer Sunset Art, Vintage Pastel Prints, Estelle Designs, Summer House Wall Decor.",
    "TITLE": "Retro Pink Lake Art | Little Girl Water Skiing Print",
    "PIN_DESC": "Experience the softer side of lake living with Pink Sky Skier. This enchanting art print by Estelle Designs features a young girl gracefully water skiing under a hazy, rose-colored sky. The delicate pastel palette and painterly textures create a serene, vintage atmosphere that complements any coastal or rustic interior. This piece is a standout addition to our Summer Lake Collection, offering a peaceful counterpoint to our more high-energy action prints. Choose from professional Giclée sizes or high-resolution digital files for your next home project.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7557.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1885972535/sunset-wakeboarding-art-print-lake-house",
    "ALT_TEXT": "Illustration of a male slalom water skier carving a deep turn with a large water spray, set against a soft pink sunset and orange-toned trees, vintage aesthetic.",
    "TAGS": "Slalom Skiing Art, Pink Sunset Lake Decor, Vintage Watersports Print, Lake House Wall Art, Summer Cottage Aesthetic, Estelle Designs, Action Sports Illustration.",
    "TITLE": "Slalom Water Skiing Art | Retro Pink Sunset Lake Decor",
    "PIN_DESC": "Celebrate the skill and beauty of life on the water with The Slalom Turn. This dynamic art print by Estelle Designs showcases a water skier carving through the wake under a soft, hazy pink sky. With its vintage-inspired painterly style and vibrant warm tones, it serves as a sophisticated focal piece for any lakeside retreat or coastal-inspired interior. This print is part of our \"Summer Lake\" collection and pairs beautifully with our other watersports illustrations to create a high-impact gallery set. Choose from professional Giclée sizes or high-resolution digital files.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7556.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1871143682/wake-surfing-art-print-nautical-lake",
    "ALT_TEXT": "Vintage-style illustration of a young man surfing on a calm wave, soft pastel green and cream tones with a sun-drenched aesthetic.",
    "TAGS": "Surf Art Print, Coastal Wall Decor, Beach House Aesthetic, Vintage Surfing Poster, Summer Home Art, Estelle Designs, Retro Ocean Illustration.",
    "TITLE": "Retro Surf Art Print | Vintage Coastal Wall Decor",
    "PIN_DESC": "Embrace the spirit of the ocean with The Summer Surfer. This high-quality art print by Estelle Designs features a sun-drenched surfing scene, rendered in a soft, painterly style with nostalgic pastel tones. Perfect for coastal interiors, beach cottages, or modern gallery walls, this piece captures the effortless cool of a summer spent by the sea. Designed to coordinate beautifully with our \"Beach Life\" and \"Lake Life\" collections. Choose from professional Giclée sizes or high-resolution digital files for immediate home styling.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7555.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1885765861/kneeboarding-boy-art-print-retro-lake",
    "ALT_TEXT": "Retro-style illustration of a young boy in a yellow life vest catching air on a kneeboard over a lake wake, soft pastel sky and trees in the background.",
    "TAGS": "Lake House Wall Art, Kneeboarding Art Print, Kids Summer Decor, Vintage Lake Life, Summer House Aesthetic, Estelle Designs, Action Sports Illustration.",
    "TITLE": "Retro Lake Life Art | Boy Kneeboarding Air Print",
    "PIN_DESC": "Celebrate the thrill of summer with The Big Air Jump. This dynamic art print by Estelle Designs captures a moment of pure excitement as a young kneeboarder catches air on the lake. Rendered in a soft, sun-drenched palette with a vintage-inspired aesthetic, this piece is ideal for vacation homes, beach houses, or as a fun focal point in a child's bedroom or playroom. Part of our \"Summer Lake\" collection, it pairs perfectly with our water skiing and wakeboarding prints for a cohesive watersports gallery wall. Choose from professional Giclée sizes or high-resolution digital files.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7554.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1886094183/retro-waterskiing-couple-art-print",
    "ALT_TEXT": "Vintage-style illustration of a man and woman double water skiing together, wearing red swimwear, soft pastel green water and sky, lake house wall art aesthetic.",
    "TAGS": "Double Water Skiing Art, Lake House Wall Decor, Summer Couple Art, Vintage Lake Life, Retro Summer Aesthetic, Estelle Designs, Coastal Living Prints.",
    "TITLE": "Double Water Skiing Art Print | Vintage Lake Life Decor",
    "PIN_DESC": "Celebrate the shared joy of life on the water with The Summer Duo. This high-impact art print by Estelle Designs features a classic double water skiing scene, blending athletic energy with a romantic, vintage-inspired aesthetic. Rendered in a soft, painterly style with pops of bold summer red, this piece serves as a sophisticated focal point for any coastal or rustic interior. Part of our \"Summer Lake\" collection, it pairs beautifully with our individual skier and wakeboarder prints for a complete lakeside story. Choose from professional Giclée sizes or high-resolution digital files.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7553.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1904061911/girl-waterskiing-art-print-retro-lake",
    "ALT_TEXT": "Illustration of a young girl with blonde hair water skiing with one hand raised, smiling joyfully, featuring a soft pink sky and blue water, vintage summer aesthetic.",
    "TAGS": "Lake House Kids Decor, Water Skiing Girl Art, Vintage Summer Wall Art, Little Girl Athlete Illustration, Nursery Lake Life Print, Estelle Designs, Summer Cottage Style.",
    "TITLE": "Joyful Lake Life Art | Little Girl Water Skiing One-Handed",
    "PIN_DESC": "Relive the triumph of a summer at the lake with The One-Handed Skier. This whimsical art print by Estelle Designs features a young girl mastering the waves, set against a soft, painterly background of hazy trees and sun-drenched skies. Its nostalgic aesthetic and bright, airy color palette make it an ideal choice for vacation homes, beach houses, or as an inspiring piece of wall art for a child's space. Part of our \"Summer Lake\" collection, this print celebrates the playful, brave spirit of life on the water. Available in professional Giclée sizes or high-resolution digital files.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7552.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1883924023/girl-waterskiing-art-print-sage-green",
    "ALT_TEXT": "Vintage-style illustration of a girl with long hair water skiing with one hand raised, tan and mint green color palette, sun-drenched lake house wall art.",
    "TAGS": "Lake House Wall Art, Water Skiing Illustration, Summer Cottage Decor, Retro Coastal Prints, Vintage Lake Life, Estelle Designs, Girl Athlete Art.",
    "TITLE": "Vintage Lake House Art | Girl Water Skiing One-Handed Print",
    "PIN_DESC": "Celebrate the elegance of summer with The Lakeside Wave. This charming art print by Estelle Designs features a graceful water skiing scene, blending the energy of movement with a serene, vintage-inspired color palette. The soft lighting and painterly textures make this piece a versatile addition to any coastal home, rustic cabin, or modern child's bedroom. Part of our \"Summer Lake\" collection, it’s designed to create a cohesive and nostalgic visual story when paired with our other watersports prints. Available in professional Giclée sizes or as a high-resolution digital file.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7551.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1869121142/girl-wake-surfing-art-print-trendy-lake",
    "ALT_TEXT": "Vintage-style illustration of a young girl in a yellow striped life vest surfing on a gentle wave, soft mint green water and tan sky aesthetic.",
    "TAGS": "Little Girl Surfing Art, Beach House Kids Decor, Coastal Nursery Wall Art, Vintage Summer Aesthetic, Retro Surf Illustration, Estelle Designs, Summer Cottage Style.",
    "TITLE": "Retro Beach Life Art | Little Girl Surfing Print",
    "PIN_DESC": "Celebrate the magic of the ocean with The Little Surfer. This whimsical art print by Estelle Designs features a playful surfing scene, rendered in a soft, painterly style with nostalgic pastel tones and a cheerful pop of yellow. Whether you’re styling a modern beach house, a coastal nursery, or a shared kids' space, this piece captures the effortless joy of a summer spent by the sea. Designed to coordinate beautifully with our \"Beach Life\" and \"Lake Life\" collections for a cohesive gallery wall. Available in professional Giclée sizes or as a high-resolution digital file.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Waterski",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7550.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1884188401/wakeboarding-art-print-boy-wakeboarder",
    "ALT_TEXT": "Vintage-style illustration of a young man wakeboarding and performing a jump with a board grab, featuring soft green water and a hazy sun-drenched sky.",
    "TAGS": "Wakeboarding Wall Art, Lake House Decor, Action Sports Illustration, Vintage Summer Aesthetic, Retro Lake Life Prints, Estelle Designs, Teen Room Lake Decor.",
    "TITLE": "Retro Wakeboarding Art | Vintage Lake House Action Print",
    "PIN_DESC": "Elevate your home decor with the athletic energy of The Wakeboard Grab. This striking art print by Estelle Designs features a dynamic wakeboarding scene, blending a vintage painterly style with modern action sports. The soft, hazy background and vibrant splashes of water create a nostalgic, sun-soaked atmosphere perfect for lakeside retreats, coastal homes, or active living spaces. Part of our \"Summer Lake\" collection, this piece is designed to bring the excitement of the water indoors. Available in various professional Giclée sizes or as a high-resolution digital file for your next home project.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Paddleboard",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7605.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1884962374/woman-and-dog-paddleboarding-art-print",
    "ALT_TEXT": "A peaceful illustration of a woman in a white swimsuit and wide-brimmed sun hat stand-up paddle boarding on calm water. A small brown dog stands at the front of the board. The scene is bathed in soft pink and orange sunset tones with subtle light bokeh effects in the background.",
    "TAGS": "Paddle Boarding Art, Woman and Dog Illustration, Sunset Ocean Print, Coastal Wall Decor, Estelle Designs, Summer Vacation Poster, Serene Beach Art, Gift for Dog Moms.",
    "TITLE": "Paddle Boarding at Sunset Art Print | Peaceful Dog & Ocean Decor",
    "PIN_DESC": "Just me and my best friend. 🌅🐾 The \"Golden Hour Drift\" print by Estelle Designs is a beautiful tribute to slow summer evenings. Featuring a dreamy pink sunset and a quiet moment on the water, this illustration is the ultimate serene addition to your coastal gallery wall. Perfect for the beach lover’s home! Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Paddleboard",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7613.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1884974072/paddle-board-sunset-art-print-vintage",
    "ALT_TEXT": "A lake illustration of two women seen from behind, wading in calm water next to a white paddle board. They are both wearing sun hats and holding pink cocktails in wine glasses. One woman waves her hand toward the horizon. The entire scene is bathed in soft peach and pink sunset tones with light bokeh effects.",
    "TAGS": "Best Friend Art Print, Summer Vacation Illustration, Cocktail Wall Art, Paddle Boarding Decor, Estelle Designs, Sunset Beach Poster, Chic Travel Art, Gift for Best Friend.",
    "TITLE": "\"Cheers to the Sunset\" Art Print | Chic Best Friend & Summer Decor",
    "PIN_DESC": "Sunset, cocktails, and your best friend—what more do you need? 🥂🌅 The \"Cheers to the Sunset\" print by Estelle Designs is a beautiful tribute to summer memories. Featuring two friends on a calm lake in dreamy peach tones, this illustration is the perfect sentimental piece for your home or a gift for your soul sister. Shop our high-quality Giclée prints and digital downloads today.",
    "BEST_SELLER": "",
    "SHORT": ""
  },
  {
    "CATEGORY": "Paddleboard",
    "IMAGE": "https://ik.imagekit.io/ngoo36zmk/IMG_7609.jpeg?tr=w-1300",
    "ETSY_LINK": "https://estellestephens.etsy.com/uk/listing/1841859078/dog-on-paddleboard-art-print-golden",
    "ALT_TEXT": "A cheerful illustration of a Golden Retriever dog sitting on a white surfboard in calm, light blue water. The dog is wearing a straw sun hat with pink trim and pink heart-shaped sunglasses. The background features soft, textured blue ripples representing the ocean.",
    "TAGS": "Golden Retriever Art Print, Surfing Dog Illustration, Heart Sunglasses Dog Decor, Beach House Wall Art, Estelle Designs, Tropical Pet Art, Pink and Blue Nursery Decor, Gift for Dog Lovers.",
    "TITLE": "\"Surfing Sunshine\" Golden Retriever Art | Tropical Dog & Beach Decor",
    "PIN_DESC": "The ultimate beach day buddy! 🏄‍♂️☀️ The \"Surfing Sunshine\" print by Estelle Designs is a tribute to the joyful spirit of summer. Featuring a Golden Retriever in heart-shaped shades and a sun hat"
 },
       
];

/* ── Config ── */
const SHEET_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSqEPfwqk0ju0h0kXT7IWt9iUoykb6PhJgCPTDNWnmC3zuPTMYbjhG7fzV6dNBs7LZzNeTtysfopkAv/pub?output=csv&gid=';

const SECTIONS = {
  prints:     { gid: '611338961',  urlKey: 'prints',     hasCategories: true  },
  commercial: { gid: '553657743',  urlKey: 'commercial', hasCategories: false },
  ecards:     { gid: '410511174',  urlKey: 'ecards',     hasCategories: false },
  brand:      { gid: '834260665',  urlKey: 'brand',      hasCategories: false },
  custom:     { gid: '1262380022', urlKey: 'custom',     hasCategories: false },
};

const C = {
  category: 'CATEGORY',
  image:    'IMAGE',
  etsy:     'ETSY_LINK',
  alt:      'ALT_TEXT',
  tags:     'TAGS',
  title:    'TITLE',
  pinDesc:  'PIN_DESC',
};

/* ── Helpers ── */
function get(row, key) { return (row[C[key]] || '').trim(); }

function getImage(row) {
  const named = get(row, 'image');
  if (named) return named;
  for (let v of Object.values(row)) {
    const s = (v || '').trim();
    if (s.startsWith('http')) return s;
  }
  return '';
}

function slugify(s)    { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
function itemSlug(row) {
  const t = get(row, 'title');
  if (t) return slugify(t);
  const img = get(row, 'image');
  return slugify(img.split('/').pop().replace(/\.[^.]+$/, '') || 'item');
}
function catSlug(label) { return slugify(label); }

/* ── Per-section store ── */
const sectionData = {};
Object.keys(SECTIONS).forEach(k => {
  sectionData[k] = {
    loaded: false,
    store: {},
    categoryMap: {},
    categoryOrder: [],
    flatRows: [],
    currentCat: null,
  };
});

/* ═══ NAV ═══ */
const burger = document.getElementById('navBurger');
const drawer = document.getElementById('navDrawer');

if (burger && drawer) {
  burger.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  // close drawer when clicking outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-wrap')) {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
    }
  });
}

/* ═══ SCROLL REVEAL ═══ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

function observeReveals(root = document) {
  root.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs.observe(el));
}

/* ═══ IMAGE FADE-IN (prevent flicker) ═══ */
function fadeImages(container) {
  container.querySelectorAll('img').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
    }
  });
}

/* ═══ META ═══ */
function setMeta(attr, key, val) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attr, key); document.head.appendChild(tag); }
  tag.setAttribute('content', val);
}

function injectItemMeta(row, slug, sectionKey) {
  const base  = window.location.origin + window.location.pathname;
  const url   = base + '?item=' + sectionKey + '/' + slug;
  const image = getImage(row);
  const title = get(row, 'title')   || 'Estelle Stephens';
  const desc  = get(row, 'pinDesc') || title;
  document.title = title + ' — Estelle Stephens';
  setMeta('name',     'description',         desc);
  setMeta('property', 'og:url',              url);
  setMeta('property', 'og:title',            title);
  setMeta('property', 'og:description',      desc);
  setMeta('property', 'og:image',            image);
  setMeta('name',     'twitter:title',       title);
  setMeta('name',     'twitter:description', desc);
  setMeta('name',     'twitter:image',       image);
}

function resetMeta(defaultTitle) {
  document.title = defaultTitle || 'Estelle Stephens — Illustrator & Designer';
}

/* ═══ ITEM OVERLAY (slide-up, no scroll reset) ═══ */
let _scrollY = 0;  // save gallery scroll before opening
let _openItemSection = null;
let _openItemSlug    = null;

const overlay         = document.getElementById('itemOverlay');
const overlayBackdrop = document.getElementById('itemOverlayBackdrop');
const itemBack        = document.getElementById('itemBack');
const itemContent     = document.getElementById('itemContent');

function openItem(sectionKey, slug) {
  const row = sectionData[sectionKey]?.store[slug];
  if (!row) return;

  _openItemSection = sectionKey;
  _openItemSlug    = slug;
  _scrollY = window.scrollY;

  renderItemPage(sectionKey, row, slug);
  injectItemMeta(row, slug, sectionKey);

  // history
  const base = window.location.href.split('?')[0];
  history.pushState({ item: sectionKey + '/' + slug }, '', base + '?item=' + sectionKey + '/' + slug);

  // slide up
  overlay.scrollTop = 0;
  overlay.classList.add('open');
  if (overlayBackdrop) overlayBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  observeReveals(overlay);
  fadeImages(overlay);
}

function closeItem() {
  overlay.classList.remove('open');
  if (overlayBackdrop) overlayBackdrop.classList.remove('open');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';

  resetMeta(window._pageDefaultTitle);

  // restore scroll position exactly — no jump
  requestAnimationFrame(() => {
    window.scrollTo({ top: _scrollY, behavior: 'instant' });
  });

  // clean URL
  const base = window.location.href.split('?')[0];
  history.pushState({}, '', base);

  _openItemSection = null;
  _openItemSlug    = null;
}

if (itemBack) {
  itemBack.addEventListener('click', closeItem);
}
if (overlayBackdrop) {
  overlayBackdrop.addEventListener('click', closeItem);
}

// Back button / browser history
window.addEventListener('popstate', e => {
  if (overlay && overlay.classList.contains('open')) {
    closeItem();
  }
});

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay && overlay.classList.contains('open')) closeItem();
});

/* ═══ ITEM DETAIL RENDERER ═══ */
function renderItemPage(sectionKey, row, slug) {
  if (!itemContent) return;
  const imgUrl     = getImage(row);
  const alt        = get(row, 'alt')      || 'Artwork';
  const title      = get(row, 'title')    || 'Item';
  const pinDesc    = get(row, 'pinDesc') || '';
  const etsyUrl    = get(row, 'etsy')     || '#';
  const tagsRaw    = get(row, 'tags');
  const catLabel   = row._catLabel || '';

  const tagsHtml = tagsRaw
    ? tagsRaw.split(',').map(t => `<span class="item-tag">${t.trim()}</span>`).join('')
    : '';

  const itemPageUrl = window.location.origin + window.location.pathname + '?item=' + sectionKey + '/' + slug;
  
  // Remove the useless '&title=' and cleanly format the description
  const formattedDesc = pinDesc ? `${title} | ${pinDesc}` : title;

  // FIX: Force encode single quotes to '%27' so they don't break the inline onclick JavaScript
  const pinSaveUrl  = 'https://www.pinterest.com/pin/create/button/'
    + '?url='         + encodeURIComponent(itemPageUrl).replace(/'/g, '%27')
    + '&media='       + encodeURIComponent(imgUrl).replace(/'/g, '%27')
    + '&description=' + encodeURIComponent(formattedDesc).replace(/'/g, '%27');

  itemContent.innerHTML = `
    <div class="item-layout">
      <div class="item-image-wrap">
        <img src="${imgUrl}" alt="${alt}"
             data-pin-url="${itemPageUrl}"
             data-pin-media="${imgUrl}"
             data-pin-description="${pinDesc}"
             data-pin-title="${title}" loading="eager">
      </div>
      <div class="item-info">
        ${catLabel ? `<p class="item-collection-label">${catLabel}</p>` : ''}
        <h2 class="item-title">${title}</h2>
        ${pinDesc ? `<p class="item-description">${pinDesc}</p>` : ''}
        ${tagsHtml ? `<div class="item-tags">${tagsHtml}</div>` : ''}
        <hr class="item-divider">
        <div class="item-actions">
          ${etsyUrl !== '#' ? `
          <a href="${etsyUrl}" class="item-btn-etsy" target="_blank" rel="noopener">
            <i class="fa-brands fa-etsy"></i> Shop on Etsy
          </a>` : ''}
          <button onclick="window.open('${pinSaveUrl}','Pinterest','width=600,height=700');return false;" class="item-btn-pin">
            <i class="fa-brands fa-pinterest"></i> Save to Pinterest
          </button>
        </div>
      </div>
    </div>
  `;
  if (window.PinUtils) window.PinUtils.build();
}

/* ═══ DATA LOADER ═══ */
const skeletonsHtml = Array(8).fill('<div class="skel-item" aria-hidden="true"></div>').join('');

function loadSection(sectionKey, gridId, tabsId, onReady) {
  const sec  = SECTIONS[sectionKey];
  const grid = document.getElementById(gridId);
  if (grid) grid.innerHTML = skeletonsHtml;

  // Render static data if looking at the prints section
  if (sectionKey === 'prints') {
    // Small timeout to mimic async flow and let the DOM settle
    setTimeout(() => {
      parseData(sectionKey, PRINTS_DATA);
      if (sec.hasCategories && tabsId) renderTabs(sectionKey, tabsId, gridId);
      if (onReady) onReady();
    }, 50);
    return;
  }

  // Generate a unique timestamp to bypass the browser cache for other sections
  const cacheBuster = '&_cb=' + new Date().getTime();

  // Append the cache buster to the end of the request URL
  Papa.parse(SHEET_BASE + sec.gid + cacheBuster, {
    download: true, 
    header: true, 
    skipEmptyLines: true,
    complete: r => {
      parseData(sectionKey, r.data);
      if (sec.hasCategories && tabsId) renderTabs(sectionKey, tabsId, gridId);
      if (onReady) onReady();
    },
    error: () => {
      if (grid) grid.innerHTML = '<p style="padding:40px;color:var(--ink-soft);grid-column:1/-1">Gallery unavailable. Please try again later.</p>';
    }
  });
}

function parseData(sectionKey, rows) {
  const sec = SECTIONS[sectionKey];
  const sd  = sectionData[sectionKey];
  sd.categoryOrder = [];
  sd.categoryMap   = {};
  sd.flatRows      = [];
  sd.store         = {};

  rows.forEach(row => {
    const img = getImage(row);
    if (!img) return;
    const ps = itemSlug(row);
    row._slug    = ps;
    row._section = sectionKey;

    if (sec.hasCategories) {
      const cat = get(row, 'category');
      if (!cat) return;
      const cs = catSlug(cat);
      row._catSlug  = cs;
      row._catLabel = cat;
      sd.store[ps]  = row;
      if (!sd.categoryMap[cs]) {
        sd.categoryMap[cs] = { label: cat, rows: [] };
        sd.categoryOrder.push(cs);
      }
      sd.categoryMap[cs].rows.push(row);
    } else {
      row._catSlug  = '';
      row._catLabel = '';
      sd.store[ps]  = row;
      sd.flatRows.push(row);
    }
  });
  sd.loaded = true;
}

/* Build category tabs (prints only) */
function renderTabs(sectionKey, tabsId, gridId) {
  const sd     = sectionData[sectionKey];
  const tabsEl = document.getElementById(tabsId);
  if (!tabsEl) return;
  tabsEl.innerHTML = '';

  sd.categoryOrder.forEach(cs => {
    const { label } = sd.categoryMap[cs];
    const btn = document.createElement('button');
    btn.className = 'gallery-tab';
    btn.dataset.catSlug = cs;
    btn.textContent = label;
    btn.addEventListener('click', () => switchTab(sectionKey, cs, tabsId, gridId));
    tabsEl.appendChild(btn);
  });
}

function switchTab(sectionKey, cs, tabsId, gridId) {
  const sd = sectionData[sectionKey];
  sd.currentCat = cs;

  const tabsEl = document.getElementById(tabsId);
  if (tabsEl) {
    tabsEl.querySelectorAll('.gallery-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.catSlug === cs);
    });
  }
  buildGallery(sectionKey, sd.categoryMap[cs]?.rows || [], gridId);
}

/* Build gallery grid */
function buildGallery(sectionKey, rows, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = '';

  if (!rows.length) {
    grid.innerHTML = '<p style="padding:40px;color:var(--ink-soft);grid-column:1/-1">No items in this collection yet.</p>';
    return;
  }

  // 1. Separate normal rows from "SHORT" rows
  const normalRows = [];
  const shortRows = [];
  
  rows.forEach(row => {
    const isShort = (row['SHORT'] || '').trim().toLowerCase() === 'yes';
    if (isShort) {
      shortRows.push(row);
    } else {
      normalRows.push(row);
    }
  });

  // Helper function to render a batch of items
  let globalIndex = 0; 
  const renderItems = (items) => {
    items.forEach((row) => {
      const slug         = row._slug;
      const imgUrl       = getImage(row);
      const alt          = get(row, 'alt')      || 'Artwork';
      const etsyUrl      = get(row, 'etsy')     || '#';
      const title        = get(row, 'title')    || 'Item';
      const pinDesc      = get(row, 'pinDesc')  || '';
      const isBestSeller = (row['BEST_SELLER'] || '').trim().toLowerCase() === 'yes';
      const itemPageUrl  = window.location.origin + window.location.pathname + '?item=' + sectionKey + '/' + slug;

      // Keep reveal timing consistent across both groups
      const delayClass = globalIndex % 4 !== 0 ? ` reveal-d${Math.min(globalIndex % 4, 4)}` : '';
      const item = document.createElement('article');
      item.className = 'gallery-item reveal' + delayClass;
      item.setAttribute('role', 'listitem');

      item.innerHTML = `
        <img src="${imgUrl}" alt="${alt}"
             data-pin-url="${itemPageUrl}"
             data-pin-media="${imgUrl}"
             data-pin-description="${pinDesc}"
             data-pin-title="${title}" loading="lazy">
        ${isBestSeller ? `<img src="https://ik.imagekit.io/ngoo36zmk/IMG_7886.gif" alt="Best Seller" class="best-seller-badge" aria-label="Best Seller">` : ''}
        <div class="gallery-overlay" aria-hidden="true">
          <div class="gallery-overlay-links">
            ${etsyUrl !== '#' ? `<a href="${etsyUrl}" class="ov-link etsy" target="_blank" rel="noopener" tabindex="-1">
              <i class="fa-brands fa-etsy"></i> Etsy
            </a>` : ''}
            <span class="ov-link pin" tabindex="-1">
              <i class="fa-brands fa-pinterest"></i> Pin
            </span>
          </div>
        </div>
      `;

      item.addEventListener('click', e => {
        if (e.target.closest('.ov-link.etsy')) return;
        e.preventDefault();
        openItem(sectionKey, slug);
      });

      grid.appendChild(item);
      globalIndex++;
    });
  };

  // 2. Render normal items first
  renderItems(normalRows);

  // 3. Force a new line in the CSS Grid before rendering short items
  if (normalRows.length > 0 && shortRows.length > 0) {
    const breakEl = document.createElement('div');
    // grid-column: 1 / -1 forces the element to span the entire width of the grid
    breakEl.style.gridColumn = '1 / -1'; 
    breakEl.className = 'gallery-short-divider'; // Optional: target in CSS if you want spacing
    grid.appendChild(breakEl);
  }

  // 4. Render the "SHORT" items grouped together
  renderItems(shortRows);

  observeReveals(grid);
  fadeImages(grid);
  if (window.PinUtils) window.PinUtils.build();
}

/* ═══ AUTO-INIT ON DOM READY ═══ */
window.addEventListener('DOMContentLoaded', () => {
  observeReveals();

  // hide loader
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      // brief delay so fonts don't flash
      setTimeout(() => loader.classList.add('gone'), 120);
    });
    // fallback: if load already fired
    if (document.readyState === 'complete') {
      setTimeout(() => loader.classList.add('gone'), 120);
    }
  }
});

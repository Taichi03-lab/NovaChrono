# NovaChrono — Watch Store Website

A school-project, frontend-only luxury watch-store concept built with **HTML, CSS, and JavaScript**. It runs offline after you download the folder and can be published with **GitHub Pages**.

## Pages
- `index.html` — Home
- `about.html` — business background, mission, vision, eight team placeholders
- `products.html` — 16 fictional original watches, categories, search, sorting, Quick View, Add to Cart
- `gallery.html` — product gallery and image preview
- `contact.html` — email, Facebook, Instagram sample contact information (not live links)

## Features
- Luxury black-and-gold responsive theme
- Animated homepage, product hover interactions, scroll reveals
- Working shopping cart with quantity adjustment and localStorage persistence
- Demo checkout including contact fields, order summary, shipping fees, demo payment choices, and simulated order number
- **No database, real payment processing, emails, or orders are created.** Checkout information is not transmitted or stored.
- All assets are local so the site works offline

## Run locally
1. Extract the ZIP file.
2. Open the `NovaChrono` folder in VS Code.
3. Open `index.html` in your browser, or use the VS Code **Live Server** extension.
4. Use the top navigation to explore the five pages.

## Publish to GitHub Pages
1. Create a public GitHub repository, such as `novachrono`.
2. Upload the **contents** of the NovaChrono folder to the repository root (especially `index.html`).
3. Go to repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**. Set branch to `main` and folder to `/ (root)`.
5. Save and use the link GitHub Pages displays after publishing.

## Customize
- **Team members:** `about.html` → find each `Member 1` … `Member 8` and replace the names and profile placeholder blocks with your group photos.
- **Contact details:** `contact.html` and the footer contact section inside `js/app.js`.
- **Watch data and prices:** `js/app.js` → edit the `WATCHES` array.
- **Product artwork:** replace a corresponding file in `assets/watches/`, or change `productImage()` in `js/app.js` if switching to `.png` or `.jpg`.
- **Colors:** `css/style.css` → change the CSS variables under `:root`.

## Image note
The supplied 16 watch images are **original computer-generated SVG illustrations** rather than photorealistic AI product photography. They are bundled as attractive, editable local placeholders for the fictional products and can be swapped for individually generated AI photos later.

## Demo safety
No card-number fields are collected, and the site never charges real money or submits real orders. Business contact details and all model specifications are examples for an educational concept.

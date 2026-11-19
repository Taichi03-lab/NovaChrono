'use strict';

// PRODUCT COLLECTION

const WATCHES = [
    {
        id: 'aurelian',
        name: 'Aurelian',
        category: 'Luxury',
        price: 29999,
        tagline: 'The art of timeless distinction.',
        description: 'A radiant gold-tone statement watch crafted for unforgettable occasions.',
        case: 'Gold-tone stainless steel',
        strap: 'Polished link bracelet',
        movement: 'Precision quartz',
        water: '5 ATM'
    },
    {
        id: 'eclipse',
        name: 'Eclipse',
        category: 'Luxury',
        price: 24999,
        tagline: 'Bold elegance after dark.',
        description: 'A sleek silver-on-midnight timepiece with a refined and striking presence.',
        case: 'Brushed stainless steel',
        strap: 'Metal link bracelet',
        movement: 'Precision quartz',
        water: '5 ATM'
    },
    {
        id: 'sovereign',
        name: 'Sovereign',
        category: 'Luxury',
        price: 19999,
        tagline: 'Command every second.',
        description: 'A royal-inspired timepiece featuring rich tones and an iconic profile.',
        case: 'Gold-tone stainless steel',
        strap: 'Polished link bracelet',
        movement: 'Precision quartz',
        water: '5 ATM'
    },
    {
        id: 'obsidian',
        name: 'Obsidian',
        category: 'Luxury',
        price: 14999,
        tagline: 'Designed to stand apart.',
        description: 'Dark, dramatic and understated luxury for those who set their own pace.',
        case: 'Stainless steel',
        strap: 'Metal link bracelet',
        movement: 'Precision quartz',
        water: '5 ATM'
    },
    {
        id: 'heritage',
        name: 'Heritage',
        category: 'Classic',
        price: 12999,
        tagline: 'Tradition in every detail.',
        description: 'A vintage-inspired watch with a warm dial and classic leather finishing.',
        case: 'Gold-tone stainless steel',
        strap: 'Genuine-look leather',
        movement: 'Precision quartz',
        water: '3 ATM'
    },
    {
        id: 'meridian',
        name: 'Meridian',
        category: 'Classic',
        price: 9999,
        tagline: 'Classic by nature.',
        description: 'Clean silver detailing and a timeless silhouette, made for every occasion.',
        case: 'Stainless steel',
        strap: 'Leather-look strap',
        movement: 'Precision quartz',
        water: '3 ATM'
    },
    {
        id: 'regent',
        name: 'Regent',
        category: 'Classic',
        price: 7999,
        tagline: 'Understated sophistication.',
        description: 'A traditional dress watch combining a refined dial with everyday comfort.',
        case: 'Gold-tone stainless steel',
        strap: 'Leather-look strap',
        movement: 'Precision quartz',
        water: '3 ATM'
    },
    {
        id: 'legacy',
        name: 'Legacy',
        category: 'Classic',
        price: 4999,
        tagline: 'Made to be remembered.',
        description: 'Vintage character and polished details in a versatile formal watch.',
        case: 'Stainless steel',
        strap: 'Leather-look strap',
        movement: 'Precision quartz',
        water: '3 ATM'
    },
    {
        id: 'solis',
        name: 'Solis',
        category: 'Minimalist',
        price: 3999,
        tagline: 'Light. Refined. Essential.',
        description: 'A luminous dial and simple form that complement a modern wardrobe.',
        case: 'Gold-tone alloy',
        strap: 'Fine mesh bracelet',
        movement: 'Quartz',
        water: '3 ATM'
    },
    {
        id: 'linea',
        name: 'Linea',
        category: 'Minimalist',
        price: 3299,
        tagline: 'Everything you need. Nothing more.',
        description: 'An elegant clean-face timepiece with a minimalist silhouette.',
        case: 'Stainless steel',
        strap: 'Fine mesh bracelet',
        movement: 'Quartz',
        water: '3 ATM'
    },
    {
        id: 'halo',
        name: 'Halo',
        category: 'Minimalist',
        price: 2699,
        tagline: 'Effortless style, every day.',
        description: 'Soft neutrals and a slim watch face designed for quiet confidence.',
        case: 'Gold-tone alloy',
        strap: 'Leather-look strap',
        movement: 'Quartz',
        water: '3 ATM'
    },
    {
        id: 'monochrome',
        name: 'Monochrome',
        category: 'Minimalist',
        price: 1499,
        tagline: 'Simply iconic.',
        description: 'A black-and-silver essential with a no-fuss contemporary finish.',
        case: 'Stainless-look alloy',
        strap: 'Fine mesh bracelet',
        movement: 'Quartz',
        water: '3 ATM'
    },
    {
        id: 'velocity',
        name: 'Velocity',
        category: 'Sport',
        price: 7999,
        tagline: 'Move beyond the ordinary.',
        description: 'Dynamic chronograph-inspired styling for an active lifestyle.',
        case: 'Sport stainless steel',
        strap: 'Flexible rubber',
        movement: 'Precision quartz',
        water: '10 ATM'
    },
    {
        id: 'stratos',
        name: 'Stratos',
        category: 'Sport',
        price: 6499,
        tagline: 'Built to go further.',
        description: 'A bold performance-inspired watch with a vibrant midnight-blue character.',
        case: 'Stainless steel',
        strap: 'Flexible rubber',
        movement: 'Precision quartz',
        water: '10 ATM'
    },
    {
        id: 'apex',
        name: 'Apex',
        category: 'Sport',
        price: 4999,
        tagline: 'Peak performance styling.',
        description: 'Confident lines and rugged design for every day of adventure.',
        case: 'Sport stainless steel',
        strap: 'Flexible rubber',
        movement: 'Quartz',
        water: '5 ATM'
    },
    {
        id: 'pulse',
        name: 'Pulse',
        category: 'Sport',
        price: 2999,
        tagline: 'Own your rhythm.',
        description: 'A comfortable, sporty everyday watch with versatile modern details.',
        case: 'Stainless-look alloy',
        strap: 'Flexible rubber',
        movement: 'Quartz',
        water: '5 ATM'
    }
];

// SVG ICONS

const icon = (name) => {

    const icons = {
        bag: '<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
        menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
        search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
        arrow: '<path d="M4 12h16m-7-7 7 7-7 7"/>',
        check: '<circle cx="12" cy="12" r="10"/><path d="m7 12 3 3 7-7"/>',
        star: '<path d="m12 2 2.5 7L22 12l-7.5 3L12 22l-2.5-7L2 12l7.5-3L12 2Z"/>',
        shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
        truck: '<path d="M3 5h12v11H3zM15 9h4l3 4v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
        mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>',
        facebook: '<path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7h3V3Z"/>',
        instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1"/>',
        user: '<circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0 1 16 0v2"/>'
    };

    return `
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round"
             aria-hidden="true">

            ${icons[name] || icons.star}

        </svg>
    `;
};

// GENERAL FUNCTIONS

const money = amount =>
    new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        maximumFractionDigits: 0
    }).format(amount);

const byId = id => document.getElementById(id);

const productImage = watch =>
    `assets/watches/${watch.id}.svg`;

const shopPage = document.body.dataset.page || 'home';

const productById = id =>
    WATCHES.find(w => w.id === id);

const STORAGE_KEY = 'novachrono_demo_cart_v1';

let cart = loadCart();
let activeModal = null;
let toastTimeout;

// LOCAL STORAGE

function loadCart() {

    try {

        const saved = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || '{}'
        );

        if (!saved ||
            typeof saved !== 'object' ||
            Array.isArray(saved)) {

            return {};
        }

        const clean = {};

        WATCHES.forEach(w => {

            const quantity = Number(saved[w.id]);

            if (Number.isInteger(quantity) && quantity > 0) {

                clean[w.id] = Math.min(quantity, 20);

            }

        });

        return clean;

    } catch {

        return {};

    }
}

function saveCart() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(cart)
        );

    } catch {

    }
}

const cartItems = () =>
    WATCHES.filter(w => cart[w.id])
        .map(w => ({
            ...w,
            quantity: cart[w.id]
        }));

const subtotal = () =>
    cartItems().reduce(
        (sum, w) => sum + w.price * w.quantity,
        0
    );

const shipping = () =>
    subtotal() === 0 || subtotal() >= 5000 ? 0 : 199;

const itemCount = () =>
    Object.values(cart).reduce(
        (sum, n) => sum + n,
        0
    );

// NAVIGATION BAR

function renderHeader() {

    const header = byId('site-header');

    if (!header) return;

    const links = [
        ['home', 'index.html', 'Home'],
        ['about', 'about.html', 'About Us'],
        ['products', 'products.html', 'Products'],
        ['gallery', 'gallery.html', 'Gallery'],
        ['contact', 'contact.html', 'Contact Us']
    ];

    header.innerHTML = `

        <div class="container nav-shell">

            <a class="brand" href="index.html"
               aria-label="NovaChrono home">

                <img src="assets/logo.svg" alt="">

                <span>

                    <span class="brand-text">
                        Nova<span>Chrono</span>
                    </span>

                    <span class="brand-mini">
                        Exceptional Timepieces
                    </span>

                </span>

            </a>

            <nav id="nav-links"
                 class="nav-links"
                 aria-label="Main navigation">

                ${links.map(([page, url, label]) => `

                    <a href="${url}"
                       class="${page === shopPage ? 'active' : ''}"
                       ${page === shopPage ? 'aria-current="page"' : ''}>

                        ${label}

                    </a>

                `).join('')}

            </nav>

            <div class="header-actions">

                <button class="icon-button"
                        id="open-cart"
                        type="button"
                        aria-label="Open shopping cart">

                    ${icon('bag')}

                    <span class="cart-count" id="cart-count">
                        0
                    </span>

                </button>

                <button class="icon-button menu-button"
                        type="button"
                        id="menu-toggle"
                        aria-label="Toggle navigation"
                        aria-expanded="false"
                        aria-controls="nav-links">

                    ${icon('menu')}

                </button>

            </div>

        </div>
    `;

    byId('open-cart').addEventListener(
        'click', openCart
    );

    byId('menu-toggle').addEventListener('click', () => {

        const open = byId('nav-links')
            .classList.toggle('open');

        byId('menu-toggle').setAttribute(
            'aria-expanded',
            String(open)
        );

    });

    updateBadge();
}

// FOOTER

function renderFooter() {

    const el = byId('site-footer');

    if (!el) return;

    el.innerHTML = `

        <div class="container footer-grid">

            <div class="footer-brand">

                <a class="brand" href="index.html">

                    <img src="assets/logo.svg" alt="">

                    <span>

                        <span class="brand-text">
                            Nova<span>Chrono</span>
                        </span>

                        <span class="brand-mini">
                            Exceptional Timepieces
                        </span>

                    </span>

                </a>

                <p>
                    A concept watch brand where timeless elegance
                    meets modern character. Every moment
                    deserves to be extraordinary.
                </p>

            </div>

            <div>

                <h3 class="footer-title">Explore</h3>

                <div class="footer-links">

                    <a href="index.html">Home</a>
                    <a href="products.html">Our Watches</a>
                    <a href="gallery.html">Gallery</a>

                </div>

            </div>

            <div>

                <h3 class="footer-title">Company</h3>

                <div class="footer-links">

                    <a href="about.html">About Us</a>
                    <a href="about.html#team">Our Team</a>
                    <a href="contact.html">Contact Us</a>

                </div>

            </div>

            <div>

                <h3 class="footer-title">Connect</h3>

                <div class="footer-links">

                    <span>Email: contact@novachrono.example</span>
                    <span>Facebook: NovaChrono Official</span>
                    <span>Instagram: @novachrono</span>

                </div>

            </div>

        </div>

        <div class="container footer-bottom">

            <span>
                © ${new Date().getFullYear()} NovaChrono.
                All rights reserved.
            </span>

            <span>
                Product showcase · No actual purchases · Illustrative contact details
            </span>

        </div>
    `;
}

// SHOPPING CART AND MODALS

function renderShell() {

    const overlay = document.createElement('div');

    overlay.className = 'backdrop';
    overlay.id = 'backdrop';

    overlay.addEventListener('click', closeOverlay);

    document.body.appendChild(overlay);

    const drawer = document.createElement('aside');

    drawer.className = 'drawer';
    drawer.id = 'cart-drawer';

    drawer.setAttribute(
        'aria-label',
        'Shopping cart'
    );

    drawer.innerHTML = `

        <div class="drawer-header">

            <h2>Your Cart</h2>

            <button class="close-button"
                    type="button"
                    aria-label="Close cart"
                    id="close-cart">

                ×

            </button>

        </div>

        <div class="cart-list" id="cart-list"></div>

        <div class="drawer-bottom">

            <div class="drawer-total">

                <span>Subtotal</span>

                <strong id="cart-subtotal">₱0</strong>

            </div>

            <button class="btn btn-primary"
                    id="go-checkout"
                    type="button">

                Proceed to Checkout ${icon('arrow')}

            </button>

        </div>
    `;

    document.body.appendChild(drawer);

    byId('close-cart').addEventListener(
        'click', closeOverlay
    );

    byId('go-checkout').addEventListener(
        'click', openCheckout
    );

    const detail = document.createElement('div');

    detail.id = 'detail-modal';
    detail.className = 'modal';

    detail.setAttribute('role', 'dialog');
    detail.setAttribute('aria-modal', 'true');
    detail.setAttribute('aria-label', 'Watch details');

    document.body.appendChild(detail);

    const checkout = document.createElement('div');

    checkout.id = 'checkout-modal';
    checkout.className = 'modal checkout-modal';

    checkout.setAttribute('role', 'dialog');
    checkout.setAttribute('aria-modal', 'true');
    checkout.setAttribute('aria-label', 'Checkout');

    document.body.appendChild(checkout);

    const gallery = document.createElement('div');

    gallery.id = 'gallery-modal';
    gallery.className = 'modal gallery-modal';

    gallery.setAttribute('role', 'dialog');
    gallery.setAttribute('aria-modal', 'true');
    gallery.setAttribute('aria-label', 'Gallery image');

    document.body.appendChild(gallery);

    const toast = document.createElement('div');

    toast.id = 'toast';
    toast.className = 'toast';

    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    document.body.appendChild(toast);

    document.addEventListener('keydown', e => {

        if (e.key === 'Escape') {

            closeOverlay();

        }

    });

    renderCart();
}

// CART FUNCTIONS

function updateBadge() {

    const el = byId('cart-count');

    if (el) {

        el.textContent = itemCount();

    }
}

function notify(message) {

    const el = byId('toast');

    if (!el) return;

    clearTimeout(toastTimeout);

    el.textContent = message;

    el.classList.add('visible');

    toastTimeout = setTimeout(() => {

        el.classList.remove('visible');

    }, 2700);
}

function addToCart(id) {

    const w = productById(id);

    if (!w) return;

    cart[id] = Math.min(
        (cart[id] || 0) + 1,
        20
    );

    saveCart();
    updateBadge();
    renderCart();

    notify(`${w.name} added to your cart`);
}

function changeQuantity(id, change) {

    cart[id] = Math.max(
        0,
        Math.min(20, (cart[id] || 0) + change)
    );

    if (!cart[id]) {

        delete cart[id];

    }

    saveCart();
    updateBadge();
    renderCart();
}

function removeItem(id) {

    delete cart[id];

    saveCart();
    updateBadge();
    renderCart();
}

function renderCart() {

    const list = byId('cart-list');

    if (!list) return;

    const items = cartItems();

    list.innerHTML = items.length ?

        items.map(w => `

            <div class="cart-item">

                <img src="${productImage(w)}"
                     alt="${w.name} watch">

                <div>

                    <div class="cart-item-name">

                        NovaChrono ${w.name}

                    </div>

                    <div class="cart-item-price">

                        ${money(w.price)}

                    </div>

                    <div class="cart-qty">

                        <button class="qty-btn"
                                type="button"
                                data-qty="-1"
                                data-id="${w.id}"
                                aria-label="Decrease quantity of ${w.name}">

                            −

                        </button>

                        <span class="qty-num">

                            ${w.quantity}

                        </span>

                        <button class="qty-btn"
                                type="button"
                                data-qty="1"
                                data-id="${w.id}"
                                aria-label="Increase quantity of ${w.name}">

                            +

                        </button>

                        <button class="remove-btn"
                                data-remove="${w.id}"
                                type="button">

                            Remove

                        </button>

                    </div>

                </div>

            </div>

        `).join('') :

        `

            <div class="cart-empty">

                ${icon('bag')}

                <h3>Your cart is empty</h3>

                <p>
                    Add a watch from our collection
                    to get started.
                </p>

                <a href="products.html"
                   class="btn btn-outline"
                   style="margin-top:10px">

                    Explore Watches

                </a>

            </div>
        `;

    byId('cart-subtotal').textContent =
        money(subtotal());

    byId('go-checkout').disabled =
        !items.length;

    list.querySelectorAll('[data-qty]').forEach(b => {

        b.addEventListener('click', () => {

            changeQuantity(
                b.dataset.id,
                Number(b.dataset.qty)
            );

        });

    });

    list.querySelectorAll('[data-remove]').forEach(b => {

        b.addEventListener('click', () => {

            removeItem(b.dataset.remove);

        });

    });
}

// OVERLAY FUNCTIONS

function showOverlay(element) {

    closeOverlay();

    activeModal = element;

    element.classList.add('visible');

    byId('backdrop').classList.add('visible');

    document.body.classList.add('drawer-open');

    const close = element.querySelector('button');

    if (close) {

        close.focus();

    }
}

function closeOverlay() {

    [
        'cart-drawer',
        'detail-modal',
        'checkout-modal',
        'gallery-modal'

    ].forEach(id => {

        const el = byId(id);

        if (el) {

            el.classList.remove('visible');

        }

    });

    const bg = byId('backdrop');

    if (bg) {

        bg.classList.remove('visible');

    }

    document.body.classList.remove('drawer-open');

    activeModal = null;
}

function openCart() {

    renderCart();

    showOverlay(byId('cart-drawer'));
}

// PRODUCT CARDS

function productCard(w) {

    return `

        <article class="product-card">

            <div class="product-media">

                <img src="${productImage(w)}"
                     alt="NovaChrono ${w.name} watch"
                     class="product-image"
                     loading="lazy">

                <span class="product-badge">

                    ${w.category}

                </span>

                <button class="view-button"
                        type="button"
                        data-view="${w.id}">

                    Quick View

                </button>

            </div>

            <div class="product-info">

                <span class="product-category">

                    NovaChrono · ${w.category}

                </span>

                <h3 class="product-title">

                    ${w.name}

                </h3>

                <p class="product-desc">

                    ${w.tagline}

                </p>

                <div class="product-bottom">

                    <span class="product-price">

                        ${money(w.price)}

                    </span>

                    <button type="button"
                            class="add-button"
                            aria-label="Add ${w.name} to cart"
                            data-add="${w.id}">

                        ${icon('bag')}

                    </button>

                </div>

            </div>

        </article>
    `;
}

function bindCards(parent) {

    parent.querySelectorAll('[data-add]').forEach(el => {

        el.addEventListener('click', () => {

            addToCart(el.dataset.add);

        });

    });

    parent.querySelectorAll('[data-view]').forEach(el => {

        el.addEventListener('click', () => {

            openDetails(el.dataset.view);

        });

    });
}

// PRODUCT DETAILS

function openDetails(id) {

    const w = productById(id);

    if (!w) return;

    const modal = byId('detail-modal');

    modal.innerHTML = `

        <button class="modal-close"
                type="button"
                aria-label="Close watch details">

            ×

        </button>

        <div class="detail-layout">

            <img src="${productImage(w)}"
                 alt="NovaChrono ${w.name} watch">

            <div class="detail-content">

                <span class="eyebrow">

                    ${w.category} Collection

                </span>

                <h2>${w.name}</h2>

                <p>${w.description}</p>

                <ul>

                    <li>Case: ${w.case}</li>

                    <li>Strap: ${w.strap}</li>

                    <li>Movement: ${w.movement}</li>

                    <li>Water rating: ${w.water}</li>

                </ul>

                <strong>${money(w.price)}</strong>

                <button class="btn btn-primary"
                        data-detail-add="${w.id}">

                    ${icon('bag')} Add to Cart

                </button>

            </div>

        </div>
    `;

    modal.querySelector('.modal-close')
        .addEventListener('click', closeOverlay);

    modal.querySelector('[data-detail-add]')
        .addEventListener('click', () => {

            addToCart(id);
            closeOverlay();

        });

    showOverlay(modal);
}

// CHECKOUT

function openCheckout() {

    if (!cartItems().length) return;

    const items = cartItems();

    const charge = shipping();

    const modal = byId('checkout-modal');

    modal.innerHTML = `

        <button class="modal-close"
                type="button"
                aria-label="Close checkout">

            ×

        </button>

        <div class="checkout-inner">

            <h2>Checkout</h2>

            <p>
                Complete your order details below.
            </p>

            <form id="checkout-form" autocomplete="off">

                <div class="checkout-columns">

                    <div>

                        <div class="field-row">

                            <div class="field-group">

                                <label for="first-name">

                                    First Name

                                </label>

                                <input id="first-name"
                                       class="input-field"
                                       required
                                       maxlength="40"
                                       autocomplete="off">

                            </div>

                            <div class="field-group">

                                <label for="last-name">

                                    Last Name

                                </label>

                                <input id="last-name"
                                       class="input-field"
                                       required
                                       maxlength="40"
                                       autocomplete="off">

                            </div>

                        </div>

                        <div class="field-group">

                            <label for="email">

                                Email

                            </label>

                            <input id="email"
                                   class="input-field"
                                   type="email"
                                   required
                                   autocomplete="off"
                                   placeholder="example@email.com">

                        </div>

                        <div class="field-group">

                            <label for="phone">

                                Phone Number

                            </label>

                            <input id="phone"
                                   class="input-field"
                                   type="tel"
                                   required
                                   minlength="7"
                                   maxlength="20"
                                   autocomplete="off"
                                   placeholder="09XX XXX XXXX">

                        </div>

                        <div class="field-group">

                            <label for="address">

                                Delivery Address

                            </label>

                            <input id="address"
                                   class="input-field"
                                   required
                                   maxlength="160"
                                   autocomplete="off"
                                   placeholder="Street, Barangay, City, Province">

                        </div>

                        <div class="field-group">

                            <label for="payment">

                                Payment Method

                            </label>

                            <select id="payment"
                                    class="input-field"
                                    required>

                                <option value="">

                                    Select a method

                                </option>

                                <option value="COD">

                                    Cash on Delivery

                                </option>

                                <option value="GCash">

                                    GCash

                                </option>

                                <option value="Card">

                                    Credit / Debit Card

                                </option>

                            </select>

                        </div>

                    </div>

                    <div class="checkout-summary">

                        <h3>Order Summary</h3>

                        ${items.map(w => `

                            <div class="summary-line">

                                <span>
                                    ${w.name} × ${w.quantity}
                                </span>

                                <span>
                                    ${money(w.price * w.quantity)}
                                </span>

                            </div>

                        `).join('')}

                        <div class="summary-line">

                            <span>Subtotal</span>

                            <span>
                                ${money(subtotal())}
                            </span>

                        </div>

                        <div class="summary-line">

                            <span>
                                Shipping
                                ${charge === 0 ? '(Free for orders of ₱5,000 or more)' : ''}
                            </span>

                            <span>

                                ${charge ? money(charge) : 'FREE'}

                            </span>

                        </div>

                        <div class="summary-line total">

                            <span>Total</span>

                            <span>

                                ${money(subtotal() + charge)}

                            </span>

                        </div>

                    </div>

                </div>

                <button type="submit"
                        class="btn btn-primary checkout-submit">

                    Place Order ${icon('arrow')}

                </button>

            </form>

        </div>
    `;

    modal.querySelector('.modal-close')
        .addEventListener('click', closeOverlay);

    modal.querySelector('#checkout-form')
        .addEventListener('submit', event => {

            event.preventDefault();

            const form = event.currentTarget;

            if (!form.reportValidity()) return;

            const orderNumber =
                'NC-' + Math.floor(
                    100000 + Math.random() * 900000
                );

            // No personal information is saved or transmitted.

            cart = {};

            saveCart();
            updateBadge();
            renderCart();

            modal.innerHTML = `

                <button class="modal-close"
                        type="button"
                        aria-label="Close confirmation">

                    ×

                </button>

                <div class="success-state">

                    ${icon('check')}

                    <h2>Order Preview Complete!</h2>

                    <p>
                        Thank you for exploring NovaChrono.
                        Your order preview is ready.
                    </p>

                    <strong>${orderNumber}</strong>

                    <p>
                        No real order or payment was processed.
                    </p>

                    <button type="button"
                            class="btn btn-primary"
                            id="finish-demo">

                        Continue Shopping

                    </button>

                </div>
            `;

            modal.querySelector('.modal-close')
                .addEventListener('click', closeOverlay);

            byId('finish-demo')
                .addEventListener('click', closeOverlay);

        });

    showOverlay(modal);
}

// PRODUCTS PAGE

function initProducts() {

    const grid = byId('products-grid');

    if (!grid) return;

    const search = byId('search-products');

    const sort = byId('sort-products');

    const chips = [
        ...document.querySelectorAll('[data-filter]')
    ];

    let category =
        new URLSearchParams(location.search)
            .get('category') || 'All';

    if (![
        'All',
        'Luxury',
        'Classic',
        'Minimalist',
        'Sport'

    ].includes(category)) {

        category = 'All';

    }

    function display() {

        const term = (search.value || '')
            .toLowerCase()
            .trim();

        let products = WATCHES.filter(w =>

            (category === 'All' ||
                w.category === category)

            &&

            (`${w.name} ${w.category} ${w.description}`)
                .toLowerCase()
                .includes(term)

        );

        switch (sort.value) {

            case 'low':

                products.sort((a, b) =>
                    a.price - b.price
                );

                break;

            case 'high':

                products.sort((a, b) =>
                    b.price - a.price
                );

                break;

            case 'name':

                products.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

                break;
        }

        chips.forEach(chip => {

            chip.classList.toggle(

                'active',

                chip.dataset.filter === category

            );

        });

        grid.innerHTML = products.length ?

            products.map(productCard).join('') :

            `
                <div class="empty-state"
                     style="grid-column:1/-1">

                    No watches found.
                    Try another category or search term.

                </div>
            `;

        byId('catalog-count').textContent =

            `Showing ${products.length} of ${WATCHES.length} watches`;

        bindCards(grid);
    }

    chips.forEach(chip => {

        chip.addEventListener('click', () => {

            category = chip.dataset.filter;

            display();

        });

    });

    search.addEventListener('input', display);

    sort.addEventListener('change', display);

    display();
}

// FEATURED PRODUCTS

function initFeatured() {

    const el = byId('featured-products');

    if (el) {

        el.innerHTML = [

            WATCHES[0],
            WATCHES[5],
            WATCHES[8],
            WATCHES[12]

        ].map(productCard).join('');

        bindCards(el);
    }
}

// GALLERY

function initGallery() {

    const el = byId('gallery-grid');

    if (!el) return;

    el.innerHTML = WATCHES.map(w => `

        <button class="gallery-tile"
                type="button"
                data-gallery="${w.id}"
                aria-label="View ${w.name} image">

            <img src="${productImage(w)}"
                 alt="NovaChrono ${w.name} watch"
                 loading="lazy">

            <div class="gallery-tile-label">

                <small>${w.category}</small>

                ${w.name}

            </div>

        </button>

    `).join('');

    el.querySelectorAll('[data-gallery]').forEach(btn => {

        btn.addEventListener('click', () => {

            const w = productById(
                btn.dataset.gallery
            );

            const modal = byId('gallery-modal');

            modal.innerHTML = `

                <button class="modal-close"
                        type="button"
                        aria-label="Close image">

                    ×

                </button>

                <img src="${productImage(w)}"
                     alt="NovaChrono ${w.name}">

                <h2>NovaChrono ${w.name}</h2>
            `;

            modal.querySelector('.modal-close')
                .addEventListener('click', closeOverlay);

            showOverlay(modal);

        });

    });
}

// SCROLL ANIMATIONS

function initReveal() {

    const targets =
        document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {

        targets.forEach(el => {

            el.classList.add('show');

        });

        return;
    }

    const obs = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

                obs.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.08

    });

    targets.forEach(el => {

        obs.observe(el);

    });
}

// INITIALIZE WEBSITE

renderHeader();
renderFooter();
renderShell();
initFeatured();
initProducts();
initGallery();
initReveal();

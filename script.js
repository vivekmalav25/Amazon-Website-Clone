// ---------- Cart counter ----------
let cartCount = 0;
const cartBtn = document.querySelector('.nav-cart');

function updateCartDisplay() {
    cartBtn.innerHTML = '<i class="fa-solid fa-cart-arrow-down"></i> cart (' + cartCount + ')';
}

cartBtn.addEventListener('click', function () {
    cartCount = cartCount + 1;
    updateCartDisplay();
});

// ---------- Back to top ----------
const backToTopBtn = document.querySelector('.foot-panel1');

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- Sign in dropdown ----------
const signInBtn = document.querySelector('.nav-signin');
let dropdownMenu = null;

function buildSignInDropdown() {
    const menu = document.createElement('div');
    menu.className = 'signin-dropdown';
    menu.innerHTML =
        '<button class="signin-option">Sign in</button>' +
        '<a href="#" class="signin-option">Create account</a>';
    return menu;
}

signInBtn.addEventListener('click', function (event) {
    event.stopPropagation();

    if (dropdownMenu) {
        dropdownMenu.remove();
        dropdownMenu = null;
        return;
    }

    dropdownMenu = buildSignInDropdown();
    signInBtn.appendChild(dropdownMenu);
});

document.addEventListener('click', function () {
    if (dropdownMenu) {
        dropdownMenu.remove();
        dropdownMenu = null;
    }
});

// ---------- "See more" category clicks ----------
const seeMoreLinks = document.querySelectorAll('.box a');

for (let i = 0; i < seeMoreLinks.length; i++) {
    seeMoreLinks[i].addEventListener('click', function (event) {
        event.preventDefault();
        const box = event.target.closest('.box');
        const categoryName = box.querySelector('h2').textContent;
        alert('Showing results for: ' + categoryName);
    });
}

// ---------- Search ----------
const searchInput = document.querySelector('.search-input');
const searchSelect = document.querySelector('.search-select');
const searchIconBtn = document.querySelector('.search-icon');

function runSearch() {
    const query = searchInput.value.trim();
    const category = searchSelect.value;

    if (query === '') {
        alert('Please enter something to search for.');
        return;
    }

    alert('Searching for "' + query + '" in category: ' + category);
}

searchIconBtn.addEventListener('click', runSearch);

searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        runSearch();
    }
});
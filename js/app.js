
function formatPrice(price) {
    return new Intl.NumberFormat("uk-UA").format(price) + " ₴";
}

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

function getCart() {
    try {
        return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = getCart().reduce((sum, item) => sum + item.quantity, 0);

    document.querySelectorAll(".cart-count").forEach(el => {
        el.textContent = count;
    });
}

function addToCart(id) {
    const cart = getCart();
    const existing = cart.find(item => String(item.id) === String(id));

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ id, quantity: 1 });
    }

    saveCart(cart);
    alert("Товар додано до кошика!");
}

/* Визначення підкатегорії товару */

function getProductSubcategory(product) {
    if (product.subcategory) return product.subcategory;

    const text = (
        (product.name || "") + " " +
        (product.description || "")
    ).toLowerCase();

    const rules = [
        ["gpu", ["відеокарт", "geforce", "radeon", "rtx", "gtx"]],
        ["cpu", ["процесор", "processor", "ryzen", "core i3", "core i5", "core i7", "core i9"]],
        ["motherboard", ["материнськ", "motherboard"]],
        ["ram", ["оперативн", "ram", "ddr4", "ddr5"]],
        ["storage", ["ssd", "hdd", "накопичувач", "жорсткий диск"]],
        ["power", ["блок живлення", "power supply", "psu"]],
        ["cooling", ["кулер", "охолодження", "cooler", "вентилятор"]],
        ["monitor", ["монітор", "monitor"]],
        ["keyboard", ["клавіатур", "keyboard"]],
        ["mouse", ["миша", "мишка", "mouse"]],
        ["headphones", ["навушник", "гарнітур", "headset"]],
        ["speakers", ["колонк", "акустик", "speaker"]]
    ];

    for (const [subcategory, keywords] of rules) {
        if (keywords.some(keyword => text.includes(keyword))) {
            return subcategory;
        }
    }

    if (product.category === "pc") {
        return text.includes("ігров") || text.includes("gaming")
            ? "gaming-pc"
            : "office-pc";
    }

    if (product.category === "laptop") {
        return text.includes("ігров") || text.includes("gaming")
            ? "gaming-laptop"
            : text.includes("навч") ? "study-laptop" : "work-laptop";
    }

    return "other";
}

function renderHeader() {
    const header = document.getElementById("header");
    if (!header) return;

    header.innerHTML = `
        <div class="header-inner">
            <a href="index.html" class="logo">Techno<span>Market</span></a>

            <nav class="main-nav">
                <a href="index.html">Головна</a>
                <a href="catalog.html">Каталог</a>
                <a href="about.html">Про нас</a>
                <a href="contacts.html">Контакти</a>
                <a href="delivery.html">Доставка</a>
            </nav>

            <a href="cart.html" class="header-cart">
                🛒 Кошик <span class="cart-count">0</span>
            </a>
        </div>
    `;
}

function renderFooter() {
    const footer = document.getElementById("footer");
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-inner">
            <div>
                <a href="index.html" class="logo">Techno<span>Market</span></a>
                <p>Твій світ сучасних технологій.</p>
            </div>

            <div class="footer-links">
                <a href="catalog.html">Каталог</a>
                <a href="contacts.html">Контакти</a>
                <a href="delivery.html">Доставка</a>
            </div>
        </div>

        <p class="copyright">© 2026 TechnoMarket. Усі права захищені.</p>
    `;
}

function createProductCard(product) {
    return `
        <article class="product-card">
            <a href="product.html?id=${encodeURIComponent(product.id)}"
               class="product-image">
                <img src="${escapeHTML(product.image)}"
                     alt="${escapeHTML(product.name)}"
                     onerror="this.src='https://placehold.co/400x300?text=TechnoMarket'">
            </a>

            <div class="product-info">
                <a href="product.html?id=${encodeURIComponent(product.id)}"
                   class="product-name">
                    ${escapeHTML(product.name)}
                </a>

                <p class="product-description">
                    ${escapeHTML(product.description || "Докладніше про товар на сторінці товару.")}
                </p>

                <div class="product-bottom">
                    <strong>${formatPrice(product.price)}</strong>
                    <button onclick="addToCart('${String(product.id).replace(/'/g, "\\'")}')">
                        До кошика
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderHomeProducts() {
    const container = document.getElementById("home-products");
    if (!container || typeof products === "undefined") return;

    container.innerHTML = products.slice(0, 8)
        .map(createProductCard).join("");
}

/* Каталог і бокове меню */

function renderCatalog() {
    const container = document.getElementById("products");
    if (!container || typeof products === "undefined") return;

    const searchInput = document.getElementById("search");
    const sortSelect = document.getElementById("sort");
    const title = document.getElementById("catalog-title");
    const count = document.getElementById("products-count");

    let selectedCategory = "all";
    let selectedSubcategory = null;

    const categoryNames = {
        all: "Усі товари",
        pc: "Комп'ютери",
        laptop: "Ноутбуки",
        parts: "Комплектуючі та периферія"
    };

    function showProducts() {
        const search = searchInput.value.toLowerCase().trim();

        let filtered = [...products];

        if (selectedCategory !== "all") {
            filtered = filtered.filter(product =>
                product.category === selectedCategory
            );
        }

        if (selectedSubcategory) {
            filtered = filtered.filter(product =>
                getProductSubcategory(product) === selectedSubcategory
            );
        }

        if (search) {
            filtered = filtered.filter(product =>
                (product.name || "").toLowerCase().includes(search) ||
                (product.description || "").toLowerCase().includes(search)
            );
        }

        if (sortSelect.value === "cheap") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortSelect.value === "expensive") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortSelect.value === "name") {
            filtered.sort((a, b) =>
                a.name.localeCompare(b.name, "uk")
            );
        }

        count.textContent = `Знайдено товарів: ${filtered.length}`;

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="no-products">
                    <div>🔎</div>
                    <h3>Товарів поки немає</h3>
                    <p>Спробуй іншу категорію або пошук.</p>
                </div>
            `;
        } else {
            container.innerHTML = filtered.map(createProductCard).join("");
        }
    }

    document.querySelectorAll(".sidebar-category[data-category]")
        .forEach(button => {
            button.addEventListener("click", () => {
                selectedCategory = button.dataset.category;
                selectedSubcategory = null;

                document.querySelectorAll(".sidebar-category")
                    .forEach(item => item.classList.remove("active"));

                button.classList.add("active");

                title.textContent = categoryNames[selectedCategory] || "Каталог";
                showProducts();
            });
        });

    document.querySelectorAll(".sidebar-group").forEach(group => {
        const button = group.querySelector(".sidebar-category");
        const arrow = button?.querySelector(".arrow");

        if (!button) return;

        button.addEventListener("click", () => {
            group.classList.toggle("expanded");

            if (arrow) {
                arrow.textContent = group.classList.contains("expanded")
                    ? "⌃" : "⌄";
            }
        });

        group.querySelectorAll("[data-subcategory]").forEach(subButton => {
            subButton.addEventListener("click", event => {
                event.stopPropagation();

                selectedCategory = button.dataset.category || "all";
                selectedSubcategory = subButton.dataset.subcategory;

                document.querySelectorAll(".sidebar-category")
                    .forEach(item => item.classList.remove("active"));

                button.classList.add("active");

                title.textContent = subButton.textContent.trim();
                showProducts();
            });
        });
    });

    searchInput.addEventListener("input", showProducts);
    sortSelect.addEventListener("change", showProducts);

    showProducts();
}

document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    updateCartCount();
    renderHomeProducts();
    renderCatalog();
});

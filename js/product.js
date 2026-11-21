
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("product-details");
    const breadcrumb = document.getElementById("breadcrumb-name");

    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const product = products.find(item => String(item.id) === String(id));

    if (!product) {
        container.innerHTML = `
            <div class="product-not-found">
                <h2>Товар не знайдено</h2>
                <p>Можливо, його було видалено або посилання неправильне.</p>
                <a href="catalog.html" class="back-to-catalog">
                    Повернутися до каталогу
                </a>
            </div>
        `;
        return;
    }

    document.title = `${product.name} — TechnoMarket`;

    if (breadcrumb) {
        breadcrumb.textContent = product.name;
    }

    const specifications = product.specifications || {};

    let specificationsHTML = "";

    if (Array.isArray(specifications)) {
        specificationsHTML = specifications.map(item => `
            <tr>
                <td>${escapeHTML(item.name || item.title || "Характеристика")}</td>
                <td>${escapeHTML(item.value || "")}</td>
            </tr>
        `).join("");
    } else {
        specificationsHTML = Object.entries(specifications).map(([key, value]) => `
            <tr>
                <td>${escapeHTML(key)}</td>
                <td>${escapeHTML(value)}</td>
            </tr>
        `).join("");
    }

    if (!specificationsHTML) {
        specificationsHTML = `
            <tr>
                <td colspan="2">Характеристики уточнюються.</td>
            </tr>
        `;
    }

    const description = product.description ||
        "Докладний опис цього товару готується.";

    container.innerHTML = `
        <section class="product-detail-card">

            <div class="product-detail-top">

                <div class="product-detail-image">
                    <img
                        src="${escapeHTML(product.image)}"
                        alt="${escapeHTML(product.name)}"
                        onerror="this.src='https://placehold.co/600x450?text=TechnoMarket'">
                </div>

                <div class="product-detail-info">
                    <span class="product-label">TECHNOMARKET</span>

                    <h1>${escapeHTML(product.name)}</h1>

                    <p class="product-detail-short">
                        ${escapeHTML(description)}
                    </p>

                    <div class="product-detail-price">
                        ${formatPrice(product.price)}
                    </div>

                    <button class="product-add-button"
                            id="detail-add-to-cart">
                        🛒 Додати до кошика
                    </button>

                    <div class="product-benefits">
                        <div>✓ Якісна техніка</div>
                        <div>✓ Допомога з вибором</div>
                        <div>✓ Зручне оформлення замовлення</div>
                    </div>
                </div>

            </div>

            <div class="product-detail-description">
                <h2>Опис товару</h2>
                <p>${escapeHTML(description)}</p>
            </div>

            <div class="product-specifications">
                <h2>Характеристики</h2>

                <table>
                    <tbody>
                        ${specificationsHTML}
                    </tbody>
                </table>
            </div>

            <div class="product-back">
                <a href="catalog.html">← Повернутися до каталогу</a>
            </div>

        </section>
    `;

    document.getElementById("detail-add-to-cart")
        .addEventListener("click", () => {
            addToCart(product.id);
        });
});

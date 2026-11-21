
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("cart-items");
    if (!container) return;

    const totalElement = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");
    const checkoutForm = document.getElementById("checkout-form");
    const message = document.getElementById("order-message");

    function renderCart() {
        const cart = getCart();

        const validCart = cart.filter(item =>
            products.some(product => product.id === Number(item.id))
        );

        if (validCart.length !== cart.length) {
            saveCart(validCart);
        }

        if (validCart.length === 0) {
            container.innerHTML = `
                <div class="empty-cart">
                    <h2>Ваш кошик порожній</h2>
                    <p>Додайте товари з каталогу.</p>
                    <a href="catalog.html" class="continue-shopping">
                        Перейти до каталогу
                    </a>
                </div>
            `;

            totalElement.textContent = formatPrice(0);
            if (checkoutButton) checkoutButton.disabled = true;
            return;
        }

        if (checkoutButton) checkoutButton.disabled = false;

        let total = 0;

        container.innerHTML = validCart.map(item => {
            const product = products.find(p => p.id === Number(item.id));
            const quantity = Math.max(1, Number(item.quantity) || 1);
            const subtotal = product.price * quantity;

            total += subtotal;

            return `
                <article class="cart-item">
                    <img src="${product.image}" alt="${product.name}">

                    <div class="cart-item-info">
                        <h3>${product.name}</h3>
                        <p>${formatPrice(product.price)} за одиницю</p>

                        <div class="quantity-controls">
                            <button onclick="changeQuantity(${product.id}, -1)">−</button>
                            <span>${quantity}</span>
                            <button onclick="changeQuantity(${product.id}, 1)">+</button>
                        </div>
                    </div>

                    <div class="cart-item-right">
                        <strong>${formatPrice(subtotal)}</strong>
                        <button class="remove-button"
                            onclick="removeFromCart(${product.id})">
                            Видалити
                        </button>
                    </div>
                </article>
            `;
        }).join("");

        totalElement.textContent = formatPrice(total);
    }

    window.changeQuantity = function(id, change) {
        const cart = getCart();
        const item = cart.find(entry => Number(entry.id) === Number(id));

        if (!item) return;

        item.quantity = Math.max(0, Number(item.quantity || 1) + change);

        const updatedCart = cart.filter(entry => entry.quantity > 0);
        saveCart(updatedCart);
        renderCart();
    };

    window.removeFromCart = function(id) {
        const cart = getCart().filter(item => Number(item.id) !== Number(id));
        saveCart(cart);
        renderCart();
    };

    if (checkoutButton && checkoutForm) {
        checkoutButton.addEventListener("click", () => {
            checkoutForm.hidden = false;
            checkoutForm.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    if (checkoutForm) {
        checkoutForm.addEventListener("submit", event => {
            event.preventDefault();

            const cart = getCart();

            if (cart.length === 0) {
                message.textContent = "Кошик порожній.";
                return;
            }

            const order = {
                id: Date.now(),
                customer: {
                    name: document.getElementById("customer-name").value,
                    phone: document.getElementById("customer-phone").value,
                    email: document.getElementById("customer-email").value,
                    address: document.getElementById("customer-address").value
                },
                items: cart,
                date: new Date().toLocaleString("uk-UA")
            };

            const orders = JSON.parse(localStorage.getItem("orders") || "[]");
            orders.push(order);
            localStorage.setItem("orders", JSON.stringify(orders));

            localStorage.removeItem("cart");

            message.textContent =
                "Дякуємо! Демонстраційне замовлення збережено.";

            checkoutForm.reset();
            checkoutForm.hidden = true;

            renderCart();
            updateCartCount();
        });
    }

    renderCart();
});

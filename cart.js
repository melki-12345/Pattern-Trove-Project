document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <h1>Your Cart is Empty</h1>
                    <a href="products.html" class="checkout-btn" style="text-decoration: none;">Shop Patterns</a>
                </div>
            `;
            return;
        }

        let total = 0;
        const cartItemsHTML = cart.map(item => {
            const itemPrice = parseFloat(item.price.replace('$', ''));
            const itemTotal = itemPrice * item.quantity;
            total += itemTotal;
            return `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p class="cart-item-price">${item.price}</p>
                    </div>
                    <div class="cart-item-quantity">
                        <p>Qty: ${item.quantity}</p>
                    </div>
                    <div class="cart-item-total">
                        <p>Total: $${itemTotal.toFixed(2)}</p>
                    </div>
                    <button class="cart-item-remove"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
        }).join('');

        cartContainer.innerHTML = `
            <h1>Your Shopping Cart</h1>
            <div class="cart-items-container">
                ${cartItemsHTML}
            </div>
            <div class="cart-summary">
                <h2>Subtotal: $${total.toFixed(2)}</h2>
                <button class="checkout-btn">Proceed to Checkout</button>
            </div>
        `;
    }

    cartContainer.addEventListener('click', (e) => {
        if (e.target.closest('.cart-item-remove')) {
            const cartItemElement = e.target.closest('.cart-item');
            const itemId = cartItemElement.dataset.id;
            
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => item.id !== itemId);
            localStorage.setItem('cart', JSON.stringify(cart));
            
            updateCartCount();
            renderCart();
        }

        if(e.target.closest('.checkout-btn')) {
            window.location.href = 'payment.html';
        }
    });

    renderCart();
}); 
document.addEventListener('DOMContentLoaded', () => {
    const productData = {
        pattern1: {
            name: "Pattern 01",
            itemNumber: "7463524865766",
            price: "$285.00",
            originalPrice: "$290.00",
            colors: { Sand: "#d3c5b8", Black: "#222" },
            sizes: ["S", "M", "L", "XL"],
            images: ["images/image4_1.jpg", "images/image4.jpg"],
            sizeChart: `
                <table class="size-chart-table">
                    <thead><tr><th>Size</th><th>Chest (in)</th><th>Waist (in)</th></tr></thead>
                    <tbody>
                        <tr><td>S</td><td>38</td><td>32</td></tr>
                        <tr><td>M</td><td>40</td><td>34</td></tr>
                        <tr><td>L</td><td>42</td><td>36</td></tr>
                        <tr><td>XL</td><td>44</td><td>38</td></tr>
                    </tbody>
                </table>`
        },
        pattern3: {
            name: "Pattern 03",
            itemNumber: "9424865768",
            price: "$45.00",
            originalPrice: "$50.00",
            colors: { Blue: "#a9cce3", Pink: "#f5b7b1" },
            sizes: ["S", "M", "L", "XL"],
            images: ["images/image2_2.jpg", "images/image2_1.jpg", "images/image2_3.jpg"],
            sizeChart: `
                 <table class="size-chart-table">
                    <thead><tr><th>Size</th><th>Height (in)</th></tr></thead>
                    <tbody>
                        <tr><td>2T</td><td>33-35</td></tr>
                        <tr><td>3T</td><td>36-38</td></tr>
                        <tr><td>4T</td><td>39-41</td></tr>
                        <tr><td>5T</td><td>42-44</td></tr>
                    </tbody>
                </table>`
        },
        pattern4: {
            name: "Pattern 04",
            itemNumber: "1463524865769",
            price: "$110.00",
            originalPrice: "$130.00",
            colors: { White: "#ffffff", "Light Blue": "#d6eaf8" },
            sizes: ["S", "M", "L", "XL"],
            images: ["images/image3_1.jpg", "images/image3_2.jpg", "images/image3_3.jpg"],
            sizeChart: `
                <table class="size-chart-table">
                    <thead><tr><th>Size</th><th>Bust (in)</th><th>Length (in)</th></tr></thead>
                    <tbody>
                        <tr><td>S</td><td>34</td><td>25</td></tr>
                        <tr><td>M</td><td>36</td><td>26</td></tr>
                        <tr><td>L</td><td>38</td><td>27</td></tr>
                        <tr><td>XL</td><td>40</td><td>28</td></tr>
                    </tbody>
                </table>`
        },
        pattern5: {
            name: "Pattern 05",
            itemNumber: "4865769",
            price: "$320.00",
            originalPrice: "$350.00",
            colors: { White: "#ffffff", "Light Blue": "#d6eaf8" },
            sizes: ["S", "M", "L", "XL"],
            images: ["images/image6_1.jpg", "images/image6_2.jpg", "images/image6_3.jpg","images/image6_4.jpg"],
            sizeChart: `
                <table class="size-chart-table">
                    <thead><tr><th>Size</th><th>Bust (in)</th><th>Length (in)</th></tr></thead>
                    <tbody>
                        <tr><td>S</td><td>34</td><td>25</td></tr>
                        <tr><td>M</td><td>36</td><td>26</td></tr>
                        <tr><td>L</td><td>38</td><td>27</td></tr>
                        <tr><td>XL</td><td>40</td><td>28</td></tr>
                    </tbody>
                </table>`
        },
        pattern6: {
            name: "Pattern 06",
            itemNumber: "524865769",
            price: "$190.00",
            originalPrice: "$200.00",
            colors: { White: "#ffffff", "Light Blue": "#d6eaf8" },
            sizes: ["S", "M", "L", "XL"],
            images: ["images/image7_1.jpg", "images/image7_2.jpg", "images/image7_3.jpg","images/image7_4.jpg"],
            sizeChart: `
                <table class="size-chart-table">
                    <thead><tr><th>Size</th><th>Bust (in)</th><th>Length (in)</th></tr></thead>
                    <tbody>
                        <tr><td>S</td><td>34</td><td>25</td></tr>
                        <tr><td>M</td><td>36</td><td>26</td></tr>
                        <tr><td>L</td><td>38</td><td>27</td></tr>
                        <tr><td>XL</td><td>40</td><td>28</td></tr>
                    </tbody>
                </table>`
        },
        pattern7: {
            name: "Pattern 07",
            itemNumber: "1463524865769",
            price: "$230.00",
            originalPrice: "$250.00",
            colors: { White: "#ffffff", "Light Blue": "#d6eaf8" },
            sizes: ["S", "M", "L", "XL"],
            images: ["images/image8_1.jpg", "images/image8_2.jpg", "images/image8_3.jpg"],
            sizeChart: `
                <table class="size-chart-table">
                    <thead><tr><th>Size</th><th>Bust (in)</th><th>Length (in)</th></tr></thead>
                    <tbody>
                        <tr><td>S</td><td>34</td><td>25</td></tr>
                        <tr><td>M</td><td>36</td><td>26</td></tr>
                        <tr><td>L</td><td>38</td><td>27</td></tr>
                        <tr><td>XL</td><td>40</td><td>28</td></tr>
                    </tbody>
                </table>`
        },
        pattern8: {
            name: "Pattern 08",
            itemNumber: "63524865769",
            price: "$180.00",
            originalPrice: "$200.00",
            colors: { White: "#ffffff", "Light Blue": "#d6eaf8" },
            sizes: ["S", "M", "L", "XL"],
            images: ["images/image9_1.jpg", "images/image9_2.jpg", "images/image9_3.jpg","images/image9_4.jpg"],
            sizeChart: `
                <table class="size-chart-table">
                    <thead><tr><th>Size</th><th>Bust (in)</th><th>Length (in)</th></tr></thead>
                    <tbody>
                        <tr><td>S</td><td>34</td><td>25</td></tr>
                        <tr><td>M</td><td>36</td><td>26</td></tr>
                        <tr><td>L</td><td>38</td><td>27</td></tr>
                        <tr><td>XL</td><td>40</td><td>28</td></tr>
                    </tbody>
                </table>`
        },
        pattern9: {
            name: "Pattern 09",
            itemNumber: "1463865769",
            price: "$120.00",
            originalPrice: "$150.00",
            colors: { White: "#ffffff", "Light Blue": "#d6eaf8" },
            sizes: ["S", "M", "L", "XL"],
            images: ["images/image10_1.jpg", "images/image10_2.jpg"],
            sizeChart: `
                <table class="size-chart-table">
                    <thead><tr><th>Size</th><th>Bust (in)</th><th>Length (in)</th></tr></thead>
                    <tbody>
                        <tr><td>S</td><td>34</td><td>25</td></tr>
                        <tr><td>M</td><td>36</td><td>26</td></tr>
                        <tr><td>L</td><td>38</td><td>27</td></tr>
                        <tr><td>XL</td><td>40</td><td>28</td></tr>
                    </tbody>
                </table>`
        },
        pattern10: {
            name: "Pattern 10",
            itemNumber: "1463524869",
            price: "$140.00",
            originalPrice: "$160.00",
            colors: { White: "#ffffff", "Light Blue": "#d6eaf8" },
            sizes: ["S", "M", "L", "XL"],
            images: ["images/image11_1.jpg", "images/image11_2.jpg", "images/image11_3.jpg","images/image11_4.jpg","images/image11_5.jpg","images/image11_6.jpg"],
            sizeChart: `
                <table class="size-chart-table">
                    <thead><tr><th>Size</th><th>Bust (in)</th><th>Length (in)</th></tr></thead>
                    <tbody>
                        <tr><td>S</td><td>34</td><td>25</td></tr>
                        <tr><td>M</td><td>36</td><td>26</td></tr>
                        <tr><td>L</td><td>38</td><td>27</td></tr>
                        <tr><td>XL</td><td>40</td><td>28</td></tr>
                    </tbody>
                </table>`
        }
    };

    const productKeys = Object.keys(productData);
    let currentProductIndex = 0;
    const container = document.querySelector('.product-page-container');

    function renderProduct(productIndex) {
        if (!container) {
            console.error("Fatal Error: Product container not found in HTML.");
            return;
        }

        currentProductIndex = productIndex;
        const productKey = productKeys[productIndex];
        const product = productData[productKey];

        const prevIndex = (productIndex - 1 + productKeys.length) % productKeys.length;
        const nextIndex = (productIndex + 1) % productKeys.length;
        const prevProduct = productData[productKeys[prevIndex]];
        const nextProduct = productData[productKeys[nextIndex]];
        
        const colorsHTML = Object.entries(product.colors).map(([name, code], index) => 
            `<button class="color-swatch ${index === 0 ? 'active' : ''}" style="background-color: ${code};" title="${name}"></button>`
        ).join('');
        
        const sizesHTML = product.sizes.map((size, index) => 
            `<button class="size-btn ${index === 2 ? 'active' : ''}">${size}</button>`
        ).join('');
        
        const thumbnailsHTML = product.images.map((img, index) =>
            `<img src="${img}" alt="${product.name} thumbnail ${index + 1}" class="thumbnail-item ${index === 0 ? 'active' : ''}" data-img="${img}">`
        ).join('');

        const html = `
            <div class="product-header">
                <div class="product-nav">
                    <a href="#" class="product-nav-item" data-nav-index="${prevIndex}">
                        <i class="fas fa-chevron-left"></i>
                        <img src="${prevProduct.images[0]}" alt="${prevProduct.name}">
                        <span>Prev</span>
                    </a>
                    <a href="#" class="product-nav-item" data-nav-index="${nextIndex}">
                        <span>Next</span>
                        <img src="${nextProduct.images[0]}" alt="${nextProduct.name}">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
            <div class="product-layout">
                <div class="product-gallery">
                    <div class="thumbnail-container">
                        <div class="thumbnail-nav up"><i class="fas fa-chevron-up"></i></div>
                        <div class="thumbnail-list-wrapper">
                            <div class="thumbnail-list">${thumbnailsHTML}</div>
                        </div>
                        <div class="thumbnail-nav down"><i class="fas fa-chevron-down"></i></div>
                    </div>
                    <div class="main-image-wrapper">
                        <img src="${product.images[0]}" alt="${product.name}" class="main-image">
                    </div>
                </div>
                <div class="product-details">
                    <h1>${product.name}</h1>
                    <div class="item-number">item #${product.itemNumber}</div>
                    <div class="product-review">
                        <div class="stars">★★★★★</div>
                        <a href="https://www.facebook.com/people/Pattern-Trove/100092225799246/">323 Review(s)</a>
                    </div>
                    <div class="product-price">
                        <span class="current-price">${product.price}</span>
                        <span class="original-price">${product.originalPrice}</span>
                    </div>
                    <div class="product-options">
                        <div class="option-group">
                            <span class="label">SIZE:</span>
                            <div class="size-buttons">${sizesHTML}</div>
                        </div>
                        <div class="option-group">
                            <span class="label">QUANTITY:</span>
                            <div class="quantity-selector">
                                <button class="quantity-down">-</button>
                                <input type="text" value="1" readonly>
                                <button class="quantity-up">+</button>
                            </div>
                        </div>
                    </div>
                    <button class="add-to-cart-btn"><i class="fas fa-shopping-cart"></i>ADD TO CART</button>
                    <div class="secondary-actions-container">
                        <button class="secondary-action-btn size-chart-link"><i class="fas fa-ruler-horizontal"></i>SIZE CHART</button>
                        <button class="secondary-action-btn download-btn"><i class="fas fa-download"></i>DOWNLOAD PATTERN</button>
                    </div>
                </div>
            </div>`;
        container.innerHTML = html;
    }

    // --- Event Delegation ---
    if (container) {
        container.addEventListener('click', function(e) {
            const target = e.target;
            
            // Product Navigation
            const navItem = target.closest('.product-nav-item');
            if (navItem) {
                e.preventDefault();
                const newIndex = parseInt(navItem.dataset.navIndex);
                if (!isNaN(newIndex)) renderProduct(newIndex);
                return;
            }

            // Thumbnail Click
            const thumbnail = target.closest('.thumbnail-item');
            if (thumbnail) {
                const mainImage = this.querySelector('.main-image');
                if (mainImage) mainImage.src = thumbnail.dataset.img;
                this.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
                return;
            }

            // Thumbnail Scroll
            const thumbListWrapper = this.querySelector('.thumbnail-list-wrapper');
            if (target.closest('.thumbnail-nav.up')) {
                if (thumbListWrapper) thumbListWrapper.scrollTop -= 90;
                return;
            }
            if (target.closest('.thumbnail-nav.down')) {
                if (thumbListWrapper) thumbListWrapper.scrollTop += 90;
                return;
            }

            // Options
            const colorSwatch = target.closest('.color-swatch');
            if(colorSwatch) {
                this.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
                colorSwatch.classList.add('active');
                return;
            }
            const sizeBtn = target.closest('.size-btn');
            if(sizeBtn) {
                this.querySelectorAll('.size-btn').forEach(s => s.classList.remove('active'));
                sizeBtn.classList.add('active');
                return;
            }

            // Quantity
            const qtyInput = this.querySelector('.quantity-selector input');
            if (qtyInput) {
                if (target.closest('.quantity-up')) qtyInput.value++;
                if (target.closest('.quantity-down') && qtyInput.value > 1) qtyInput.value--;
            }

            if (target.closest('.add-to-cart-btn')) {
                const productKey = productKeys[currentProductIndex];
                const product = productData[productKey];
                const qtyInput = container.querySelector('.quantity-selector input');
                const quantity = qtyInput ? parseInt(qtyInput.value) : 1;
                
                const item = {
                    id: productKey,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                    quantity: quantity
                };

                addToCart(item);

                target.closest('.add-to-cart-btn').innerHTML = '<i class="fas fa-check"></i> ADDED';
                setTimeout(() => {
                    target.closest('.add-to-cart-btn').innerHTML = '<i class="fas fa-shopping-cart"></i> ADD TO CART';
                }, 2000);
                return;
            }

            if (target.closest('.download-btn')) {
                window.location.href = 'payment.html';
                return;
            }

            // Modals & Lightbox
            if (target.closest('.size-chart-link')) {
                e.preventDefault();
                const sizeChartModal = document.getElementById('sizeChartModal');
                const chartContent = document.getElementById('sizeChartContent');
                if(chartContent && sizeChartModal) {
                    chartContent.innerHTML = productData[productKeys[currentProductIndex]].sizeChart;
                    sizeChartModal.style.display = 'flex';
                }
                return;
            }
            if (target.closest('.main-image')) {
                 const lightbox = document.getElementById('lightbox');
                 const lightboxImg = document.getElementById('lightboxImg');
                 if(lightbox && lightboxImg) {
                    lightboxImg.src = target.src;
                    lightbox.style.display = 'flex';
                 }
                 return;
            }
        });
    }

    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cart.push(item);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount(); // This function will be in script.js
    }

    // --- Global Listeners for Closing Modals ---
    function setupModalClose(modalId, closeBtnId) {
        const modal = document.getElementById(modalId);
        const closeBtn = document.getElementById(closeBtnId);
        if (modal && closeBtn) {
            closeBtn.addEventListener('click', () => modal.style.display = 'none');
        }
    }
    setupModalClose('sizeChartModal', 'closeSizeChartModal');
    setupModalClose('lightbox', 'closeLightbox');
    
    // Initial Load
    renderProduct(0);
});
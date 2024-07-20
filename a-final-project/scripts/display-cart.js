// help from chatgbt 
// -> code for getting stuff INTO card can be found in "scripts/display-products.js"

document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalItems = document.getElementById("cart-total-items");
    const cartTotalPrice = document.getElementById("cart-total-price");

    const getCart = () => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    };

    const getProducts = async () => {
        try {
            const response = await fetch("./data/products.json");
            if (response.ok) {
                const data = await response.json();
                return data.products;
            } else {
                console.error("Failed to fetch products");
                return [];
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    };

    const displayCartItems = async () => {
        const cart = getCart();
        const products = await getProducts();
        let totalItems = 0;
        let totalPrice = 0;

        cartItemsContainer.innerHTML = ""; // Clear previous content

        cart.forEach(cartItem => {
            const product = products.find(p => p.sku === cartItem.sku);
            if (product) {
                totalItems += cartItem.quantity;
                totalPrice += product.price * cartItem.quantity;

                const itemElement = document.createElement("div");
                itemElement.className = "cart-item";
                itemElement.innerHTML = `
                    <h2>${product.title}</h2>
                    <img src="${product.imageURL}" alt="${product.description} image" loading="lazy" height="100">
                    <p>Quantity: ${cartItem.quantity}</p>
                    <p>Price: $${product.price}</p>
                    <p>Total: $${(product.price * cartItem.quantity).toFixed(2)}</p>
                `;
                cartItemsContainer.appendChild(itemElement);
            }
        });

        cartTotalItems.textContent = totalItems;
        cartTotalPrice.textContent = totalPrice.toFixed(2);
    };

    displayCartItems();
});

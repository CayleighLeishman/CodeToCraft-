

document.querySelectorAll(".add-to-cart").forEach(button => {   // calls function
    button.addEventListener("click", (event) => { // This part means "When you click on button" 
        const sku = event.target.dataset.sku;
        // declares a new variable called SKU where it targets the dataset and gets sku from products.json I assume
        addToCart(sku); // adds SKU stuff to above
    });
});

// Cart management functions -> not sure I completely understand this 
const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
};

const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const addToCart = (sku) => {
    const cart = getCart();
    const productIndex = cart.findIndex(item => item.sku === sku);
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ sku, quantity: 1 });
    }
    saveCart(cart);
    updateCartDisplay();
};

// CHATGBT, adds stuff to car in list form
const updateCartDisplay = () => {
    const cart = getCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => {
        const product = products.find(product => product.sku === item.sku);
        return total + (product.price * item.quantity);
    }, 0);
    
    document.getElementById("cart-count").textContent = totalItems;
    document.getElementById("cart-total").textContent = `$${totalPrice.toFixed(2)}`;
};

// Initial cart display update
document.addEventListener("DOMContentLoaded", updateCartDisplay);

//
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
        let salesTaxRate = 0.047;  // CAYLEIGH ADDED : Tried to add this but no idea if it works
        cartItemsContainer.innerHTML = ""; // Clear previous content

        cart.forEach(cartItem => {
            const product = products.find(p => p.sku === cartItem.sku);
            if (product) {
                totalItems += cartItem.quantity;
                totalPrice += product.price * cartItem.quantity * salesTaxRate;


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

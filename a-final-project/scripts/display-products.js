// Load JSON data and do stuff
const url = "./data/products.json";
const productContainer = document.getElementById("products-data")
// const productContainer2 = document.querySelector("#products-data")

const displayProducts = (products) => {
    products.forEach((products) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
            <h2>${products.title}</h2>
            <img src="${products.imageURL}" alt="${products.description} image" loading="lazy" height="300">
            <p> $ ${products.price}</p>
            <p><p>
            <button data-sku="${product.sku}">Add to Cart</button>`;
            productContainer.appendChild(newsection);
    });
};

// supposed to add stuff to cart [ChatGbt] -- the following comments are my interpretation to see if i understand the code correctly
document.querySelectorAll(".add-to-cart").forEach(button => {   // calls function
    button.addEventListener("click", (event) => { // This part means "When you click on button" 
        const sku = event.target.dataset.sku;
        // declares a new variable called SKU where it targets the dataset and gets sku from products.json I assume
        addToCart(sku); // adds SKU stuff to above
    });
});

// Fetches stuff from JSON 
async function getProductsData(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayProducts(data.products); 
        } else {
            console.log("Oops! Something went wrong");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getProductsData();

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
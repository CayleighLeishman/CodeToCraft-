// Load JSON data and do stuff
const url = "./data/products.json";
const productContainer = document.getElementById("products-data")
// const productContainer2 = document.querySelector("#products-data")

const displayProducts = (products) => {
    products.forEach((product) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.imageURL}" alt="${product.description} image" loading="lazy" height="300">
            <p> $ ${product.price}</p>
            <p><a href="order.html?sku=${product.sku}">Order</a><p>
            `;
            productContainer.appendChild(newsection);
    });
};

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


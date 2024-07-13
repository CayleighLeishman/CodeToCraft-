
// Load JSON data and do stuff
const url = "./data/products.json";

// TO DO : Do we also need to put in the SKU/Product identifier code here?
const displayProducts = (products) => {
    products.forEach((products) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
            <h2>${products.product-name} ${products.product-description}</h2>
            <img src="${products.imageURL}" alt="${products.product-description} image" loading="lazy" height="300">
            <p>${products.product-price}</p>`;
        products_data.appendChild(newsection);
    });
};

async function getProductsData(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayproducts(data.products); 
        } else {
            console.log("Oops! Something went wrong");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getProductsData();


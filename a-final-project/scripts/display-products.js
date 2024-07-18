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
            <p>${products.price}</p>
            <p> is this a featred product? ${products.featuredProduct}</p>`;
            productContainer.appendChild(newsection);
    });
};
// to do add to something similar to this for home page 
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

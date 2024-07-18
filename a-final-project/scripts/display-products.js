// Load JSON data and do stuff
const url = "./data/products.json";

const displayProducts = (products) => {
    products.forEach((products) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
            <h2>${products.title}</h2>
            <img src="${products.imageURL}" alt="${products.description} image" loading="lazy" height="300">
            <p>${products.price}</p>
            <p> is this a featred product? ${products.featuredProduct}</p>`;
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

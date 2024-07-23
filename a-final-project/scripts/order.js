// Load JSON data and do stuff
const url = "./data/products.json";
const productContainer = document.getElementById("products-data")

const sku=new URL(window.location).searchParams.get("sku")
document.getElementById('sku').value=sku 

const displayProducts = (products) => {
    products.forEach((product) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.imageURL}" alt="${product.description} image" loading="lazy" height="300">
            <p>${product.description}</p>
            <p> $ ${product.price}</p>
            `;
        productContainer.appendChild(newsection);
    });
};

async function getProductsData(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            const product=data.products.filter(x => x.sku==sku)
            displayProducts(product); 
            showPrice(product[0]);
        } else {
            console.log("Oops! Something went wrong");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getProductsData();

function showPrice(product){
    // to do add the math and display product
    let price=product.price
    let tax=.05*price
    let subtotal= tax+price

    document.getElementById('total-tax').innerText= tax;
    document.getElementById('subtotal').innerText= subtotal;

}


// Shipping Date
const dateContainer = document.getElementById("shipDate");

function displayShipDate() {
    const shipByDate = new Date();
    shipByDate.setTime(shipByDate.getTime() + (5 * 24 * 60 * 60 * 1000)); // Add 5 days

    // Format the date to a readable format (e.g., MM/DD/YYYY)
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = shipByDate.toLocaleDateString(undefined, options);

    dateContainer.textContent = formattedDate; // Display the date in the element
}

displayShipDate();

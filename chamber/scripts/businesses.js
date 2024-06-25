const site = "https://cayleighleishman.github.io/wdd230/chamber/data/business.json";
const business_cards = document.querySelector('#business_cards');

const displayBusiness = (businesses) => {
    businesses.forEach((business) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
            <h2>${business.name} ${business.label}</h2>
            <img src="${business.imageURL}" alt="${business.name} image" loading="lazy" height="300">
            <p>${business.address}, ${business.phone_number}</p>
            <p>${business.websiteURL}</p>`;
        business_cards.appendChild(newsection);
    });
};

async function getBusinessData(){
    try {
        const response = await fetch(site);
        if (response.ok){
            const data = await response.json();
            displayBusiness(data.Businesses); // Corrected to pass data.Businesses
        } else {
            console.log("Oops! Something went wrong");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getBusinessData();
const site = "https://cayleighleishman.github.io/wdd230/chamber/data/business.json"; 
const cards = document.querySelector('#cards');

const displayBusiness = (businesses) => {
    businesses.forEach((business) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
            <h2>${business.name} ${business.label}</h2>
            <img src="${business.imageurl}" alt="${business.name} image" loading="lazy" height="300">
            <p>${business.address}, ${business.phone_number}</p>
            <p>${business.websiteURL}</p>
        `;
        cards.append(newsection);
    });
}
async function getBusinessData(){
    try {
        const response = await fetch(site);
        if (response.ok){
            const data = await response.json();
            displayBusiness(newsection);
        } else {
            console.log("Oops! Something went wrong");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getBusinessData();
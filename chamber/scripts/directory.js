//  Help From TA and professors 

// add button code here loook at professors for assistance 


const site = "./data/members.json";
const members_cards = document.querySelector('#members_cards');

const displaymembers = (members) => {
    members.forEach((members) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
            <h2>${members.name} ${members.label}</h2>
            <img src="${members.imageURL}" alt="${members.name} image" loading="lazy" height="300">
            <p>${members.address}, ${members.phone_number}</p>
            <p>${members.websiteURL}</p>`;
        members_cards.appendChild(newsection);
    });
};

async function getmembersData(){
    try {
        const response = await fetch(site);
        if (response.ok){
            const data = await response.json();
            displaymembers(data.members); 
        } else {
            console.log("Oops! Something went wrong");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getmembersData();


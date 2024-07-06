// this makes the button to swtich between Grid mode and List mode work

var gridSelector = document.querySelector('#members_grid');
var listSelector = document.querySelector('#members_list');
var membersData = document.querySelector('#members_data');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('active')){    
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        membersData.classList.add('members_cards');
        membersData.classList.remove('members_list');
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('active')){
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        membersData.classList.add('members_list');
        membersData.classList.remove('members_cards');
    }
});


// Load JSON data and do stuff
const url = "./data/members.json";


// const members_cards = document.querySelector('#members_cards');

const displaymembers = (members) => {
    members.forEach((members) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
            <h2>${members.name} ${members.label}</h2>
            <img src="${members.imageURL}" alt="${members.name} image" loading="lazy" height="300">
            <p>${members.address}</p>
            <p> ${members.phone_number}</p>
            <p>${members.websiteURL}</p>
            <p>${members.membershipLevel}</p>`;
        members_data.appendChild(newsection);
    });
};

async function getmembersData(){
    try {
        const response = await fetch(url);
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


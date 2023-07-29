//data , object
const houses = [
  {
    id: 1,
    name: "Slytherin",
    color: "Green",
    image: "./asset/slytherin.jpg",
    students: {
      one: "Malfoy"
    } 
  },

  {
    id: 2,
    name: "Gryffindor",
    color: "Red",
    image: "./asset/gryffindor.jpg"
  },

  {
    id: 3,
    name: "Hufflepuff",
    color: "Yellow", 
    image: "./asset/hufflepuff.jpg"
  },

  {
    id: 4,
    name: "Ravenclaw",
    color: "Purple",
    image: "./asset/ravenclaw.png"
  },
]

const app = document.querySelector("#app");
// Utility functions

// renderToDom
const renderToDom = (divId, htmlToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = htmlToRender;
}

//cardsOnDom
const cardsOnDom = (array) => {
  let domString = "";

  for (const iterator of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${iterator.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${iterator.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`

  
  }
  renderToDom("#app" , domString);
}

const startApp = () => {
  cardsOnDom(houses);
}

startApp();

const expelled = [];
const firstYears = [];

const app = document.querySelector("#app");
const firstYearsDiv = document.querySelector("#first-years");

// Utility functions

// renderToDom
const renderToDom = (divId, htmlToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = htmlToRender;
};

//show students on dom
const studentsOnDom = (array) => {
  let domString = "";

  for (const iterator of array) {
    domString += `<div class="card" id=${iterator.id}>
    <div class="card-body">
      <h3 class="card-title">${iterator.name}</h3>
      <p>${iterator.house}</p>
      <button type="button" class="btn btn-danger" id="delete--${iterator.id}">Expel</button>
    </div>
  </div>`;
  }
  renderToDom("#first-years", domString);
};

const expelledOnDom = (array) => {
  let domString = "";

  for (const iterator of array) {
    domString += `<div class="card" id=${iterator.id} >
    <div class="card-body">
      <h3 class="card-title">${iterator.name}</h3>
      <p>${iterator.house}</p>
      <button type="button" class="btn btn-danger" id="delete--${iterator.id}">Expel</button>
    </div>
  </div>`;
  }
  renderToDom("#the-expelled", domString);
};

//create form
const createForm = () => {
  app.innerHTML += `
  <form id="sort-student-form">
  
    <div class>
      <label for="name" class="form-label"><h3>Enter First Year's Name</h3></label>
    </div>
    <div>
    <br>
      <label>Student:</label>
      <input type"text" placeholder="Barny Weasley" id="name">
      <button type="submit" id="sort-btn" class="btn btn-primary">Sort</button>
      </div>

      <div>
        
        <br>
        <div class="filter-buttons">
        <button type="button" class="btn btn-light" id ="all">All</button>
        <button type="button" class="btn btn-danger" id="gryffindor">Gryffindor</button>
        <button type="button" class="btn btn-warning" id="hufflepuff">Hufflepuff</button>
        <button type="button" class="btn btn-primary" id="ravenclaw">Ravenclaw</button>
        <button type="button" class="btn btn-success" id="slytherin">Slytherin</button>
        <button type="button" class="btn btn-dark" id="death-eaters">Death Eaters</button>
        </div>
        <hr>
      </div>
   
  </form>`;
  const form = document.querySelector("#sort-student-form");

  form.addEventListener("submit", createStudents);
};

//create filter buttons
const createFilterButtons = () => {
  app.innerHTML += `
  <div class="filter-buttons">
  <button type="button" class="btn btn-light" id ="all">All</button>
  <button type="button" class="btn btn-danger" id="gryffindor">Gryffindor</button>
  <button type="button" class="btn btn-warning" id="hufflepuff">Hufflepuff</button>
  <button type="button" class="btn btn-primary" id="ravenclaw">Ravenclaw</button>
  <button type="button" class="btn btn-success" id="slytherin">Slytherin</button>
  <button type="button" class="btn btn-dark" id="death-eaters">Death Eaters</button>
  </div>
  `;
};

//random number  function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// randomHouse function
function randomHouse() {
  if (randomNumber(1, 4) === 1) {
    return "Slytherin";
  } else if (randomNumber(1, 4) === 2) {
    return "Gryffindor";
  } else if (randomNumber(1, 4) === 3) {
    return "Hufflepuff";
  } else {
    return "Ravenclaw";
  }
}

//create students
const createStudents = (e) => {
  e.preventDefault();
  const form = document.querySelector("#sort-student-form");
  const newStudent = {
    id: firstYears.length + 1,
    name: document.querySelector("#name").value,
    house: randomHouse(),
  };

  firstYears.push(newStudent);
  form.reset();
  studentsOnDom(firstYears);
};

//delete
firstYearsDiv.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");

    const index = firstYears.findIndex((e) => e.id === Number(id));
    const copy = { ...firstYears[index] };
    firstYears.splice(index, 1);
    expelled.push(copy);

    studentsOnDom(firstYears);
    expelledOnDom(expelled);
    console.log(e);
  }
});

//add event listeners
const addListeners = () => {
  const sortBtn = document.querySelector("#begin-sort-btn");
  sortBtn.addEventListener("click", createForm);
};

// launch app
const startApp = () => {
  addListeners();
};

startApp();

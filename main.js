const expelled = [];
const firstYears = [];

const app = document.querySelector("#app");
const firstYearsDiv = document.querySelector("#first-years");
const expelledDiv = document.querySelector("#the-expelled")

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
    domString += `
    <div class="card" id=${iterator.id}>
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
  const gryffindorBtn = document.querySelector("#gryffindor");
  gryffindorBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of firstYears) {
      if (student.house === "Gryffindor") {
        domString += `<div class="card">
        <div class= "card-body">
          <h5 class= "card-title">${student.name}</h5>
          <p class="card-text">${student.house}</p>
          <button type="button" class="btn btn-danger" id="delete--">Expel</button>
        </div>`;
      }
      renderToDom("#first-years", domString);
    }
  });

  const allBtn = document.querySelector("#all");
  allBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of firstYears) {
      domString += `<div class="card">
    <div class= "card-body">
      <h5 class= "card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger" id="delete--">Expel</button>
    </div>`;
    }
    renderToDom("first-years", domString);
  });

  const hufflepuffBtn = document.querySelector("#hufflepuff");
  hufflepuffBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of firstYears) {
      if (student.house === "Hufflepuff") {
        domString += `<div class="card">
    <div class= "card-body">
      <h5 class= "card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger" id="delete--">Expel</button>
    </div>`;
      }
      firstYearsDiv.innerHTML = domString;
    }
  });
  const ravenclawBtn = document.querySelector("#ravenclaw");
  ravenclawBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of firstYears) {
      if (student.house === "Ravenclaw") {
        domString += `<div class="card">
    <div class= "card-body">
      <h5 class= "card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger" id="delete--">Expel</button>
    </div>`;
      }
      renderToDom("#first-years" , domString)
    }
  });
  const slytherinBtn = document.querySelector("#slytherin");
  slytherinBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of firstYears) {
      if (student.house === "Slytherin") {
        domString += `<div class="card">
    <div class= "card-body">
      <h5 class= "card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger" id="delete--">Expel</button>
    </div>`;
      }
      firstYearsDiv.innerHTML = domString;
    }
  });
  const deathEaterBtn = document.querySelector("#death-eaters");
  deathEaterBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of expelled) {
      domString += `<div class="card">
    <div class= "card-body">
      <h5 class= "card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger" id="delete--">Expel</button>
    </div>`;

      expelledDiv.innerHTML = domString;
    }
  });
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
    copy.house = "Death Eater"
    firstYears.splice(index, 1);
    expelled.push(copy);

    studentsOnDom(firstYears);
    expelledOnDom(expelled);
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

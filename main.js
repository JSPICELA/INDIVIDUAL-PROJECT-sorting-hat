//data , object
const houses = [
  {
    id: 1,
    name: "Slytherin",
    color: "Green",
    image: "./asset/slytherin.jpg",
  },

  {
    id: 2,
    name: "Gryffindor",
    color: "Red",
    image: "./asset/gryffindor.jpg",
  },

  {
    id: 3,
    name: "Hufflepuff",
    color: "Yellow",
    image: "./asset/hufflepuff.jpg",
  },

  {
    id: 4,
    name: "Ravenclaw",
    color: "Purple",
    image: "./asset/ravenclaw.png",
  },
];

const students = [
  {
    id: 1,
    name: "Draco Malfoy",
    house: "Slytherin",
    studentPhoto: "./asset/malfoy.jpg",
  },

  {
    id: 2,
    name: "Severus Snape",
    house: "Slytherin",
    studentPhoto: "./asset/snape.jpg",
  },

  {
    id: 3,
    name: "Vincent Crabbe",
    house: "Slytherin",
    studentPhoto: "./asset/crabbe.jpg",
  },

  {
    id: 4,
    name: "Michael Corner",
    house: "Ravenclaw",
    studentPhoto: "./asset/corner.jpg",
  },

  {
    id: 5,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    studentPhoto: "./asset/lovegood.jpg",
  },

  {
    id: 6,
    name: "Cho Chang",
    house: "Ravenclaw",
    studentPhoto: "./asset/chang.jpg",
  },

  {
    id: 7,
    name: "Harry Potter",
    house: "Gryffindor",
    studentPhoto: "./asset/potter.jpg",
  },

  {
    id: 8,
    name: "Hermione Granger",
    house: "Gryffindor",
    studentPhoto: "./asset/granger.jpg",
  },

  {
    id: 9,
    name: "Ron Weasley",
    house: "Gryffindor",
    studentPhoto: "./asset/ron.jpg",
  },

  {
    id: 10,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    studentPhoto: "./asset/diggory.jpg",
  },

  {
    id: 11,
    name: "Hannah Abbott",
    house: "Hufflepuff",
    studentPhoto: "./asset/abbott.jpg",
  },

  {
    id: 12,
    name: "Zacharias Smith",
    house: "Hufflepuff",
    studentPhoto: "./asset/smith.jpg",
  },
];

const firstYears = [
  {
    id: 1,
    name: "Bruton Gaster",
    studentPhoto:
      "https://24.media.tumblr.com/c88840c12f2fb6d23aa9af29d73fedb8/tumblr_mz4betLTJg1sycm4xo1_250.gif",
    house: "Gryffindor",
  },
];

const app = document.querySelector("#app");

// Utility functions

// renderToDom
const renderToDom = (divId, htmlToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = htmlToRender;
};

//introduction
const introduction = () => {
  let domString = "";

  domString += `<h5 class="introduction">Welcome to Hogwarts</h5>
  <hr>`;

  renderToDom("#app", domString);
};

//begin sort button
const createSortButton = () => {
  app.innerHTML += `<button class="btn btn-primary" id="begin-sort-btn">Begin Sort</button>`;
  
};

//show students on dom
const studentsOnDom = (array) => {
  let domString = "";

  for (const iterator of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${iterator.studentPhoto}" class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title">${iterator.name}</h3>
      <p>${iterator.house}</p>
      <button type="button" class="btn btn-danger">Expel</button>
    </div>
  </div>`;
  }
  app.innerHTML = domString;
};

//create form
const createForm = () => {
  //xx

 app.insertAdjacentHTML('beforebegin' , `<div class="container">
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
        <label>Student Photo:</label>
        <input type="url" class="form-label" id="url"  placeholder="https://">
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
   </div>
  </form>`);
  const form = document.querySelector("#sort-student-form");
  
  form.addEventListener("submit", createStudents);

  const gryffindorBtn = document.querySelector("#gryffindor");
  gryffindorBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of firstYears) {
      if (firstYears.house === "Gryffindor") {
        domString += `<div class="card" style="width: 18rem;">
        <div class= "card-body">
          <h5 class= "card-title">${student.name}</h5>
          <img src=${student.studentPhoto} class="card-img-top" >
          <p class="card-text">${student.house}</p>
          <button type="button" class="btn btn-danger">Expel</button>
        </div>`;
      }
      app.innerHTML = domString;
    }
  });

  const allBtn = document.querySelector("#all");
  allBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of firstYears) {
      domString += `<div class="card" style="width: 18rem;">
    <div class= "card-body">
      <h5 class= "card-title">${student.name}</h5>
      <img src=${student.studentPhoto} class="card-img-top" >
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger">Expel</button>
    </div>`;
    }
    renderToDom("#app", domString);
  });

  const hufflepuffBtn = document.querySelector("#hufflepuff");
  hufflepuffBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of firstYears) {
      if (firstYears.house === "Hufflepuff") {
        domString += `<div class="card" style="width: 18rem;">
    <div class= "card-body">
      <h5 class= "card-title">${student.name}</h5>
      <img src=${student.studentPhoto} class="card-img-top" >
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger">Expel</button>
    </div>`;
      }
      app.innerHTML = domString;
    }
  });
  const ravenclawBtn = document.querySelector("#ravenclaw");
  ravenclawBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of firstYears) {
      if (firstYears.house === "Ravenclaw") {
        domString += `<div class="card" style="width: 18rem;">
    <div class= "card-body">
      <h5 class= "card-title">${student.name}</h5>
      <img src=${student.studentPhoto} class="card-img-top" >
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger">Expel</button>
    </div>`;
      }
      app.innerHTML = domString;
    }
  });
  const slytherinBtn = document.querySelector("#slytherin");
  slytherinBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of firstYears) {
      if (firstYears.house === "Slytherin") {
        domString += `<div class="card" style="width: 18rem;">
    <div class= "card-body">
      <h5 class= "card-title">${student.name}</h5>
      <img src=${student.studentPhoto} class="card-img-top" >
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger">Expel</button>
    </div>`;
      }
      app.innerHTML = domString;
    }
  });
  const deathEaterBtn = document.querySelector("#death-eaters");
  deathEaterBtn.addEventListener("click", function () {
    let domString = "";

    for (const student of firstYears) {
      if (firstYears.house === "Death Eater") {
        domString += `<div class="card" style="width: 18rem;">
    <div class= "card-body">
      <h5 class= "card-title">${student.name}</h5>
      <img src=${student.studentPhoto} class="card-img-top" >
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger">Expel</button>
    </div>`;
      }
      app.innerHTML = domString;
    }
  });
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
    studentPhoto: document.querySelector("#url").value,
    house: randomHouse(),
  };

  firstYears.push(newStudent);
  form.reset();
  studentsOnDom(firstYears);
  console.log("click");
};

//add event listeners
const addListeners = () => {
  const sortBtn = document.querySelector("#begin-sort-btn");
  sortBtn.addEventListener("click", createForm);
};

// launch app
const startApp = () => {
  introduction();
  createSortButton();
  addListeners();
};

startApp();

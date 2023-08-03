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

const app = document.querySelector("#app");
const hat = document.querySelector("#hat");
const introduce = document.querySelector("#introduction");
const showForm = document.querySelector("#show-form");
// Utility functions

// renderToDom
const renderToDom = (divId, htmlToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = htmlToRender;
};

//housesOnDom
const housesOnDom = (array) => {
  let domString = "";

  for (const iterator of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${iterator.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${iterator.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  }
  renderToDom("#app", domString);
};

// create sorting hat
const createHat = () => {
  let domString = "";
  domString += `
  <div class="card" style="width: 18rem;">
  <img src="./asset/sorting-hat.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">I am the Sorting Hat</h5>
    <p class="card-text">I will now sort you into your houses. The four house are... </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Gryffindor</li>
    <li class="list-group-item">Slytherin</li>
    <li class="list-group-item">Hufflepuff</li>
    <li class="list-group-item"> Ravenclaw</li>
  </ul>
  <div class="card-body">
    <button id="form-btn">Begin Sorting</button>
  </div>
</div>`;

  renderToDom("#hat", domString);
};

//introduce hat and what not
const introduction = () => {
  let domString = "";

  domString += `
  <div class="container">
    <div>
      <h3>Welcome to Hogwarts</h3>
      <p>Oh, you may not think I'm pretty,
      But don't judge on what you see,
      I'll eat myself if you can find
      A smarter hat than me.
      You can keep your bowlers black,
      Your top hats sleek and tall,
      For I'm the Hogwarts Sorting Hat
      And I can cap them all.
      There's nothing hidden in your head
      The Sorting Hat can't see,
      So try me on and I will tell you
      Where you ought to be.
      You might belong in Gryffindor,
      Where dwell the brave at heart,
      Their daring, nerve and chivalry
      Set Gryffindors apart;
      You might belong in Hufflepuff,
      Where they are just and loyal,
      Those patient Hufflepuffs are true
      And unafraid of toil;
      Or yet in wise old Ravenclaw,
      If you've a ready mind,
      Where those of wit and learning,
      Will always find their kind;
      Or perhaps in Slytherin
      You'll make your real friends,
      Those cunning folk use any means
      To achieve their ends.
      So put me on! Don't be afraid!
      And don't get in a flap!
      You're in safe hands (though I have none)
      For I'm a Thinking Cap!</p>
    </div>
  </div>
  `;

  renderToDom("#introduce", domString);
};

//make filter students buttons
const filterStudentButtons = () => {
  let domString = "";

  domString += `<button type="button" class="btn btn-light" id ="all">All</button>
  <button type="button" class="btn btn-danger" id="gryffindor">Gryffindor</button>
  <button type="button" class="btn btn-warning" id="hufflepuff">Hufflepuff</button>
  <button type="button" class="btn btn-primary" id="ravenclaw">Ravenclaw</button>
  <button type="button" class="btn btn-success" id="slytherin">Slytherin</button>
  <button type="button" class="btn btn-dark" id="death-eaters">Death Eaters</button>`

  renderToDom("#filter-students-buttons" , domString);
}

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
  renderToDom("#app", domString);
};

//CREATE FORM
const createForm = () => {
  // target button to render
  const buttonToShow = document.querySelector("#form-btn");

  // listener on click to create form
  buttonToShow.addEventListener("click", function () {
    app.innerHTML = `<form id="sort-student-form">
    <div class="mb-3">
      <label for="name" class="form-label">What is the student's name?</label>
      <input type="text" class="form-control"  placeholder="name" id="name" aria-describedby="name">
    </div>
    <div class="mb-3">
      <input type="url" class="form-label" id="url"  placeholder="https://">
      <label class="form-label" for="exampleCheck1">Image URL</label>
    </div>
    <button type="submit" id="reset-btn">Sort</button>
  </form>`;
    const form = document.querySelector("#sort-student-form");
    form.reset();
    form.addEventListener("submit", create);
  });
};

//logic
 // pick random number between 1 and 4
 // 
 function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
 }

function randomHouse () {
  if (randomNumber(1,4) === 1) {
    return "Slytherin"
  } else if (randomNumber(1,4) === 2) {
    return "Gryffindor"
  } else if (randomNumber(1,4) === 3) {
    return "Huffelpuff"
  } else {
    return "Ravenclaw"
  }
}

const create = (e) => {
  e.preventDefault();

  // create new student object
  const newStudent = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
    studentPhoto: document.querySelector("#url").value,
    house: randomHouse()
  };

  students.push(newStudent);
  studentsOnDom(students);
 //studentForm.reset();
};




// filter student function
const filterStudents = (house) => {
  if (students.house === house) {

  }
}

const startApp = () => {
  introduction();
  createHat();
  filterStudentButtons();
  studentsOnDom(students);
  createForm();
};

startApp();

// filter students
const allBtn = document.querySelector("#all");
allBtn.addEventListener("click" , function () {
  let domString = "";

  for (const student of students) {
    
      domString += `<div class="card" style="width: 18rem;">
    <div class= "card-body">
      <h5 class= "card-title">${student.name}</h5>
      <img src=${student.studentPhoto} class="card-img-top" >
      <p class="card-text">${student.house}</p>
      <button type="button" class="btn btn-danger">Expel</button>
    </div>`;
    }
    renderToDom("#app" , domString);
  }
);

const hufflepuffBtn = document.querySelector("#hufflepuff");
hufflepuffBtn.addEventListener("click" , function () {
  let domString = "";

  for (const student of students) {
    if (student.house === "Hufflepuff"){
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
ravenclawBtn.addEventListener("click" , function () {
  let domString = "";

  for (const student of students) {
    if (student.house === "Ravenclaw"){
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
slytherinBtn.addEventListener("click" , function () {
  let domString = "";

  for (const student of students) {
    if (student.house === "Slytherin"){
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
deathEaterBtn.addEventListener("click" , function () {
  let domString = "";

  for (const student of students) {
    if (student.house === "Death Eater"){
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

const gryffindorBtn = document.querySelector("#gryffindor");
gryffindorBtn.addEventListener("click" , function () {
  let domString = "";

  for (const student of students) {
    if (student.house === "Gryffindor"){
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

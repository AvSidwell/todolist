let array1 = [];
function add() {
  let val = document.getElementById("input").value;
  array1.push(val);
  console.log(array1);

  document.getElementById("display").innerHTML = array1;
}

// console.log(array1)
// document.write(array1);
// let person = [
//   {
//     name: "tom",
//     surname: "jerry",
//   },
//   {
//     name: "tom2",
//     surname: "jerry",
//   },
//   {
//     name: "tom3",
//     surname: "jerry3",
//   },
// ];

// console.log(person).value;

// let myPeople = document.querySelector("display2");
// person.forEach((per) => {
//   myPeople.innerHTML +=`
//   <h1>${per.name}</h1>
//   <h3>${per.surname}</h2>`
// });

// let array2 = [];

function ourNames() {
  let valueName = document.getElementById("inputName").value;
  document.getElementById("apear2").innerHTML += `${valueName}<br>`;
}

localStorage.setItem('ourNames', JSON.stringify('apear2'));

// let array3 = [];

function surnames() {
  let valueSurname = document.getElementById("inputName").value;
  // array3.push(valueSurname);

  document.getElementById("apear3").innerHTML += `${valueSurname}<br>`;
}

// let array4 = [];

function age() {
  let valueAge = document.getElementById("inputName").value;
  // array4.push(valueAge);
  document.getElementById("apear4").innerHTML += `${valueAge}<br>`;
}

let array = [];

function add() {
  let valueBe = document.getElementById("input").value;
  array.push(valueBe);
  valueBe = document.getElementById("dis").innerHTML = array;
}

let people = [
  {
    name: "Timothy",
    surname: "Barry",
    age: 20,
  },
  {
    name: "Sidwell",
    surname: "Batyi",
    age: 18,
  },
  {
    name: "Lyle",
    surname: "Brown",
    age: 23,
  },
  {
    name: "Xola",
    surname: "Bangaza",
    age: 18,
  },
  {
    name: "Olwethu",
    surname: "Bhiya",
    age: 18,
  },
  {
    name: "Zulaigah",
    surname: "Benjamin",
    age: 20,
  },
  {
    name: "Marcel",
    surname: "Brown",
    age: 19,
  },
  {
    name: "Ridhaa",
    surname: "Gabier",
    age: 22,
  },
];

let myPeople = document.getElementById("objectsPeople");
people.forEach((per) => {
  myPeople.innerHTML += `
  <table class="table table-dark text-white text-center m-0 p-0 border-white">
        <tr class="" style="width: 33%">
            <td class="fs-4 text-center border-2" style="width: 33%">${per.name}</td>
            <td class="fs-4 text-center border-2" style="width: 33%">${per.surname}</td>
            <td class="fs-4 text-center border-2" style="width: 33%">${per.age}</td>
        </tr>
    </table>
    `;
});
let peoples = [];

function addPerson() {
  let Value = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    age: document.getElementById("age").value,
  };
 

  peoples.push(Value);

  let myPeoples = document.getElementById("tablePeople");
  peoples.forEach((data) => {
    myPeoples.innerHTML += `<tr class="" style="width: 33%">
  <td class="fs-4 text-center border-2" style="width: 33%">${data.name}</td>
  <td class="fs-4 text-center border-2" style="width: 33%">${data.surname}</td>
  <td class="fs-4 text-center border-2" style="width: 33%">${data.age}</td>
  </tr>
  `;
  });
}

//localStorage
//localStorage.seItem()
//localStorage.getItem()
//localStorage.removeItem()


const characterData = [
  {
      "id": 1,
      "name": "Mario",
      "quotes": [
          {
              "id": 1,
              "quote": "It's a me, Mario!"
          },
          {
              "id": 2,
              "quote": "Let's-a-go!"
          },
          {
              "id": 3,
              "quote": "Yipeeeeeee!"
          }
      ]
  },
  {
      "id": 2,
      "name": "John McLane",
      "quotes": [
          {
              "id": 4,
              "quote": "Yipee-kaye, Mother Fucker!"
          },
          {
              "id": 5,
              "quote": "Awww, no bullets!"
          },
          {
              "id": 6,
              "quote": "Come out to the coast, we'll get together, have a few laughs..."
          }
      ]
  },
  {
      "id": 3,
      "name": "Arnold Schwarzenegger",
      "quotes": [
          {
              "id": 7,
              "quote": "I'll be back."
          },
          {
              "id": 8,
              "quote": "Hasta la vista, baby."
          },
          {
              "id": 9,
              "quote": "It's not a tumor!"
          }
      ]
  }
];

let currentCharacter = characterData[0];
let currentQuoteList = currentCharacter.quotes;
let characterQuote = document.getElementById("character-quote");
const quoteButton = document.getElementById("quote-button");
const characterDropDown = document.getElementById('characterDropDown');

for (let i in characterData) {
  let option = document.createElement("option");

  option.setAttribute('value', characterData[i].id);

  let optionText = document.createTextNode(characterData[i].name);

  option.appendChild(optionText);

  characterDropDown.appendChild(option);
}

characterDropDown.addEventListener('change', e => {
  let currentCharacterId = e.target.value;
  currentCharacter = characterData[currentCharacterId - 1];
  document.getElementById('character-quote').innerHTML = "";
  currentQuoteList = currentCharacter.quotes;
  console.log(currentCharacter);
});

quoteButton.addEventListener("click", e =>{
  console.log(currentQuoteList);
  characterQuote.innerHTML = currentQuoteList[Math.floor(Math.random() * currentQuoteList.length)].quote;
});























/* Brandon's old code */

// const getAll = require('./components/GetAll');

// const characterForm = document.getElementById('characterForm');
// const selectionInput = document.getElementById('selectionInput');
// const btnSelect = document.getElementById('btnSelect');
// const selection = document.getElementById('selection');
// const character = document.getElementById('character');
// const quoteBox = document.querySelector('.quote-container');

// const charactersDropDown = document.getElementById('charactersDropDown');

// let currentCharacter = {};
// let characterList = [];
// let data = [];
// let NUMBER_OF_CHARACTERS;

// ((url = './db/all.json', cb) => {
//   const request = new XMLHttpRequest();
//   request.open('GET', url);
//   request.responseType = 'json';

//   request.onload = () => {
//     data = request.response;
//     NUMBER_OF_CHARACTERS = data.length;

//     data.map((i) => {
//       characterList = characterList.concat(i.name);
//       selectionInput.innerHTML += `<option value="${i.name}" class="persona-${i.id}" data-id="${i.id}" />`;
//     });

//     console.log('characterList', characterList);

//     selectionInput.focus();
//   };

//   request.send();

//   let quoteIndex = -1;
//   const getQuoteIndex = () => quoteIndex;
//   const setQuoteIndex = (int) => (quoteIndex = int);

//   btnSelect.onclick = function () {
//     let quoteList = currentCharacter.quotes;
//     let index = getQuoteIndex();
//     if (quoteList.length > 0) {
//       quoteBox.innerHTML = quoteList[index];
//     }
//   };

//   const getSelectedId = () =>
//     ~~selectionInput.children[selectionInput.selectedIndex].getAttribute(
//       'data-id'
//     );

//   function setCurrentCharacter() {
//     for (let i = 0; i < data.length; i++) {
//       if (data[i].id === getSelectedId()) {
//         currentCharacter = {
//           id: data[i].id,
//           name: data[i].name,
//           quotes: data[i].quotes.map((quote) => quote),
//         };
//       }
//     }
//   }

//   selectionInput.onchange = function () {
//     setCurrentCharacter();
//     //characterForm.reset();
//   };

//   characterForm.addEventListener('keydown', (event) => {
//     if (event.keyCode === 13) {
//       event.preventDefault();
//     }
//   });

//   btnSelect.addEventListener('click', (event) => {
//     event.preventDefault();
//   });

//   btnSelect.onmousedown = (event) => {
//     btnSelect.style.color = '#139C63';
//     btnSelect.style.backgroundColor = '#E3FFF1';
//     btnSelect.style.borderColor = '#139C63';
//     event.preventDefault();
//   };

//   btnSelect.onmouseup = (event) => {
//     btnSelect.style.color = '#30c9a3';
//     btnSelect.style.backgroundColor = '#fafcfb';
//     btnSelect.style.borderColor = '#30c9a3';
//     event.preventDefault();
//   };

//   btnSelect.onmouseleave = () => {
//     event.preventDefault();
//   };

//   btnSelect.onmouseover = () => {};
// })();

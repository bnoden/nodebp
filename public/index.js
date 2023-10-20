
let characterData = {};

fetch('http://localhost:8080/persona/characters', {
  method: 'GET', // This is the default method, so you can omit it.
  headers: {
    'Content-Type': 'application/json', // Specify the content type if needed.
    // You can add more headers here if required.
  },
  // You can include other options like credentials, mode, etc.
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON (or use .text() for plain text).
  })
  .then(data => {
    console.log(data); // Do something with the JSON data.
    characterData = data;
    const characterIdList = Object.keys(characterData);
    let currentCharacter = characterData[characterIdList[0]];
    console.log(currentCharacter);
    let currentQuoteList = currentCharacter.quotes;
    let characterQuote = document.getElementById("character-quote");
    const quoteButton = document.getElementById("quote-button");
    const characterDropDown = document.getElementById('characterDropDown');
    

    characterIdList.forEach(characterId => {
      let option = document.createElement("option");

      option.setAttribute('value', characterId);

      let optionText = document.createTextNode(characterData[characterId].name);

      option.appendChild(optionText);

      characterDropDown.appendChild(option);
    });

    characterDropDown.addEventListener('change', e => {
      let currentCharacterId = e.target.value;
      currentCharacter = characterData[currentCharacterId];
      document.getElementById('character-quote').innerHTML = "";
      currentQuoteList = currentCharacter.quotes;
      console.log(currentCharacter);
    });

    quoteButton.addEventListener("click", e =>{
      console.log(currentQuoteList);
      characterQuote.innerHTML = currentQuoteList[Math.floor(Math.random() * currentQuoteList.length)].quote;
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  
// const characterData = [
//   {
//       "id": 1,
//       "name": "Mario",
//       "quotes": [
//           {
//               "id": 1,
//               "quote": "It's a me, Mario!"
//           },
//           {
//               "id": 2,
//               "quote": "Let's-a-go!"
//           },
//           {
//               "id": 3,
//               "quote": "Yipeeeeeee!"
//           }
//       ]
//   },
//   {
//       "id": 2,
//       "name": "John McLane",
//       "quotes": [
//           {
//               "id": 4,
//               "quote": "Yipee-kaye, Mother Fucker!"
//           },
//           {
//               "id": 5,
//               "quote": "Awww, no bullets!"
//           },
//           {
//               "id": 6,
//               "quote": "Come out to the coast, we'll get together, have a few laughs..."
//           }
//       ]
//   },
//   {
//       "id": 3,
//       "name": "Arnold Schwarzenegger",
//       "quotes": [
//           {
//               "id": 7,
//               "quote": "I'll be back."
//           },
//           {
//               "id": 8,
//               "quote": "Hasta la vista, baby."
//           },
//           {
//               "id": 9,
//               "quote": "It's not a tumor!"
//           }
//       ]
//   }
// ];


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

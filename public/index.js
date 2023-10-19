// const getAll = require('./components/GetAll');

const characterForm = document.getElementById('characterForm');
const selectionInput = document.getElementById('selectionInput');
const btnSelect = document.getElementById('btnSelect');
const selection = document.getElementById('selection');
const character = document.getElementById('character');
const quoteBox = document.querySelector('.quote-container');

let currentCharacter = {};
let characterList = [];
let data = [];
let NUMBER_OF_CHARACTERS;
let url = './db/all.json';

const request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';

request.onload = () => {
  data = request.response;
  NUMBER_OF_CHARACTERS = data.length;

  data.map((i) => {
    characterList = characterList.concat(i.name);
    selectionInput.innerHTML += `<option value="${i.name}" class="persona-${i.id}" data-id="${i.id}">${i.name}</option>`;
  });

  console.log('characterList', characterList);

  selectionInput.focus();
};

request.send();

let quoteIndex = -1;
const getQuoteIndex = () => quoteIndex;
const setQuoteIndex = (int) => (quoteIndex = int);

btnSelect.onclick = function () {
  let quoteList = currentCharacter.quotes;
  let index = getQuoteIndex();
  if (quoteList.length > 0) {
    quoteBox.innerHTML = quoteList[index];
  }
};

const getSelectedId = () =>
  ~~selectionInput.children[selectionInput.selectedIndex].getAttribute(
    'data-id'
  );

function setCurrentCharacter() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === getSelectedId()) {
      currentCharacter = {
        id: data[i].id,
        name: data[i].name,
        quotes: data[i].quotes.map((quote) => quote),
      };
    }
  }
}

selectionInput.onchange = function () {
  setCurrentCharacter();
  //characterForm.reset();
};

characterForm.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
});

btnSelect.addEventListener('click', (event) => {
  event.preventDefault();
});

btnSelect.onmousedown = (event) => {
  btnSelect.style.color = '#139C63';
  btnSelect.style.backgroundColor = '#E3FFF1';
  btnSelect.style.borderColor = '#139C63';
  event.preventDefault();
};

btnSelect.onmouseup = (event) => {
  btnSelect.style.color = '#30c9a3';
  btnSelect.style.backgroundColor = '#fafcfb';
  btnSelect.style.borderColor = '#30c9a3';
  event.preventDefault();
};

btnSelect.onmouseleave = () => {
  event.preventDefault();
};

btnSelect.onmouseover = () => {};

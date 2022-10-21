"use strict";
// Jag har för vana att kommentera på svenska i koden men att readme.md filen och commit kommentarer är på engelska,
// jag förstår att detta inte är optimalt men så har jag alltid gjort i solo projekt.

// Kopplar ihop listan, formuläret och knapparna i html med denna js fil
const list = document.getElementById("list");
const clear = document.getElementById("clear");
const form = document.getElementById("makeGroups");
const showGroupButton = document.getElementById("showGroup");
let greenGroup = [];
let redGroup = [];
let blueGroup = [];
let yellowGroup = [];
let firstNames = [];
let lastNames = [];
let hashGroup = [];
let fnGroup1 = [];
let fnGroup2 = [];
let fnGroup3 = [];
let discordGroup = [];
let githubGroup = [];
let skillsGroup = [];
let belongsToGroup = [];
let birthYearGroup = [];
let voidGroup = [];

// Från html så hämtar vi form som är en dropdown meny där vi kan välja vilken parameter vi vill sortera / gruppera efter.
// På form sätter vi en eventListener som aktiverar handleform funktionen när vi clickar på "Välj Parameter" knappen.
// Funktionen gör 4 saker:
// 1. Den hindrar sidan från att uppdatera sig med "event.preventDefault()" så att infon inte blir resettad.
// 2. Den hämtar infon användaren valt i dropdown menyn och lägger värdet i variabeln "result"
// 3. Den rensar info som redan skrivits ut så att inte samma info blir utskriven flera gånger.
// 4. Den kör funktionen getJsonInfo() och skickar med results som parameter.

form.addEventListener("submit", handleForm);
function handleForm(event) {
  event.preventDefault();
  let result = document.getElementById("groupAs").value;
  clearList();
  getJsonInfo(result);
}

// Här nedanför hämtar vi alla users från addressen "http://localhost:3000/api/users" genom att klicka på knappen "Välj Parameter" (beskrivs ovan).
// När man trycker på knappen hämtas users med fetch. Svaret vi får (res) konverteras till ett JSON objekt.
// Sen loopar vi igenom alla json filer med forEach() och använder oss av destrcturing för att plocka ut samtliga parametrar.
// Därefter, beroende på vad för parameter som valts i formuläret, så pushas parametrarna in i egna arrayer.

// Eftersom inte alla users har birthYear och zodiac som parametrar så sätter vi deras default värden
// till "no birthYear given" och "no zodiac given" så att man får info om varför dessa inte visas
// (istället för undefined), detta skulle såklart kunna göras med samtliga parametrar men jag har valt att
// endast göra det med parametrar jag vet inte finns på alla JSON objekt.

function getJsonInfo(tmp) {
  fetch("http://localhost:3000/api/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        let {
          firstname,
          lastname,
          belongsTo,
          discord,
          github,
          personalityType,
          skills,
          positiveExperience,
          explanation,
          hash,
          birthYear = "no birthYear given",
          zodiac: {
            name = "no zodiac name given",
            element = "no zodiac element given",
            stone = "no zodiac stone given",
            symbol = "no zodiac symbol given",
            dateMin = "no dateMin given",
            dateMax = "no dateMax given",
          } = "no zodiac given",
        } = item;

        const li = document.createElement("li");
        if (tmp === "firstname") {
          firstNames.push(firstname);
          li.innerText = `${firstname}`;
        }
        if (tmp === "lastname") {
          lastNames.push(lastname);
          li.innerText = `${lastname}`;
        }
        if (tmp === "discord") {
          discordGroup.push(discord);
          li.innerText = `${discord}`;
        }
        if (tmp === "github") {
          githubGroup.push(github);
          li.innerText = `${github}`;
        }
        if (tmp === "skills") {
          skillsGroup.push(skills);
          li.innerText = `${skills}`;
        }
        if (tmp === "personalityType") {
          sortByPersonalityType(personalityType, item);
          li.innerText = `${personalityType}`;
        }
        if (tmp === "hash") {
          hashGroup.push(hash);
          li.innerText = `${hash}`;
        }
        if (tmp === "belongsTo") {
          belongsToGroup.push(belongsTo);
          li.innerText = `${belongsTo}`;
        }
        if (tmp === "birthYear") {
          birthYearGroup.push(birthYear);
          li.innerText = `${birthYear}`;
        }
        list.appendChild(li);
      });
    });
}

clear.addEventListener("click", clearList);
// Rensar all data som visas i listan (tar bort alla child element i ul taggen)
function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

// Sorterar in personer i grupper baserat på färg (persontyp)
function sortByPersonalityType(color, personObject) {
  if (color === "grön") greenGroup.push(personObject);
  if (color === "röd") redGroup.push(personObject);
  if (color === "blå") blueGroup.push(personObject);
  if (color === "gul") yellowGroup.push(personObject);
}

// När man klickar på Visa Grupp knappen så körs showGroup och resetGroups funktionerna
showGroupButton.addEventListener("click", () => {
  showGroup();
  resetGroups();
});

// Resettar värdet på alla arrayer
function resetGroups() {
  greenGroup = [];
  redGroup = [];
  blueGroup = [];
  yellowGroup = [];
  firstNames = [];
  lastNames = [];
  hashGroup = [];
  fnGroup1 = [];
  fnGroup2 = [];
  fnGroup3 = [];
  discordGroup = [];
  githubGroup = [];
  skillsGroup = [];
  belongsToGroup = [];
  voidGroup = [];
}

// Rensar först listan och kallar sen på funktionen "printGroupMembers"
function showGroup() {
  clearList();
  let value = document.getElementById("groupAs").value;
  if (value === "firstname") {
    sortNameAlphabetically(firstNames);
  }
  if (value === "lastname") {
    sortNameAlphabetically(lastNames);
  }
  if (value === "skills" || value === "hash" || value === "birthYear") {
    fillUlWith(voidGroup, "error");
  }
  if (value === "personalityType") {
    fillUlWith(greenGroup, "color");
    fillUlWith(redGroup, "color");
    fillUlWith(yellowGroup, "color");
    fillUlWith(blueGroup, "color");
  }
  if (value === "belongsTo") {
    sortByNumber(belongsToGroup);
  }
  if (value === "github") {
    console.log(githubGroup.sort());
  }
  if (value === "discord") {
    console.log(discordGroup.sort());
  }
}

// Sorterar folk baserat på vilken grupp dom tillhörde (vilken siffra), detta är dock inte så
// hjälpsamt nu eftersom man bara ser gruppnummret men inte personen som tillhör den.
function sortByNumber(group) {
  let regEx = /\d/g;
  let arr = [];
  for (const person of group) {
    let digit = person.match(regEx);
    arr.push(digit);
  }
  arr.sort();
  arr.forEach((num) => {
    let li = document.createElement("li");
    li.innerText = num;
    list.appendChild(li);
  });
}

// Sorterar folk i alfabetisk ordning med hjälp av RegEx och  pushar dom i en av 3 arrayer
function sortNameAlphabetically(array) {
  for (const person of array) {
    const regExA = /([A-F])\w+/;
    const regExG = /([G-M])\w+/;
    const regExN = /([N-Z])\w+/;
    if (person.match(regExA)) {
      fnGroup1.push(person);
    }
    if (person.match(regExG)) {
      fnGroup2.push(person);
    }
    if (person.match(regExN)) {
      fnGroup3.push(person);
    }
  }
  fillUlWith(fnGroup1, "name", 1);
  fillUlWith(fnGroup2, "name", 2);
  fillUlWith(fnGroup3, "name", 3);
}

// Funktion som fyller ul taggen med li element beroende på parameter som angetts
function fillUlWith(group, string, num) {
  // Skriver ut samtliga medlemmar i sina respektive färg-grupper och visar dom på hemsidan
  if (string === "color") {
    for (const person of group) {
      let li = document.createElement("li");
      li.innerText = `Group ${person.personalityType}: ${person.firstname}`;
      list.appendChild(li);
    }
  }
  // Skriver ut ett error meddelande när parametern inte kan fördelas in i grupper
  if (string === "error") {
    let li = document.createElement("li");
    li.innerText = `Cant sort parameter`;
    list.appendChild(li);
  }
  if (string === "name") {
    // Sorterar efter namn - används till förnamn och efternamn
    group.sort();
    let li = document.createElement("li");
    li.innerText = `Group ${num}: ${group}`;
    list.appendChild(li);
  }
}

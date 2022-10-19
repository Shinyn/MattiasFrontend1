"use strict";

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

// Från html så hämtar vi form som är en dropdown meny där vi kan välja vilken parameter vi vill sortera / gruppera efter.
// På form sätter vi en eventListener som aktiverar handleform funktionen när vi clickar på submit knappen.
// Funktionen gör 4 saker:
// 1. Den hindrar sidan från att uppdatera sig med "event.preventDefault()" så att infon inte blir resettad.
// 2. Den hämtar infon användaren valt i dropdown menyn och lägger värdet i variabeln "result"
// 3. Den rensar info som redan skrivits ut så att inte samma info blir utskriven flera gånger.
// 4. Den kör funktionen getInfo() och skickar med results som parameter.

form.addEventListener("submit", handleForm);
function handleForm(event) {
  event.preventDefault();
  let result = document.getElementById("groupAs").value;
  clearList();
  getInfo(result);
}

// Här nedanför hämtar vi alla users från addressen "http://localhost:3000/api/users" genom att klicka på knappen "submit" (beskrivs ovan).
// När man trycker på knappen hämtas users med fetch. Svaret vi får (res) konverteras till ett json objekt.
// Sen loopar vi igenom alla json filer med forEach() och använder oss av destrcturing för att plocka ut samtliga parametrar.
//
// Eftersom inte alla users har birthYear och zodiac som parametrar så sätter vi
// deras default värden till "no birthYear given" och "no zodiac given" så att man
// får info om varför dessa inte visas (istället för undefined).

function getInfo(tmp) {
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
          li.innerText = `${discord}`;
        }
        if (tmp === "github") {
          li.innerText = `${github}`;
        }
        if (tmp === "skills") {
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
          li.innerText = `${belongsTo}`;
        }
        if (tmp === "birthYear") {
          li.innerText = `${birthYear}`;
        }
        list.appendChild(li);
      });
    });
}

// När man klickar på clear knappen så körs clearList funktionen
clear.addEventListener("click", clearList);
// Rensar all data som visas i listan (tar bort alla child element i ul taggen)
function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

// Skriver ut samtliga medlemmar i sina respektive färg-grupper och visar dom på hemsidan
function printGroupMembers(group) {
  for (const person of group) {
    let li = document.createElement("li");
    li.innerText = `People in group ${person.personalityType}: ${person.firstname}`;
    list.appendChild(li);
  }
}

// Sorterar in personer i grupper baserat på färg (persontyp)
function sortByPersonalityType(color, personObject) {
  if (color === "grön") greenGroup.push(personObject);
  if (color === "röd") redGroup.push(personObject);
  if (color === "blå") blueGroup.push(personObject);
  if (color === "gul") yellowGroup.push(personObject);
}
//--------------------------------------------------------------------
//FIXME: Här jobbar jag nu TODO: FIX!

// När man klickar på Visa Grupp knappen så körs showGroup funktionen
showGroupButton.addEventListener("click", () => {
  showGroup();
});

// Rensar först listan och kallar sen på funktionen "printGroupMembers"
function showGroup() {
  clearList();
  let value = document.getElementById("groupAs").value;
  if (value === "firstname") {
    for (const person of firstNames) {
      // Matchar förnamn mot RegEx och pushar in folk i rätt arrayer
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
    // Sorterar grupperna och kallar på createDiv som skapar li som appendas på ul i html
    fnGroup1.sort();
    fnGroup2.sort();
    fnGroup3.sort();
    createDiv(1, fnGroup1);
    createDiv(2, fnGroup2);
    createDiv(3, fnGroup3);
  }
  if (value === "lastname") {
    console.log(lastNames.sort());
  }
  if (value === "hash") {
    hashGroup.forEach((element) => {
      element.filter((word) => word.split(""));
    });
    console.log(hashGroup.sort());
  }
  if (value === "personalityType") {
    printGroupMembers(greenGroup);
    printGroupMembers(yellowGroup);
    printGroupMembers(redGroup);
    printGroupMembers(blueGroup);
  }
}

//FIXME: Sorterar det som skickas in i alfabetisk ordning
// Tar in array med personer som ska grupperas (dom har redan blivit sorterade vid dehär laget
// använd RegEx för att matcha i olika grupper

function createDiv(num, group) {
  let li = document.createElement("li");
  li.innerText = `Group ${num}: ${group}`;
  list.appendChild(li);
}

"use strict";
const list = document.getElementById("list");
const clear = document.getElementById("clear");
const form = document.getElementById("makeGroups");

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
// Sen loopar vi igenom alla json filer med forEach() och använder oss av destrcturing för att plocka ut valda parametrar.
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
          li.innerText = `${firstname}`;
        }
        if (tmp === "lastname") {
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
          li.innerText = `${personalityType}`;
        }
        if (tmp === "hash") {
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

// Rensar all data som visas i listan (tar bort alla child element i ul taggen)
clear.addEventListener("click", clearList);
function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

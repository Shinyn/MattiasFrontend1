# Make Groups (Examining assignment for frontend 1)

---

## Instructions for installing & running the program:

To clone and run this program you'll need Git and Node.js installed.

- Clone repo
- npm install
- npm run init (OPTIONAL) - If you want to add your own information
- npm start
- Click "Mattias"
- Chose parameter from the dropdown menu
- Click "Välj Parameter"
- Click "Visa grupp"
- Click "Rensa" to clear the field

---

## Purpose of the program:

- The program sorts and displays JSON files based on a parameter the user chooses from the dropdown menu.

### Simpler:

- Takes info, sorts it into groups and displays it on a webpage.

---

### This program exist as:

1. A personal learning tool for coding
2. A way to sort and print out information from JSON objects.
3. The examining assignment for the frontend 1 course.

---

### Who could benefit from this:

1. Teachers / coaches who need to sort students into groups
2. Companies that want to organize JSON data

---

## Technical documentation:

**Summary:**

- A program that prints out JSON files organized into separate groups chosen from a dropdown menu

### If you want to use the code:

1. Use fetch() to access the JSON files on the local server
2. Use forEach() to go through all files and use destructuring to access the key / value pair of each individual file
3. Use a function that sorts the files into groups based on one of the key's from the JSON file TODO: What function - be more specific
4. Use document.getelementById() to connect a button in html with js so that when you press the button

3.2 A step by step guide to using the code you have written.

- [ ] Skriv om vad man kan göra för att tweeka programmet så att man kan använda sig av alla parametrar i json filerna, samt vad man behöver lägga till för att visa dom i html'en.

---

## Known Bugs:

1. Clicking the "Välj Parameter" button more than once will multiply the elements in the list by amount of clicks
2. Clicking "Visa Grupp" twice will clear the list of elements

---

## Improvements to be made if i ever return to this project:

1. Fixing the bugs
2. Cleaning up the code
3. Making it dynamic so that more parameters can be added
4. Making it possible to chose group-size
5. Give it a better look and styling with CSS

---

## Contribution

The bulk of the code is written by my teacher _Peter Karlsson_ a.k.a. _rymdpeter_

```
Code written by me:
- mattias.html
- mattias.js
- mattias.css
- README-Mattias.md (This file)
```

---

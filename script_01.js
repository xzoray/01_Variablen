"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hi");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration
// firstName = "Sohrab"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName;
// familyName = "Arenja";
// console.log(familyName);

/***** 03 Deklaration + Wertzuweisung II *****/

// let firstName, familyName;

// firstName = prompt("Bitte Vorname eingeben: ");
// familyName = prompt("Bitte Nachname eingeben: ");

// console.log(firstName + " " + familyName);

/* JS is an untyped language! */
// let test;
// test = "Figma";
// test = 8;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03a Variablen vs. Konstanten *****/

// let firstName = "Sohrab"; // Deklaration
// firstName = "Soraya"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// const firstName = "Sohrab"; // Deklaration
// firstName = "Soraya"; // Wertzuweisung
// console.log(firstName); // Ausgabe

/***** 04 Berechnung *****/

let ageJohn, ageMark; // Deklaration
const birthYearJohn = 2000;
const birthYearMark = 1990;

let date = new Date(); // Systemfunktion Datum
let year = date.getFullYear(); // Daten liefern lassen!
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
'use strict';

// hold the date and time
// this holds reference to the value I assigned
let today = new Date();
let formatDate = today.toDateString();

// saving the result of reformatting the date
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

console.log('Here\'s a hidden message');
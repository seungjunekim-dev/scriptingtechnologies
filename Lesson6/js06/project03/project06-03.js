"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Seungjune Kim
      Date:   02/26/2026

      Filename: project06-03.js
*/

// Declare the useShip variable to reference the checkbox
let useShip = document.getElementById("useShip");

// Add event listener to run the copy function when clicked
useShip.addEventListener("click", copyShippingToBilling);

// Function to copy shipping data to billing data
function copyShippingToBilling() {
   if (useShip.checked) {
      document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
      document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
      document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
      document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
      document.getElementById("cityBill").value = document.getElementById("cityShip").value;
      document.getElementById("countryBill").value = document.getElementById("countryShip").value;
      document.getElementById("codeBill").value = document.getElementById("codeShip").value;
      
      // Set state selection by index
      document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
   }
}

// --- Validation Logic (Steps 5-7) ---

// Select all text input elements
let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

// Loop through elements and add 'invalid' event listener
for (let i = 0; i < fieldCount; i++) {
   formElements[i].addEventListener("invalid", showValidationError);
}

// Function to display custom error message
function showValidationError(evt) {
   evt.preventDefault(); // Stop native browser tooltip
   errorBox.textContent = "Complete all highlighted fields"; // Set custom message
}
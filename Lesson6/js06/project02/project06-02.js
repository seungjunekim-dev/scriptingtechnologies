"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Seungjune Kim
      Date:   02/26/2026

      Filename: project06-02.js
*/

// Run the script when the page loads
window.addEventListener("load", function() {
   
   // Select all 'select' elements within the form with id 'govLinks'
   let allSelect = document.querySelectorAll("form#govLinks select");
   
   // Iterate through each selection list
   for (let i = 0; i < allSelect.length; i++) {
      
      // Add an onchange event handler to each list
      allSelect[i].onchange = function(evt) {
         
         // Retrieve the value of the selected option
         let linkURL = evt.target.value;
         
         // Open the link in a new browser window
         let newWin = window.open(linkURL);
      };
   }
});

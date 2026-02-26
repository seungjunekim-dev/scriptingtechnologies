"use strict";
/* JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list
      Author: Seungjune Kim
      Date:   02/19/2026

      Filename: project05-02.js
*/

// Step 3: Declare variables for the images and the two containers
let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

// Step 4: Create a for loop to iterate through the images collection
for (let i = 0; i < images.length; i++) {
   
   // Step 5: Add an onclick event handler to each image
   images[i].onclick = function() {
      
      // Step 6a: If the parent is the photo bucket, move to the photo list
      if (this.parentElement.id === "photo_bucket") {
         let newItem = document.createElement("li");
         photoList.appendChild(newItem);
         newItem.appendChild(this);
      } 
      // Step 6b: Otherwise, move it back to the photo bucket
      else {
         let oldItem = this.parentElement;
         photoBucket.appendChild(this);
         oldItem.parentElement.removeChild(oldItem);
      }
   };
}

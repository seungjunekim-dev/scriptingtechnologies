"use strict";
/* JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Seungjune Kim
      Date:   02/19/2026

      Filename: project05-03.js
*/

// Step 3: Declare variables for the document structure and heading tracking
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

// Step 4: Iterate through all child elements of the sourceDoc
for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
   
   // Step 5: Check if the current node is an H2 heading
   if (n.nodeName === heading) {
      
      // Step 6a & 6b: Create an anchor and set its name attribute
      let anchor = document.createElement("a");
      anchor.name = "doclink" + headingCount;
      
      // Step 6c: Insert the anchor before the first child of the heading node
      n.insertBefore(anchor, n.firstElementChild);
      
      // Step 6d: Create a list item and a link, then append the link to the list item
      let listItem = document.createElement("li");
      let link = document.createElement("a");
      listItem.appendChild(link);
      
      // Step 6e & 6f: Set the text and href for the link
      link.textContent = n.textContent;
      link.href = "#doclink" + headingCount; 
      
      // Step 6g: Append the completed list item to the Table of Contents (toc)
      toc.appendChild(listItem);
      
      // Step 6h: Increment the heading count for the next iteration
      headingCount++;
   }
}

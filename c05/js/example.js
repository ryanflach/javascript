// ADDING ITESM TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0];  // Get the first <ul> element

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li');     // Create element
var newTextLast = document.createTextNode('cream'); // Create text node
newItemLast.appendChild(newTextLast);               // Add text node to element
list.appendChild(newItemLast);                      // Add element to end of list

// ADD NEW ITEM TO START OF LIST
var newItemFirst = document.createElement('li');    // Create element
var newTextFirst = document.createTextNode('kale'); // Create text node
newItemFirst.appendChild(newTextFirst);             // Add text node to element
list.insertBefore(newItemFirst, list.firstChild);   // Add element to start of list

var listItems = document.querySelectorAll('li');    // Select all <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for (var i = 0; i < listItems.length; i++) {        // Loop through elements
  listItems[i].className = 'cool';                  // Change class to cool
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');         // Select <h2> element
var headingText = heading.firstChild.nodeValue;     // Get <h2> text
var totalItems = listItems.length;                  // Number of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>'; // Content
heading.innerHTML = newHeading;                     // Update <h2>

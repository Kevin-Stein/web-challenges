console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const bookTitle = "The fantastic Journey of Mr.Qilly";
const bookAuthor = "Emily Simmons";
let ratingNum = 4.7;
let salesNum = 3456754;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
console.log(bookTitle);
console.log(bookAuthor);
console.log(ratingNum);
console.log(salesNum);
// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log(bookTitle);
  console.log(bookAuthor);
  console.log(ratingNum);
  console.log(salesNum);
}

logBookData();
// --^-- write your code here --^--

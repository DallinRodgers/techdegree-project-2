/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const studentList = document.querySelector(".student-list");
const studentArray = studentList.querySelectorAll("li");
let page = 1;
const studentsPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage(list, page) {
  // loop over items in the list parameter
  // If the index of the list item is >= the index of the first item that should be shown on the page
  // and the list item index is <= the index of the last item that should be shown on the page, show it
  const firstStudent = page * 10 - 10;
  const lastStudent = page * 10 - 1;

  for (let i = 0; i < list.length; i++) {
    if (i >= firstStudent && i <= lastStudent) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
}

showPage(studentArray, page);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks() {
  // Determine how mandy pages are needed for the list by dividing the total number of list items by the max number of items per page
  let pageCount = Math.ceil(studentArray.length / 10);
  // Create a div, give it the pagination class, and append it to the .page div
  const div = document.createElement("div");
  div.classList.add("pagination");
  const pageDiv = document.querySelector("div.page");
  pageDiv.appendChild(div);
  // Add a ul to the pagination div to store the pagination links
  let ul = document.createElement("ul");
  div.appendChild(ul);
  // For each page, add li and a tags with the page number text
  for (let i = 1; i <= pageCount; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = i;
    li.appendChild(a);
    ul.appendChild(li);
  }
  // Add an event listener to each a tag. When they are clicked call the showPage function to display the appropriate page
  let aTagArray = document.querySelectorAll("a");
  aTagArray.forEach(function(e) {
    e.addEventListener("click", () => {
      // Loop over pagination links to remove active class from all links
      for (let i = 0; i < aTagArray.length; i++) {
        aTagArray[i].classList.remove("active");
      }
      showPage(studentArray, e.textContent);
      // Add the active class to the link that was just clicked. You can identify that clicked link using event.target
      e.classList.add("active");
    });
  });
}

appendPageLinks();

// Remember to delete the comments that came with this file, and replace them with your own code comments.

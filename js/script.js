/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.querySelector(".student-list");
const studentArray = studentList.querySelectorAll("li");
let page = 1;
const studentsPerPage = 10;

// Set display value for each student in the array
// Display max of
function showPage(list, page) {
  // index for first and last student on the page
  const firstStudent = page * 10 - 10;
  const lastStudent = page * 10 - 1;

  // Loop through the array and display the correct students
  for (let i = 0; i < list.length; i++) {
    if (i >= firstStudent && i <= lastStudent) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
}

// Append Page Links at bottom of list
function appendPageLinks() {
  function changePage() {
    let aTagArray = document.querySelectorAll("a");
    aTagArray.forEach(function(e) {
      aTagArray[0].classList.add("active");

      e.addEventListener("click", () => {
        // Loop over pagination links to remove active class from all links
        for (let i = 0; i < aTagArray.length; i++) {
          aTagArray[i].classList.remove("active");
        }

        showPage(studentArray, e.textContent);

        // Add the active class to the link that was just clicked
        e.classList.add("active");
      });
    });
  }

  function createLi() {
    // Determine how mandy pages are needed
    let pageCount = Math.ceil(studentArray.length / 10);
    const div = document.createElement("div");
    div.classList.add("pagination");
    const pageDiv = document.querySelector("div.page");
    pageDiv.appendChild(div);
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
  }

  // Create Pagination Links
  createLi();
  // Change page when li is clicked
  changePage();
}

appendPageLinks();
showPage(studentArray, page);

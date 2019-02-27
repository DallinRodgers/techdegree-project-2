const allStudents = document.querySelectorAll(".student-item");
const allStudentsArray = Array.prototype.slice.call(allStudents);
var page = 1; // list of ten students
const totalLength = allStudents.length;
var newArray = [];

const showPage = (allStudents, page) => {
  let decidingPage = page * 10; //start at index button clicked
  console.log(decidingPage);

  var endOfTen = decidingPage + 10; //end at index button clicked
  console.log(endOfTen);

  //picks the students that are to be shown
  if (decidingPage < 10) {
    allStudentsArray.style.display = "block";
  } else {
    var newArray = allStudentsArray.slice(decidingPage, endOfTen);
    console.log(newArray);
  }

  // var listOfTen = newArray.slice(decidingPage,endOfTen);
  // console.log(listOfTen.slice(decidingPage,endOfTen));

  // hides all the students except ten
  for (let i = 0; i < allStudentsArray.length; i++) {
    if (allStudentsArray[i] <= 10) {
      allStudentsArray[i].style.display = "block";
    } else {
      allStudentsArray[i].style.display = "none";
    }
  }

  //shows the students that are picked from newArray
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i]) {
      newArray[i].style.display = "block";
    }
  }
};
showPage(allStudents, page);

const appendPageLinks = (allStudentsArray) => {
  students = allStudentsArray.length;
  console.log(students);
  let howManyPages = Math.ceil(students / 10);
  console.log(howManyPages);

  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "pagination");
  var endOfPage = document.querySelector(".page"); //so button are on page bottom
  endOfPage.appendChild(newDiv);
  var newUl = document.createElement("ul");
  newDiv.appendChild(newUl);
  var newLi = document.createElement("li");
  newLi.setAttribute("a", "");
  newLi.setAttribute("class", "active");

  for (let i = 1; i < howManyPages; i++) {
    var newLi = document.createElement("li");
    newLi.setAttribute("a", "");
    newLi.setAttribute("class", "active");
    newLi.setAttribute("href", "#");
    newLi.setAttribute("id", [i]);
    newLi.innerHTML = [i];
    newUl.appendChild(newLi);

    //put a click event handler on li tags
    document.querySelector(".pagination").addEventListener("click", (e) => {
      var anchor = event.target.id;
      //var pageNumbers = document.getElementById('anchor');
      console.log(anchor);

      if (anchor) {
        showPage(students, anchor);
      }
    });
  }
};

appendPageLinks(allStudentsArray);

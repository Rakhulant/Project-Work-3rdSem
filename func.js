// var questions = ["How are Placements", "How many Canteens are there?", "Which canteen is the best", "Where can i get my id Card", "which is the mechanical department"];
var debates = ["covid", "Hijab Row", "Vaccination", "Online Classes", "F1"];
var qList1 = document.getElementById("v-pills-latest");
var qList2 = document.getElementById("v-pills-mostviewed");
var qList3 = document.getElementById("v-pills-teachers");
var qList4 = document.getElementById("v-pills-students");
var qList5 = document.getElementById("v-pills-seniors");
let q2 = questions
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
let q3 = q2
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

let q4 = q3
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

let q5 = q4
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)



// questions.forEach((item) =>{
//     qList1.innerHTML += "<a style=\"text-decoration:none;color: inherit;\" href='question/"+item+"'><div class=\"cardQ mb-2 border\"><div class=\"card-body \"><h5 class=\"card-title\">"+item+"</h5><h6 class=\"card-subtitle\">Tags : Placements, Teachers, Seniors</h6><p class=\"card-text\">I am a 2nd year student in the ME department and wanted to know how and when the placements are conducted in our college</p></div></div></a>";
// });
// q2.forEach((item) =>{
//   qList2.innerHTML += "<a style=\"text-decoration:none;color: inherit;\" href='question/"+item+"'><div class=\"cardQ mb-2 border\"><div class=\"card-body \"><h5 class=\"card-title\">"+item+"</h5><h6 class=\"card-subtitle\">Tags : Placements, Teachers, Seniors</h6><p class=\"card-text\">I am a 2nd year student in the ME department and wanted to know how and when the placements are conducted in our college</p></div></div></a>";
// });
// q3.forEach((item) =>{
//   qList3.innerHTML += "<a style=\"text-decoration:none;color: inherit;\" href='question/"+item+"'><div class=\"cardQ mb-2 border\"><div class=\"card-body \"><h5 class=\"card-title\">"+item+"</h5><h6 class=\"card-subtitle\">Tags : Placements, Teachers, Seniors</h6><p class=\"card-text\">I am a 2nd year student in the ME department and wanted to know how and when the placements are conducted in our college</p></div></div></a>";
// });
// q4.forEach((item) =>{
//   qList4.innerHTML += "<a style=\"text-decoration:none;color: inherit;\" href='question/"+item+"'><div class=\"cardQ mb-2 border\"><div class=\"card-body \"><h5 class=\"card-title\">"+item+"</h5><h6 class=\"card-subtitle\">Tags : Placements, Teachers, Seniors</h6><p class=\"card-text\">I am a 2nd year student in the ME department and wanted to know how and when the placements are conducted in our college</p></div></div></a>";
// });
// q5.forEach((item) =>{
//   qList5.innerHTML += "<a style=\"text-decoration:none;color: inherit;\" href='question/"+item+"'><div class=\"cardQ mb-2 border\"><div class=\"card-body \"><h5 class=\"card-title\">"+item+"</h5><h6 class=\"card-subtitle\">Tags : Placements, Teachers, Seniors</h6><p class=\"card-text\">I am a 2nd year student in the ME department and wanted to know how and when the placements are conducted in our college</p></div></div></a>";
// });


var debateList = document.getElementById("debateList");
debates.forEach((item) => {
    debateList.innerHTML += "<a href=\item+\ class=\"list-group-item list-group-item-action text-center debateItem\">"+item+"</a>";
})

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('#modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('#modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function show_Message(){
    alert("Quetion has been successfully submited!");
}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

  autocomplete(document.getElementById("myInput"), questions);
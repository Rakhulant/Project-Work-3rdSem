 /* var latest = document.getElementById('latest');
var mostviewed = document.getElementById('most-viewed');
 
latest.onclick = changeColor_latest;
mostviewed.onclick = changeColor;   


            function changeColor_latest() {
                latest.style.color = "purple";
                return false;
            }    */

/* latest.addEventListener('click',()=>{
    latest.style.background =  color;
})

mostviewed.addEventListener('click',()=>{
    mostviewed.style.background =  color;
})  */

/* var latest = document.getElementById("latest");
var mostviewed = document.getElementById("most-viewed");
          
            function changeColor(color) {
                document.body.style.background = color;
            }
              
            function bg_Change() {
                changeColor('blue');
            }      */  
            
            /* document.getElementById('latest').onclick = changeColor;   

            function changeColor() {
                document.body.style.color = "purple";
                return false;
            }   
         */

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

function myFunction() {
  window.location = "ask_a_question.html";
}  
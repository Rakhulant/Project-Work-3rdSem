let likebtn = document.querySelector('#like-btn');
let dislikebtn = document.querySelector('#dislike-btn');
let input1 = document.querySelector('#input-1');
let input2 = document.querySelector('#input-2');
let latest = document.querySelector('#latest');
let mostviewed = document.querySelector('#most-viewed');

likebtn.addEventListener('click',()=>{
    input1.value = parseInt(input1.value) + 1;
    input1.style.color = "#12ff00";
})

dislikebtn.addEventListener('click',()=>{
    input2.value = parseInt(input2.value) + 1;
    input2.style.color = "#12ff00";
})

latest.addEventListener('click',()=>{
    latest.style.color =  "blue";
})

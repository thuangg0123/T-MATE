const list = document.getElementById('icon-list');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

if(list){
    list.addEventListener('click', () =>{
        navbar.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        navbar.classList.remove('active');
    })
}


let numbers  = document.getElementById('box');
for(i = 0; i<100; i++){
    let span = document.createElement('span');
    span.textContent = i;
    numbers.appendChild(span);
}

// Button numbers

let num = numbers.getElementsByTagName('span');
let index = 0;

function nextNum(){
    num[index].style.display = 'none';
    index = (index + 1) % num.length;
    num[index].style.display = 'initial';
}

function backNum(){
    num[index].style.display = 'none';
    index = (index - 1 + num.length) % num.length;
    num[index].style.display = 'initial';
}

// SPRODUCT

let mainImg = document.getElementById("mainImg");
let smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}

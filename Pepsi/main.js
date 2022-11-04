function imgSlider(anything){
    document.querySelector('.pepsi').src = anything;
}

function changeBackgroundColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

function menuToggle(){
    const toggleMenuNavbar = document.querySelector('.toggleMenuNavbar');
    const navbar = document.querySelector('.navbar');
    toggleMenuNavbar.classList.toggle('active');
    navbar.classList.toggle('active');
}
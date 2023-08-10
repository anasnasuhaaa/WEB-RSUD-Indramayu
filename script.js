const menuToggle = document.querySelector(".menu #check");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});
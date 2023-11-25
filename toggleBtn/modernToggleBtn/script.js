
const toggleBtn = document.querySelector(".toggle_btn");

const toggleIcon = document.querySelector(".toggle_btn i")

const dropdown = document.querySelector(".dropdown");

toggleBtn.onclick = function(){
    dropdown.classList.toggle("open");
    const Isopen = dropdown.classList.contains("open");

    toggleIcon.classList= Isopen?"fa-solid fa-xmark" : "fa-solid fa-bars";



}
let dropdown = document.getElementById("dropdown");
let footer = document.querySelector(".aboutMeFootHidden");

dropdown.addEventListener("click",
     function enableMyDropDown() {
return footer.classList.toggle("aboutMeFootShown");
}, true);


let dropdown = document.getElementById("dropdown");
let footer = document.getElementById("aboutMeFoot");

dropdown.addEventListener("click",
     function enableMyDropDown() {
    if( footer.style.display == "none"){
        return footer.style.display = "block";
    }
    else {
        return footer.style.display = "none";
    }
}
, true);


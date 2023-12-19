document.addEventListener("DOMContentLoaded", function() {
    // Load the header HTML file
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "menu.html", true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Insert the header HTML into the page
        const header = xhr.responseText;
        const headerElement = document.getElementById("main_side")
        headerElement.innerHTML = header;

        setup_dropdown();
      }
    };
    
    xhr.send();
});

function setup_dropdown(){
    let dropdown = document.getElementsByClassName("dropdown-btn");
    //let submenu = document.getElementsByClassName("sub-menu");

    for (i = 0; i < dropdown.length; i++){
        dropdown[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var dropdowncontent = this.nextElementSibling;
            if (dropdowncontent.style.display === "flex"){
                dropdowncontent.style.display = "none";

            } else {
                dropdowncontent.style.display = "flex";
            }
        });
    }
}

function openNav() {
    document.getElementById("main_side").style.width = "300px";
}
  
function closeNav() {
    document.getElementById("main_side").style.width = "0";
}
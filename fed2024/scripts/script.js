// JavaScript Document
console.log("hi");
// JavaScript to toggle the dropdown
document.querySelector("nav ul button").addEventListener("click", function() {
    var dropdownMenu = document.querySelector("nav ul ul a");
    // Toggle the 'show' class to show/hide the dropdown
    dropdownMenu.classList.toggle("show");
  });
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('nav ul button')) {
      var dropdowns = document.querySelector("show");
      for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove("show");
      }
    }
  }
  //source chatgpt//
  
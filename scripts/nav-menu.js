history.scrollRestoration = "manual";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


function myFunction() {
  var x = document.getElementById("nav-menu-id");
  if (x.className === "nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
  }
}

function openDropdown1() {
  if (window.innerWidth > 767) {
    document.getElementById("dropdown-1").style.visibility = "visible";
    document.getElementById("menu-about-us").style.opacity = "100%";
  }
}

function closeDropdown1() {
  if (window.innerWidth > 767) {
    document.getElementById("dropdown-1").style.visibility = "hidden";
    document.getElementById("menu-about-us").style.opacity = "60%";
  }
}

function openDropdown2() {
  if (window.innerWidth > 767) {
    document.getElementById("dropdown-2").style.visibility = "visible";
    document.getElementById("menu-projects").style.opacity = "100%";
  }
}

function closeDropdown2() {
  if (window.innerWidth > 767) {
    document.getElementById("dropdown-2").style.visibility = "hidden";
    document.getElementById("menu-projects").style.opacity = "60%";
  }
}

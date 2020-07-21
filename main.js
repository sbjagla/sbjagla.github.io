window.onload = function() {
  var links = document.getElementsByClassName("navLink");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = function() {
      toggleMenu();
    }
  }
}

let toggleStatus = false;

let toggleMenu = function() {
  let menuTrigger = document.querySelector("button");
  let header = document.querySelector("header");
  if (toggleStatus === false) {
    header.classList.add("menu-is-open");
    document.getElementById("navbar").style.overflow= "visible";
    toggleStatus = true;
  }

  else if (toggleStatus === true) {
    header.classList.remove("menu-is-open");
    setTimeout(function () {document.getElementById('navbar').style.overflow= 'hidden';}, 400);
    toggleStatus = false;
  }
}

// stolen from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.bottom = "89%";
  } else if (toggleStatus === false) {
    document.getElementById("navbar").style.bottom = "100%";
  }
  prevScrollpos = currentScrollPos;
}

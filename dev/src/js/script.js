function openTab(event, name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(name).style.display = "block";
  event.currentTarget.className += " active";
}


function copyClipboard() {
  var copyText = document.getElementById("bankNumber").innerHTML;

  var input = document.createElement("input");
  input.value = copyText;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

function scrollRotate() {
    let div = document.getElementById("rotatedChili");
    div.style.setProperty('--rotation', window.pageYOffset/10 + "deg")
}

window.onscroll = function () {
    scrollRotate();
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("defaultOpen").click();
}, false);

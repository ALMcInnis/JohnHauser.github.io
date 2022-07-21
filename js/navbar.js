
function toggleNavbar() {
  var nav = document.getElementById("vertical-nav");
  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
  }
}

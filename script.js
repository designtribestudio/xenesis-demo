window.onscroll = function() {scrollFunction()};
var logo = document.getElementById('xen-logo');
var icon = document.getElementById('iconMobile');
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("nb").className = "dark";
    logo.src='./assets/Xenesis-dark.svg';
    icon.src='./assets/menu-dark.svg';
  } else {
    document.getElementById("nb").className = "navbar";
    logo.src='./assets/Xenesis.svg';
    icon.src='./assets/menu.svg';
  }
}


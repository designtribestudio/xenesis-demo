window.onscroll = function() {scrollFunction()};
var logo = document.getElementById('xen-logo');
function scrollFunction() {
  if (document.body.scrollTop > 870 || document.documentElement.scrollTop > 850) {
    document.getElementById("nb").className = "dark";
    logo.src='./assets/Xenesis-dark.svg';
  } else {
    document.getElementById("nb").className = "navbar";
    logo.src='./assets/Xenesis.svg';
  }
}
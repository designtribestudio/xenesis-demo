window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
    document.getElementById("nb").className = "dark";
  } else {
    document.getElementById("nb").className = "light";
  }
}
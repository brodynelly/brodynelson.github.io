window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');
  
  const toggle = (e) => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach((e) => e.addEventListener('click', toggleNav));

  // Start typing effect
  typewriter();
}

// Set up text to print, each item in array is a new line
var aText = new Array(
  "Hello, I'm Brody Nelson.<br />", 
  "I'm a Computer Science major at the University of Missouri<br />",
  "I spend my day expanding my knowledge in Computer Science.<br />",
  "Now explore some of my stuff!!!<br />"
);
var iSpeed = 100; // time delay for each character
var iIndex = 0; // starting point
var iArrLength = aText[0].length; // length of the first string
var iScrollAt = 20; // start scrolling at this many lines

var iTextPos = 0; // initialize text position
var sContents = ''; // initialize contents variable
var iRow; // current row

// Typewriter function
function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");
  
  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  
  if (iTextPos++ === iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex !== aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout(typewriter, 500); // wait before starting new line
    } else {
      // Hide loading screen after typing is complete
      hideLoadingScreen();
    }
  } else {
    setTimeout(typewriter, iSpeed); // continue typing
  }
}

// Function to hide the loading screen once typing is complete
function hideLoadingScreen() {
  document.body.classList.add('loaded'); // Adds class to fade out the loading screen
}

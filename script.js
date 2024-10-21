var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
  var clickedTab = event.currentTarget;

  setTimeout(function () {
    for (tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    clickedTab.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }, 200); // 500 milliseconds = 0.5 seconds
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbx2FOu4NIEntBven8rG2If6dviGVpmczPdcZtPBCx05Xlq61QNDQSmEKxJr14VboKgngA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

const phrases = ["Problem Solving", "Web Development"];
let index = 0;
let currentPhrase = phrases[index];
let charCount = 0;
let building = true; // Flag to indicate whether we are building or reversing

function displayText() {
  const displayedText = currentPhrase.slice(0, charCount);
  document.getElementById("text").textContent = displayedText;

  if (building) {
    // Increase charCount until the full phrase is displayed
    charCount++;
    if (charCount > currentPhrase.length) {
      building = false; // Switch to reversing when full phrase is displayed
      setTimeout(displayText, 800); // Wait for 1 second before starting to reverse
      return;
    }
  } else {
    // Decrease charCount to reverse the phrase quickly
    charCount--;
    if (charCount < 0) {
      // Switch to the next phrase
      index = (index + 1) % phrases.length;
      currentPhrase = phrases[index];
      charCount = 0;
      building = true;
      setTimeout(displayText, 20);
      return;
    }
  }

  const delay = building ? 120 : 40; // Slow for building, fast for reversing
  setTimeout(displayText, delay);
}

displayText(); // Initial call to start the process

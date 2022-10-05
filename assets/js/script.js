
/******************
 typing feature on homepage
 ******************/
 
 var TxtRotate = function(el, toRotate, period) {
   this.toRotate = toRotate;
   this.el = el;
   this.loopNum = 0;
   this.period = parseInt(period, 10) || 2000;
   this.txt = '';
   this.tick();
   this.isDeleting = false;
 };
 
 TxtRotate.prototype.tick = function() {
   var i = this.loopNum % this.toRotate.length;
   var fullTxt = this.toRotate[i];
 
   if (this.isDeleting) {
     this.txt = fullTxt.substring(0, this.txt.length - 1);
   } else {
     this.txt = fullTxt.substring(0, this.txt.length + 1);
   }
 
   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
 
   var that = this;
   var delta = 300 - Math.random() * 100;
 
   if (this.isDeleting) { delta /= 2; }
 
   if (!this.isDeleting && this.txt === fullTxt) {
     delta = this.period;
     this.isDeleting = true;
   } else if (this.isDeleting && this.txt === '') {
     this.isDeleting = false;
     this.loopNum++;
     delta = 500;
   }
 
   setTimeout(function() {
     that.tick();
   }, delta);
 };
 
 window.onload = function() {
   var elements = document.getElementsByClassName('txt-rotate');
   for (var i=0; i<elements.length; i++) {
     var toRotate = elements[i].getAttribute('data-rotate');
     var period = elements[i].getAttribute('data-period');
     if (toRotate) {
       new TxtRotate(elements[i], JSON.parse(toRotate), period);
     }
   }
   // INJECT CSS
   var css = document.createElement("style");
   css.type = "text/css";
   css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
   document.body.appendChild(css);
 };

/******************
 * GLOBAL VARIABLES
 ******************/

//Generator function
let prevNumber = 0;
const generateJokeButton = document.getElementById('generateButton');
const punchButton = document.getElementById('show-punch');
const punchOutput = document.querySelector(".punchline-output");
//Main Page Buttons
const firstButton = document.getElementById('aboutmeDiv');
const secondButton = document.getElementById('secondButton');
const thirdButton = document.getElementById('thirdButton');
const myHiddenBio = document.getElementById('hiddenDetails');
const hiddenSubmitForm = document.getElementById('hiddenForm');
const hiddenSubmitDetails = document.getElementById('hiddenFormResults');
const submitButton = document.getElementById('btn-main')
//navbar collapse
const navLinks = document.querySelector('.nav_links');
const navButton = document.querySelector('.hamburger');
const header = document.querySelector('.main-navigation');
//other
const westchesterDiv = document.querySelector('#westchester > img');

/******************
 * ARRAYS
 ******************/

/*Joke Generator*/
const jokes = [
    "I'm afraid for the calendar.",
    "My wife said I should do lunges to stay in shape.",
    "Singing in the shower is fun until you get soap in your mouth.",
    "I thought the dryer was shrinking my clothes.",
    "Have you heard about the chocolate record player?",
    "What’s brown and sticky?",
    "Why are elevator jokes so classic and good?",
    "What did the police officer say to his belly-button?",
    "What do you call it when a group of apes starts a company?",
    "What kind of drink can be bitter and sweet?",
    "Want to know why nurses like red crayons?"
];
/*punchlines*/
const punches = [
    "Its days are numbered.",
    "That would be a big step forward.",
    "Then it's a soap opera.",
    "Turns out it was the refrigerator all along.",
    "It sounds pretty sweet.",
    "A stick.",
    "They work on many levels.",
    "You’re under a vest.",
    "Monkey business.",
    "Reali-tea.",
    "Sometimes they have to draw blood."
];

/******************
 * FUNCTIONS
 ******************/

/*Alert for contact information
document.querySelector('.cta').addEventListener('click', function() {
    alert("Contact information coming soon!");
});
*/
navButton.addEventListener('click', () => {
    header.classList.toggle('header-toggle');
    navLinks.classList.toggle('navbar-visible');
});

// Get random joke function
/*
function getRandomJoke() {
    //gets random index value
    let number = Math.floor(Math.random() * (jokes.length));
    //get array value
    let joke = jokes[number];
    if (number != prevNumber){
        const jokeDisplay = document.querySelector(".joke-output");
        jokeDisplay.innerHTML = joke;
    } else {
        getRandomJoke();
    }
    prevNumber = number;
}

// Show/hide punchline function

function hidePunchline() {
    if (punchOutput.style.display == 'flex') {
        punchOutput.style.display = 'none';
    }
}

generateJokeButton.addEventListener('click', () => {
    getRandomJoke();
    hidePunchline();
});

// Function on click show punchline update punchline output to new punchline

punchButton.addEventListener('click', () => {
        punchOutput.style.display = 'flex';
        punchOutput.innerHTML = punches[prevNumber];
});

//First Button Events

firstButton.addEventListener('click', () => {

    if (myHiddenBio.style.display == 'none') {
        myHiddenBio.style.display = 'block';
    } else {
        myHiddenBio.style.display = 'none';
    }

    if (hiddenSubmitForm.style.display == 'block') {
        hiddenSubmitForm.style.display = 'none';
    }
});


/******************
 *    jquery
 ******************/



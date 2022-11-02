/******************
 * GLOBAL VARIABLES
 ******************/

//Generator function
let prevNumber = 0;
const makeMeLaughButton = document.getElementById('make-me-laugh');
const jokeButton = document.getElementById('generate-joke');
const punchButton = document.getElementById('punchline');
const jokeOutput = document.querySelector('.joke-output');
const punchlineOutput = document.querySelector('.punchline-output');
//Main Page Buttons
const firstButton = document.getElementById('aboutmeDiv');
const secondButton = document.getElementById('secondButton');
const thirdButton = document.getElementById('thirdButton');
const myHiddenBio = document.getElementById('hiddenDetails');
const hiddenSubmitForm = document.getElementById('hiddenForm');
const hiddenSubmitDetails = document.getElementById('hiddenFormResults');
const submitButton = document.getElementById('btn-main')
//navbar collapse
const navLinks = document.querySelector('.nav-links');
const navButton = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const nav = document.querySelector('.main-navigation');
//hover variables
const skillHtml = document.getElementById('hover1');
const skillCss = document.getElementById('hover2');
const skillJavascript = document.getElementById('hover3');
const skillJquery = document.getElementById('hover4');
const skillWordpress = document.getElementById('hover5');
const skillGit = document.getElementById('hover6');
const skillSeo = document.getElementById('hover7');
const skillUiux = document.getElementById('hover8');
const skillResponsive = document.getElementById('hover9');

const skill1 = document.getElementById('skill1');
const skill2 = document.getElementById('skill2');
const skill3 = document.getElementById('skill3');
const skill4 = document.getElementById('skill4');
const skill5 = document.getElementById('skill5');
const skill6 = document.getElementById('skill6');
const skill7 = document.getElementById('skill7');

//hover functions

//on hover html, apply hightlight class to skill 1, 2, 5

/*skillHtml.addEventListener('onmouseenter', () => {
  skill1.classList.add('hightlight');
  console.log('oh hi');
});*/

//WHAT I KNOW HOVERS

//1 2 7 8
$('#hoverhtmlcss').hover(function() {
  $('#hoverhtmlcss').toggleClass('highlight');

  $('#skill1').toggleClass('highlight');
  $('#skill2').toggleClass('highlight');
  $('#skill7').toggleClass('highlight');
  $('#skill8').toggleClass('highlight');
});
// 1 7 3
$('#hoverjsjq').hover(function() {
  $('#hoverjsjq').toggleClass('highlight');

  $('#skill1').toggleClass('highlight');
  $('#skill3').toggleClass('highlight');
  $('#skill7').toggleClass('highlight');
});
// 2 5 6 7 9
$('#hoverwp').hover(function() {
  $('#hoverwp').toggleClass('highlight');

  $('#skill2').toggleClass('highlight');
  $('#skill5').toggleClass('highlight');
  $('#skill6').toggleClass('highlight');
  $('#skill7').toggleClass('highlight');
  $('#skill9').toggleClass('highlight');
});
// 9 10
$('#hovergit').hover(function() {
  $('#hovergit').toggleClass('highlight');

  $('#skill9').toggleClass('highlight');
  $('#skill10').toggleClass('highlight');
});
// 11 12
$('#hoverseo').hover(function() {
  $('#hoverseo').toggleClass('highlight');

  $('#skill11').toggleClass('highlight');
  $('#skill12').toggleClass('highlight');
});
// 2 13 3 8
$('#hoveruiux').hover(function() {
  $('#hoveruiux').toggleClass('highlight');

  $('#skill2').toggleClass('highlight');
  $('#skill13').toggleClass('highlight');
  $('#skill3').toggleClass('highlight');
  $('#skill8').toggleClass('highlight');
});
// 4 9
$('#hoverfigma').hover(function() {
  $('#hoverfigma').toggleClass('highlight');

  $('#skill4').toggleClass('highlight');
  $('#skill9').toggleClass('highlight');
});
//3 8
$('#hoverdesign').hover(function() {
  $('#hoverdesign').toggleClass('highlight');

  $('#skill3').toggleClass('highlight');
  $('#skill8').toggleClass('highlight');
});

//WHAT I DO HOVERS

$('#skill1').hover(function () {
  $('#skill1').toggleClass('highlight');

  $('#hoverhtmlcss').toggleClass('highlight');
  $('#hoverjsjq').toggleClass('highlight');
});

$('#skill2').hover(function () {
  $('#skill2').toggleClass('highlight');

  $('#hoverhtmlcss').toggleClass('highlight');
  $('#hoverwp').toggleClass('highlight');
  $('#hoveruiux').toggleClass('highlight');
});
$('#skill3').hover(function () {
  $('#skill3').toggleClass('highlight');

  $('#hoverjsjq').toggleClass('highlight');
  $('#hoveruiux').toggleClass('highlight');
  $('#hoverdesign').toggleClass('highlight');
});

$('#skill4').hover(function () {
  $('#skill4').toggleClass('highlight');

  $('#hoverfigma').toggleClass('highlight');
});

$('#skill5').hover(function () {
  $('#skill5').toggleClass('highlight');

  $('#hoverwp').toggleClass('highlight');
});

$('#skill6').hover(function () {
  $('#skill6').toggleClass('highlight');

  $('#hoverwp').toggleClass('highlight');
});

$('#skill7').hover(function () {
  $('#skill7').toggleClass('highlight');

  $('#hoverhtmlcss').toggleClass('highlight');
  $('#hoverjsjq').toggleClass('highlight');
  $('#hoverwp').toggleClass('highlight');
});

$('#skill8').hover(function () {
  $('#skill8').toggleClass('highlight');

  $('#hoverhtmlcss').toggleClass('highlight');
  $('#hoveruiux').toggleClass('highlight');
  $('#hoverdesign').toggleClass('highlight');
});

$('#skill9').hover(function () {
  $('#skill9').toggleClass('highlight');

  $('#hoverwp').toggleClass('highlight');
  $('#hovergit').toggleClass('highlight');
  $('#hoverfigma').toggleClass('highlight');
});

$('#skill10').hover(function () {
  $('#skill10').toggleClass('highlight');

  $('#hovergit').toggleClass('highlight');
});

$('#skill11').hover(function () {
  $('#skill11').toggleClass('highlight');

  $('#hoverseo').toggleClass('highlight');
});

$('#skill12').hover(function () {
  $('#skill12').toggleClass('highlight');

  $('#hoverseo').toggleClass('highlight');
});

$('#skill13').hover(function () {
  $('#skill13').toggleClass('highlight');

  $('#hoveruiux').toggleClass('highlight');
});


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
  "Want to know why nurses like red crayons?",
  "What do you call a factory that makes okay products?",
  "What did the janitor say when he jumped out of the closet?",
  "Have you heard about the chocolate record player?",
  "What did the ocean say to the beach?",
  "I asked my dog what's two minus two."
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
  "Sometimes they have to draw blood.",
  "A satisfactory.",
  "Supplies!",
  "It sounds pretty sweet.",
  "Nothing, it just waved.",
  "He said nothing."
];


/******************
 * FUNCTIONS
 ******************/

/*typing feature on homepage
 
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
*/
/* NAV BUTTON EVENT*/

navButton.addEventListener('click', () => {
    header.classList.toggle('header-toggle');
    nav.classList.toggle('header-toggle');
    navLinks.classList.toggle('navbar-visible');
});

/*JOKE GENERATOR*/

// Get random joke function

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

function hidePunchline() {
  if (punchlineOutput.style.display == 'flex') {
      punchlineOutput.style.display = 'none';
  }
}

function showPunchline() {
  if (punchlineOutput.style.display == 'none') {
    punchlineOutput.style.display = 'flex';
  }
}

function hidePunchlineButton() {
  if (punchButton.style.display == 'flex') {
    punchButton.style.display = 'none';
  }
}

function showPunchlineButton() {
  if (punchButton.style.display == 'none') {
    punchButton.style.display = 'flex';
  }
}

function hideJokeButton() {
  if (jokeButton.style.display == 'flex') {
    jokeButton.style.display = 'none';
  }
}

function showJokeButton() {
  if (jokeButton.style.display == 'none') {
    jokeButton.style.display = 'flex';
  }
}

/*EVENT LISTENERS

makeMeLaughButton.addEventListener('click', () => {
  makeMeLaughButton.style.display = 'none';
  $('.joke-generator').css("gap", "2.5rem");
  $('.joke-output').show();
  showJokeButton();
  $('.joke-heading').addClass('top-position');
  $('.joke-buttons').addClass('bottom-position');
});*/

/*click joke button
jokeButton.addEventListener('click', () => {

  getRandomJoke();
  hideJokeButton();
  showPunchlineButton();

  if (punchlineOutput.style.display == 'flex') {
    hidePunchline();
  }

});*/

/*click punchline button
punchButton.addEventListener('click', () => {

  punchlineOutput.innerHTML = punches[prevNumber];

  hidePunchlineButton();
  showJokeButton();
  showPunchline();

});*/


//when click punchline button, show punchline/hide punchline button/show joke button

//when I click joke, if punchline is visible, make it disappear

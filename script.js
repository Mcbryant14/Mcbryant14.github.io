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
const header = document.querySelector('.header');

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

/*Alert for contact information*/
document.querySelector('.cta').addEventListener('click', function() {
    alert("Contact information coming soon!");
});

navButton.addEventListener('click', () => {
    header.classList.toggle('header-toggle');
    navLinks.classList.toggle('navbar-visible');
});

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

//if the form details are visible and about me is clicked, hide form details

/*

//Second Button Events

secondButton.addEventListener('click', () => {
    if (hiddenSubmitForm.style.display == 'none') {
        hiddenSubmitForm.style.display = 'block';
        myHiddenBio.style.display = 'none';
    } else {
        hiddenSubmitForm.style.display = 'none';
    }
});

//Click submit button event

submitButton.addEventListener('click', () => {
// when click submit, hide form and show details
    hiddenSubmitForm.style.display = 'none';
    hiddenSubmitDetails.style.display = 'block';
    //save input and headline to variables
    const input = document.querySelector('.input-main');
    const headline = document.querySelector('.helloHeadline');
    //const formResults = document.querySelector('#hiddenFormResults');
    const secondPar = document.querySelector('#timeDate');
    let time = new Date();
    //use input value to replace headline
        if (hiddenSubmitDetails.style.display === "none") {
            hiddenSubmitDetails.style.display = "block";
        } else {
            hiddenSubmitDetails.style.display = "none";
        }
        headline.textContent = `Hello, ${input.value || "friend"}!`;
        secondPar.innerHTML = `It is ${time}.`;
    });

    */
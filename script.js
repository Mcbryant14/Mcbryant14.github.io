/*Alert for contact information*/
document.querySelector('.cta').addEventListener('click', function() {
    alert("Contact information coming soon!");
});

/*Joke Generator*/
//Array
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

const punchButton = document.getElementById('show-punch');

//Generator function
let prevNumber = 0;

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



//Punchline function

punchButton.addEventListener('click', () => {
    document.querySelector(".joke-output").innerHTML = (punches[prevNumber]);
});


/*Main Page Buttons*/

const firstButton = document.getElementById('aboutmeDiv');
const secondButton = document.getElementById('secondButton');
const thirdButton = document.getElementById('thirdButton');
const myHiddenBio = document.getElementById('hiddenDetails');
const hiddenSubmitForm = document.getElementById('hiddenForm');
const hiddenSubmitDetails = document.getElementById('hiddenFormResults');
const submitButton = document.getElementById('btn-main')

//First Button Events

firstButton.addEventListener('click', () => {
    hiddenSubmitForm.style.display = 'none';
    hiddenSubmitDetails.style.display = 'none';
    if (myHiddenBio.style.display === 'block'){
        myHiddenBio.style.display = 'none';
    } else {
        myHiddenBio.style.display = 'block';
    }
});

//Second Button Events

secondButton.addEventListener('click', () => {
    myHiddenBio.style.display = 'none';
    hiddenSubmitDetails.style.display = 'none';

    if (hiddenSubmitForm.style.display === 'block'){
        hiddenSubmitForm.style.display = 'none';
    } else {
        hiddenSubmitForm.style.display = 'block';
    }
    if (hiddenSubmitDetails.style.display === 'block') {
        hiddenSubmitForm.style.display = 'none';
    }
});

//Click submit button event

submitButton.addEventListener('click', () => {
    hiddenSubmitForm.style.display = 'none';
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

    //when I click submit button, everything is display: none

    //if form details are displayed, display: none the form itself


/*function showDetails(){
    hiddenSubmitForm.style.display = "none";
    hiddenSubmitDetails.style.display = "none";
var x = document.getElementById('hiddenDetails');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}*/


/*show/hide "Who are you" button*/
/*function showForm() {
    myHiddenBio.style.display = "none";
    if (hiddenSubmitDetails.style.display === "none") {
        hiddenSubmitDetails.style.display = "block";
    } else {
        hiddenSubmitDetails.style.display = "none";
    }
    var x = document.getElementById('hiddenForm');
    if (x.style.display === "none") {
        x.style.display = "flex";
        x.className = "formStyles";
    } else {
        x.style.display = "none";
    }
}*/

/*action to do when submit name*/
/*const submitButton = document.getElementById('btn-main');

submitButton.addEventListener('click', () => {
    //save input and headline to variables
    const input = document.querySelector('.input-main');
    const headline = document.querySelector('.helloHeadline');
    const formDetails = document.querySelector('#hiddenFormResults');
    const secondPar = document.querySelector('#timeDate');
    let time = new Date();
    //use input value to replace headline
        if (formDetails.style.display === "none") {
            formDetails.style.display = "block";
        } else {formDetails.style.display = "none";
        }
        headline.textContent = `Hello, ${input.value}!`;
        secondPar.innerHTML = `It is ${time}.`;
  });*/

/*button.addEventListener('keypress', function (e) {
    const input = document.querySelector('.input-main');
    const headline = document.querySelector('.helloHeadline');
    const formDetails = document.querySelector('#hiddenFormResults');
        if (e.key === 'Enter') {
            headline.textContent = input.value;
            if (formDetails.style.display === "none") {
                formDetails.style.display = "block";
            } else {formDetails.style.display = "none";
            }
        }   
  });*/

document.querySelector('.cta').addEventListener('click', function() {
    alert("Contact information coming soon!");
});

/*Joke Generator*/

const jokes = [
    "I'm afraid for the calendar. Its days are numbered.",
    "My wife said I should do lunges to stay in shape. That would be a big step forward.",
    "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
    "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",
    "Have you heard about the chocolate record player? It sounds pretty sweet.",
    "What’s brown and sticky? A stick.",
    "Why are elevator jokes so classic and good? They work on many levels.",
    "What did the police officer say to his belly-button? You’re under a vest.",
    "What do you call it when a group of apes starts a company? Monkey business.",
    "What kind of drink can be bitter and sweet? Reali-tea.",
    "Want to know why nurses like red crayons? Sometimes they have to draw blood."
];

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

const firstButton = document.getElementById('aboutmeDiv');
const secondButton = document.getElementById('secondButton');
const thirdButton = document.getElementById('thirdButton');
const myHiddenBio = document.getElementById('hiddenDetails');
const hiddenSubmitForm = document.getElementById('hiddenForm');
const hiddenSubmitDetails = document.getElementById('hiddenFormResults');

/*show/hide "Who am I" button*/
function showDetails(){
    hiddenSubmitForm.style.display = "none";
    hiddenSubmitDetails.style.display = "none";
    var x = document.getElementById('hiddenDetails');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/*show/hide "Who are you" button*/
function showForm() {
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
}

/*action to do when submit name*/
const submitButton = document.getElementById('btn-main');

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
  });

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

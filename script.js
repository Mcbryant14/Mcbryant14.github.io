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

function getRandomJoke(){
    //gets random index value
    let number = Math.floor(Math.random() * (jokes.length));
    //get array value
    let joke = jokes[number];
    const el = document.querySelector(".joke-output");
    el.innerHTML = joke;
}


function showDetails(){
    var x = document.getElementById('hiddenDetails');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



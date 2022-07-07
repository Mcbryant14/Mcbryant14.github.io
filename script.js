document.querySelector('.cta').addEventListener('click', function() {
    alert("Contact information coming soon!");
});

/*Joke Generator*/

const jokes = [
    "I'm afraid for the calendar. Its days are numbered.",
    "My wife said I should do lunges to stay in shape. That would be a big step forward.",
    "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
    "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",
    "Have you heard about the chocolate record player? It sounds pretty sweet."
];

function getRandomJoke(){
    //gets random index value
    let number = Math.floor(Math.random() * (jokes.length));
    //get array value
    let joke = jokes[number];
    const el = document.querySelector(".joke-output");
    el.innerHTML = joke;
}

/*function generateNumber(jokes){
    //gets random index value
        const number = Math.floor(Math.random() * (jokes.length));
        const item = jokes[number];
        return item;
      }

function generateJoke(){
    console.log(jokes[generateNumber();]);
}*/
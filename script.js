/*document.querySelector('.cta').addEventListener('click', function() {
    alert("Contact information coming soon!");
});*/

$('.cta').click(function() {
    alert("Contact information coming soon!");
});

// The logo image.
let logoImage = document.querySelector('img');

logoImage.onmouseenter = function() {
    logoImage.src = 'Images/Site Icon.png';
}

logoImage.onmouseleave = function() {
    logoImage.src = 'Images/logo.png';
}




// Counter variable
let counter = 0;


// Split text content of the class "text" into separate words and put into array


// Split the text content into separate words and put into array

let data = document.querySelector('.text').textContent; 
const wordsArray = data.split(' ');

// Select a random word from the array
const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
// // Read text from spacja.txt
// fetch('/Users/jak/Desktop/spacja/spacja.txt')
//     .then(response => response.text())
//     .then(text => {
//         // Put the text into the class "text" div
//         document.querySelector('.text').textContent = text;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// Function to display "space" text at random positions
function displaySpaceText() {
const spaceText = document.createElement('span');
spaceText.classList.add('spaceSpan');
spaceText.style.fontSize = Math.floor(Math.random() * 42  ) + 'px';
const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
spaceText.textContent = randomWord;
 
    // spaceText.textContent = 'spacja  '; 
    spaceText.style.position = 'absolute';
    spaceText.style.left = Math.random() * window.innerWidth + 'px';
    spaceText.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(spaceText);
}

// Event listener for spacebar key press
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        counter += 1;
        console.log('Counter:', counter);
        displaySpaceText();
    }
});


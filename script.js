// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

// Get a random word from the words array
// Add the word to the DOM
// We need an evet listener for the text element
// Check if its the correct input
// Update score
// We need to have a timer that is going to count down
// Update timer
// We need handle if its gamer over
// We need to able change diffuculty
// We need to create function for each diffuculty
// Set time depending on diffuculty

// Initilize word
let randomWord;

// Initilize score
let score = 0;

// Initilize time
let time = 10;

text.focus();
// Choose element that should be focused at start
const timeInterval = setInterval(updateTime, 1000);

// Get random word from our array
function getRandomWord(){
  return words[Math.floor(Math.random() * words.length)];
  // Floor will just random down
  // Function to get a random word from our array
}
// console.log(getRandomWord());
// Check if the function is woking

// Add the word to the DOM
function addWordToDOM(){
  randomWord = getRandomWord();
  // We assign whatever random the getRandomWord function will return to the variable randomWord
  word.innerHTML = randomWord;
  // Using the word DOM element
  // So now the word html will become the random word
}

// Update score
function updateScore(){
  score++;
  scoreEl.innerHTML = score;
}
// Update time
function updateTime(){
  time--;
  // Update time element
  timeEl.innerHTML = time + "s";
  // Setting the html element equal our time
  if(time === 0){
    clearInterval(timeInterval);
    // Clear the time interval and we want to call for game over
    gameOver();
  }
}
// Game over
function gameOver(){
  endgameEl.innerHTML = `<h1>Time run out!</h1><p>Your final score is ${score}</p><button onClick = "location.reload()>Reload<?button>`;
  endgameEl.style.display = "flex";
}

addWordToDOM();

// Event listener
text.addEventListener("input", (event) => {
  const insertedText = event.target.value;
  // console.log(insertedTex);
  
  // Check if the inserted word is the same as the random word from our array
  
  if(insertedText === randomWord){
    addWordToDOM();
    // Update score
    updateTime();

    // Clear input field
    event.target.value = "";

    // Increament the time to give the user more time when the input is correct
    // time += 5;
    // updateTime();
    if(diffucult === "medium"){
      time += 3;
    }
  }
});
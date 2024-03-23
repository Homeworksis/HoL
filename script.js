document.addEventListener('DOMContentLoaded', function() {
    next();
    if (localStorage.getItem('highestStreak')) {
        highestStreak = parseInt(localStorage.getItem('highestStreak'));
        highestStreakText.innerText = "Highest Streak: " + highestStreak;
        streakText.innerText = "Current streak: " + streak
        localStorage.setItem('mod', 'mod');
        if (typeof localStorage !== 'undefined') {
    var x = localStorage.getItem('mod');
} else {
    // localStorage not defined
}
}
    }
})


let streak = 0
/*declare elements*/
let higherbutton = document.getElementById("higherButton")
let lowerButton = document.getElementById("lowerButton")
let displayNumberText = document.getElementById("displayNumberText")
let rightWrongText = document.getElementById("rightWrongText")
let highestStreakText = document.getElementById("highestStreakText")
let streakText = document.getElementById("streakText")

/*functions*/
function buttonDisplay(){
    nextButton.style.display = "block"
    higherButton.style.display = "none"
    lowerButton.style.display = "none"
}
function updateStreak(){
    highestStreakText.innerText = "Highest Streak: " + highestStreak;
    streakText.innerText = "Current streak: " + streak
}
/*rngNumber = THOUGHT NUMBER */
function higher(){
    if (rngNumber > displayNumber) {
    rightWrongText.innerHTML = "<span class='correct'>Correct!</span> You guessed higher and my number was " + rngNumber + ". You Won!"
    buttonDisplay();
    streak++
    updateStreak()
    } else if (rngNumber < displayNumber){
        rightWrongText.innerHTML = "<span class='wrong'>Wrong!</span> You guessed higher but my number was " + rngNumber + ". You lost!"
        buttonDisplay();
        if (streak > highestStreak) {
            highestStreak = streak
            localStorage.setItem('highestStreak', highestStreak);
            updateStreak()
            streak = 0
        }
        
    }
    
}
function lower() {
    if (rngNumber > displayNumber) {
        rightWrongText.innerHTML = "<span class='wrong'>Wrong!</span> You guessed lower and my number was " + rngNumber + ". You lost!";
        buttonDisplay();
        // Reset streak if incorrect
        if (streak > highestStreak) {
            highestStreak = streak; // Update highest streak if necessary
            localStorage.setItem('highestStreak', highestStreak); // Save highest streak to local storage
        }
        streak = 0; // Reset streak counter
    } else if (rngNumber < displayNumber) {
        rightWrongText.innerHTML = "<span class='correct'>Correct!</span> You guessed lower and my number was " + rngNumber + ". You Won!";
        buttonDisplay();
        streak++; // Increase streak if correct
        updateStreak()
    }
    updateStreak();
}

function next(){
    nextButton.style.display = "none"
    higherButton.style.display = "block"
    lowerButton.style.display = "block"
    displayNumber = Math.floor(Math.random() * 10) + 1;
    displayNumberText.innerText = displayNumber
    rngNumber = Math.floor(Math.random() * 10) + 1;
    if (rngNumber == displayNumber) {
        rngNumber = Math.floor(Math.random() * 10) + 1;
    }
    rightWrongText.innerText = "I am thinking of another number. Would it be higher or lower than:"
}

/*button onclicks*/
higherButton.onclick = higher;
lowerButton.onclick = lower;
nextButton.onclick = next;

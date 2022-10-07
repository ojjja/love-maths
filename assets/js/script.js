//code to be executed when the page has finnish loading_Wait for the dom finnish loading before running the game
//code to be executed when the user clicks a button_Get the button elements and add eventslistner to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit");
            }else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game loop, called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame() {
    //creats two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25+1)
    let num2 = Math.floor(Math.random()*25+1)
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}



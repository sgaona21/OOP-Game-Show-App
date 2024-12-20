/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Node Variables
const entireKeyboard = document.getElementById('qwerty')
const overlayScreen = document.getElementById('overlay')
const startGameButton = document.getElementById('btn__reset')
const qwertyNodeList = entireKeyboard.querySelectorAll('button')
const phraseElement = document.getElementById("phrase")






let newGame
let newPhrase


// Event Handlers
startGameButton.addEventListener('click', () => {
    newGame = new Game()
    newGame.startGame()
})

entireKeyboard.addEventListener('click', (event) => {
    let guessIsCorrect = newPhrase.checkLetter()
    if (guessIsCorrect == true) {
        newPhrase.showMatchedLetter()
    }
    newGame.handleInteraction()
})

document.addEventListener("keydown", (event) => {
    const pressedKey = event.key.toLowerCase();
    // Allows for keyboard interaction control
    qwertyNodeList.forEach((button) => {
        if (!button.disabled == true) {
            if (button.textContent == pressedKey) {
                button.disabled = true
                if (!newGame.activePhrase.includes(pressedKey)) {
                    button.classList.add('wrong')
                    newGame.removeLife()
                } else if (newGame.activePhrase.includes(pressedKey)) {
                    button.classList.add('chosen')
                    const entirePhrase = document.getElementsByClassName('letter')
                    for (let i = 0; i < entirePhrase.length; i++) {
                        if (entirePhrase[i].textContent == pressedKey) {
                        entirePhrase[i].classList.remove('hide')
                        entirePhrase[i].classList.add('show')
                }
            }
                    newGame.checkForWin()
                }
            }
        }
    });
});

qwertyNodeList.forEach(button => {
    // Adds blue border upon mouse hover to keys
    button.addEventListener('mouseover', () => {
        if (!button.disabled == true) {
            button.style.borderColor = 'blue';
        }
    });

    button.addEventListener('mouseout', () => {
        button.style.borderColor = 'transparent'
    });
});




const hellacoolnewphrase = new Phrase("HEY WHAT UP")
console.log(hellacoolnewphrase.phrase)

const hellwcoolnewGAME = new Game()
console.log(hellwcoolnewGAME.getRandomPhrase())


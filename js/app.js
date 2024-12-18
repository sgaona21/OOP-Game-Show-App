/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//**********VARIABLES *************/
const entireKeyboard = document.getElementById('qwerty')
const overlayScreen = document.getElementById('overlay')
const startGameButton = document.getElementById('btn__reset')

let newGame
let newPhrase

startGameButton.addEventListener('click', () => {
    newGame = new Game()
    newGame.startGame()
})

entireKeyboard.addEventListener('click', (event) => {
    console.log(newPhrase.checkLetter())
    let guessIsCorrect = newPhrase.checkLetter()
    if (guessIsCorrect == true) {
        newPhrase.showMatchedLetter()
    }
})





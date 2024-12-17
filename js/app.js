/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//**********VARIABLES *************/
const entireKeyboard = document.getElementById('qwerty')
const overlayScreen = document.getElementById('overlay')
const startGameButton = document.getElementById('btn__reset')

const phrasesArray = ['how are you', 'way to go', 'coding is fun']





const newgame = new Game()
newgame.phrases = phrasesArray


const myNewPhrase = new Phrase(newgame.getRandomPhrase())
console.log(myNewPhrase.phrase)








startGameButton.addEventListener('click', () => {
    newgame.startGame()
    myNewPhrase.addPhraseToDisplay()
})

entireKeyboard.addEventListener('click', (event) => {
    let guessIsCorrect = myNewPhrase.checkLetter()
    if (guessIsCorrect == true) {
        myNewPhrase.showMatchedLetter()
    }
})





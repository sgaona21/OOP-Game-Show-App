/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0
        this.phrases = ['how are you', 'way to go', 'coding is fun']
        this.activePhrase = null
    }

    startGame() {
        overlayScreen.style.display = 'none'
        newPhrase = new Phrase(this.getRandomPhrase())
        console.log(newPhrase)
        this.activePhrase = newPhrase.phrase
        console.log(this.activePhrase)
        newPhrase.addPhraseToDisplay()
    }

    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomPhrase]
    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }

}




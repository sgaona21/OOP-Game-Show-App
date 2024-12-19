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
        //disables button after it has been clicked
        if (event.target.classList == "key") {
            event.target.disabled = true

            let guessedLetter = event.target.textContent
            if (!this.activePhrase.includes(guessedLetter)) {
                event.target.classList.add('wrong')
                this.removeLife()
            } else if (this.activePhrase.includes(guessedLetter)) {
                event.target.classList.add('chosen')
                newPhrase.showMatchedLetter()
                this.checkForWin()

            }
        }
    }

    removeLife() {
        console.log("remove life was called")
    }

    checkForWin() {
        const currentPhrase = document.querySelectorAll('#phrase ul li')
        let didPlayerwin = true
        for (let i = 0; i < currentPhrase.length; i++)   {
            if (!currentPhrase[i].classList.contains('space')) {
                if (currentPhrase[i].classList.contains('hide')) {
                    didPlayerwin = false
                }
            }
        }
        if (didPlayerwin === true) {
            console.log("PLAYER WON")
        }

    }

    gameOver() {

    }

}




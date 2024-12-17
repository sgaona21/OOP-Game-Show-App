/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0
        this.phrases = []
        this.activePhrase = null
    }

    startGame() {
        overlayScreen.style.display = 'none'
    }

    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomPhrase]
    }

}




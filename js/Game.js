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
        const overlayScreen = document.getElementById('overlay')
        overlayScreen.style.display = 'none'
    }

}

const newgame = new Game()
newgame.startGame()
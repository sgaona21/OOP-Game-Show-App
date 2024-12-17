/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        //Dynamically generates an element for each letter in the given phrase 
        const ul = document.createElement("ul");
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] == ' ') {
                let space = document.createElement("li")
                space.classList.add('space')
                space.innerHTML = this.phrase[i]
                ul.appendChild(space)    
            } else {
                let letter = document.createElement("li")
                letter.classList.add('hide')
                letter.innerHTML = this.phrase[i]
                ul.appendChild(letter)
            }
        }
        const oldUL = document.querySelector("#phrase ul");
        const phraseElement = document.getElementById("phrase")
        phraseElement.replaceChild(ul, oldUL)

    }

    checkLetter() {
        //Checks to see if the players guessed letter is in the given phrase
        let playerGuess = ''
        if (this.phrase.includes(playerGuess)) {
            return true
        } else {
            return false
        }
    }

    showMatchedLetter() {
        const ul = document.querySelectorAll('#phrase ul li')
        ul.forEach((item, index) => {
            console.log(item.innerHTML);
          });    
    }
}


const myNewPhrase = new Phrase("how are you")


console.log(myNewPhrase.addPhraseToDisplay())
myNewPhrase.showMatchedLetter()
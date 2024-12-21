/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * nodeVariables.js */

const entireKeyboard = document.getElementById('qwerty')
const overlayScreen = document.getElementById('overlay')
const startGameButton = document.getElementById('btn__reset')
const qwertyNodeList = entireKeyboard.querySelectorAll('button')
const phraseElement = document.getElementById("phrase")

console.log('hey')

let anotherNEwGame = new Game()

console.log(anotherNEwGame)
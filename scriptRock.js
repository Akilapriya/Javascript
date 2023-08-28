// const resultDisplay=document.querySelector('#result');
// const choicesDisplay=document.querySelector('#choices');
// const choices=['rock', 'paper', 'scissors']


// const handleClick= (e)=>{
//     const userChoice=e.target.innerHTML
//     const compChoice=choices[Math.floor(Math.random() * choices.length)]
//     getResults(userChoice, compChoice )
// }

// choices.forEach(choice=>{
//     const button =document.createElement('button')
//     button.innerHTML=choice
//     button.addEventListener('click', handleClick)
//     choicesDisplay.appendChild(button)
// })

// const getResults =(userChoice, compChoice )=>{
//     switch(userChoice + compChoice){
//         case 'scissorspaper':
//         case 'rockscissors':
//         case 'paperrock':
//             resultDisplay.innerHTML='You chose ' + userChoice + ' and the computer chose ' + compChoice + ', YOU WIN';
//         break;
//         case 'paperscissors':
//         case 'scissorsrock':
//         case 'rockpaper':
//             resultDisplay.innerHTML='You chose ' + userChoice + ' and the computer chose ' + compChoice + ', YOU LOSE';
//             break;
//         case 'paperpaper':
//         case 'scissorsscissors':
//         case 'rockrock':
//             resultDisplay.innerHTML='You chose ' + userChoice + ' and the computer chose ' + compChoice + ',ITS A DRAW';
//     }
    
// }

const compChoiceDisplay=document.getElementById('comp-choice');
const userChoiceDisplay=document.getElementById('user-choice');
const resultDisplay=document.getElementById('result');
const choices=document.querySelectorAll('button');
let userChoice
let compChoice

choices.forEach(choice=>choice.addEventListener('click', (e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateCompChoice()
     getResult()

}))
generateCompChoice=()=>{
    const randomNumber=Math.floor(Math.random() * choices.length)+1
    //console.log(randomNumber)
    if(randomNumber ===1){
         compChoice ='rock'
    }
    if(randomNumber ===2){
        compChoice ='paper'
   }
   if(randomNumber ===3){
    compChoice ='scissors'
}
compChoiceDisplay.innerHTML=compChoice
}

function getResult(){
    switch(userChoice + compChoice){
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            resultDisplay.innerHTML='you win'
        break;
       case 'scissorsrock':
       case 'paperscissors':
       case 'rockpaper':
       resultDisplay.innerHTML='you lose'
       break;
       case 'scissorsscissors':
       case 'paperpaper':
       case 'rockrock':
       resultDisplay.innerHTML='Its a draw'
      
    }
    
}

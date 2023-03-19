
let player = document.querySelector("#player")
let computer = document.querySelector("#computer")
let result = document.querySelector("#result")
let button = document.querySelectorAll("#btn")
let point = document.querySelector("#points")
let point2 = document.querySelector("#points2")
let submit =  document.querySelector("#submit")
let final = document.querySelector("#final")
let player1
let computer2
let count = 0;
let count2 = 0;
function computeroption(){
    let r = Math.floor(Math.random()*3)+1
    switch(r){
        case 1:
            computer2 = "stone"
            break
        case 2:
            computer2 = "paper"
            break
        case 3:
            computer2 = "scissor"
            }
}
function check(){
    if(computer2 == player1){
        count = count
        count2 = count2
        return "draw"
    }
    else if(computer2 == "stone"){
        let r1 = (player1 == "paper")? "you win" : "you lose"
        if(r1=="you win"){
            count +=1
            return "you win"
        }
        else{
            count2+=1
            return "you lose"
        }
    }
    else if(computer2 == "paper"){
        let r2 =(player1 == "scissor")? "you win" : "you lose"
        if(r2 =="you win"){
            count +=1
            return "you win"
        }
        else{
            count2+=1
            return "you lose"
        }
    }
    else if(computer2 == "scissor"){
        let r3 = (player1 == "stone")? "you win" : "you lose"
        if(r3=="you win"){
            count +=1
            return "you win"
        }
        else{
            count2 += 1
            return "you lose"
        }
   }
   }
   function get(){if(count>count2){
    return "YOU WIN"
   }
   else if(count2>count){
    return "YOU LOSE"
   }
   else if(count == count2){
    return "DRAW MATCH"
   }}
   button.forEach(bt =>bt.addEventListener("click",()=>{
    player1 = bt.textContent
    computeroption()
    computer.textContent = `computer : ${computer2}`
    player.textContent = `player : ${player1}`
    result.textContent  = check()
    point.textContent = `you : ${count}`
    point2.textContent = `system : ${count2}`
    submit.addEventListener("click",() =>{
        final.textContent =  get()
    })
}))
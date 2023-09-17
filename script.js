let a = prompt("ENTER YOUR NAME BEFOR COMMENCING THE GAME")
a.toUpperCase(a)
function makebubble(){

    var clutter='';
    for(let i=0 ; i<=101 ; i++ ){
        let run = Math.floor(Math.random()*10)
        clutter +=`<div class="bubble">${run}</div>`
    }
    document.querySelector("#panelbottom").innerHTML =clutter;
}
let fhit = 0
let timer = 60;
function runtime(){
   let timerclr = setInterval(function(){
        if(timer>0){
            timer --
            document.querySelector("#coutdown").textContent=timer
        }else{
            clearInterval(timerclr);
            document.querySelector("#panelbottom").innerHTML=`<h1>${a} GAME OVER YOU SCORED = ${score}`

        }

    },1000)
}
function newhit(){
    fhit = Math.floor(Math.random()*10)
    document.querySelector("#hiiit").textContent=fhit
} 
let score = 0
function scoreincrease(){
    score += 10
    document.querySelector("#scorehit").textContent = score
}
document.querySelector("#panelbottom").addEventListener("click",function(details){
 let clicknum = (Number(details.target.textContent)) // target is that in which it will be clicked
 if(clicknum===fhit){
    scoreincrease()
    makebubble()
    newhit()
 }
})

makebubble()
runtime()
newhit()

var timer=60;//setting timer for game
var score=0;//setting score for game
var hitnum=0;


//code for increasing the score
function increaseScore(){
   score+=10;
   document.querySelector("#scoreval").textContent=score;
}
//code for hit
function getNewHit(){
 hitnum= Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=hitnum;
}
// function for bubble making
function MakeBubble(){

var clutter="";
for(var i=1;i<=420;i++){
   var num=Math.floor(Math.random()*10)
   clutter +=`<div class="bubble">${num}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}
// set timerrr
function runTimer(){
  var timerrr = setInterval(function(){
   if(timer>0){
      timer--;
      document.querySelector("#timeraval").textContent=timer;

   }else{

      clearInterval(timer);
      document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
   }
  },1000); 
}
document.querySelector("#pbtm")
.addEventListener("click",function(details){
   var clickednum = (Number(details.target.textContent));
  if(clickednum===hitnum){
   increaseScore();
   MakeBubble();
getNewHit();
  }

});
runTimer();
MakeBubble();
getNewHit();
;

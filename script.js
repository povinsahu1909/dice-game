/*var score=[0,0];
var roundscore=0;
var activeplayer=0;  */
var score,roundscore,activeplayer;
inti();
//console.log(dice);

//document.querySelector('#current-'+ activeplayer).textContent=dice; through we can just add text not any style to text
//

//var x=document.querySelector('#score-1').textContent;
/*
document.querySelector('.dice').style.display ='none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
*/
document.querySelector('.btn-roll').addEventListener('click',function(){

    //1. random number generation
    var dice=Math.floor(Math.random()*6)+1;

    //2. display the result
    var diceDOM= document.querySelector('.dice');
    diceDOM.style.display ='block';
    diceDOM.src= 'dice-'+dice+'.png';

    //3. update the result in the round score
      if(dice===1)
       { 
         nextplayer();
        //document.querySelector('#current-' + activeplayer).innerHTML = dice;
      ///console.log(roundscore);console.log(activeplayer);
    }
       else 
       {roundscore+=dice;
        document.querySelector('#current-' + activeplayer).textContent = roundscore;
       
       }

 
})

document.querySelector('.btn-hold').addEventListener('click',function(){
console.log(activeplayer)
  // add currrent score to global score 
   score[activeplayer] += roundscore;


  // update the score on screen 
  document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];

  //check if player has won the game
  if(score[activeplayer]>=20)
     {
       document.querySelector('#name-'+activeplayer).textContent = 'WINNER';
       document.querySelector('.dice').style.display='none';
       document.querySelector('.player-'+activeplayer +'-panel').classList.add('winner');
       document.querySelector('.player-'+activeplayer +'-panel').classList.remove('active');
     }
  else   
     {// changing the turn of current player
  nextplayer();}
 
});

function nextplayer()
{
  roundscore=0; activeplayer=(activeplayer+1)%2;

        document.getElementById('current-0').textContent = '0'; 
        document.getElementById('current-1').textContent = '0'; 

        
        //document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
        //document.querySelector('.player-'+(activeplayer+1)%2+'-panel').classList.add('active')
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display ='none';
}


document.querySelector('.btn-new').addEventListener('click', function(){
  inti();
})

function inti()
{
  score=[0,0];
  roundscore=0;
  activeplayer=0;  

  
document.querySelector('.dice').style.display ='none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('#name-0').textContent = 'PLAYER 1';
document.querySelector('#name-1').textContent = 'PLAYER 2';
document.querySelector('.player-'+ 0+'-panel').classList.remove('winner');
document.querySelector('.player-'+ 1 +'-panel').classList.remove('winner');
document.querySelector('.player-'+0 +'-panel').classList.remove('active');
document.querySelector('.player-'+1 +'-panel').classList.remove('active');
document.querySelector('.player-'+0 +'-panel').classList.add('active');

}
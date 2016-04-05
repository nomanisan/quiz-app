//initialize variables

var fiboArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];
var fiboResponse = [];
var fiboCounter;
var fiboRandom;
var gameResponse;
var gameStatusArray;
var currentQuestion=[];

$(document).ready(function() {

  //new game
  newGame();

   //reset game
    $("#new").click(function(){
      newGame();
    });

   //user supplies missing integers in sequence
  $('#guessSubmit').click(function(e) {
    e.preventDefault();
         for (i = 4; i< 7; i++) { 
                fiboResponse[i]=$('#Entry_'+i).val();
      //console.log(fiboResponse[i],i);
         }
    responseEval(fiboResponse);

  });

  $('#next').click(function(e) {
      e.preventDefault();
      newQuestion();
  });

  function newGame () {
    /*resetVars();*/
      fiboCounter=0;
      newQuestion();
  };

  function newQuestion () {
      fiboResponse.length=0
      fiboRandom = getRandomNumber();
      fiboCounter++;
      if (fiboCounter < 6) {
        $('#q_count').text(fiboCounter+" of 5");
        $('#response').text("Enter the missing numbers in the Fibonacci sequence above.");
        currentQuestion=fiboDisplay();
        document.getElementById("guessSubmit").style.visibility = "visible";
        document.getElementById("next").style.visibility = "hidden";
      } else {
        $('#response').text("Game over. Click 'New Game' to play again.");
        document.getElementById("guessSubmit").style.visibility = "hidden";
        document.getElementById("next").style.visibility = "hidden";
      }
  };

});

  function getRandomNumber () {
    return parseInt(Math.random()*7)+1;
  }

  function fiboDisplay (fiboForm) {
         for (i = 0; i< 4; i++) { 
                $('#Entry_'+i).css("color", "black");
                $('#Entry_'+i).readonly=true;
                fiboResponse[i]=fiboArray[fiboRandom+i];
                $('#Entry_'+i).val(fiboResponse[i]);
        }
         for (i = 4; i< 7; i++) { 
                $('#Entry_'+i).css("color", "black");
                $('#Entry_'+i).readonly=false;
                fiboResponse[i]=fiboArray[fiboRandom+i];
                //$('#Entry_'+i).val(fiboResponse[i]);
        }
        return fiboResponse;
  }

  function responseEval(fiboResponse) {
         $('#Status_'+fiboCounter).css("backgroundColor", "green");
         for (i = 0; i< 7; i++) { 
                $('#Entry_'+[i]).css("color", "green");
                if (fiboArray[fiboRandom+i]!=fiboResponse[i]) {
                  $('#Entry_'+[i]).css("color", "red");
                  $('#Status_'+fiboCounter).css("backgroundColor", "red");
                }
          }
          $('#response').text("The correct answers were: "+fiboResponse);
          document.getElementById("guessSubmit").style.visibility = "hidden";
          document.getElementById("next").style.visibility = "visible";
  }

  function progress_bar () {
    guessList='';
    for (i = 1; i <= guessCounter; i++) { 
        guessList=guessList+'<li>'+guessArray[i-1]+'</li>';
    }
    $('#progress_bar').html(guessList);
  }

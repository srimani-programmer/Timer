




var userInputTime, hours, minutes, seconds;
var audio = new Audio('alertSound.mp3');


function countDown(){
    // converting the string input to float.
     userInputTime = parseInt(document.getElementById('timeInSec').value);
     console.log(userInputTime);

     hours = Math.floor(userInputTime/3600); // Hours value
     minutes = Math.floor((userInputTime % 3600) / 60);
     seconds = Math.floor( (userInputTime % 3600) % 60 );
     

     if(isNaN(userInputTime))
        alert('Please provide a valid time in seconds. and Donot play with time it will play with you...!');
     else{
        console.log(hours + ' : ' + minutes + ' : ' + seconds);
        timer();
     }

}


function timer(){
    // Sets the start button to stop
    document.getElementById('start_button').style.display = 'none';
    document.getElementById('stop_button').style.display = 'block';

stopwatch =  setInterval(function(){
        if(seconds > 0){
            seconds -= 1;   // Increasing the seconds count
            document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
        }else{
            if(minutes > 0){
                minutes -= 1;   // Increasing the minutes count
                seconds = 59;
                document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
            }else{
               if(hours >0){
                  hours -= 1; // Increasing the hours value
                  minutes = 59;
                  seconds = 59;
                  document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
               }else{
                   hours = 0;
                   minutes = 0;
                   seconds = 0;
                   audio.play();
                 
                   document.getElementById("display_time").innerHTML = 'Your Time is up.';
               }
            }
        }
    }, 1000);

    document.getElementById('stop_button').onclick = function(){
        document.getElementById('start_button').style.display = 'block';
        document.getElementById('stop_button').style.display = 'none';
        audio.pause();
        audio.currentTime = 0;
        userInputTime = 0;
        document.getElementById('display_time').innerHTML = '00 : 00 : 00';
        clearInterval(stopwatch);
    }

    document.getElementById('start_button').onclick = function(){
        if(userInputTime == parseInt(document.getElementById('timeInSec').value)){
        document.getElementById('start_button').style.display = 'none';
        document.getElementById('stop_button').style.display = 'block';
        stopwatch =  setInterval(function(){
            if(seconds > 0){
                seconds -= 1;   // Increasing the seconds count
                document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
            }else{
                if(minutes > 0){
                    minutes -= 1;   // Increasing the minutes count
                    seconds = 59;
                    document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
                }else{
                   if(hours >0){
                      hours -= 1; // Increasing the hours value
                      minutes = 59;
                      seconds = 59;
                      document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
                   }else{
                       hours = 0;
                       minutes = 0;
                       seconds = 0;
                       audio = new Audio('alertSound.mp3');
                       audio.play();
                       document.getElementById("display_time").innerHTML = 'Your Time is up.';
                   }
                }
            }
        }, 1000);
        }else{
            countDown();
        }
    }
}
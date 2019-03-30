// variables for the time
var seconds = 0;
var minutes = 0;
var hours = 0;
var stopwatch;

function timer(){
    // Sets the start button to stop
    document.getElementById('start_button').style.display = 'none';
    document.getElementById('stop_button').style.display = 'block';

stopwatch =  setInterval(function(){
        if(seconds< 59){
            seconds += 1;   // Increasing the seconds count
            document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
        }else{
            if(minutes < 59){
                minutes += 1;   // Increasing the minutes count
                seconds = 0;
                document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
            }else{
               if(hours < 23){
                  hours += 1; // Increasing the hours value
                  minutes = 0;
                  seconds = 0;
                  document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
               }else{
                   hours = 0;
                   minutes = 0;
                   seconds = 0;
                   document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
               }
            }
        }
    }, 1000);

    document.getElementById('stop_button').onclick = function(){
        document.getElementById('start_button').style.display = 'block';
        document.getElementById('stop_button').style.display = 'none';
        clearInterval(stopwatch);
    }

    document.getElementById('start_button').onclick = function(){

        document.getElementById('start_button').style.display = 'none';
        document.getElementById('stop_button').style.display = 'block';
        stopwatch =  setInterval(function(){
            if(seconds< 59){
                seconds += 1;   // Increasing the seconds count
                document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
            }else{
                if(minutes < 59){
                    minutes += 1;   // Increasing the minutes count
                    seconds = 0;
                    document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
                }else{
                   if(hours < 23){
                      hours += 1; // Increasing the hours value
                      minutes = 0;
                      seconds = 0;
                      document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
                   }else{
                       hours = 0;
                       minutes = 0;
                       seconds = 0;
                       document.getElementById("display_time").innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
                   }
                }
            }
        }, 1000);
    }
}
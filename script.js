// variables for the time
var seconds = 50;
var minutes = 9;
var hours = 8;

function timer(){
    // Sets the start button to stop
    document.getElementById('start_button').innerHTML = 'Stop';
    
    setInterval(function(){
        if((seconds < 9 && minutes < 10 && hours < 10)){
            seconds += 1;   // Increasing the seconds count
            document.getElementById("display_time").innerHTML = '0' + hours + ' : 0' + minutes + ' : 0' + seconds;
        }else if((seconds < 9 && minutes >= 10 && hours < 10)){
            seconds += 1;   // Increasing the seconds count
            document.getElementById("display_time").innerHTML = '0' + hours + ' : ' + minutes + ' : 0' + seconds;
        }else if((seconds >= 9 && seconds< 59) && minutes < 10 && hours < 10){
            seconds += 1;   // Increasing the seconds count
            document.getElementById("display_time").innerHTML = '0' + hours + ' : 0' + minutes + ' : ' + seconds;
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
               }
            }
        }
    }, 1000);
}
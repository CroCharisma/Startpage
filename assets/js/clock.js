function currentTime(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    hour = updateTime(hour);
    min = updateTime(min);
    document.getElementById("clock").innerHTML = hour + ":" + min;
    setTimeout(() => { 
        currentTime();
    }, 1000 );
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();
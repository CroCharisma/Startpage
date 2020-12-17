let url = "http://duckduckgo.com/?q="; //the default search url

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

function redirect( args ){
  if( args.length > 1 ){
    
  }
  else{
    let search = "";
    search += url + args[0];
    window.location.href = (search);
    console.log(url + args[0]);
  }

  return false;
}

function eval(e){
  if( e.keyCode == 13 ){
    var args = [];
    args = document.getElementById("search").value.split(";");
    redirect(args);
  }
}

currentTime();
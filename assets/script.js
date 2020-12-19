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
  var search = "";
  if( args.length > 1 ){
    switch( args[0].toLowerCase() ){
      case "y":
        url = "https://www.youtube.com/results?search_query=";
        break;
      case "g":
        url = "https://www.google.com/search?q="
        break;
      case "tw":
        url = "https://twitter.com/search?q=";
        break;
      case "ttv":
        url = "https://www.twitch.tv/";
        break;
      case "dgg":
        url = "https://www.destiny.gg/bigscreen#twitch/";
        break;
    }
    search += url + args[1];
  }
  else{
    search += url + args[0];
  }

  window.location.href = (search);
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
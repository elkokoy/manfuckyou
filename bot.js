const Eris = require("eris");
var x5bzteam = new Eris("MzUxMzY2NTA0MDY4OTM5Nzc3.DvcBCQ.t0QAj-zK7U4KZ4Bi8uP_SsfkZfo");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "518933084792684544";
nick = "welcomeguys";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
x5bzteam.connect();

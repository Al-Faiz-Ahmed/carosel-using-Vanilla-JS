

var arr1 = ["FC9E4F", "BBE6E4", "757083", "4DA167"];
var arr2 = ["615756", "F7717D", "DB9065", "EDFF7A"];
var arr3 = ["B3D2B2", "F7B2AD", "C6D4FF", "EEF5DB"];

var div = document.querySelectorAll("div");
var divarr = [...div];

var divshown = 0

function global() {
  for (var i = 1; i < divarr.length; i++) {
    if(divshown === 0){
        divarr[i].className = "hiding";
    }
  }

  for (var i = 0; i < divarr.length; i++) {
    divarr[i].style.backgroundColor = "#" + arr1[i];
  }
}
global();




var forColorChanger = [...arr1, ...arr2, ...arr3];

function forColour(elem) {
  var rondomNum = Math.ceil(Math.random() * forColorChanger.length - 1);
  elem.style.backgroundColor = "#" + forColorChanger[rondomNum];
}



function forward() {
    divshown++
    for (var i = 0; i < divarr.length; i++) {
        if(i !== divshown){
            divarr[i].className = 'hiding'
        }
        if(i === divshown){
            divarr[i].className = 'flexing'
        }
        if(divshown > divarr.length - 1){
            divshown = 0
            divarr[i].className = 'flexing'
        }
    }  
}


function backward() {
    divshown--
    for (var i = divarr.length - 1; i >= 0; i--) {
        
        if(divshown === -1){
            divshown = 3;
        }

        if(i !== divshown){
            divarr[i].className = 'hiding'
        }
        if(i === divshown){
            divarr[i].className = 'flexing'
        }
    }  
}

setInterval(function(){
    divshown++
    for (var i = 0; i < divarr.length; i++) {
        if(i !== divshown){
            divarr[i].className = 'hiding'
        }
        if(i === divshown){
            divarr[i].className = 'flexing'
        }
        if(divshown > divarr.length - 1){
            divshown = 0
            divarr[i].className = 'flexing'
        }
    }
},3000)
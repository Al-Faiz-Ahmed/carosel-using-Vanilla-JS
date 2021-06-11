// var obj  = {
//     name:'Faizan',
//     subj : 'Urdu'
// }
// console.log(JSON.stringify(obj))


// localStorage.setItem('user',JSON.stringify(obj));










var arr1 = ['FC9E4F','BBE6E4','757083','4DA167'];
var arr2 = ['615756','F7717D','DB9065','EDFF7A'];
var arr3 = ['B3D2B2','F7B2AD','C6D4FF','EEF5DB'];

var div = document.querySelectorAll('div');
console.log(div);

var divarr = [...div] 


window.onload = function(){

    for(var i = 1; i < divarr.length; i++){
        divarr[i].style.display = 'none';
    }
}


for(var i = 0; i < divarr.length; i++){
    divarr[i].style.backgroundColor = '#' + arr1[i]
}

var forColorChanger = [...arr1,...arr2,...arr3]


function forColour(elem){
    var rondomNum = Math.ceil(Math.random() * forColorChanger.length - 1)
    elem.style.backgroundColor = '#' + forColorChanger[rondomNum]; 
    console.log(rondomNum)
}

function forward(){
    for(var i = 0;i < divarr.length;i++){
        
    }
}
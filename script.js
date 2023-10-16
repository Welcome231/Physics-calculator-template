function calc(h){
    // Write the formula here

       v = Math.sqrt(((6.6743 * 10-11) * (5,98*1024)) / (h));
       return Math.round(v * 1000);
}

function main(){
    //Gets called on button click
       height = document.querySelector('#height').value   
       m = document.getElementById("output").innerHTML = calc(height).toString() + " km/h"
}

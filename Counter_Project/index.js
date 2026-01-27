const increase = document.getElementById("increasebtn") ;
const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const label = document.getElementById("mylabel");
let num = 0;

increase.onclick = function(){
    num++;
    label.textContent = num;
}

decrease.onclick = function(){
    num--;
    label.textContent = num;
}
reset.onclick = function(){
    num=0;
    label.textContent = num ;
}
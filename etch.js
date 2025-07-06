const container = document.querySelector("#container");
let k = 16;
let l = 16;
function makeNew(k,l){
    container.innerHTML = "";
    for (i=0;i<k;i++){
    for (j=0;j<l;j++){
        const div = document.createElement("div");
        div.classList="pix";
        container.appendChild(div);
    }
}
}
const newG = document.querySelector("#newGrid");
newG.addEventListener("click", getNewGrid);
function getNewGrid(){
    k=prompt("Inter the width of the Grid: ");
    l=prompt("Inter the height of the Grid: ");
    makeNew(k,l);
    return k,l; 
}
makeNew(k,l)
const container = document.querySelector("#container");
let k = 16;
function makeNew(k){
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${k}, 1fr)`;

    for (i=0;i<k;i++){
    for (j=0;j<k;j++){
        const div = document.createElement("div");
        div.classList="pix";
        container.appendChild(div);
    }
}
}
const newG = document.querySelector("#newGrid");
newG.addEventListener("click", getNewGrid);
function getNewGrid(){
    k=prompt("Inter the size of the Grid: ");
    makeNew(k);
    return k; 
}
makeNew(k);
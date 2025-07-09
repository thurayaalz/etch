let iDraw=false;
let iRGB=false;
let Rgb = "rgb(255, 0, 0)";

//initial Grid
const container = document.querySelector("#container");
let k = 16;
function makeNew(k){
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${k}, 1fr)`;

    for (i=0;i<k;i++){
        for (j=0;j<k;j++){
            const div = document.createElement("div");
            div.classList.add("pix");
            container.appendChild(div);
        }}}
makeNew(k);


//New Grid
const newG = document.querySelector("#newGrid");
newG.addEventListener('click', getNewGrid);
function getNewGrid(){
    k=prompt("Inter the size of the Grid: ");
    makeNew(k);
    return k; 
}

//Clear Grid
const clr = document.querySelector("#clear");
clr.addEventListener('click',()=>{ makeNew(k)});

//draw
const canv = document.querySelector("#container");
canv.addEventListener('mousedown', ()=> {iDraw=true});
canv.addEventListener('mouseover', (e)=>{
    if(iDraw  && !iRGB){
        e.target.style.backgroundColor=Rgb}
    else if(iDraw && iRGB ){
        Rgb = getRGB()
        e.target.style.backgroundColor=Rgb}

});
document.addEventListener('mouseup', ()=>{iDraw=false});

function getRGB() {
        const r = Math.floor(Math.random() * 256); // 0–255
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        Rgb =`rgb(${r}, ${g}, ${b})`;
        return  Rgb;
      }

const Rain = document.querySelector("#Rainbow");
Rain.addEventListener('click', ()=>{iRGB=!iRGB});


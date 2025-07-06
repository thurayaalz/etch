const container = document.querySelector("#container");
let k = 16;
let l = 16;
for (i=0;i<k;i++){
    for (j=0;j<l;j++){
        const div = document.createElement("div");
        div.classList="pix";
        container.appendChild(div);
    }
}
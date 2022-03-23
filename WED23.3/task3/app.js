`use strict`;
function changeImg() {
    let x=document.getElementById("framework").value;
    if (x==1) {document.getElementById("im").src="";document.getElementById("im").alt="None";}
    else if (x==2) {document.getElementById("im").src="https://static.magflags.net/media/catalog/product/cache/75170699113cf9b1963820a3ea1bab40/J/O/JO-1x1.66.png";document.getElementById("im").alt="Jordan";}
    else if (x==3) {document.getElementById("im").src="https://freesvg.org/img/BevelledPalestine.png";document.getElementById("im").alt="Palestine";}
    else if (x==4) {document.getElementById("im").src="https://freesvg.org/img/iraq.png";document.getElementById("im").alt="Iraq";}
    else if (x==5) {document.getElementById("im").src="https://freesvg.org/img/egypt.png";document.getElementById("im").alt="Egypt";}}


function onHover(doc){
    doc.style.transform = "scale(2, 2)";
}

function onOut(doc){
    doc.style.transform = "scale(1,1)";
    doc.style.transition = "transform .25s";

}

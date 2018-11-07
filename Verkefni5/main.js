function flipflop(target) {
    target = document.getElementById(target);
    if(target.style.display === "block"){
        target.style.display = "none"
    } else{
        target.style.display = "block"
    }
}
function gridflop(target) {
    target = document.getElementById(target);
    if(target.style.display === "grid"){
        target.style.display = "none"
    } else{
        target.style.display = "grid"
    }
}
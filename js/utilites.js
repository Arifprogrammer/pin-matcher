function getInputValue(id){
    const value = document.getElementById(id);
    return value;
}
// ------------matched and unmacthed part-------------
function showHide(mainselector, block, otherselector, none){
    const matched = document.querySelector(mainselector);
    matched.style.display = block;
    const hide = document.querySelector(otherselector);
    hide.style.display = none;
}

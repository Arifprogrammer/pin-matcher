//* -----------pin generator part----------
document.getElementById("generate-btn").addEventListener("click", function(){
    let value = getInputValue("generate-input");
    let randomPin = Math.floor(Math.random() * 10000 );
    randomPin = randomPin.toString();
    if(randomPin.length == 4){
        value.value = randomPin;
    }
    else{
        false;
    }
})

//* -----------calculator part----------
document.getElementById("calculator").addEventListener("click", function(e){
    const value = e.target.innerText;
    const inputValue = getInputValue("calc-input");
    const prevInputValue = inputValue.value;
    if(isNaN(value)){
        if(value == "C"){
            inputValue.value = "";
        }
        else if(value == "<"){
            const digit = prevInputValue.split("");
            digit.pop();
            inputValue.value = digit.join("");
        }
    }
    else{
        let newInputValue = prevInputValue + value;
        inputValue.value = newInputValue;
    }
    if(prevInputValue.length == 4){
        inputValue.value = inputValue.value.slice(0, 4);
    }
})

//* -----------submit button & matched unmatched part----------
let x = 0;
document.getElementById("submit-btn").addEventListener("click", function(){
    const picInput = getInputValue("generate-input");
    const calInput = getInputValue("calc-input");
    if(picInput.value == ""){
        alert("please click generate pin button first");
    }
    else{
        if(picInput.value == calInput.value){
            showHide(".notify:nth-child(2)", "block", ".notify:nth-child(1)", "none");
            calInput.value = "";
        }
        else{
            showHide(".notify:nth-child(1)", "block", ".notify:nth-child(2)", "none");
            calInput.value = "";
            x += 1;
            if(x <= 3){
                const three = document.getElementById("three");
                three.innerText = parseInt(three.innerText) - 1;
                if(three.innerText == 0){
                    document.getElementById("submit-btn").setAttribute("disabled", "true");
                    document.getElementById("submit-btn").style.color = "gray";
                }
            }
        }
    }
})

//! -------------validation of pin generator input-------------
document.getElementById("generate-input").addEventListener("input", function(e){
    const value = e.target.value;
    if(typeof value == "string"){
        e.target.value = "";
    }
});
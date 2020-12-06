var translateBtn = document.querySelector("#Translate-btn");
var inputTxt = document.querySelector("#input-txt");
var outputTxt = document.querySelector("#output")



translateBtn.addEventListener("click", translateFn)

function translateFn() {
    outputTxt.innerText = inputTxt.value;
};


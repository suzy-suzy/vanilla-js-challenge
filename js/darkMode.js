// const btn = document.querySelector(".js-darkMode"),
//     darkModeBg = document.querySelector("body");

// function generateDarkMode(){
//     const currentBg = bg.style.backgroundColor;
//     console.log(currentBg);
//     if(currentBg){
//        bg.style.backgroundColor = "#111";
//     }
// }

// function init(){
//     btn.addEventListener("click", generateDarkMode);
// }
// init();

const checkBox = document.querySelector("#js-checkbox");

function generateCheckBox(){
    const currentBg = document.body.style.backgroundColor;
    console.log(currentBg);
    // const darkBg = document.body.classList.toggle("dark");
    // console.log(darkBg);
    if(currentBg){
        document.body.style.removeProperty("background-color");
        document.body.classList.add("dark");
    } else {
        document.body.style.backgroundColor = generateRandomColor();
    }
}

function init(){
    checkBox.addEventListener("change", generateCheckBox);
}
init();


const bg = document.querySelector("body");

const colors = ["#f9ca24", "#f0932b", "#eb4d4b", "#badc58", "#7ed6df", "#e056fd", "#686de0", "#ff9ff3"];

function generateRandomColor(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

function init(){
    bg.style.backgroundColor = generateRandomColor();
}
init();



// const bg = document.querySelector("body");

// const IMG_NUM = 12;

// function paintBg(imgNum){
//     const image = new Image();
//     image.src = `img/${imgNum + 1}.jpg`;
//     // console.log(image);
//     bg.appendChild(image);
//     image.classList.add("bgImage");
// }

// function getNum(){
//     const number = Math.floor(Math.random() * IMG_NUM);
//     // console.log(number);
//     return number;
// }

// function init(){
//     const randomNum = getNum();
//     paintBg(randomNum);
// }
// init();



// const bg = document.querySelector("body");

// function generateRandomColor(){
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     console.log(randomColor);
//     return randomColor;
// }

// function init(){
//     bg.style.backgroundColor = generateRandomColor();
// }
// init();

// const bg = document.querySelector("body");

// function generateRandomColor(){
//     const randomColor = `rgb(${[1,2,3].map(x=>Math.floor(Math.random()*256))})`;
//     console.log(randomColor);
//     return randomColor;
// }
// function init(){
//     bg.style.backgroundColor = generateRandomColor();
// }
// init();
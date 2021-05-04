const grForm = document.querySelector(".js-greetingForm"),
    grInput = document.querySelector(".grInput"),
    greeting = document.querySelector(".js-greetings"),
    toDo = document.querySelector(".js-toDo");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintToDo(){
    toDo.classList.add(SHOWING_CN);
}

function saveGreeting(text){
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text){
    greeting.innerHTML = `Hello, ${text} 😘</br><span>Don't give up!</span>`;
    greeting.classList.add(SHOWING_CN);
    grForm.classList.remove(SHOWING_CN);
}

function handleGreetingInput(e){
    e.preventDefault();
    const currentValue = grInput.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveGreeting(currentValue);
    paintToDo();
}

function askForName(){
    grForm.classList.add(SHOWING_CN);
    grForm.addEventListener("submit", handleGreetingInput);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
        paintToDo();
    }
}

function init(){
    loadName();
}
init();
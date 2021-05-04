const clock = document.querySelector(".js-clock");

function getTime(){
    const now = new Date();
    // console.log(now);
    const date = new Intl.DateTimeFormat('ko-KR',{dateStyle:"full"}).format(now);
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // console.log(date, hours, minutes, seconds);
    const hoursStr = `${hours < 10 ? `0${hours}` : hours}`;
    const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}`;
    const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}`;
    clock.innerHTML = `${hoursStr}:${minutesStr}:${secondsStr}<br><span>${date}</span>`;
};

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();
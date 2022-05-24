const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //시작하자마자 시간 출력하고 ㄱ
// setInterval = > argument 1. function 2. term(ms) 초마다 반복
setInterval(getClock, 1000);

//setTimeout = > argument 1. function 2. tuerm(ms) 초 뒤에 실행 

let time = document.getElementById("time");
let amPm = document.getElementById("amPm");

function clock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    amPm = hour>12? amPm.innerText = "PM": amPm.innerText = "Am";
    hour = hour>12? hour-12 : hour;
    hour = hour<10 ? "0"+hour: hour;
    minute = minute<10 ? "0"+minute: minute;
    second = second<10 ? "0"+second: second;


    time.innerText = `${hour} : ${minute} : ${second}`;
    setInterval(clock, 1000);
}
clock();
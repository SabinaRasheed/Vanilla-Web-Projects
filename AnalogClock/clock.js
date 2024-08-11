setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let htime = 30 * hours + (minutes / 2);
    let mtime = 6 * minutes;
    let stime = 6 * seconds;

    document.getElementById('hour').style.transform = `rotate(${htime}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mtime}deg)`;
    document.getElementById('second').style.transform = `rotate(${stime}deg)`; 

}, 1000);

function timeDiff(t1, t2) {
    var t1Time = t1.getTime()
    var t2Time = t2.getTime()
    var sub = Math.round((t2Time - t1Time) / 1000);
    //  var day=Math.floor(sub/(60*60*24))
    var hours = Math.floor(sub % (60 * 60 * 24) / (60 * 60));
    var minutes = Math.floor(sub % (60 * 60) / 60)
    var seconds = sub % 60;
    var obj = {
        //  day,
        hours,
        minutes,
        seconds
    }
    return obj;
}
const box = document.querySelector('.timer')
setInterval(function() {
    var time1 = new Date(2020, 11, 15, 15, 50, 00)
    var time2 = new Date();
    var sub = timeDiff(time2, time1)
    if (sub.seconds <= 9) {
        sub.seconds = '0' + sub.seconds
    }
    if (sub.minutes <= 9) {
        sub.minutes = '0' + sub.minutes
    }
    if (sub.hours <= 9) {
        sub.hours = '0' + sub.hours
    }
    var str = sub.hours + ':' + sub.minutes + ':' + sub.seconds;
    box.innerText = str;
}, 1000)
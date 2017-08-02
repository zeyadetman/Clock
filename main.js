function setTime() {
    var s = new Date().getSeconds() * 6 - 90;
    var h = new Date().getHours() * 30 - 90;
    var m = new Date().getMinutes() * 6 - 90;
    document.getElementById("sec").style.transform = `rotate(${s}deg)`;
    document.getElementById("min").style.transform = `rotate(${m}deg)`;
    document.getElementById("hou").style.transform = `rotate(${h}deg)`;
    document.getElementById("sound").play();
}
setInterval(setTime, 1000);

window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

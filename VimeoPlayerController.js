javascript:void((function(undefined) {
function setEvents(player) {
    player.on("play", function(data) { window.focus(); });
    player.on("pause", function(data) { window.focus(); });
    player.on("seeked", function(data) { window.focus(); });
    player.on("volumechange", function(data) { window.focus(); });
    window.onresize = function(e) { window.focus(); };
    window.onkeydown = function(e) {
        switch(e.keyCode) {
            case 75:
            case 13:
                player.getPaused().then(function(paused) {
                    if (paused) {
                        player.play();
                    } else {
                        player.pause();
                    }
                });
                break;
            case 74:
                player.getCurrentTime().then(function(seconds){
                    player.setCurrentTime(seconds - 10);
                }).catch(function(error){
                    console.error(error);
                });
                break;
            case 76:
                player.getCurrentTime().then(function(seconds){
                    player.setCurrentTime(seconds + 10);
                }).catch(function(error){
                    console.error(error);
                });
                break;
            case 37:
                player.getCurrentTime().then(function(seconds){
                    player.setCurrentTime(seconds - 5);
                }).catch(function(error){
                    console.error(error);
                });
                break;
            case 39:
                player.getCurrentTime().then(function(seconds){
                    player.setCurrentTime(seconds + 5);
                }).catch(function(error){
                    console.error(error);
                });
                break;
        }
    };
}
function initVimeoPlayer(vid, width, setEvents) {
    var d = document.createElement("div");
    d.id = "vp";
    document.body.appendChild(d);

    var options = {
        id: vid,
        width: width,
        autoplay: true,
        loop: false
    };
    var player = new Vimeo.Player("vp", options);
    setEvents(player);
}

var nfmsg = "Video not found.\nThis bookmarklet can be used in only the page has Vimeo embedded player or original Vimeo video page."; 
if (Vimeo == null) { window.alert(nfmsg); return; }

if (Vimeo.Player != null) {
    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);
    setEvents(player);
    return;
}

var pc = document.querySelector(".player_container");
if (pc == null) { window.alert(nfmsg); return; }
var vid = pc.querySelector("div").id;
if (vid == null) { window.alert(nfmsg); return; }
var width = document.body.clientWidth;
var w = window.open();
w.document.body.style.margin = 0;
var sv = w.document.createElement("script");
sv.src = "https://player.vimeo.com/api/player.js";
var done = false;
sv.onload = sv.onreadystatechange = function() {
    if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
        done = true;
        var s = document.createElement("script");
        s.innerHTML = "void(" + initVimeoPlayer.toString() + ")(" + vid + "," + width + ", " + setEvents.toString() + ");";
        w.document.body.appendChild(s);
    }
};
w.document.getElementsByTagName('head')[0].appendChild(sv);
})());

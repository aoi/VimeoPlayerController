# VimeoPlayerController

## Install
drag&drop this link to Bookmark bar.
<a href="javascript:void function(){function e(e){e.on("play",function(){window.focus()}),e.on("pause",function(){window.focus()}),e.on("seeked",function(){window.focus()}),e.on("volumechange",function(){window.focus()}),window.onresize=function(){window.focus()},window.onkeydown=function(n){switch(n.keyCode){case 75:case 13:e.getPaused().then(function(n){n?e.play():e.pause()});break;case 74:e.getCurrentTime().then(function(n){e.setCurrentTime(n-10)})["catch"](function(e){console.error(e)});break;case 76:e.getCurrentTime().then(function(n){e.setCurrentTime(n+10)})["catch"](function(e){console.error(e)});break;case 37:e.getCurrentTime().then(function(n){e.setCurrentTime(n-5)})["catch"](function(e){console.error(e)});break;case 39:e.getCurrentTime().then(function(n){e.setCurrentTime(n+5)})["catch"](function(e){console.error(e)})}}}function n(e,n,t){var o=document.createElement("div");o.style.textAlign="center",o.id="vp",document.body.appendChild(o);var i={id:e,height:n,autoplay:!0,loop:!1},r=new Vimeo.Player("vp",i);t(r)}var t="Video not found.\nThis bookmarklet can be used in only the page has Vimeo embedded player or original Vimeo video page.";if("undefined"==typeof Vimeo)return void window.alert(t);if(null!=Vimeo.Player){var o=document.querySelector("iframe"),i=new Vimeo.Player(o);return void e(i)}var r=document.querySelector(".player_container");if(null==r)return void window.alert(t);var a=String(r.id).replace("clip_","");if(null==a)return void window.alert(t);var c=window.innerHeight,d=window.open();d.document.body.style.margin=0;var u=d.document.createElement("script");u.src="https://player.vimeo.com/api/player.js";var l=!1,m=function(){if(!(l||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){l=!0;var t=d.document.createElement("script");t.innerHTML="void("+n.toString()+")("+a+","+c+", "+e.toString()+");",d.document.body.appendChild(t)}};u.addEventListener?u.addEventListener("load",m,!1):s.readyState&&(u.onreadystatechange=m),d.document.getElementsByTagName("head")[0].appendChild(u)}();">VimeoPlayerController</a>

If you use Microsoft Edge,
Import "VimeoPlayerController_Edge.html" as bookmark.


## Usage
Click this bookmarklet in the page has Vimeo embedded player or original Vimeo video page.

K/Enter: play/stop
J: go back 10s
L: go forward 10s
Å©: go back 5s
Å®: go forward 5s

## Note
This bookmarklet disable Vimeo embedded player's keyboard shortcuts, for example L:like.

I tested this bookmarklet with only Chrome & Microsoft Edge.
I'm not sure if this bookmarklet work correctly with other browsers:p


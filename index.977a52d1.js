!function(){var e=document.querySelector(".second-hand"),t=document.querySelector(".min-hand"),n=document.querySelector(".hour-hand");function r(){var r=new Date,o=r.getSeconds(),a=o/60*360+90;e.style.transform="rotate(".concat(a,"deg)");var c=r.getMinutes(),d=c/60*360+o/60*6+90;t.style.transform="rotate(".concat(d,"deg)");var s=r.getHours()/12*360+c/60*30+90;n.style.transform="rotate(".concat(s,"deg)")}setInterval(r,1e3),r()}();
//# sourceMappingURL=index.977a52d1.js.map

const e=document.querySelector(".second-hand"),t=document.querySelector(".min-hand"),n=document.querySelector(".hour-hand");function o(){const o=new Date,r=o.getSeconds(),s=r/60*360+90;e.style.transform=`rotate(${s}deg)`;const c=o.getMinutes(),a=c/60*360+r/60*6+90;t.style.transform=`rotate(${a}deg)`;const d=o.getHours()/12*360+c/60*30+90;n.style.transform=`rotate(${d}deg)`}setInterval(o,1e3),o();
//# sourceMappingURL=index.878300c0.js.map

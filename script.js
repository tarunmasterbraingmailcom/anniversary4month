function showMsg(){
document.getElementById('msg').style.display='block';
for(let i=0;i<30;i++){
let h=document.createElement('div');
h.innerHTML='❤️';
h.style.position='fixed';
h.style.left=Math.random()*100+'vw';
h.style.top='100vh';
h.style.fontSize=(20+Math.random()*20)+'px';
h.style.transition='transform 4s linear,opacity 4s';
document.body.appendChild(h);
setTimeout(()=>{h.style.transform='translateY(-120vh)';h.style.opacity='0';},10);
setTimeout(()=>h.remove(),4200);
}
}
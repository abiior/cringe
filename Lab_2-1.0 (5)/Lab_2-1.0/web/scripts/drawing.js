function drawAxis() {
    let h = canvas.height;
    let w = canvas.width;
    ctx.strokeStyle = "#555759";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w/2, h);
    ctx.lineTo(w/2, 0);
    ctx.lineTo(w/2+3, 7);
    ctx.moveTo(w/2, 0);
    ctx.lineTo(w/2-3, 7);
    drawDigitsX(ctx, i, w, h);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, h/2);
    ctx.lineTo(w, h/2);
    ctx.lineTo(w-7, h/2+3);
    ctx.moveTo(w, h/2);
    ctx.lineTo(w-7, h/2-3);
    drawDigitsY(ctx, i, w, h);
    ctx.stroke();
    ctx.strokeStyle = "#555759";
    ctx.lineWidth = 1;
    /*ctx.moveTo(w/2-5*i, h/2-3*i);
    ctx.lineTo(w/2+5*i, h/2-3*i);
    ctx.lineTo(w/2+5*i, h/2+5*i);
    ctx.lineTo(w/2-5*i, h/2+5*i);
    ctx.lineTo(w/2-5*i, h/2-3*i);
    ctx.stroke();*/
}
function drawDigitsX(ctx, i, w, h) {
    let t=w/2;
    for (let j=0; j<5; j++){
        t+=i;
        ctx.moveTo(t, h/2+3);
        ctx.lineTo(t, h/2-3)
    }
    t=w/2;
    for (let j=0; j<5; j++){
        t-=i;
        ctx.moveTo(t, h/2+3);
        ctx.lineTo(t, h/2-3)
    }
}
function drawDigitsY(ctx, i, w, h) {
    let t=h/2;
    for (let j=0; j<5; j++){
        t+=i;
        ctx.moveTo(w/2+3, t);
        ctx.lineTo(w/2-3, t);
    }
    t=h/2;
    for (let j=0; j<5; j++){
        t-=i;
        ctx.moveTo(w/2+3, t);
        ctx.lineTo(w/2-3, t);
    }
}
function drawArea(r) {
    let h = canvas.height;
    let w = canvas.width;
    ctx.strokeStyle = "#9615db";
    ctx.fillStyle = "#9615db";
    ctx.beginPath();
    ctx.arc(w/2,h/2,r*i,0,Math.PI/2*1,false);
    ctx.lineTo(w/2, h/2);
    ctx.lineTo(w/2+r/2*i, h/2);
    ctx.lineTo(w/2, h/2);
    ctx.lineTo(w/2, h/2-r*i);
    /*ctx.lineTo(w/2, h/2);
    ctx.lineTo(w/2, h/2+r/2*i);
    ctx.lineTo(w/2+r*i, h/2+r/2*i);
    ctx.lineTo(w/2+r*i, h/2);*/
    ctx.lineTo(w/2-r/2*i,h/2-r*i);
    ctx.lineTo(w/2-r/2*i,h/2);
    ctx.lineTo(w/2, h/2);
    ctx.lineTo(w/2, h/2-r*i);
    ctx.fill();

}
function drawPoint(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(canvas.width/2+x*i,canvas.height/2-y*i,2,0,Math.PI*2, true);
    ctx.fill();
}

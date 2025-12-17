let grassblock1 = await fetchImage("images/Block1.png")
let stoneblock1 = await fetchImage("images/stoneblock1.png")
let Dirtoverlayblock = await fetchImage("images/Dirtoverlayblock.png")
let Dirtblock = await fetchImage("Images/Dirtblock.png")
let Dirtblockhitbox = new Hitbox(Dirtblock[0], Dirtblock[1], Dirtblock[2], Dirtblock[3])
let hitboxdirtoverlayblock = new Hitbox (Dirtoverlayblock[0], Dirtoverlayblock[1], Dirtoverlayblock[2], Dirtoverlayblock[3])
let hitboxgrassblock1 = new Hitbox(grassblock1[0], grassblock1[1], grassblock1[2], grassblock1[3])
let hitboxstoneblock1 = new Hitbox(stoneblock1[0], stoneblock1[1], stoneblock1[2], stoneblock1[3])



for(let i = 0; i<=15000; i = i+25) {
if(i>=0 && i<150 || i>=300 && i<500  || i>=650 && i<800) {
    let n = random(1,5)
    let m = random(1,3)
ctx.drawImage(grassblock1, i, 450, 25,25)
ctx.drawImage(stoneblock1, i, 550, 25, 25)
ctx.drawImage(Dirtblock, i, 500, 25, 25)
ctx.drawImage(Dirtblock, i, 475, 25, 25)
ctx.drawImage(stoneblock1,i,550,25,25)
ctx.drawImage(stoneblock1,i,575,25,25)
ctx.drawImage(stoneblock1,i,600,25,25)
if(n==1 || n>2) {ctx.drawImage(Dirtblock,i,500,25,25)}
else if(n==2) {ctx.drawImage(stoneblock1,i,500,25,25)}
if(m==2) {ctx.drawImage(Dirtblock,i,525,25,25)}
else if(m==1 || m>2) {ctx.drawImage(stoneblock1,i,525,25,25)}
}
}




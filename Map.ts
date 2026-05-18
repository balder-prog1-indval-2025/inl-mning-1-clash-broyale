import {boss_Which_attack} from "./app"



let grassblock1 = await fetchImage("images/Block1.png")
let stoneblock1 = await fetchImage("images/stoneblock1.png")
let Background1 = await fetchImage("images/Background1.png")
let Background2 = await fetchImage("images/Background2.png")
let Dirtoverlayblock = await fetchImage("images/Dirtoverlayblock.png")
let Dirtblock = await fetchImage("Images/Dirtblock.png")
let SpikeDown = await fetchImage("images/SpikeDown.png")
let SpikeUp = await fetchImage("images/SpikeUp.png")
let SpikeRight = await fetchImage("images/SpikeRight.png")
let SpikeLeft = await fetchImage("images/Spikeleft.png")
let Boss_Background_Jesus = await fetchImage("images/BossBackground_Jesus.png")
let Boss_Background_NoJesus = await fetchImage("images/BossBackground_NoJesus.jpg")
let Portal = await fetchImage ("images/Gate_to_OBLIVION.png")
let lager_3 = []
let lager_4 = [] 
let ground: Hitbox[] = []
let WallHitbox = []

export function map() {

//Background 
ctx.drawImage (Background1, 0, 0, 700, 700) 
ctx.drawImage (Background2, 700, 0, 700, 700)

//portal
ctx.drawImage(Portal, W-130, 320, 130, 155)

//Dirtoverlayblocks: 
ctx.drawImage(Dirtoverlayblock, 150, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 150, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 150, 375, 70, 35)
ctx.drawImage(Dirtoverlayblock, 150, 347, 70, 35)

ctx.drawImage(Dirtoverlayblock, 125, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 125, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 125, 375, 70, 35)
ctx.drawImage(Dirtoverlayblock, 125, 347, 70, 35)

ctx.drawImage(Dirtoverlayblock, 175, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 375, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 347, 70, 35)

ctx.drawImage(Dirtoverlayblock, 0, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 0, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 0, 375, 70, 35)
ctx.drawImage(Dirtoverlayblock, 0, 347, 70, 35)

ctx.drawImage(Dirtoverlayblock, 0, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 0, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 0, 375, 70, 35)
ctx.drawImage(Dirtoverlayblock, 0, 347, 70, 35)

ctx.drawImage(Dirtoverlayblock, 0, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 0, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 0, 375, 70, 35)
ctx.drawImage(Dirtoverlayblock, 0, 347, 70, 35)

// base x: 75

ctx.drawImage(Dirtoverlayblock, 75, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 75, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 75, 375, 70, 35)
ctx.drawImage(Dirtoverlayblock, 75, 347, 70, 35)

ctx.drawImage(Dirtoverlayblock, 75, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 75, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 75, 375, 70, 35)
ctx.drawImage(Dirtoverlayblock, 75, 347, 70, 35)

ctx.drawImage(Dirtoverlayblock, 75, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 75, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 75, 375, 70, 35)
ctx.drawImage(Dirtoverlayblock, 75, 347, 70, 35)

ctx.drawImage(Dirtoverlayblock, 50, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 50, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 50, 375, 70, 35)
ctx.drawImage(Dirtoverlayblock, 50, 347, 70, 35)

//----

ctx.drawImage(Dirtoverlayblock, 350, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 325, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 325, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 325, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 325, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 375, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 375, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 375, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 375, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 200, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 200, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 200, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 200, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 200, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 200, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 200, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 200, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 200, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 200, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 200, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 200, 447, 70, 35)

// base x: 75 (+200)

ctx.drawImage(Dirtoverlayblock, 275, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 275, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 275, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 250, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 447, 70, 35)


// base x: 250 + 25 = 275
// base y: 525

ctx.drawImage(Dirtoverlayblock, 425, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 425, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 425, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 425, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 400, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 400, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 400, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 400, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 450, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 450, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 450, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 450, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 275, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 275, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 275, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 447, 70, 35)

// base x: 75 + 25 = 100

ctx.drawImage(Dirtoverlayblock, 350, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 350, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 350, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 447, 70, 35)

ctx.drawImage(Dirtoverlayblock, 325, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 325, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 325, 475, 70, 35)
ctx.drawImage(Dirtoverlayblock, 325, 447, 70, 35)


// base x: 275
// base y: 550

ctx.drawImage(Dirtoverlayblock, 425, 550, 70, 35)
ctx.drawImage(Dirtoverlayblock, 425, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 425, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 425, 472, 70, 35)

ctx.drawImage(Dirtoverlayblock, 400, 550, 70, 35)
ctx.drawImage(Dirtoverlayblock, 400, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 400, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 400, 472, 70, 35)

ctx.drawImage(Dirtoverlayblock, 450, 550, 70, 35)
ctx.drawImage(Dirtoverlayblock, 450, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 450, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 450, 472, 70, 35)

ctx.drawImage(Dirtoverlayblock, 275, 550, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 472, 70, 35)

ctx.drawImage(Dirtoverlayblock, 275, 550, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 472, 70, 35)

ctx.drawImage(Dirtoverlayblock, 275, 550, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 275, 472, 70, 35)

// base x: 100

ctx.drawImage(Dirtoverlayblock, 350, 550, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 472, 70, 35)

ctx.drawImage(Dirtoverlayblock, 350, 550, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 472, 70, 35)

ctx.drawImage(Dirtoverlayblock, 350, 550, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 350, 472, 70, 35)

ctx.drawImage(Dirtoverlayblock, 325, 550, 70, 35)
ctx.drawImage(Dirtoverlayblock, 325, 525, 70, 35)
ctx.drawImage(Dirtoverlayblock, 325, 500, 70, 35)
ctx.drawImage(Dirtoverlayblock, 325, 472, 70, 35)
ctx.drawImage(Dirtoverlayblock, 247, 550, 70, 35)

// base x: 250
// base y: 450

ctx.drawImage(Dirtoverlayblock, 250, 450, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 372, 70, 35)

ctx.drawImage(Dirtoverlayblock, 250, 450, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 372, 70, 35)

ctx.drawImage(Dirtoverlayblock, 250, 450, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 250, 372, 70, 35)

ctx.drawImage(Dirtoverlayblock, 225, 450, 70, 35)
ctx.drawImage(Dirtoverlayblock, 225, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 225, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 225, 372, 70, 35)

ctx.drawImage(Dirtoverlayblock, 300, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 300, 400, 70, 35)
ctx.drawImage(Dirtoverlayblock, 300, 375, 70, 35)
ctx.drawImage(Dirtoverlayblock, 225, 347, 70, 35)
ctx.drawImage(Dirtoverlayblock, 147, 450, 70, 35)

ctx.drawImage(Dirtoverlayblock, 422, 425, 70, 35)
ctx.drawImage(Dirtoverlayblock, 430, 398, 70, 35)

// base x: 175
// base y: 150

ctx.drawImage(Dirtoverlayblock, 175, 150, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 125, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 100, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 72, 70, 35)

ctx.drawImage(Dirtoverlayblock, 175, 150, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 125, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 100, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 72, 70, 35)

ctx.drawImage(Dirtoverlayblock, 175, 150, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 125, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 100, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 72, 70, 35)

ctx.drawImage(Dirtoverlayblock, 150, 150, 70, 35)
ctx.drawImage(Dirtoverlayblock, 150, 125, 70, 35)
ctx.drawImage(Dirtoverlayblock, 150, 100, 70, 35)
ctx.drawImage(Dirtoverlayblock, 150, 72, 70, 35)

// base x: 175
// base y: 300  (150 + 150)

ctx.drawImage(Dirtoverlayblock, 175, 300, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 275, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 250, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 222, 70, 35)

ctx.drawImage(Dirtoverlayblock, 175, 300, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 275, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 250, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 222, 70, 35)

ctx.drawImage(Dirtoverlayblock, 175, 300, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 275, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 250, 70, 35)
ctx.drawImage(Dirtoverlayblock, 175, 222, 70, 35)

ctx.drawImage(Dirtoverlayblock, 150, 300, 70, 35)
ctx.drawImage(Dirtoverlayblock, 150, 275, 70, 35)
ctx.drawImage(Dirtoverlayblock, 150, 250, 70, 35)
ctx.drawImage(Dirtoverlayblock, 150, 222, 70, 35)



//Dirtblocks: 
ctx.drawImage(Dirtblock, 25, 325, 25, 25)
ctx.drawImage(Dirtblock, 0, 325, 25, 25)
ctx.drawImage(Dirtblock, 25, 300, 25, 25)
ctx.drawImage(Dirtblock, 0, 300, 25, 25)
ctx.drawImage(Dirtblock, 25, 275, 25, 25)
ctx.drawImage(Dirtblock, 0, 275, 25, 25)
ctx.drawImage(Dirtblock, 25, 350, 25, 25)
ctx.drawImage(Dirtblock, 0, 350, 25, 25)
ctx.drawImage(Dirtblock, 50, 350, 25, 25)
ctx.drawImage(Dirtblock, 25, 250, 25, 25)
ctx.drawImage(Dirtblock, 25, 225, 25, 25)
ctx.drawImage(Dirtblock, 25, 200, 25, 25)
ctx.drawImage(Dirtblock, 25, 175, 25, 25)
ctx.drawImage(Dirtblock, 25, 150, 25, 25)
ctx.drawImage(Dirtblock, 25, 125, 25, 25)
ctx.drawImage(Dirtblock, 0, 125, 25, 25)
ctx.drawImage(Dirtblock, 0, 150, 25, 25)
ctx.drawImage(Dirtblock, 0, 175, 25, 25)
ctx.drawImage(Dirtblock, 0, 200, 25, 25)
ctx.drawImage(Dirtblock, 0, 225, 25, 25)
ctx.drawImage(Dirtblock, 0, 250, 25, 25)

ctx.drawImage(Dirtblock, 150, 175, 25, 25)
ctx.drawImage(Dirtblock, 150, 200, 25, 25)
ctx.drawImage(Dirtblock, 150, 225, 25, 25)
ctx.drawImage(Dirtblock, 175, 175, 25, 25)
ctx.drawImage(Dirtblock, 175, 200, 25, 25)
ctx.drawImage(Dirtblock, 175, 225, 25, 25)

ctx.drawImage(Dirtblock, 200, 175, 25, 25)
ctx.drawImage(Dirtblock, 200, 200, 25, 25)
ctx.drawImage(Dirtblock, 200, 225, 25, 25)
ctx.drawImage(Dirtblock, 225, 175, 25, 25)
ctx.drawImage(Dirtblock, 225, 200, 25, 25)
ctx.drawImage(Dirtblock, 225, 225, 25, 25)

//-----------------

ctx.drawImage(Dirtblock, 150, 450, 25, 25)
ctx.drawImage(Dirtblock, 150, 475, 25, 25)
ctx.drawImage(Dirtblock, 150, 500, 25, 25)
ctx.drawImage(Dirtblock, 175, 450, 25, 25)
ctx.drawImage(Dirtblock, 175, 475, 25, 25)
ctx.drawImage(Dirtblock, 175, 500, 25, 25)

ctx.drawImage(Dirtblock, 200, 475, 25, 25)
ctx.drawImage(Dirtblock, 200, 500, 25, 25)
ctx.drawImage(Dirtblock, 225, 450, 25, 25)
ctx.drawImage(Dirtblock, 225, 475, 25, 25)
ctx.drawImage(Dirtblock, 225, 500, 25, 25)

ctx.drawImage(Dirtblock, 150, 525, 25, 25)
ctx.drawImage(Dirtblock, 150, 550, 25, 25)
ctx.drawImage(Dirtblock, 150, 575, 25, 25)
ctx.drawImage(Dirtblock, 175, 525, 25, 25)
ctx.drawImage(Dirtblock, 175, 550, 25, 25)
ctx.drawImage(Dirtblock, 175, 575, 25, 25)

ctx.drawImage(Dirtblock, 200, 525, 25, 25)
ctx.drawImage(Dirtblock, 200, 550, 25, 25)
ctx.drawImage(Dirtblock, 200, 575, 25, 25)
ctx.drawImage(Dirtblock, 225, 525, 25, 25)
ctx.drawImage(Dirtblock, 225, 550, 25, 25)
ctx.drawImage(Dirtblock, 225, 575, 25, 25)

//-------

ctx.drawImage(Dirtblock, 75, 450, 25, 25)
ctx.drawImage(Dirtblock, 75, 475, 25, 25)
ctx.drawImage(Dirtblock, 75, 500, 25, 25)
ctx.drawImage(Dirtblock, 100, 450, 25, 25)
ctx.drawImage(Dirtblock, 100, 475, 25, 25)
ctx.drawImage(Dirtblock, 100, 500, 25, 25)

ctx.drawImage(Dirtblock, 125, 450, 25, 25)
ctx.drawImage(Dirtblock, 125, 475, 25, 25)
ctx.drawImage(Dirtblock, 125, 500, 25, 25)
ctx.drawImage(Dirtblock, 150, 450, 25, 25)
ctx.drawImage(Dirtblock, 150, 475, 25, 25)
ctx.drawImage(Dirtblock, 150, 500, 25, 25)

ctx.drawImage(Dirtblock, 75, 525, 25, 25)
ctx.drawImage(Dirtblock, 75, 550, 25, 25)
ctx.drawImage(Dirtblock, 75, 575, 25, 25)
ctx.drawImage(Dirtblock, 100, 525, 25, 25)
ctx.drawImage(Dirtblock, 100, 550, 25, 25)
ctx.drawImage(Dirtblock, 100, 575, 25, 25)

ctx.drawImage(Dirtblock, 125, 525, 25, 25)
ctx.drawImage(Dirtblock, 125, 550, 25, 25)
ctx.drawImage(Dirtblock, 125, 575, 25, 25)
ctx.drawImage(Dirtblock, 150, 525, 25, 25)
ctx.drawImage(Dirtblock, 150, 550, 25, 25)
ctx.drawImage(Dirtblock, 150, 575, 25, 25)
 
//--------
// baseX = 0
// baseY = 475

ctx.drawImage(Dirtblock, 0, 475, 25, 25)
ctx.drawImage(Dirtblock, 0, 500, 25, 25)
ctx.drawImage(Dirtblock, 0, 525, 25, 25)
ctx.drawImage(Dirtblock, 25, 475, 25, 25)
ctx.drawImage(Dirtblock, 25, 500, 25, 25)
ctx.drawImage(Dirtblock, 25, 525, 25, 25)

ctx.drawImage(Dirtblock, 50, 475, 25, 25)
ctx.drawImage(Dirtblock, 50, 500, 25, 25)
ctx.drawImage(Dirtblock, 50, 525, 25, 25)
ctx.drawImage(Dirtblock, 75, 475, 25, 25)
ctx.drawImage(Dirtblock, 75, 500, 25, 25)
ctx.drawImage(Dirtblock, 75, 525, 25, 25)

ctx.drawImage(Dirtblock, 0, 550, 25, 25)
ctx.drawImage(Dirtblock, 0, 575, 25, 25)
ctx.drawImage(Dirtblock, 0, 600, 25, 25)
ctx.drawImage(Dirtblock, 25, 550, 25, 25)
ctx.drawImage(Dirtblock, 25, 575, 25, 25)
ctx.drawImage(Dirtblock, 25, 600, 25, 25)

ctx.drawImage(Dirtblock, 50, 550, 25, 25)
ctx.drawImage(Dirtblock, 50, 575, 25, 25)
ctx.drawImage(Dirtblock, 50, 600, 25, 25)
ctx.drawImage(Dirtblock, 75, 550, 25, 25)
ctx.drawImage(Dirtblock, 75, 575, 25, 25)
ctx.drawImage(Dirtblock, 75, 600, 25, 25)

//-----
// baseX = 500
// baseY = 450

ctx.drawImage(Dirtblock, 500, 450, 25, 25)
ctx.drawImage(Dirtblock, 500, 475, 25, 25)
ctx.drawImage(Dirtblock, 500, 500, 25, 25)
ctx.drawImage(Dirtblock, 525, 450, 25, 25)
ctx.drawImage(Dirtblock, 525, 475, 25, 25)
ctx.drawImage(Dirtblock, 525, 500, 25, 25)

ctx.drawImage(Dirtblock, 550, 450, 25, 25)
ctx.drawImage(Dirtblock, 550, 475, 25, 25)
ctx.drawImage(Dirtblock, 550, 500, 25, 25)
ctx.drawImage(Dirtblock, 575, 450, 25, 25)
ctx.drawImage(Dirtblock, 575, 475, 25, 25)
ctx.drawImage(Dirtblock, 575, 500, 25, 25)

ctx.drawImage(Dirtblock, 500, 525, 25, 25)
ctx.drawImage(Dirtblock, 500, 550, 25, 25)
ctx.drawImage(Dirtblock, 500, 575, 25, 25)
ctx.drawImage(Dirtblock, 525, 525, 25, 25)
ctx.drawImage(Dirtblock, 525, 550, 25, 25)
ctx.drawImage(Dirtblock, 525, 575, 25, 25)

ctx.drawImage(Dirtblock, 550, 525, 25, 25)
ctx.drawImage(Dirtblock, 550, 550, 25, 25)
ctx.drawImage(Dirtblock, 550, 575, 25, 25)
ctx.drawImage(Dirtblock, 575, 525, 25, 25)
ctx.drawImage(Dirtblock, 575, 550, 25, 25)
ctx.drawImage(Dirtblock, 575, 575, 25, 25)

//------

ctx.drawImage(Dirtblock, 600, 450, 25, 25)
ctx.drawImage(Dirtblock, 600, 475, 25, 25)
ctx.drawImage(Dirtblock, 600, 500, 25, 25)
ctx.drawImage(Dirtblock, 625, 450, 25, 25)
ctx.drawImage(Dirtblock, 625, 475, 25, 25)
ctx.drawImage(Dirtblock, 625, 500, 25, 25)

ctx.drawImage(Dirtblock, 650, 450, 25, 25)
ctx.drawImage(Dirtblock, 650, 475, 25, 25)
ctx.drawImage(Dirtblock, 650, 500, 25, 25)
ctx.drawImage(Dirtblock, 675, 450, 25, 25)
ctx.drawImage(Dirtblock, 675, 475, 25, 25)
ctx.drawImage(Dirtblock, 675, 500, 25, 25)

ctx.drawImage(Dirtblock, 600, 525, 25, 25)
ctx.drawImage(Dirtblock, 600, 550, 25, 25)
ctx.drawImage(Dirtblock, 600, 575, 25, 25)
ctx.drawImage(Dirtblock, 625, 525, 25, 25)
ctx.drawImage(Dirtblock, 625, 550, 25, 25)
ctx.drawImage(Dirtblock, 625, 575, 25, 25)

ctx.drawImage(Dirtblock, 650, 525, 25, 25)
ctx.drawImage(Dirtblock, 650, 550, 25, 25)
ctx.drawImage(Dirtblock, 650, 575, 25, 25)
ctx.drawImage(Dirtblock, 675, 525, 25, 25)
ctx.drawImage(Dirtblock, 675, 550, 25, 25)
ctx.drawImage(Dirtblock, 675, 575, 25, 25)

//---------------
// baseX = samma (600)
// baseY = 250

ctx.drawImage(Dirtblock, 600, 250, 25, 25)
ctx.drawImage(Dirtblock, 600, 275, 25, 25)
ctx.drawImage(Dirtblock, 600, 300, 25, 25)
ctx.drawImage(Dirtblock, 625, 250, 25, 25)
ctx.drawImage(Dirtblock, 625, 275, 25, 25)
ctx.drawImage(Dirtblock, 625, 300, 25, 25)

ctx.drawImage(Dirtblock, 650, 250, 25, 25)
ctx.drawImage(Dirtblock, 650, 275, 25, 25)
ctx.drawImage(Dirtblock, 650, 300, 25, 25)
ctx.drawImage(Dirtblock, 675, 250, 25, 25)
ctx.drawImage(Dirtblock, 675, 275, 25, 25)
ctx.drawImage(Dirtblock, 675, 300, 25, 25)

ctx.drawImage(Dirtblock, 600, 325, 25, 25)
ctx.drawImage(Dirtblock, 600, 350, 25, 25)
ctx.drawImage(Dirtblock, 600, 375, 25, 25)
ctx.drawImage(Dirtblock, 625, 325, 25, 25)
ctx.drawImage(Dirtblock, 625, 350, 25, 25)
ctx.drawImage(Dirtblock, 625, 375, 25, 25)

ctx.drawImage(Dirtblock, 650, 325, 25, 25)
ctx.drawImage(Dirtblock, 650, 350, 25, 25)
ctx.drawImage(Dirtblock, 650, 375, 25, 25)
ctx.drawImage(Dirtblock, 675, 325, 25, 25)
ctx.drawImage(Dirtblock, 675, 350, 25, 25)
ctx.drawImage(Dirtblock, 675, 375, 25, 25)

//--------

// baseX = 600
// baseY = 300

ctx.drawImage(Dirtblock, 600, 300, 25, 25)
ctx.drawImage(Dirtblock, 600, 325, 25, 25)
ctx.drawImage(Dirtblock, 600, 350, 25, 25)
ctx.drawImage(Dirtblock, 625, 300, 25, 25)
ctx.drawImage(Dirtblock, 625, 325, 25, 25)
ctx.drawImage(Dirtblock, 625, 350, 25, 25)

ctx.drawImage(Dirtblock, 650, 300, 25, 25)
ctx.drawImage(Dirtblock, 650, 325, 25, 25)
ctx.drawImage(Dirtblock, 650, 350, 25, 25)
ctx.drawImage(Dirtblock, 675, 300, 25, 25)
ctx.drawImage(Dirtblock, 675, 325, 25, 25)
ctx.drawImage(Dirtblock, 675, 350, 25, 25)

ctx.drawImage(Dirtblock, 600, 375, 25, 25)
ctx.drawImage(Dirtblock, 600, 400, 25, 25)
ctx.drawImage(Dirtblock, 600, 425, 25, 25)
ctx.drawImage(Dirtblock, 625, 375, 25, 25)
ctx.drawImage(Dirtblock, 625, 400, 25, 25)
ctx.drawImage(Dirtblock, 625, 425, 25, 25)

ctx.drawImage(Dirtblock, 650, 375, 25, 25)
ctx.drawImage(Dirtblock, 650, 400, 25, 25)
ctx.drawImage(Dirtblock, 650, 425, 25, 25)
ctx.drawImage(Dirtblock, 675, 375, 25, 25)
ctx.drawImage(Dirtblock, 675, 400, 25, 25)
ctx.drawImage(Dirtblock, 675, 425, 25, 25)

//-------

// baseX = 325
// baseY = 300

ctx.drawImage(Dirtblock, 325, 300, 25, 25)
ctx.drawImage(Dirtblock, 325, 325, 25, 25)
ctx.drawImage(Dirtblock, 325, 350, 25, 25)
ctx.drawImage(Dirtblock, 350, 300, 25, 25)
ctx.drawImage(Dirtblock, 350, 325, 25, 25)
ctx.drawImage(Dirtblock, 350, 350, 25, 25)

ctx.drawImage(Dirtblock, 375, 300, 25, 25)
ctx.drawImage(Dirtblock, 375, 325, 25, 25)
ctx.drawImage(Dirtblock, 375, 350, 25, 25)
ctx.drawImage(Dirtblock, 400, 300, 25, 25)
ctx.drawImage(Dirtblock, 400, 325, 25, 25)
ctx.drawImage(Dirtblock, 400, 350, 25, 25)

ctx.drawImage(Dirtblock, 325, 375, 25, 25)
ctx.drawImage(Dirtblock, 325, 400, 25, 25)
ctx.drawImage(Dirtblock, 325, 425, 25, 25)
ctx.drawImage(Dirtblock, 350, 375, 25, 25)
ctx.drawImage(Dirtblock, 350, 400, 25, 25)
ctx.drawImage(Dirtblock, 350, 425, 25, 25)

ctx.drawImage(Dirtblock, 375, 375, 25, 25)
ctx.drawImage(Dirtblock, 375, 400, 25, 25)
ctx.drawImage(Dirtblock, 375, 425, 25, 25)
ctx.drawImage(Dirtblock, 400, 375, 25, 25)
ctx.drawImage(Dirtblock, 400, 400, 25, 25)
ctx.drawImage(Dirtblock, 400, 425, 25, 25)

ctx.drawImage(Dirtblock, 225, 150, 25, 25)
ctx.drawImage(Dirtblock, 225, 125, 25, 25)
ctx.drawImage(Dirtblock, 225, 100, 25, 25)
ctx.drawImage(Dirtblock, 225, 75, 25, 25)

ctx.drawImage(Dirtblock, 250, 325, 25, 25)
ctx.drawImage(Dirtblock, 225, 325, 25, 25)
ctx.drawImage(Dirtblock, 200, 325, 25, 25)
ctx.drawImage(Dirtblock, 175, 325, 25, 25)
ctx.drawImage(Dirtblock, 150, 325, 25, 25)
ctx.drawImage(Dirtblock, 125, 325, 25, 25)
ctx.drawImage(Dirtblock, 275, 350, 25, 25)
ctx.drawImage(Dirtblock, 300, 350, 25, 25)
ctx.drawImage(Dirtblock, 425, 400, 25, 25)

ctx.drawImage(Dirtblock, 600, 175, 25, 25)
ctx.drawImage(Dirtblock, 600, 200, 25, 25)
ctx.drawImage(Dirtblock, 600, 225, 25, 25)
ctx.drawImage(Dirtblock, 625, 175, 25, 25)
ctx.drawImage(Dirtblock, 625, 200, 25, 25)
ctx.drawImage(Dirtblock, 625, 225, 25, 25)


ctx.drawImage(Dirtblock, 650, 175, 25, 25)
ctx.drawImage(Dirtblock, 650, 200, 25, 25)
ctx.drawImage(Dirtblock, 650, 225, 25, 25)
ctx.drawImage(Dirtblock, 675, 175, 25, 25)
ctx.drawImage(Dirtblock, 675, 200, 25, 25)
ctx.drawImage(Dirtblock, 675, 225, 25, 25)

ctx.drawImage(Dirtblock, 250, 175, 25, 25)
ctx.drawImage(Dirtblock, 275, 175, 25, 25)
ctx.drawImage(Dirtblock, 300, 175, 25, 25)
ctx.drawImage(Dirtblock, 325, 175, 25, 25)
ctx.drawImage(Dirtblock, 350, 175, 25, 25)
ctx.drawImage(Dirtblock, 375, 175, 25, 25)
ctx.drawImage(Dirtblock, 400, 175, 25, 25)
ctx.drawImage(Dirtblock, 425, 175, 25, 25)
ctx.drawImage(Dirtblock, 450, 175, 25, 25)
ctx.drawImage(Dirtblock, 475, 175, 25, 25)
ctx.drawImage(Dirtblock, 500, 175, 25, 25)
ctx.drawImage(Dirtblock, 525, 175, 25, 25)
ctx.drawImage(Dirtblock, 550, 175, 25, 25)
ctx.drawImage(Dirtblock, 575, 175, 25, 25)
ctx.drawImage(Dirtblock, 75, 350, 25, 25)
ctx.drawImage(Dirtblock, 100, 350, 25, 25)
ctx.drawImage(Dirtblock, 125, 350, 25, 25)


//grass blocks:
ctx.drawImage(grassblock1, 675, 150, 25, 25)
ctx.drawImage(grassblock1, 650, 150, 25, 25)
ctx.drawImage(grassblock1, 625, 150, 25, 25)
ctx.drawImage(grassblock1, 600, 150, 25, 25)
ctx.drawImage(grassblock1, 575, 150, 25, 25)
ctx.drawImage(grassblock1, 550, 150, 25, 25)

// base x: 550
// base y: 150

ctx.drawImage(grassblock1, 550, 150, 25, 25)
ctx.drawImage(grassblock1, 525, 150, 25, 25)
ctx.drawImage(grassblock1, 500, 150, 25, 25)
ctx.drawImage(grassblock1, 475, 150, 25, 25)
ctx.drawImage(grassblock1, 450, 150, 25, 25)
ctx.drawImage(grassblock1, 425, 150, 25, 25)
// base x: 425
// base y: 150

ctx.drawImage(grassblock1, 425, 150, 25, 25)
ctx.drawImage(grassblock1, 400, 150, 25, 25)
ctx.drawImage(grassblock1, 375, 150, 25, 25)
ctx.drawImage(grassblock1, 350, 150, 25, 25)
ctx.drawImage(grassblock1, 325, 150, 25, 25)
ctx.drawImage(grassblock1, 300, 150, 25, 25)
ctx.drawImage(grassblock1, 275, 150, 25, 25)
ctx.drawImage(grassblock1, 250, 150, 25, 25)


ctx.drawImage(grassblock1, 0, 450, 25,25)
ctx.drawImage(grassblock1, 25, 450, 25,25)
ctx.drawImage(grassblock1, 50, 450, 25,25)
ctx.drawImage(grassblock1, 75, 425, 25,25)
ctx.drawImage(grassblock1, 100, 425, 25,25)
ctx.drawImage(grassblock1, 100, 325, 25,25)
ctx.drawImage(grassblock1, 75, 325, 25,25)
ctx.drawImage(grassblock1, 50, 325, 25,25)

ctx.drawImage(grassblock1, 400, 300, 25, 25)
ctx.drawImage(grassblock1, 375, 300, 25, 25)
ctx.drawImage(grassblock1, 350, 300, 25, 25)
ctx.drawImage(grassblock1, 325, 300, 25, 25)

ctx.drawImage(grassblock1, 500, 450, 25, 25)
ctx.drawImage(grassblock1, 525, 450, 25, 25)
ctx.drawImage(grassblock1, 550, 450, 25, 25)
ctx.drawImage(grassblock1, 575, 450, 25, 25)

ctx.drawImage(grassblock1, 125, 300, 25, 25)
ctx.drawImage(grassblock1, 150, 300, 25, 25)
ctx.drawImage(grassblock1, 175, 300, 25, 25)
ctx.drawImage(grassblock1, 200, 300, 25, 25)
ctx.drawImage(grassblock1, 225, 300, 25, 25)
ctx.drawImage(grassblock1, 250, 300, 25, 25)
ctx.drawImage(grassblock1, 275, 325, 25, 25)
ctx.drawImage(grassblock1, 300, 325, 25, 25)

ctx.drawImage(grassblock1, 200, 175, 25, 25)
ctx.drawImage(grassblock1, 175, 175, 25, 25)
ctx.drawImage(grassblock1, 150, 175, 25, 25)
ctx.drawImage(grassblock1, 150, 50, 25, 25)
ctx.drawImage(grassblock1, 175, 50, 25, 25)
ctx.drawImage(grassblock1, 200, 50, 25, 25)
ctx.drawImage(grassblock1, 225, 50, 25, 25)

ctx.drawImage(grassblock1, 0, 100, 25, 25)
ctx.drawImage(grassblock1, 25, 100, 25, 25)

ctx.drawImage(grassblock1, 150, 450, 25, 25)
ctx.drawImage(grassblock1, 125, 450, 25, 25)
ctx.drawImage(grassblock1, 175, 450, 25, 25)
ctx.drawImage(grassblock1, 200, 450, 25, 25)
ctx.drawImage(grassblock1, 225, 450, 25, 25)

ctx.drawImage(grassblock1, 475, 375, 25, 25)
ctx.drawImage(grassblock1, 450, 375, 25, 25)
ctx.drawImage(grassblock1, 425, 375, 25, 25)



// Spikes Left
ctx.drawImage(SpikeLeft, 275, 365, 50, 50 )
ctx.drawImage(SpikeLeft, 275, 400, 50, 50 )
ctx.drawImage(SpikeLeft, 510, 400, 90, 50 )
ctx.drawImage(SpikeLeft, 550, 365, 50, 50 )
ctx.drawImage(SpikeLeft, 550, 330, 50, 50 )
ctx.drawImage(SpikeLeft, 550, 295, 50, 50 )
ctx.drawImage(SpikeLeft, 550, 260, 50, 50 )
ctx.drawImage(SpikeLeft, 500, 225, 100, 50 )
ctx.drawImage(SpikeLeft, 500, 190, 100, 50 )
ctx.drawImage(SpikeLeft, 375, 500, 125, 125 )

ctx.drawImage(SpikeLeft, 135, 125, 90, 50 )
ctx.drawImage(SpikeLeft, 135, 80, 90, 50 )
ctx.drawImage(SpikeLeft, 100, 40, 50, 40 )

ctx.drawImage(SpikeLeft, 1010, 435, 20, 20 )
ctx.drawImage(SpikeLeft, 1010, 420, 20, 20 )



ctx.drawImage(SpikeLeft, 1010, 330, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 315, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 300, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 285, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 270, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 255, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 240, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 225, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 210, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 195, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 180, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 165, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 150, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 135, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 120, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 105, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 90, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 75, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 60, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 45, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 30, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 15, 20, 20)
ctx.drawImage(SpikeLeft, 1010, 0, 20, 20)

// SpikeRight
ctx.drawImage(SpikeRight, 1030, 435, 20, 20)
ctx.drawImage(SpikeRight, 1030, 420, 20, 20)


ctx.drawImage(SpikeRight, 250, 510, 125, 125)
ctx.drawImage(SpikeRight, 425, 335, 125, 50)
ctx.drawImage(SpikeRight, 425, 300, 100, 50)

ctx.drawImage(SpikeRight, 50, 95, 50, 50)
ctx.drawImage(SpikeRight, 50, 130, 50, 50)
ctx.drawImage(SpikeRight, 50, 165, 50, 50)
ctx.drawImage(SpikeRight, 50, 200, 50, 50)
ctx.drawImage(SpikeRight, 50, 235, 50, 50)
ctx.drawImage(SpikeRight, 50, 270, 50, 50)

ctx.drawImage(SpikeRight, 1030, 330, 20, 20)
ctx.drawImage(SpikeRight, 1030, 315, 20, 20)
ctx.drawImage(SpikeRight, 1030, 300, 20, 20)
ctx.drawImage(SpikeRight, 1030, 285, 20, 20)
ctx.drawImage(SpikeRight, 1030, 270, 20, 20)
ctx.drawImage(SpikeRight, 1030, 255, 20, 20)
ctx.drawImage(SpikeRight, 1030, 240, 20, 20)
ctx.drawImage(SpikeRight, 1030, 225, 20, 20)
ctx.drawImage(SpikeRight, 1030, 210, 20, 20)
ctx.drawImage(SpikeRight, 1030, 195, 20, 20)
ctx.drawImage(SpikeRight, 1030, 180, 20, 20)
ctx.drawImage(SpikeRight, 1030, 165, 20, 20)
ctx.drawImage(SpikeRight, 1030, 150, 20, 20)
ctx.drawImage(SpikeRight, 1030, 135, 20, 20)
ctx.drawImage(SpikeRight, 1030, 120, 20, 20)
ctx.drawImage(SpikeRight, 1030, 105, 20, 20)
ctx.drawImage(SpikeRight, 1030, 90, 20, 20)
ctx.drawImage(SpikeRight, 1030, 75, 20, 20)
ctx.drawImage(SpikeRight, 1030, 60, 20, 20)
ctx.drawImage(SpikeRight, 1030, 45, 20, 20)
ctx.drawImage(SpikeRight, 1030, 30, 20, 20)
ctx.drawImage(SpikeRight, 1030, 15, 20, 20)
ctx.drawImage(SpikeRight, 1030, 0, 20, 20)

// SpikeUp ----------------------
ctx.drawImage(SpikeUp, 85, 275, 50, 50)
ctx.drawImage(SpikeUp, 275, 275, 50, 50)
ctx.drawImage(SpikeUp, 325, 250, 50, 50)
ctx.drawImage(SpikeUp, 190, 293, 7, 7)

ctx.drawImage(SpikeUp, 250, 50, 50, 100)
ctx.drawImage(SpikeUp, 250, 50, 50, 100)
ctx.drawImage(SpikeUp, 285, 50, 50, 100)
ctx.drawImage(SpikeUp, 320, 50, 50, 100)
ctx.drawImage(SpikeUp, 355, 50, 50, 100)
ctx.drawImage(SpikeUp, 425, 50, 50, 100)
ctx.drawImage(SpikeUp, 460, 50, 50, 100)
ctx.drawImage(SpikeUp, 495, 50, 50, 100)
ctx.drawImage(SpikeUp, 530 , 50, 50, 100)
ctx.drawImage(SpikeUp, 565 , 50, 50, 100)
// SpikeDown --------------

ctx.drawImage(SpikeDown, 350, 450, 50, 45)

}

export function map_2() {
    if (boss_Which_attack != 2) {
        ctx.drawImage (Boss_Background_Jesus, 0, 0, W, H) 
    } else if (boss_Which_attack == 2) {
        ctx.drawImage (Boss_Background_NoJesus, 0, 0, W, H)
    }
}

    for(let i = 0; i<= 51; i++) { // Makes some variation in the blocks
        lager_3.push (random(1, 5))
        lager_4.push (random(1, 5))
    }
export function draw_map () { // Draws the actual map (blocks), not the hitboxes
    for (let i = 0; i<=51; i++) {// Determines the length (x-axis) of the map
    if(i<10 || i>40 ) { // Creates a gap of 30 blocks
    // A base structure of blocks
    ctx.drawImage(grassblock1, i*25, 450, 25,25)
    ctx.drawImage(stoneblock1, i*25, 550, 25, 25)
    ctx.drawImage(Dirtblock, i*25, 500, 25, 25)
    ctx.drawImage(Dirtblock, i*25, 475, 25, 25)
    ctx.drawImage(stoneblock1,i*25,550,25,25)
    ctx.drawImage(stoneblock1,i*25,575,25,25)
    ctx.drawImage(stoneblock1,i*25,600,25,25)
    
    
    if (lager_3[i] == 1 || lager_3[i] > 2) {ctx.drawImage(Dirtblock,i*25,500,25,25)} // If a block doesn't have the value of 2 
    
    else if(lager_3[i] == 2 ) {ctx.drawImage(stoneblock1,i*25,500,25,25)} // If a block on row 3 has the value of 2 (determined before), creates an overlay of a stoneblock
    
    if(lager_4[i]==2) {ctx.drawImage(Dirtblock,i*25,525,25,25)}
    else if(lager_4[i]==1 || lager_4[i]>2) {ctx.drawImage(stoneblock1,i*25,525,25,25)}// If a block on row 4 doesn't have the value of 2, also creates an overlay of a stoneblock
    }
    }
    }
    
    //let DirtAndStoneHitboxes = [
      WallHitbox.push(new Hitbox(25, 325, 25, 25)),
      WallHitbox.push(new Hitbox(0, 325, 25, 25)),
      WallHitbox.push(new Hitbox(25, 300, 25, 25)),
      WallHitbox.push(new Hitbox(0, 300, 25, 25)),
      WallHitbox.push(new Hitbox(25, 275, 25, 25)),
      WallHitbox.push(new Hitbox(0, 275, 25, 25)),
      WallHitbox.push(new Hitbox(25, 350, 25, 25)),
      WallHitbox.push(new Hitbox(0, 350, 25, 25)),
      WallHitbox.push(new Hitbox(50, 350, 25, 25)),
      WallHitbox.push(new Hitbox(25, 250, 25, 25)),
      WallHitbox.push(new Hitbox(25, 225, 25, 25)),
      WallHitbox.push(new Hitbox(25, 200, 25, 25)),
      WallHitbox.push(new Hitbox(25, 175, 25, 25)),
      WallHitbox.push(new Hitbox(25, 150, 25, 25)),
      WallHitbox.push(new Hitbox(25, 125, 25, 25)),
      WallHitbox.push(new Hitbox(0, 125, 25, 25)),
      WallHitbox.push(new Hitbox(0, 150, 25, 25)),
      WallHitbox.push(new Hitbox(0, 175, 25, 25)),
      WallHitbox.push(new Hitbox(0, 200, 25, 25)),
      WallHitbox.push(new Hitbox(0, 225, 25, 25)),
      WallHitbox.push(new Hitbox(0, 250, 25, 25)),
      
      WallHitbox.push(new Hitbox(150, 200, 25, 25)),
      WallHitbox.push(new Hitbox(150, 225, 25, 25)),
      WallHitbox.push(new Hitbox(175, 200, 25, 25)),
      WallHitbox.push(new Hitbox(175, 225, 25, 25)),
      
      WallHitbox.push(new Hitbox(200, 200, 25, 25)),
      WallHitbox.push(new Hitbox(200, 225, 25, 25)),
      WallHitbox.push(new Hitbox(225, 175, 25, 25)),
      WallHitbox.push(new Hitbox(225, 200, 25, 25)),
      WallHitbox.push(new Hitbox(225, 225, 25, 25)),
      
      WallHitbox.push(new Hitbox(150, 475, 25, 25)),
      WallHitbox.push(new Hitbox(150, 500, 25, 25)),
      WallHitbox.push(new Hitbox(175, 475, 25, 25)),
      WallHitbox.push(new Hitbox(175, 500, 25, 25)),
      //----
     
      WallHitbox.push(new Hitbox(200, 475, 25, 25)),
      WallHitbox.push(new Hitbox(200, 500, 25, 25)),
      WallHitbox.push(new Hitbox(225, 475, 25, 25)),
      WallHitbox.push(new Hitbox(225, 500, 25, 25)),
      
      WallHitbox.push(new Hitbox(150, 525, 25, 25)),
      WallHitbox.push(new Hitbox(150, 550, 25, 25)),
      WallHitbox.push(new Hitbox(150, 575, 25, 25)),
      WallHitbox.push(new Hitbox(175, 525, 25, 25)),
      WallHitbox.push(new Hitbox(175, 550, 25, 25)),
      WallHitbox.push(new Hitbox(175, 575, 25, 25)),
      
      WallHitbox.push(new Hitbox(200, 525, 25, 25)),
      WallHitbox.push(new Hitbox(200, 550, 25, 25)),
      WallHitbox.push(new Hitbox(200, 575, 25, 25)),
      WallHitbox.push(new Hitbox(225, 525, 25, 25)),
      WallHitbox.push(new Hitbox(225, 550, 25, 25)),
      WallHitbox.push(new Hitbox(225, 575, 25, 25)),
      WallHitbox.push(new Hitbox(75, 450, 25, 25)),
      WallHitbox.push(new Hitbox(75, 475, 25, 25)),
      WallHitbox.push(new Hitbox(75, 500, 25, 25)),
      WallHitbox.push(new Hitbox(100, 475, 25, 25)),
      WallHitbox.push(new Hitbox(100, 500, 25, 25)),
  
      WallHitbox.push(new Hitbox(125, 475, 25, 25)),
      WallHitbox.push(new Hitbox(125, 500, 25, 25)),
      WallHitbox.push(new Hitbox(150, 475, 25, 25)),
      WallHitbox.push(new Hitbox(150, 500, 25, 25)),
  
      WallHitbox.push(new Hitbox(75, 525, 25, 25)),
      WallHitbox.push(new Hitbox(75, 550, 25, 25)),
      WallHitbox.push(new Hitbox(75, 575, 25, 25)),
      WallHitbox.push(new Hitbox(100, 525, 25, 25)),
      WallHitbox.push(new Hitbox(100, 550, 25, 25)),
      WallHitbox.push(new Hitbox(100, 575, 25, 25)),
  
      WallHitbox.push(new Hitbox(125, 525, 25, 25)),
      WallHitbox.push(new Hitbox(125, 550, 25, 25)),
      WallHitbox.push(new Hitbox(125, 575, 25, 25)),
      WallHitbox.push(new Hitbox(150, 525, 25, 25)),
      WallHitbox.push(new Hitbox(150, 550, 25, 25)),
      WallHitbox.push(new Hitbox(150, 575, 25, 25)),
  
      WallHitbox.push(new Hitbox(0, 475, 25, 25)),
      WallHitbox.push(new Hitbox(0, 500, 25, 25)),
      WallHitbox.push(new Hitbox(0, 525, 25, 25)),
      WallHitbox.push(new Hitbox(25, 475, 25, 25)),
      WallHitbox.push(new Hitbox(25, 500, 25, 25)),
      WallHitbox.push(new Hitbox(25, 525, 25, 25)),
  
      WallHitbox.push(new Hitbox(50, 475, 25, 25)),
      WallHitbox.push(new Hitbox(50, 500, 25, 25)),
      WallHitbox.push(new Hitbox(50, 525, 25, 25)),
      WallHitbox.push(new Hitbox(75, 475, 25, 25)),
      WallHitbox.push(new Hitbox(75, 500, 25, 25)),
      WallHitbox.push(new Hitbox(75, 525, 25, 25)),
  
      WallHitbox.push(new Hitbox(0, 550, 25, 25)),
      WallHitbox.push(new Hitbox(0, 575, 25, 25)),
      WallHitbox.push(new Hitbox(0, 600, 25, 25)),
      WallHitbox.push(new Hitbox(25, 550, 25, 25)),
      WallHitbox.push(new Hitbox(25, 575, 25, 25)),
      WallHitbox.push(new Hitbox(25, 600, 25, 25)),
  
      WallHitbox.push(new Hitbox(50, 550, 25, 25)),
      WallHitbox.push(new Hitbox(50, 575, 25, 25)),
      WallHitbox.push(new Hitbox(50, 600, 25, 25)),
      WallHitbox.push(new Hitbox(75, 550, 25, 25)),
      WallHitbox.push(new Hitbox(75, 575, 25, 25)),
      WallHitbox.push(new Hitbox(75, 600, 25, 25)),
      WallHitbox.push(new Hitbox(600, 175, 25, 25)),
      //-----
      WallHitbox.push(new Hitbox(600, 200, 25, 25)),
      WallHitbox.push(new Hitbox(600, 225, 25, 25)),
  
      WallHitbox.push(new Hitbox(625, 175, 25, 25)),
      WallHitbox.push(new Hitbox(625, 200, 25, 25)),
      WallHitbox.push(new Hitbox(625, 225, 25, 25)),
  
      WallHitbox.push(new Hitbox(650, 175, 25, 25)),
      WallHitbox.push(new Hitbox(650, 200, 25, 25)),
      WallHitbox.push(new Hitbox(650, 225, 25, 25)),
  
      WallHitbox.push(new Hitbox(675, 175, 25, 25)),
      WallHitbox.push(new Hitbox(675, 200, 25, 25)),
      WallHitbox.push(new Hitbox(675, 225, 25, 25)),
  
      WallHitbox.push(new Hitbox(225, 150, 25, 25)),
      WallHitbox.push(new Hitbox(225, 125, 25, 25)),
      WallHitbox.push(new Hitbox(225, 100, 25, 25)),
      WallHitbox.push(new Hitbox(225, 75, 25, 25)),
      WallHitbox.push(new Hitbox(250, 325, 25, 25)),
      WallHitbox.push(new Hitbox(225, 325, 25, 25)),
      WallHitbox.push(new Hitbox(200, 325, 25, 25)),
      WallHitbox.push(new Hitbox(175, 325, 25, 25)),
      WallHitbox.push(new Hitbox(150, 325, 25, 25)),
      WallHitbox.push(new Hitbox(125, 325, 25, 25)),
      WallHitbox.push(new Hitbox(275, 350, 25, 25)),
      WallHitbox.push(new Hitbox(300, 350, 25, 25)),
      WallHitbox.push(new Hitbox(425, 400, 25, 25)),
  //---
      WallHitbox.push(new Hitbox(25, 325, 25, 25)),
      WallHitbox.push(new Hitbox(0, 325, 25, 25)),
      WallHitbox.push(new Hitbox(25, 300, 25, 25)),
      WallHitbox.push(new Hitbox(0, 300, 25, 25)),
      WallHitbox.push(new Hitbox(25, 275, 25, 25)),
      WallHitbox.push(new Hitbox(0, 275, 25, 25)),
      WallHitbox.push(new Hitbox(25, 350, 25, 25)),
      WallHitbox.push(new Hitbox(0, 350, 25, 25)),
      WallHitbox.push(new Hitbox(50, 350, 25, 25)),
      WallHitbox.push(new Hitbox(25, 250, 25, 25)),
      WallHitbox.push(new Hitbox(25, 225, 25, 25)),
      WallHitbox.push(new Hitbox(25, 200, 25, 25)),
      WallHitbox.push(new Hitbox(25, 175, 25, 25)),
      WallHitbox.push(new Hitbox(25, 150, 25, 25)),
      WallHitbox.push(new Hitbox(25, 125, 25, 25)),
      WallHitbox.push(new Hitbox(0, 125, 25, 25)),
      WallHitbox.push(new Hitbox(0, 150, 25, 25)),
      WallHitbox.push(new Hitbox(0, 175, 25, 25)),
      WallHitbox.push(new Hitbox(0, 200, 25, 25)),
      WallHitbox.push(new Hitbox(0, 225, 25, 25)),
      WallHitbox.push(new Hitbox(0, 250, 25, 25)),
  
      WallHitbox.push(new Hitbox(150, 200, 25, 25)),
      WallHitbox.push(new Hitbox(150, 225, 25, 25)),
      WallHitbox.push(new Hitbox(175, 200, 25, 25)),
      WallHitbox.push(new Hitbox(175, 225, 25, 25)),
  
      WallHitbox.push(new Hitbox(200, 200, 25, 25)),
      WallHitbox.push(new Hitbox(200, 225, 25, 25)),
      WallHitbox.push(new Hitbox(225, 175, 25, 25)),
      WallHitbox.push(new Hitbox(225, 200, 25, 25)),
      WallHitbox.push(new Hitbox(225, 225, 25, 25)),
  
      WallHitbox.push(new Hitbox(150, 475, 25, 25)),
      WallHitbox.push(new Hitbox(150, 500, 25, 25)),
      WallHitbox.push(new Hitbox(175, 475, 25, 25)),
      WallHitbox.push(new Hitbox(175, 500, 25, 25)),
  
      WallHitbox.push(new Hitbox(200, 475, 25, 25)),
      WallHitbox.push(new Hitbox(200, 500, 25, 25)),
      WallHitbox.push(new Hitbox(225, 475, 25, 25)),
      WallHitbox.push(new Hitbox(225, 500, 25, 25)),
  
      WallHitbox.push(new Hitbox(150, 525, 25, 25)),
      WallHitbox.push(new Hitbox(150, 550, 25, 25)),
      WallHitbox.push(new Hitbox(150, 575, 25, 25)),
      WallHitbox.push(new Hitbox(175, 525, 25, 25)),
      WallHitbox.push(new Hitbox(175, 550, 25, 25)),
      WallHitbox.push(new Hitbox(175, 575, 25, 25)),
  
      WallHitbox.push(new Hitbox(200, 525, 25, 25)),
      WallHitbox.push(new Hitbox(200, 550, 25, 25)),
      WallHitbox.push(new Hitbox(200, 575, 25, 25)),
      WallHitbox.push(new Hitbox(225, 525, 25, 25)),
      WallHitbox.push(new Hitbox(225, 550, 25, 25)),
      WallHitbox.push(new Hitbox(225, 575, 25, 25)),
  
      WallHitbox.push(new Hitbox(75, 475, 25, 25)),
      WallHitbox.push(new Hitbox(75, 500, 25, 25)),
      WallHitbox.push(new Hitbox(100, 475, 25, 25)),
      WallHitbox.push(new Hitbox(100, 500, 25, 25)),
  
      WallHitbox.push(new Hitbox(125, 475, 25, 25)),
      WallHitbox.push(new Hitbox(125, 500, 25, 25)),
      WallHitbox.push(new Hitbox(150, 475, 25, 25)),
      WallHitbox.push(new Hitbox(150, 500, 25, 25)),
  
      WallHitbox.push(new Hitbox(75, 525, 25, 25)),
      WallHitbox.push(new Hitbox(75, 550, 25, 25)),
      WallHitbox.push(new Hitbox(75, 575, 25, 25)),
      WallHitbox.push(new Hitbox(100, 525, 25, 25)),
      WallHitbox.push(new Hitbox(100, 550, 25, 25)),
      WallHitbox.push(new Hitbox(100, 575, 25, 25)),
  
      WallHitbox.push(new Hitbox(125, 525, 25, 25)),
      WallHitbox.push(new Hitbox(125, 550, 25, 25)),
      WallHitbox.push(new Hitbox(125, 575, 25, 25)),
      WallHitbox.push(new Hitbox(150, 525, 25, 25)),
      WallHitbox.push(new Hitbox(150, 550, 25, 25)),
      WallHitbox.push(new Hitbox(150, 575, 25, 25)),
  
      WallHitbox.push(new Hitbox(0, 475, 25, 25)),
      WallHitbox.push(new Hitbox(0, 500, 25, 25)),
      WallHitbox.push(new Hitbox(0, 525, 25, 25)),
      WallHitbox.push(new Hitbox(25, 475, 25, 25)),
      WallHitbox.push(new Hitbox(25, 500, 25, 25)),
      WallHitbox.push(new Hitbox(25, 525, 25, 25)),
  
      WallHitbox.push(new Hitbox(50, 475, 25, 25)),
      WallHitbox.push(new Hitbox(50, 500, 25, 25)),
      WallHitbox.push(new Hitbox(50, 525, 25, 25)),
      WallHitbox.push(new Hitbox(75, 475, 25, 25)),
      WallHitbox.push(new Hitbox(75, 500, 25, 25)),
      WallHitbox.push(new Hitbox(75, 525, 25, 25)),
  
      WallHitbox.push(new Hitbox(0, 550, 25, 25)),
      WallHitbox.push(new Hitbox(0, 575, 25, 25)),
      WallHitbox.push(new Hitbox(0, 600, 25, 25)),
      WallHitbox.push(new Hitbox(25, 550, 25, 25)),
      WallHitbox.push(new Hitbox(25, 575, 25, 25)),
      WallHitbox.push(new Hitbox(25, 600, 25, 25)),
  
      WallHitbox.push(new Hitbox(50, 550, 25, 25)),
      WallHitbox.push(new Hitbox(50, 575, 25, 25)),
      WallHitbox.push(new Hitbox(50, 600, 25, 25)),
      WallHitbox.push(new Hitbox(75, 550, 25, 25)),
      WallHitbox.push(new Hitbox(75, 575, 25, 25)),
      WallHitbox.push(new Hitbox(75, 600, 25, 25)),
  
  
      WallHitbox.push(new Hitbox(550, 475, 25, 25)),
      WallHitbox.push(new Hitbox(550, 500, 25, 25)),
      WallHitbox.push(new Hitbox(575, 475, 25, 25)),
      WallHitbox.push(new Hitbox(575, 500, 25, 25)),
  
      WallHitbox.push(new Hitbox(600, 450, 25, 25)),
      WallHitbox.push(new Hitbox(600, 475, 25, 25)),
      WallHitbox.push(new Hitbox(600, 500, 25, 25)),
      WallHitbox.push(new Hitbox(625, 450, 25, 25)),
      WallHitbox.push(new Hitbox(625, 475, 25, 25)),
      WallHitbox.push(new Hitbox(625, 500, 25, 25)),
  
      WallHitbox.push(new Hitbox(650, 450, 25, 25)),
      WallHitbox.push(new Hitbox(650, 475, 25, 25)),
      WallHitbox.push(new Hitbox(650, 500, 25, 25)),
      WallHitbox.push(new Hitbox(675, 450, 25, 25)),
      WallHitbox.push(new Hitbox(675, 475, 25, 25)),
      WallHitbox.push(new Hitbox(675, 500, 25, 25)),
  
      WallHitbox.push(new Hitbox(600, 525, 25, 25)),
      WallHitbox.push(new Hitbox(600, 550, 25, 25)),
      WallHitbox.push(new Hitbox(600, 575, 25, 25)),
      WallHitbox.push(new Hitbox(625, 525, 25, 25)),
      WallHitbox.push(new Hitbox(625, 550, 25, 25)),
      WallHitbox.push(new Hitbox(625, 575, 25, 25)),
  
      WallHitbox.push(new Hitbox(650, 525, 25, 25)),
      WallHitbox.push(new Hitbox(650, 550, 25, 25)),
      WallHitbox.push(new Hitbox(650, 575, 25, 25)),
      WallHitbox.push(new Hitbox(675, 525, 25, 25)),
      WallHitbox.push(new Hitbox(675, 550, 25, 25)),
      WallHitbox.push(new Hitbox(675, 575, 25, 25)),
  
      WallHitbox.push(new Hitbox(600, 250, 25, 25)),
      WallHitbox.push(new Hitbox(600, 275, 25, 25)),
      WallHitbox.push(new Hitbox(600, 300, 25, 25)),
      WallHitbox.push(new Hitbox(625, 250, 25, 25)),
      WallHitbox.push(new Hitbox(625, 275, 25, 25)),
      WallHitbox.push(new Hitbox(625, 300, 25, 25)),
  
      WallHitbox.push(new Hitbox(650, 250, 25, 25)),
      WallHitbox.push(new Hitbox(650, 275, 25, 25)),
      WallHitbox.push(new Hitbox(650, 300, 25, 25)),
      WallHitbox.push(new Hitbox(675, 250, 25, 25)),
      WallHitbox.push(new Hitbox(675, 275, 25, 25)),
      WallHitbox.push(new Hitbox(675, 300, 25, 25)),
  
      WallHitbox.push(new Hitbox(600, 325, 25, 25)),
      WallHitbox.push(new Hitbox(600, 350, 25, 25)),
      WallHitbox.push(new Hitbox(600, 375, 25, 25)),
      WallHitbox.push(new Hitbox(625, 325, 25, 25)),
      WallHitbox.push(new Hitbox(625, 350, 25, 25)),
      WallHitbox.push(new Hitbox(625, 375, 25, 25)),
  
      WallHitbox.push(new Hitbox(650, 325, 25, 25)),
      WallHitbox.push(new Hitbox(650, 350, 25, 25)),
      WallHitbox.push(new Hitbox(650, 375, 25, 25)),
      WallHitbox.push(new Hitbox(675, 325, 25, 25)),
      WallHitbox.push(new Hitbox(675, 350, 25, 25)),
      WallHitbox.push(new Hitbox(675, 375, 25, 25)),
  
      WallHitbox.push(new Hitbox(600, 400, 25, 25)),
      WallHitbox.push(new Hitbox(600, 425, 25, 25)),
      WallHitbox.push(new Hitbox(625, 400, 25, 25)),
      WallHitbox.push(new Hitbox(625, 425, 25, 25)),
      WallHitbox.push(new Hitbox(650, 400, 25, 25)),
      WallHitbox.push(new Hitbox(650, 425, 25, 25)),
      WallHitbox.push(new Hitbox(675, 400, 25, 25)),
      WallHitbox.push(new Hitbox(675, 425, 25, 25)),
  
      WallHitbox.push(new Hitbox(325, 325, 25, 25)),
      WallHitbox.push(new Hitbox(325, 350, 25, 25)),
      WallHitbox.push(new Hitbox(350, 325, 25, 25)),
      WallHitbox.push(new Hitbox(350, 350, 25, 25)),
  
      WallHitbox.push(new Hitbox(375, 325, 25, 25)),
      WallHitbox.push(new Hitbox(375, 350, 25, 25)),
      WallHitbox.push(new Hitbox(400, 325, 25, 25)),
      WallHitbox.push(new Hitbox(400, 350, 25, 25)),
  
      WallHitbox.push(new Hitbox(325, 375, 25, 25)),
      WallHitbox.push(new Hitbox(325, 400, 25, 25)),
      WallHitbox.push(new Hitbox(325, 425, 25, 25)),
      WallHitbox.push(new Hitbox(350, 375, 25, 25)),
      WallHitbox.push(new Hitbox(350, 400, 25, 25)),
      WallHitbox.push(new Hitbox(350, 425, 25, 25)),
  
      WallHitbox.push(new Hitbox(375, 375, 25, 25)),
      WallHitbox.push(new Hitbox(375, 400, 25, 25)),
      WallHitbox.push(new Hitbox(375, 425, 25, 25)),
      WallHitbox.push(new Hitbox(400, 375, 25, 25)),
      WallHitbox.push(new Hitbox(400, 400, 25, 25)),
      WallHitbox.push(new Hitbox(400, 425, 25, 25)),
  
      WallHitbox.push(new Hitbox(225, 150, 25, 25)),
      WallHitbox.push(new Hitbox(225, 125, 25, 25)),
      WallHitbox.push(new Hitbox(225, 100, 25, 25)),
      WallHitbox.push(new Hitbox(225, 75, 25, 25)),
  
      WallHitbox.push(new Hitbox(250, 325, 25, 25)),
      WallHitbox.push(new Hitbox(225, 325, 25, 25)),
      WallHitbox.push(new Hitbox(200, 325, 25, 25)),
      WallHitbox.push(new Hitbox(175, 325, 25, 25)),
      WallHitbox.push(new Hitbox(150, 325, 25, 25)),
      WallHitbox.push(new Hitbox(125, 325, 25, 25)),
      WallHitbox.push(new Hitbox(275, 350, 25, 25)),
      WallHitbox.push(new Hitbox(300, 350, 25, 25)),
      WallHitbox.push(new Hitbox(425, 400, 25, 25)),
  
      WallHitbox.push(new Hitbox(600, 175, 25, 25)),
      WallHitbox.push(new Hitbox(600, 200, 25, 25)),
      WallHitbox.push(new Hitbox(600, 225, 25, 25)),
      WallHitbox.push(new Hitbox(625, 175, 25, 25)),
      WallHitbox.push(new Hitbox(625, 200, 25, 25)),
      WallHitbox.push(new Hitbox(625, 225, 25, 25)),
      WallHitbox.push(new Hitbox(650, 175, 25, 25)),
      WallHitbox.push(new Hitbox(650, 200, 25, 25)),
      WallHitbox.push(new Hitbox(650, 225, 25, 25)),
      WallHitbox.push(new Hitbox(675, 175, 25, 25)),
      WallHitbox.push(new Hitbox(675, 200, 25, 25)),
      WallHitbox.push(new Hitbox(675, 225, 25, 25)),
      WallHitbox.push(new Hitbox(250, 175, 25, 25)),
      WallHitbox.push(new Hitbox(275, 175, 25, 25)),
      WallHitbox.push(new Hitbox(300, 175, 25, 25)),
      WallHitbox.push(new Hitbox(325, 175, 25, 25)),
      WallHitbox.push(new Hitbox(350, 175, 25, 25)),
      WallHitbox.push(new Hitbox(375, 175, 25, 25)),
      WallHitbox.push(new Hitbox(400, 175, 25, 25)),
      WallHitbox.push(new Hitbox(425, 175, 25, 25)),
      WallHitbox.push(new Hitbox(450, 175, 25, 25)),
      WallHitbox.push(new Hitbox(475, 175, 25, 25)),
      WallHitbox.push(new Hitbox(500, 175, 25, 25)),
      WallHitbox.push(new Hitbox(525, 175, 25, 25)),
      WallHitbox.push(new Hitbox(550, 175, 25, 25)),
      WallHitbox.push(new Hitbox(575, 175, 25, 25)),
      
      WallHitbox.push(new Hitbox(75, 350, 25, 25)),
      WallHitbox.push(new Hitbox(100, 350, 25, 25)),
      WallHitbox.push(new Hitbox(125, 350, 25, 25)),
      
      WallHitbox.push(new Hitbox(500, 475, 25, 25)),
      WallHitbox.push(new Hitbox(500, 500, 25, 25)),
      WallHitbox.push(new Hitbox(500, 525, 25, 25)),
      WallHitbox.push(new Hitbox(500, 550, 25, 25)),
      WallHitbox.push(new Hitbox(500, 575, 25, 25)),
      WallHitbox.push(new Hitbox(500, 600, 25, 25)),
      WallHitbox.push(new Hitbox(500, 625, 25, 25)),
      WallHitbox.push(new Hitbox(500, 650, 25, 25))


export function WallHitbox_clear () {
    WallHitbox = []
}

ground.push(new Hitbox(675, 150, 25, 25)),
ground.push(new Hitbox(650, 150, 25, 25)),
ground.push(new Hitbox(625, 150, 25, 25)),
ground.push(new Hitbox(600, 150, 25, 25)),
ground.push(new Hitbox(575, 150, 25, 25)),



ground.push(new Hitbox(550, 150, 25, 25)),
ground.push(new Hitbox(525, 150, 25, 25)),
ground.push(new Hitbox(500, 150, 25, 25)),
ground.push(new Hitbox(475, 150, 25, 25)),
ground.push(new Hitbox(450, 150, 25, 25)),
ground.push(new Hitbox(425, 150, 25, 25)),

ground.push(new Hitbox(425, 150, 25, 25)),
ground.push(new Hitbox(400, 150, 25, 25)),
ground.push(new Hitbox(375, 150, 25, 25)),
ground.push(new Hitbox(350, 150, 25, 25)),
ground.push(new Hitbox(325, 150, 25, 25)),
ground.push(new Hitbox(300, 150, 25, 25)),
ground.push(new Hitbox(275, 150, 25, 25)),
ground.push(new Hitbox(250, 150, 25, 25)),

ground.push(new Hitbox(0, 450, 25, 25)),
ground.push(new Hitbox(25, 450, 25, 25)),
ground.push(new Hitbox(50, 450, 25, 25)),
ground.push(new Hitbox(75, 425, 25, 25)),
ground.push(new Hitbox(100, 425, 25, 25)),
ground.push(new Hitbox(100, 325, 25, 25)),
ground.push(new Hitbox(75, 325, 25, 25)),
ground.push(new Hitbox(50, 325, 25, 25)),

ground.push(new Hitbox(400, 300, 25, 25)),
ground.push(new Hitbox(375, 300, 25, 25)),
ground.push(new Hitbox(350, 300, 25, 25)),
ground.push(new Hitbox(325, 300, 25, 25)),

ground.push(new Hitbox(500, 450, 25, 25)),
ground.push(new Hitbox(525, 450, 25, 25)),
ground.push(new Hitbox(550, 450, 25, 25)),
ground.push(new Hitbox(575, 450, 25, 25)),

ground.push(new Hitbox(125, 300, 25, 25)),
ground.push(new Hitbox(150, 300, 25, 25)),
ground.push(new Hitbox(175, 300, 25, 25)),
ground.push(new Hitbox(200, 300, 25, 25)),
ground.push(new Hitbox(225, 300, 25, 25)),
ground.push(new Hitbox(250, 300, 25, 25)),
ground.push(new Hitbox(275, 325, 25, 25)),
ground.push(new Hitbox(300, 325, 25, 25)),

ground.push(new Hitbox(200, 175, 25, 25)),
ground.push(new Hitbox(175, 175, 25, 25)),
ground.push(new Hitbox(150, 175, 25, 25)),
ground.push(new Hitbox(150, 50, 25, 25)),
ground.push(new Hitbox(175, 50, 25, 25)),
ground.push(new Hitbox(200, 50, 25, 25)),
ground.push(new Hitbox(225, 50, 25, 25)),

ground.push(new Hitbox(0, 100, 25, 25)),
ground.push(new Hitbox(25, 100, 25, 25)),

ground.push(new Hitbox(150, 450, 25, 25)),
ground.push(new Hitbox(125, 450, 25, 25)),
ground.push(new Hitbox(175, 450, 25, 25)),
ground.push(new Hitbox(225, 450, 25, 25)),

ground.push(new Hitbox(475, 375, 25, 25)),
ground.push(new Hitbox(450, 375, 25, 25)),
ground.push(new Hitbox(425, 375, 25, 25))



export function ground_clear () {
    ground = []
}


export {WallHitbox, ground}
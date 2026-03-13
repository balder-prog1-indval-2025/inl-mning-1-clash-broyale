let amount_jumps = 2
let amount_dashes = 2
let char_x = 650
let char_y = 0
let movement_x = 0
let movement_y = 0
let jumping = false
let jump_time = 0
let jump_reset = true
let character = new Hitbox (char_x,char_y, 25, 40)
let dash_time = 0
let dashing = false
let after_dash = false
let lager_3 = []
let lager_4 = [] 
let fall_time = 0
let char_Direction = false
let Level = 0
let Level_change = true
enum AttackType {
    BigAttack,
    SmallAttack,
    FlyAttack
}

let grassblock1 = await fetchImage("images/Block1.png")
let stoneblock1 = await fetchImage("images/stoneblock1.png")
let Dirtoverlayblock = await fetchImage("images/Dirtoverlayblock.png")
let Dirtblock = await fetchImage("Images/Dirtblock.png")
let Character_RevertedImage = await fetchImage ("images/Character_reverted.png")
let Character_Image = await fetchImage ("images/Character.png")
let flames_image = await fetchImage ("images/Flames.png")
let platform_image = await fetchImage ("images/Platform.png")
let bullet_image = await fetchImage ("images/Bullet.png")
let Cloud_image = await fetchImage ("images/Cloud.png")
let Gnome = await fetchImage("images/Gnome.png")
let SpiderSide = await fetchImage("images/SpiderSide.png")
let SpikeDown = await fetchImage("images/SpikeDown.png")
let SpikeUp = await fetchImage("images/SpikeUp.png")
let SpikeRight = await fetchImage("images/SpikeRight.png")
let SpikeLeft = await fetchImage("images/Spikeleft.png")
let Spider =  await fetchImage("images/Spider.png")


let ground: Hitbox[] = []
let wall: Hitbox[] = []
let shots = []
let deaths = 0


let boss = new Hitbox(1150, H, 100, 250)
let boss_Health = 200
let boss_Attack_hitboxes= []
let boss_Currently_Attacking = true
let boss_Which_attack = 0
let boss_Blow_attack = 0
let boss_timer = 0
let blow_timer = 0
let blowing = false


let flames =  new Sprite (flames_image, 1, 1)
flames.x = 0
flames.y = 1000
flames.width = 250
flames.height = 150

let Platform_1 = new Sprite(platform_image, 1, 1)
Platform_1.y = 350
Platform_1.x = 275
Platform_1.width = 50
Platform_1.height = 25  


let Platform_2 = new Sprite(platform_image, 1, 1)
Platform_2.y = 250
Platform_2.x = 550
Platform_2.width = 50
Platform_2.height = 25  


let Platform_3 = new Sprite(platform_image, 1, 1)
Platform_3.y = 200
Platform_3.x = 825
Platform_3.width = 50
Platform_3.height = 25  


let Spiderman = false
let Spiderman2 = false
let Spooderman = true
let SpiderTrigger= new Hitbox(775,100, 250, 1000)
let Spider_hitbox =  new Hitbox ( 675, -700 ,350, 50)
let SecondSpider_hitbox = new Hitbox (-14000,-100,50,350)
let SecondSpider_x = -14025
let Spider_y = -725
let death_zone: Hitbox [] = []
death_zone.push(SecondSpider_hitbox)
death_zone.push(Spider_hitbox)
let GnomeHitbox = new Hitbox(1015,350,25,75)
death_zone.push(GnomeHitbox)


//]
// Spikes ----------------------
//Spikes left
//Kopiera ut allt detta senare från funktionen
death_zone.push(new Hitbox(290, 383, 50, 15))
death_zone.push(new Hitbox(290, 418, 50, 15))
death_zone.push(new Hitbox(535, 425, 64, 10))
death_zone.push(new Hitbox(565, 260, 40, 150))


death_zone.push(new Hitbox(525, 242, 75, 17))
death_zone.push(new Hitbox(525, 207, 75, 17))
death_zone.push(new Hitbox(405, 555, 50, 20))
death_zone.push(new Hitbox(450, 535, 50, 20))

death_zone.push(new Hitbox(155, 145, 75, 15))
death_zone.push(new Hitbox(155, 100, 75, 15))
death_zone.push(new Hitbox(112, 54, 25, 10))

death_zone.push(new Hitbox(1015, 425, 30, 25))


death_zone.push(new Hitbox(1015, 0, 30, 345))


// SpikeRightHitbox


death_zone.push(new Hitbox(200, 545, 95, 50))
death_zone.push(new Hitbox(250, 555, 95, 50))
death_zone.push(new Hitbox(425, 345, 92, 10))
death_zone.push(new Hitbox(425, 318, 75, 15))

death_zone.push(new Hitbox(50, 110, 30, 220)) //RAHHHHh




// SpikeUp
death_zone.push(new Hitbox(100, 290, 15, 25))
death_zone.push(new Hitbox(286, 287, 25, 25))
death_zone.push(new Hitbox(336, 266, 25, 25))
death_zone.push(new Hitbox(192, 296, 5, 5))

death_zone.push(new Hitbox(250, 80, 140, 60))
death_zone.push(new Hitbox(438, 80, 160, 60))


// SpikeDownHitbox
death_zone.push(new Hitbox(369, 445, 15, 33)) //RAHHHH2

let WallHitbox = []
  let DirtAndStoneHitboxes = [
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
    WallHitbox.push(new Hitbox(500, 650, 25, 25)),
    
  ]

  let GrassBlockHitboxes = [
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
        ground.push(new Hitbox(425, 375, 25, 25)),
        
  ]
      


function map() {
    //Dirtoverlayblocks: 
    /*
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

*/

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
function GnomeAttack() {
    if(Spiderman2 && Spooderman) {
ctx.drawImage(Gnome, 1010,350,40,70)
    }
}
function SpiderAttack_1() {
    if(Spiderman) {
   
        ctx.drawImage(Spider, 650, Spider_y ,400, 200)
        Spider_hitbox.y += 50
        Spider_y += 50
    if (Spider_hitbox.y > H) {
        Spiderman = false
    }
    
}
}
function SpiderAttack_2() {
    if(Spiderman2 && Spooderman) {
    ctx.drawImage(SpiderSide, SecondSpider_x, -100, 200, 400 )
    SecondSpider_hitbox.x +=50
    SecondSpider_x +=50
    if(SecondSpider_x > W) {
        Spiderman2 = false
        Spooderman = false
        GnomeHitbox.x = W+20000
        SecondSpider_hitbox.x = W + 20000
    }
    }
}




















//first attack
let B_attack_1 = false
let B_attack_1_hitboxes = true
//second attack
let B_attack_2_timer = 0
let attack_2 = false
// third attack
let B_attack_3_timer = 0
let B_attack_3 = false
let B_moving_left = false
let B_moving_right = false
let B_return = false
  
/*
let Platform_1 = new Sprite(platform_image, 1, 1)
Platform_1.y = 10000
Platform_1.x = 275
Platform_1.width = 50
Platform_1.height = 25  
ground.push(Platform_1)

let Platform_2 = new Sprite(platform_image, 1, 1)
Platform_2.y = 10000
Platform_2.x = 550
Platform_2.width = 50
Platform_2.height = 25  
ground.push(Platform_2)

let Platform_3 = new Sprite(platform_image, 1, 1)
Platform_3.y = 10000
Platform_3.x = 825
Platform_3.width = 50
Platform_3.height = 25  
ground.push(Platform_3)
*/
//ground.push(new Hitbox(275 * 2, 250, 50, 25))
//ground.push(new Hitbox(275 * 3, 300, 50, 25))


// Wall hitboxes
wall.push(new Hitbox(0, 475, 250,200))
wall.push(new Hitbox(1025, 475, 250, 200))

//Death zone
let death_zone_floor = new Hitbox (-1000, 600, 3200, 200)

for (let i = 0; i<=51; i++) { //ground hitboxes
if(i<10 || i>40 ) {
    ground.push(new Hitbox (i*25 ,450,25,25))
}
}
for(let i = 0; i<= 51; i++) { // Makes some variation in the blocks
    lager_3.push (random(1, 5))
    lager_4.push (random(1, 5))
}
function draw_map () { // Draws the actual map (blocks), not the hitboxes
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
/**
 * @return_jump = the value the function returns
 * @jump_time = determines the speed at which the character falls, the gravity
 * @jumping = activates if keyboard.space is clicked
 * @amount_jumps = determines how many jumps you have, resets if the character intersects with the ground
 * 
 * @fall_time = a delay for the passive gravity
 */
let gravity = 18000
let gravity_2_jump = -6500
let fall_gravity = 10000
function jump () {// Determines everything that has with the characters movement in y-axis to do.
    let return_jump = 0
    for (let i = 0; i < ground.length ; i++){
        if (dashing && (keyboard.d || keyboard.a) && amount_dashes > 0 ) { // the gravity doesn't affect the character while dashing
            
            return_jump = 0
        } else if(after_dash && !character.intersects(ground[i])) { // makes it so after a dash the gravity resets
            jump_time = gravity
            after_dash = false
            
        } 
        else if(jumping && !character.intersects(ground[i]) && after_dash == false) { // the actual jump
            if (jump_reset) {
                jump_time = 0
                jump_reset = false
            }
            jump_time += deltaTime
            if(jump_time <gravity*2) {
                return_jump = -8 + 8 * jump_time/gravity
        } else {return_jump = 4 * jump_time/gravity}
        } 
        else if (character.intersects (ground[i])) { // when the character intersects with the hitbox.
            jumping = false // The character can't jump 
            dashing = false // ... or "dash"
            fall_time = 0
            jump_time = 0
            jump_reset = true
            movement_y= 0 // all momentum i y-led blir 0,
            amount_jumps = 2
            amount_dashes = 2
            return_jump = -2 // The character moves above the hitbox, creates this jittery movement
        }
    else if (!jumping && !character.intersects(ground[i])) { //när karaktären inte hoppar och inte träffar marken
        fall_time +=deltaTime
        if (fall_time> fall_gravity){ // A little delay so that the character doesn't fall immediately
            jump_time += deltaTime
            return_jump = 8 * jump_time/gravity 
            }
    }
        
    }
    for(let i = 0; i < wall.length; i++){ // makes it so the character can't get into walls
        if (character.intersects(wall[i])){
            movement_x = 0
        }
    }
    return return_jump
}

/**
 * @return_dash = the value the function returns
 * @dashing = is active if keyboard.shift is pressed 
 * @dash_time = the length of the dash
 * @amount_dashes = how many dashes the character has
 * @after_dash = a variable that helps with reseting movement after a dash
 */
function dash () {
    let return_dash = 0
    for (let i = 0; i < ground.length ; i++){
        if (dashing && !character.intersects(ground[i])) {
            
            if ( keyboard.d && dash_time < 100 && amount_dashes>0) {
            dash_time += deltaTime
            
        
             return_dash = 2
             return return_dash
            } else if (keyboard.d && dash_time < 100 && amount_dashes>0) {
            dash_time += deltaTime
            return_dash = 2
            return return_dash
            } else if (keyboard.a && dash_time < 100 && amount_dashes>0) {
            dash_time += deltaTime
        
            return_dash = -2
            return return_dash
            } if ( dash_time >= 100) {
            amount_dashes--
            dash_time = 0
            dashing = false
            after_dash = true
            return_dash = -2
            return return_dash
            } 
        }
        else if (dashing && character.intersects(ground[i])) {
            dashing = false
            return_dash = 0
        }
}
    return return_dash
    
}
    


function walk () { //standard movement im x-axis
    if (dashing && (keyboard.a || keyboard.d) && amount_dashes > 0) { // makes it so walking doesn't affect dashing. 
        return movement_x
    }
    else if (keyboard.a) {
        return -5
    }else if (keyboard.d ) {
        return 5
    }

   else {
        return 0
}
}

/**
 * @char_y = the actual place in y-axis the character is
 * @char_x = same as above but instead x-axis
 * @movement_x = the velocity in x-axis (pixels/frame)
 * @movement_y = the velocity in y-axis
 */
function updatePosition () { 
char_x += movement_x 
char_y += movement_y
}

/**
 * 
 * @char_Direction = determines which way the character is facing  
 */
function updateCharacter(x:number, y:number, hitbox:Hitbox) {
if (keyboard.d){
    char_Direction = false
    let c = ctx.drawImage(Character_RevertedImage, x -11, y-21, 50, 50)
}
else if (keyboard.a){
    char_Direction = true
    let c = ctx.drawImage(Character_Image, x -11, y-21, 50, 50)
}
if (!char_Direction) {
    let c = ctx.drawImage(Character_RevertedImage, x -11, y-21, 50, 50)
}
else if(char_Direction) {
    let c = ctx.drawImage(Character_Image, x -11, y-21, 50, 50)
}
 
hitbox.x = x
hitbox.y = y -15
hitbox.drawOutline()


}

function shoot () { // makes hitboxes for bullets 
    
    if (keyboard.enter ) { 
        keyboard.enter = false

        shots.push({
           "hitbox": new Hitbox (char_x + 10, char_y + 5, 20, 10),
           "direction": char_Direction,
           
    })
    
    }
    
}


function boss_Attacks () {
    boss_timer += deltaTime/100
    
    if(boss_Currently_Attacking && boss_timer > 30){
        boss_Currently_Attacking= false
        boss_Which_attack = random(1,3) 
        boss_Blow_attack = random(1, 5)
        boss_timer = 0
        attack_2 = true
        B_attack_1_hitboxes = true
        B_attack_3_timer = 0
}
if (boss_Blow_attack == 1 && boss_Health > 0){
    blowing = true
}


if (boss_Which_attack == 1 && boss_Health > 0) {
    
    if (boss.y < 0 ) {
        B_attack_1 = true
    }
    if (!B_attack_1 ) {
        boss.y -= 3
    } else {boss.y += 5}
        
    
    if (boss.y > 205){
        boss.y = 200
        boss_Which_attack = 0
        boss_Currently_Attacking= true
        B_attack_1_hitboxes = true
        B_attack_1 = false
        boss_timer = 20
    }
    if(B_attack_1_hitboxes) {
       
   
        boss_Attack_hitboxes.push({
        "hitbox": new Hitbox(1150, 350, 125, 125),
        "hitbox2": new Hitbox(1150 + 600, 200, 125, 125),
        "hitbox3": new Hitbox(1150 + 1200, 50, 125, 125),
        "type": AttackType.SmallAttack 
    })
    B_attack_1_hitboxes = false
    }
        
   
    
} 
else if(boss_Which_attack == 2 && boss_Health > 0) {
    B_attack_2_timer += deltaTime/100
        if (attack_2) {
            
            if (B_attack_2_timer < 7) {
                boss_Attack_hitboxes.push ({
                    "hitbox": new Hitbox (275, 0, 50, 100),
                    "hitbox2": new Hitbox (550, 0, 50, 100),
                    "hitbox3": new Hitbox (825, 0, 50, 100),
                    "type": AttackType.BigAttack
                    })
            }  
        }
        attack_2 = false
        
        if (B_attack_2_timer > 7 ) {
            boss_Attack_hitboxes.pop()
            boss_Attack_hitboxes.push ({
                "hitbox":new Hitbox (275, 0, 50, 1000),
                "hitbox2": new Hitbox (550, 0, 50, 1000),
                "hitbox3": new Hitbox (825, 0, 50, 1000),
                "type": AttackType.BigAttack
            })
        }
        if (B_attack_2_timer > 12) {
            boss_Attack_hitboxes.pop()
            B_attack_2_timer= 0
            boss_Which_attack = 0
            boss_Currently_Attacking = true 
        }

}else if (boss_Which_attack == 3) {
    boss.y -= 7
    B_attack_3 = true
    
    
    if(boss.y < -300 && B_attack_3){ 
        B_attack_3 = false
        boss_Which_attack = 0
        boss_Attack_hitboxes.push ({
        "hitbox":new Hitbox (500, H, 100, 100),
        "hitbox2": new Hitbox (525, H, 50, H),
        "hitbox_leftWall": new Hitbox (0, 0, 250, 0),
        "hitbox_rightWall": new Hitbox (1025, 0, 300, 0),
        "type": AttackType.FlyAttack}) 
         
    } }  
    if(B_attack_3_timer >37){
        B_attack_3_timer = 0
        B_moving_left = false
        B_moving_right = false
        
        B_return = true
    }



}

let Next_level = new Hitbox (W-100, 350, 100, 100)

update = () => {
    clear()
    for(let i = 0; i < death_zone.length; i ++){
        death_zone[i].drawOutline()
    }



    SpiderTrigger.drawOutline()
    GnomeHitbox.drawOutline()
    if (Level == 0) {map()}
    GnomeAttack()
    SpiderAttack_1()
    SpiderAttack_2()
    if(character.intersects(SpiderTrigger)) { Spiderman = true
        Spiderman2 = true
    }
    for(let i = 0; i<death_zone.length; i++) {
        if (character.intersects(death_zone[i]) ) { // makes it so if you fall of the map or press "R" you die (reset)
            keyboard.r = false
            char_x = 50
            char_y = 400
            deaths ++
            Spider_hitbox.y = -700
            Spider_y = -700
            SecondSpider_hitbox.x = -14000
            SecondSpider_x = -14025
            GnomeHitbox.x = 1015
            GnomeHitbox.y=350
            Spiderman = false
            Spiderman2 = false
            Spooderman = true
        }
        }
    
    
    
    
    
        for(let i = 0; i < WallHitbox.length; i++) {
            if(character.intersects(WallHitbox[i]) && keyboard.d && !char_Direction) {
            char_x = char_x -5
            char_y = char_y +2
            }
            else if(character.intersects(WallHitbox[i]) && keyboard.a && char_Direction) {
                char_x = char_x + 5
                char_y = char_y +2
            }
            else if(character.intersects(WallHitbox[i]) && jumping) {
                char_y = char_y + 5
            }
            else if(character.intersects(WallHitbox[i]) && dashing && keyboard.d) {
                char_x = char_x -10
            }
            else if(character.intersects(WallHitbox[i]) && dashing && keyboard.a) {
                char_x = char_x + 10
            }
            
        }
            //--------------
    if ( character.intersects(Next_level)) {
        Level++
        char_x = 50
        char_y = 400
    }
    Next_level.drawOutline()
    
    if (blowing) {
       
        let blow_hitbox = new Sprite (Cloud_image,1,1)
        blow_hitbox.x = 0
        blow_hitbox.y = 0
        blow_hitbox.width = W
        blow_hitbox.height = H
        blow_timer += deltaTime/100
        blow_hitbox.draw()
        if (character.intersects(blow_hitbox)) {
            char_x -= 1,5
        }
        if (blow_timer > 30) {
            blowing = false
            blow_timer = 0
        }
    }
    
    //console.log(ground.length, death_zone.length)
   
    if (Level == 1) {
       
        if(Level_change){
            boss.y = 200
            ground = []
            WallHitbox = []
            death_zone = []
            ground.push(Platform_1)
            ground.push(Platform_2)
            ground.push(Platform_3)
            ground.push(new Hitbox(0, 450, 250, 25))
            ground.push(new Hitbox(1025, 450, 250, 25))


            gravity = 1200
            gravity_2_jump = -300
            fall_gravity = 1200
            SpiderTrigger.y = 200000
            GnomeHitbox.y = 200000

    }
        Level_change = false
        flames.draw()
        
        Platform_1.draw()
        Platform_2.draw()
        Platform_3.draw()

        boss_Attacks()
    
    }
    
    if (char_x > 250 && Level == 1) {
        flames.y = 322
        
    }


    if (character.intersects(death_zone_floor) || keyboard.r || character.intersects(flames)) { // makes it so if you fall of the map or press "R" you die (reset)
        keyboard.r = false
        char_x = 50
        char_y = 400
        deaths ++
        boss_Health = 200
        boss.y = 200
        flames.y = 1000
        boss_Attack_hitboxes.shift()
        boss_Currently_Attacking = true
        Spider_hitbox.y = -700
        Spider_y = -700
        SecondSpider_hitbox.x = -14000
        SecondSpider_x = -14025
        GnomeHitbox.x = 1015
        GnomeHitbox.y=350
        Spiderman = false
        Spiderman2 = false
        Spooderman = true
    }
    text ("Death count: " + deaths, 10, 20) // a visible death count
    
    
    for(let i = 0; i < boss_Attack_hitboxes.length; i++) {
        if (boss_Health < 0) {// makes the boss disappear
            boss.y = 2000
            //just to make so boss doesn't move continuously
        } else if (boss_Health > 0 && boss_Which_attack != 3 && !AttackType.FlyAttack) {boss.y = 200} 
}
    
   
    // boss_Attacks
    boss.drawOutline()
    
    for(let i = 0; i < boss_Attack_hitboxes.length; i++) {
        boss_Attack_hitboxes[i]["hitbox"].drawOutline()
        
        if (boss_Attack_hitboxes[i]["type"] == AttackType.FlyAttack ){
            boss_Attack_hitboxes[i]["hitbox_rightWall"].height += 10 
            boss_Attack_hitboxes[i]["hitbox_leftWall"].height += 10
            
            boss_Attack_hitboxes[i]["hitbox2"].drawOutline()
            boss_Attack_hitboxes[i]["hitbox_rightWall"].drawOutline()
            boss_Attack_hitboxes[i]["hitbox_leftWall"].drawOutline()
            B_attack_3_timer += deltaTime/100
            
           
            if (boss_Attack_hitboxes[i]["hitbox"].y > H-100 && !B_return) 
                {boss_Attack_hitboxes[i]["hitbox"].y -= 10}
           
            if(boss_Attack_hitboxes[i]["hitbox2"].y > 200)
                {boss_Attack_hitboxes[i]["hitbox2"].y -= 10
                 boss_Attack_hitboxes[i]["hitbox2"].height += 10}
            else if(boss_Attack_hitboxes[i]["hitbox2"].y < 193 && B_moving_right == false){
                B_moving_left = true

                }
                    
            if (B_moving_left) {
                boss_Attack_hitboxes[i]["hitbox"].x -= 7
                boss_Attack_hitboxes[i]["hitbox2"].x -= 7
                if (boss_Attack_hitboxes[i]["hitbox"].x < 250) {
                    B_moving_left = false
                    B_moving_right = true
                    
                }
            } else if (B_moving_right) {
                boss_Attack_hitboxes[i]["hitbox"].x += 7
                boss_Attack_hitboxes[i]["hitbox2"].x += 7
                if (boss_Attack_hitboxes[i]["hitbox"].x > 900){
                    B_moving_right = false
                    B_moving_left = true
                }
            }   
            if (character.intersects(boss_Attack_hitboxes[i]["hitbox"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox2"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox_leftWall"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox_rightWall"])) {
                char_x = 50
                char_y = 400
                deaths ++
                boss_Health = 200
                boss_Attack_hitboxes[i]["hitbox"].x =500
                boss_Attack_hitboxes[i]["hitbox2"].x =525
                boss_Attack_hitboxes.shift()
                flames.y = 1000
                boss_Currently_Attacking = true
                boss.y = 200
            }
            if (B_return) {
                
                boss_Attack_hitboxes[i]["hitbox"].y += 10
                boss_Attack_hitboxes[i]["hitbox2"].y += 100
                boss_Attack_hitboxes[i]["hitbox"].x += 0
                boss_Attack_hitboxes[i]["hitbox2"].x += 0
                
                if (boss_Attack_hitboxes[i]["hitbox"].y > H+10 && boss.y < 200){
                    boss.y += 10 
                }else if (boss.y > 200){
                    boss_Attack_hitboxes[i]["hitbox"].x =500
                    boss_Attack_hitboxes[i]["hitbox2"].x =525
                      boss_Attack_hitboxes.pop()
                      boss_Currently_Attacking = true
                      boss_timer = 10
                      B_return = false
                      B_attack_3_timer = 0
                    }
            
            }
                
        }

        else if (boss_Attack_hitboxes[i]["type"] == AttackType.BigAttack ){
            boss_Attack_hitboxes[i]["hitbox2"].drawOutline()
            boss_Attack_hitboxes[i]["hitbox3"].drawOutline()
        
            if (character.intersects(boss_Attack_hitboxes[i]["hitbox"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox2"])  || character.intersects(boss_Attack_hitboxes[i]["hitbox3"])){
                char_x = 50
                char_y = 400
                deaths ++
                boss_Health = 200
                boss_Attack_hitboxes.shift()
                flames.y = 1000
            }
        }
       
        else if ( boss_Attack_hitboxes[i]["type"] == AttackType.SmallAttack ) {
            boss_Attack_hitboxes[i]["hitbox2"].drawOutline()
            boss_Attack_hitboxes[i]["hitbox3"].drawOutline()
            
            boss_Attack_hitboxes[i]["hitbox"].x -= 15
            boss_Attack_hitboxes[i]["hitbox2"].x -= 15
            boss_Attack_hitboxes[i]["hitbox3"].x -= 15
            if (character.intersects(boss_Attack_hitboxes[i]["hitbox"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox2"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox3"])){
                char_x = 50
                char_y = 400
                deaths ++
                boss_Health = 200
                boss.y -= 0
                boss.y = 200
                boss_Currently_Attacking = true
                flames.y = 1000
                boss_Attack_hitboxes.shift()
            }
        }
        
       
    } 
  
    
    
    
   
   
   
   
    
    for(let i = 0; i < wall.length; i++){
    wall[i].drawOutline()        
    }
    for(let i = 0; i < shots.length; i++){

        if(!shots[i]["direction"]){ // if character is facing right, bullets go right.
            //console.log("höger")
        shots[i]["hitbox"].x += 14
        ctx.drawImage(bullet_image, shots[i]["hitbox"].x, shots[i]["hitbox"].y-5, 30, 15)
        } else if (shots[i]["direction"]) { // and vice versa
            //console.log("vänster")
            shots[i]["hitbox"].x -=14
            ctx.drawImage(bullet_image, shots[i]["hitbox"].x, shots[i]["hitbox"].y -5, 30, 15)
        }
        //shots[i]["hitbox"].drawOutline()
        if (shots[i]["hitbox"].intersects(boss) ) { // if shots hit boss, they disappear and damage it
            shots.shift()
            console.log("damage")
            boss_Health--
        } 
    } 
    shoot()
    draw_map()
    for (let i = 0;  i <= ground.length -1 ; i++) {
        //ground[i].drawOutline()

    }
    movement_x = walk() + dash() // 
    movement_y = jump() 
    if (keyboard.shift && (keyboard.a || keyboard.d)) {
        keyboard.shift = false
        dashing = true 
        
        if(amount_dashes== 1 && dashing){
            dash_time = 0
        }
    }
    
    
    
    if (keyboard.space) {
        keyboard.space = false 
    
     if (amount_jumps == 1 && jumping) {
        jump_time = gravity_2_jump
        
    }
    else {
        jumping = true
    }
    amount_jumps--
}
    
   
    updatePosition()
    updateCharacter(char_x, char_y, character)
      
} 
 


export {}

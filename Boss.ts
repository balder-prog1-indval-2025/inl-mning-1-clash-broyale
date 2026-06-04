import {Level,} from "./app"
import {char_x_change, char_y_change, character, char_x, Platform_2} from "./Movement"
import {deaths_change, flames, flames_image_height_change, Goat_Y_change, deaths, U_change, M_change, FatGnomeDeathCounter, FatGnomeDeathCounter_change, death_zone, death_zone_clear} from "./Death"

enum AttackType {
    BigAttack,
    SmallAttack,
    FlyAttack
}
//first attack
let B_attack_1 = false
let B_attack_1_hitboxes = true
//second attack
let B_attack_2_timer = 0
let attack_2 = false
let Arms_firstImage = false
let Arms_secondImage = false
// third attack
let B_attack_3_timer = 0
let B_attack_3 = false
let B_moving_left = false
let B_moving_right = false
let B_return = false
let B_Spider_y = -1000


let Health_bar_width = W-842
let boss = new Hitbox(1150, H, 100, 250)
let boss_Health = 3
let boss_Attack_hitboxes= []
let boss_Currently_Attacking = true
let boss_Which_attack = 0
let boss_timer = 0
let blow_timer = 0
let Arms_first_y = -200
let Arms_second_y = -50
let Jesus_y = -150

let HolyErape = new Audio('Audio/HolyErape.mp3')
let Vomit = new Audio('Audio/Vomit.mp3')


let Spider =  await fetchImage("images/Spider.png")
let Health_bar_image = await fetchImage ("images/Hpbarfinish.png")
let Spit_Projectile = await fetchImage ("images/Spit_Projectile.png")
let bossDefault = await fetchImage ("images/PearBoss.png")
let bossSpit = await fetchImage ("images/bossSpit.png")
let bossSlamAttack = await fetchImage ("images/bossSlamAttack.png")
let bossLeftArm = await fetchImage ("images/LeftArm.png")
let bossRightArm = await fetchImage ("images/RightArm.png")
let bossLicking_under = await fetchImage("images/bossLicking_under.png")
let bossLicking_over = await fetchImage("images/bossLicking_over.png") 
let bossTongue = await fetchImage("images/Tongue.png")
let Jesus = await fetchImage ("images/JesusFckingChrist.png")
let HolyShit = await fetchImage ("images/HolyShit.png")


export function boss_Attacks () {
    boss_timer += deltaTime/100
    
    if(boss_Currently_Attacking && boss_timer > 30){
        boss_Currently_Attacking= false
        boss_Which_attack = random(1,3) 
        //boss_Blow_attack = random(1, 5)
        boss_timer = 0
        attack_2 = true
        B_attack_1_hitboxes = true
        B_attack_3_timer = 0

}
/*if (boss_Blow_attack == 1 && boss_Health > 0){
    blowing = true
}*/


if (boss_Which_attack == 1 && boss_Health > 0) {
    if (boss.y < 0 ) {
        B_attack_1 = true
    }
    if (!B_attack_1 ) {
        boss.y -= 3

    } else {boss.y += 5

    }

    if (boss.y > 205){
        boss.y = 200

        boss_Which_attack = 0
        boss_Currently_Attacking= true
        B_attack_1_hitboxes = true
        B_attack_1 = false
        boss_timer = 10
    }
    if(B_attack_1_hitboxes) {
   ctx.drawImage(bossSpit, boss.x, boss.y, boss.width, boss.height)
   boss_Attack_hitboxes.push({
        "hitbox": new Hitbox(1150, 350, 100, 100),
        "hitbox2": new Hitbox(1150 + 550, 175, 100, 100),
        "hitbox3": new Hitbox(1150 + 1100, 100, 100, 100),
        "type": AttackType.SmallAttack 
    })
    
    B_attack_1_hitboxes = false
    }
        
   
    
} 
else if(boss_Which_attack == 2 && boss_Health > 0) {
    B_attack_2_timer += deltaTime/100
    ctx.drawImage(Jesus, 424, Jesus_y, 300, 250)
    HolyErape.play()
    Platform_2.draw()
    if(Jesus_y < 120) {
        Jesus_y += 8
    }
    if (attack_2) {
            
            if (B_attack_2_timer < 10) {
                Arms_firstImage = true
                
            }  
        }
        attack_2 = false
                
        if (B_attack_2_timer > 14 ) {
            Arms_firstImage = false
            Arms_secondImage = true
            ctx.drawImage(HolyShit, 75, 0, 1000, H + 55)
            boss_Attack_hitboxes.push ({
                "hitbox":new Hitbox (275, 0, 50, 1000),
                "hitbox2": new Hitbox (550, 0, 50, 1000),
                "hitbox3": new Hitbox (825, 0, 50, 1000),
                "type": AttackType.BigAttack
            })
        }
        if (B_attack_2_timer > 20) {
            boss_Attack_hitboxes = []
            B_attack_2_timer= 0
            boss_Which_attack = 0
            Arms_secondImage = false
            Jesus_y = -150
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
        "hitbox_leftWall": new Hitbox (0, 0, 230, 0),
        "hitbox_rightWall": new Hitbox (1045, 0, 300, 0),
        "type": AttackType.FlyAttack}) 
         
    } }  
    if(B_attack_3_timer >37){
        B_attack_3_timer = 0
        B_moving_left = false
        B_moving_right = false
        
        B_return = true
    }



}
export function Boss_general () {
    if (boss_Which_attack == 2 && boss_Health > 0) {
       
        let blow_hitbox = new Hitbox (0, -10, W, H+10)

        blow_timer += deltaTime/100
        
        if (character.intersects(blow_hitbox)) {
            char_x_change (char_x -1.5)
        }
        if (blow_timer > 30) {
            blow_timer = 0
        }
    }

    for(let i = 0; i < boss_Attack_hitboxes.length; i++) {
        if (boss_Health < 0) {// makes the boss disappear
            boss.y = 20000
            Arms_first_y = 200000
            Arms_second_y = 200000
            boss_Attack_hitboxes = []
            //just to make so boss doesn't move continuously
        } else if (boss_Health > 0 && boss_Which_attack != 3 && !AttackType.FlyAttack) {
            boss.y = 200
        } 
}


    // boss_Attacks

if (boss_Which_attack == 0) {
    ctx.drawImage(bossDefault, boss.x - 135 , boss.y - 70, 250, 350)
}else if (boss_Which_attack == 1) {
    ctx.drawImage(bossSpit, boss.x - 135 , boss.y - 70, 250, 350)
}else if (boss_Which_attack == 2) {
    ctx.drawImage(bossSlamAttack, boss.x - 200 , boss.y -240, 375, 515)
}else if (boss_Which_attack == 3) {
    ctx.drawImage(bossDefault, boss.x - 135 , boss.y - 70, 250, 350)

} 

if (Arms_firstImage == true) {
    ctx.drawImage (bossRightArm, 250, Arms_first_y, 100, 300)
    ctx.drawImage (bossLeftArm, 800, Arms_first_y, 100, 300)
} 
if (Arms_secondImage == true) {
    ctx.drawImage (bossRightArm, 250, Arms_second_y, 100, 630)
    ctx.drawImage (bossLeftArm, 800, Arms_second_y, 100, 630)
}

for(let i = 0; i < boss_Attack_hitboxes.length; i++) {

    
    if (boss_Attack_hitboxes[i]["type"] == AttackType.FlyAttack ){
        boss_Attack_hitboxes[i]["hitbox_rightWall"].height += 20 
        boss_Attack_hitboxes[i]["hitbox_leftWall"].height += 20
        

        boss_Attack_hitboxes[i]["hitbox_rightWall"].drawOutline()
        boss_Attack_hitboxes[i]["hitbox_leftWall"].drawOutline()
        B_attack_3_timer += deltaTime/100
       //left small spiders
        ctx.drawImage(Spider, 10, B_Spider_y - 500, 100, 50)
        ctx.drawImage(Spider, 20, B_Spider_y + 100, 100, 50)
        ctx.drawImage(Spider, 130, B_Spider_y + 500, 100, 50)
        ctx.drawImage(Spider, 40, B_Spider_y - 200, 100, 50)
        ctx.drawImage(Spider, 50, B_Spider_y + 800, 100, 50)
        ctx.drawImage(Spider, 120, B_Spider_y -700, 100, 50)
        ctx.drawImage(Spider, 70, B_Spider_y - 1000, 100, 50)
        ctx.drawImage(Spider, 80, B_Spider_y + 1000, 100, 50)
        ctx.drawImage(Spider, 90, B_Spider_y - 500, 100, 50)
        ctx.drawImage(Spider, 100, B_Spider_y + 300, 100, 50)
        ctx.drawImage(Spider, 20, B_Spider_y, 100, 50)
        ctx.drawImage(Spider, 120, B_Spider_y + 200, 100, 50)
        ctx.drawImage(Spider, 110, B_Spider_y - 100, 100, 50)
        ctx.drawImage(Spider, 130, B_Spider_y + 700, 100, 50)
        ctx.drawImage(Spider, 30, B_Spider_y - 200, 100, 50)
        ctx.drawImage(Spider, 140, B_Spider_y - 700, 100, 50)
        ctx.drawImage(Spider, 10, B_Spider_y - 1200, 100, 50)
        ctx.drawImage(Spider, 130, B_Spider_y - 1300, 100, 50)
        ctx.drawImage(Spider, 30, B_Spider_y - 1500, 100, 50)
        ctx.drawImage(Spider, 40, B_Spider_y - 1550, 100, 50)
        ctx.drawImage(Spider, 20, B_Spider_y - 1700, 100, 50)
        ctx.drawImage(Spider, 60, B_Spider_y - 1800, 100, 50)
        ctx.drawImage(Spider, 120, B_Spider_y - 2000, 100, 50)
        ctx.drawImage(Spider, 80, B_Spider_y - 2100, 100, 50)
        ctx.drawImage(Spider, 90, B_Spider_y - 2150, 100, 50)
        ctx.drawImage(Spider, 100, B_Spider_y - 2300, 100, 50)
        ctx.drawImage(Spider, 20, B_Spider_y - 2400, 100, 50)
        ctx.drawImage(Spider, 120, B_Spider_y - 1100, 100, 50)
        ctx.drawImage(Spider, 110, B_Spider_y - 2500, 100, 50)
        ctx.drawImage(Spider, 130, B_Spider_y - 2700, 100, 50)
        ctx.drawImage(Spider, 30, B_Spider_y - 2800, 100, 50)
        ctx.drawImage(Spider, 140, B_Spider_y - 3000, 100, 50)
        
        // right small spiders
        ctx.drawImage(Spider, W-110, B_Spider_y - 500, 100, 50)
        ctx.drawImage(Spider, W-120, B_Spider_y + 100, 100, 50)
        ctx.drawImage(Spider, W-220, B_Spider_y + 500, 100, 50)
        ctx.drawImage(Spider, W-140, B_Spider_y - 200, 100, 50)
        ctx.drawImage(Spider, W-150, B_Spider_y + 800, 100, 50)
        ctx.drawImage(Spider, W-190, B_Spider_y -700, 100, 50)
        ctx.drawImage(Spider, W-170, B_Spider_y - 1000, 100, 50)
        ctx.drawImage(Spider, W-180, B_Spider_y + 1000, 100, 50)
        ctx.drawImage(Spider, W-190, B_Spider_y - 500, 100, 50)
        ctx.drawImage(Spider, W-200, B_Spider_y + 300, 100, 50)
        ctx.drawImage(Spider, W-120, B_Spider_y, 100, 50)
        ctx.drawImage(Spider, W-220, B_Spider_y + 200, 100, 50)
        ctx.drawImage(Spider, W-210, B_Spider_y - 100, 100, 50)
        ctx.drawImage(Spider, W-230, B_Spider_y + 700, 100, 50)
        ctx.drawImage(Spider, W-130, B_Spider_y - 200, 100, 50)
        ctx.drawImage(Spider, W-210, B_Spider_y - 700, 100, 50)
        ctx.drawImage(Spider, W-110, B_Spider_y - 1200, 100, 50)
        ctx.drawImage(Spider, W-130, B_Spider_y - 1300, 100, 50)
        ctx.drawImage(Spider, W-130, B_Spider_y - 1500, 100, 50)
        ctx.drawImage(Spider, W-140, B_Spider_y - 1550, 100, 50)
        ctx.drawImage(Spider, W-120, B_Spider_y - 1700, 100, 50)
        ctx.drawImage(Spider, W-160, B_Spider_y - 1800, 100, 50)
        ctx.drawImage(Spider, W-210, B_Spider_y - 2000, 100, 50)
        ctx.drawImage(Spider, W-180, B_Spider_y - 2100, 100, 50)
        ctx.drawImage(Spider, W-190, B_Spider_y - 2150, 100, 50)
        ctx.drawImage(Spider, W-200, B_Spider_y - 2300, 100, 50)
        ctx.drawImage(Spider, W-120, B_Spider_y - 2400, 100, 50)
        ctx.drawImage(Spider, W-220, B_Spider_y - 1100, 100, 50)
        ctx.drawImage(Spider, W-210, B_Spider_y - 2500, 100, 50)
        ctx.drawImage(Spider, W-230, B_Spider_y - 2700, 100, 50)
        ctx.drawImage(Spider, W-120, B_Spider_y - 2800, 100, 50)
        ctx.drawImage(Spider, W-180, B_Spider_y - 3000, 100, 50)
        //------------------------------------------------------
        //left small spiders
        ctx.drawImage(Spider, 65, B_Spider_y - 480, 100, 50)
        ctx.drawImage(Spider, 89, B_Spider_y + 120, 100, 50)
        ctx.drawImage(Spider, 12, B_Spider_y + 520, 100, 50)
        ctx.drawImage(Spider, 104, B_Spider_y - 180, 100, 50)
        ctx.drawImage(Spider, 33, B_Spider_y + 820, 100, 50)
        ctx.drawImage(Spider, 118, B_Spider_y -680, 100, 50)
        
        ctx.drawImage(Spider, 57, B_Spider_y - 980, 100, 50)
        ctx.drawImage(Spider, 96, B_Spider_y + 1020, 100, 50)
        ctx.drawImage(Spider, 41, B_Spider_y - 480, 100, 50)
        ctx.drawImage(Spider, 77, B_Spider_y + 320, 100, 50)
        ctx.drawImage(Spider, 8, B_Spider_y + 20, 100, 50)
        ctx.drawImage(Spider, 129, B_Spider_y + 220, 100, 50)
        ctx.drawImage(Spider, 84, B_Spider_y - 80, 100, 50)
        ctx.drawImage(Spider, 111, B_Spider_y + 720, 100, 50)
        ctx.drawImage(Spider, 22, B_Spider_y - 180, 100, 50)
        ctx.drawImage(Spider, 138, B_Spider_y - 680, 100, 50)
        ctx.drawImage(Spider, 5, B_Spider_y - 1180, 100, 50)
        ctx.drawImage(Spider, 102, B_Spider_y - 1280, 100, 50)
        ctx.drawImage(Spider, 44, B_Spider_y - 1480, 100, 50)
        ctx.drawImage(Spider, 29, B_Spider_y - 1530, 100, 50)
        ctx.drawImage(Spider, 10, B_Spider_y - 1680, 100, 50)
        ctx.drawImage(Spider, 51, B_Spider_y - 1780, 100, 50)
        ctx.drawImage(Spider, 109, B_Spider_y - 1980, 100, 50)
        ctx.drawImage(Spider, 73, B_Spider_y - 2080, 100, 50)
        ctx.drawImage(Spider, 88, B_Spider_y - 2130, 100, 50)
        ctx.drawImage(Spider, 95, B_Spider_y - 2280, 100, 50)
        ctx.drawImage(Spider, 6, B_Spider_y - 2380, 100, 50)
        ctx.drawImage(Spider, 120, B_Spider_y - 1080, 100, 50)
        ctx.drawImage(Spider, 101, B_Spider_y - 2480, 100, 50)
        ctx.drawImage(Spider, 110, B_Spider_y - 2680, 100, 50)
        ctx.drawImage(Spider, 19, B_Spider_y - 2780, 100, 50)
        ctx.drawImage(Spider, 126, B_Spider_y - 2980, 100, 50)
        
        ctx.drawImage(Spider, 31, B_Spider_y - 430, 100, 50)
        ctx.drawImage(Spider, 9, B_Spider_y + 170, 100, 50)
        ctx.drawImage(Spider, 87, B_Spider_y + 570, 100, 50)
        ctx.drawImage(Spider, 50, B_Spider_y - 130, 100, 50)
        ctx.drawImage(Spider, 14, B_Spider_y + 870, 100, 50)
        ctx.drawImage(Spider, 92, B_Spider_y -630, 100, 50)
        ctx.drawImage(Spider, 63, B_Spider_y - 930, 100, 50)
        ctx.drawImage(Spider, 38, B_Spider_y + 1070, 100, 50)
        ctx.drawImage(Spider, 55, B_Spider_y - 430, 100, 50)
        ctx.drawImage(Spider, 70, B_Spider_y + 370, 100, 50)
        ctx.drawImage(Spider, 11, B_Spider_y + 70, 100, 50)
        ctx.drawImage(Spider, 83, B_Spider_y + 270, 100, 50)
        ctx.drawImage(Spider, 76, B_Spider_y - 30, 100, 50)
        ctx.drawImage(Spider, 98, B_Spider_y + 770, 100, 50)
        ctx.drawImage(Spider, 4, B_Spider_y - 130, 100, 50)
        ctx.drawImage(Spider, 115, B_Spider_y - 630, 100, 50)
        ctx.drawImage(Spider, 23, B_Spider_y - 1130, 100, 50)
        ctx.drawImage(Spider, 90, B_Spider_y - 1230, 100, 50)
        ctx.drawImage(Spider, 17, B_Spider_y - 1430, 100, 50)
        ctx.drawImage(Spider, 2, B_Spider_y - 1480, 100, 50)
        ctx.drawImage(Spider, 24, B_Spider_y - 1630, 100, 50)
        ctx.drawImage(Spider, 61, B_Spider_y - 1730, 100, 50)
        ctx.drawImage(Spider, 80, B_Spider_y - 1930, 100, 50)
        ctx.drawImage(Spider, 49, B_Spider_y - 2030, 100, 50)
        ctx.drawImage(Spider, 58, B_Spider_y - 2080, 100, 50)
        ctx.drawImage(Spider, 66, B_Spider_y - 2230, 100, 50)
        ctx.drawImage(Spider, 13, B_Spider_y - 2330, 100, 50)
        ctx.drawImage(Spider, 75, B_Spider_y - 1030, 100, 50)
        ctx.drawImage(Spider, 86, B_Spider_y - 2430, 100, 50)
        ctx.drawImage(Spider, 99, B_Spider_y - 2630, 100, 50)
        ctx.drawImage(Spider, 27, B_Spider_y - 2730, 100, 50)
        ctx.drawImage(Spider, 120, B_Spider_y - 2930, 100, 50)
        
        ctx.drawImage(Spider, 14, B_Spider_y - 464, 100, 50)
        ctx.drawImage(Spider, 88, B_Spider_y + 136, 100, 50)
        ctx.drawImage(Spider, 107, B_Spider_y + 536, 100, 50)
        ctx.drawImage(Spider, 21, B_Spider_y - 164, 100, 50)
        ctx.drawImage(Spider, 36, B_Spider_y + 836, 100, 50)
        ctx.drawImage(Spider, 93, B_Spider_y -664, 100, 50)
        
        ctx.drawImage(Spider, 44, B_Spider_y - 964, 100, 50)
        ctx.drawImage(Spider, 59, B_Spider_y + 1036, 100, 50)
        ctx.drawImage(Spider, 68, B_Spider_y - 464, 100, 50)
        ctx.drawImage(Spider, 73, B_Spider_y + 336, 100, 50)
        ctx.drawImage(Spider, 5, B_Spider_y + 36, 100, 50)
        ctx.drawImage(Spider, 91, B_Spider_y + 236, 100, 50)
        ctx.drawImage(Spider, 84, B_Spider_y - 64, 100, 50)
        ctx.drawImage(Spider, 108, B_Spider_y + 736, 100, 50)
        ctx.drawImage(Spider, 16, B_Spider_y - 164, 100, 50)
        ctx.drawImage(Spider, 113, B_Spider_y - 664, 100, 50)
        ctx.drawImage(Spider, 7, B_Spider_y - 1164, 100, 50)
        ctx.drawImage(Spider, 104, B_Spider_y - 1264, 100, 50)
        ctx.drawImage(Spider, 28, B_Spider_y - 1464, 100, 50)
        ctx.drawImage(Spider, 19, B_Spider_y - 1514, 100, 50)
        ctx.drawImage(Spider, 12, B_Spider_y - 1664, 100, 50)
        ctx.drawImage(Spider, 37, B_Spider_y - 1764, 100, 50)
        ctx.drawImage(Spider, 96, B_Spider_y - 1964, 100, 50)
        ctx.drawImage(Spider, 54, B_Spider_y - 2064, 100, 50)
        ctx.drawImage(Spider, 63, B_Spider_y - 2114, 100, 50)
        ctx.drawImage(Spider, 71, B_Spider_y - 2264, 100, 50)
        ctx.drawImage(Spider, 3, B_Spider_y - 2364, 100, 50)
        ctx.drawImage(Spider, 89, B_Spider_y - 1064, 100, 50)
        ctx.drawImage(Spider, 78, B_Spider_y - 2464, 100, 50)
        ctx.drawImage(Spider, 106, B_Spider_y - 2664, 100, 50)
        ctx.drawImage(Spider, 15, B_Spider_y - 2764, 100, 50)
        ctx.drawImage(Spider, 114, B_Spider_y - 2964, 100, 50)
        
        ctx.drawImage(Spider, 22, B_Spider_y - 2450, 100, 50)
        ctx.drawImage(Spider, 94, B_Spider_y - 1800, 100, 50)
        ctx.drawImage(Spider, 131, B_Spider_y + 320, 100, 50)
        ctx.drawImage(Spider, 48, B_Spider_y - 920, 100, 50)
        ctx.drawImage(Spider, 110, B_Spider_y + 870, 100, 50)
        ctx.drawImage(Spider, 9, B_Spider_y - 1330, 100, 50)
        ctx.drawImage(Spider, 76, B_Spider_y - 2700, 100, 50)
        ctx.drawImage(Spider, 122, B_Spider_y + 120, 100, 50)
        ctx.drawImage(Spider, 35, B_Spider_y - 430, 100, 50)
        ctx.drawImage(Spider, 99, B_Spider_y - 2110, 100, 50)
        ctx.drawImage(Spider, 17, B_Spider_y + 940, 100, 50)
        ctx.drawImage(Spider, 120, B_Spider_y - 760, 100, 50)
        ctx.drawImage(Spider, 61, B_Spider_y - 1540, 100, 50)
        ctx.drawImage(Spider, 108, B_Spider_y + 610, 100, 50)
        ctx.drawImage(Spider, 26, B_Spider_y - 1990, 100, 50)
        ctx.drawImage(Spider, 135, B_Spider_y - 300, 100, 50)
        ctx.drawImage(Spider, 70, B_Spider_y - 2870, 100, 50)
        ctx.drawImage(Spider, 115, B_Spider_y - 1180, 100, 50)
        ctx.drawImage(Spider, 41, B_Spider_y + 480, 100, 50)
        ctx.drawImage(Spider, 79, B_Spider_y - 970, 100, 50)
        ctx.drawImage(Spider, 19, B_Spider_y - 2250, 100, 50)
        ctx.drawImage(Spider, 127, B_Spider_y - 1410, 100, 50)
        ctx.drawImage(Spider, 53, B_Spider_y + 760, 100, 50)
        ctx.drawImage(Spider, 91, B_Spider_y - 620, 100, 50)
        ctx.drawImage(Spider, 24, B_Spider_y - 1730, 100, 50)
        ctx.drawImage(Spider, 138, B_Spider_y - 2560, 100, 50)
        ctx.drawImage(Spider, 66, B_Spider_y + 30, 100, 50)
        ctx.drawImage(Spider, 103, B_Spider_y - 840, 100, 50)
        ctx.drawImage(Spider, 29, B_Spider_y - 2940, 100, 50)
        ctx.drawImage(Spider, 118, B_Spider_y - 1070, 100, 50)
        ctx.drawImage(Spider, 72, B_Spider_y + 540, 100, 50)
        ctx.drawImage(Spider, 11, B_Spider_y - 1600, 100, 50)
        
        ctx.drawImage(Spider, 43, B_Spider_y - 2870, 100, 50)
        ctx.drawImage(Spider, 121, B_Spider_y - 1540, 100, 50)
        ctx.drawImage(Spider, 6, B_Spider_y + 910, 100, 50)
        ctx.drawImage(Spider, 98, B_Spider_y - 760, 100, 50)
        ctx.drawImage(Spider, 139, B_Spider_y - 2190, 100, 50)
        ctx.drawImage(Spider, 30, B_Spider_y + 140, 100, 50)
        ctx.drawImage(Spider, 84, B_Spider_y - 1040, 100, 50)
        ctx.drawImage(Spider, 126, B_Spider_y - 2680, 100, 50)
        ctx.drawImage(Spider, 15, B_Spider_y + 640, 100, 50)
        ctx.drawImage(Spider, 101, B_Spider_y - 480, 100, 50)
        ctx.drawImage(Spider, 52, B_Spider_y - 1980, 100, 50)
        ctx.drawImage(Spider, 137, B_Spider_y + 40, 100, 50)
        ctx.drawImage(Spider, 33, B_Spider_y - 1320, 100, 50)
        ctx.drawImage(Spider, 84, B_Spider_y - 2450, 100, 50)
        ctx.drawImage(Spider, 11, B_Spider_y + 830, 100, 50)
        ctx.drawImage(Spider, 97, B_Spider_y - 910, 100, 50)
        ctx.drawImage(Spider, 62, B_Spider_y - 1730, 100, 50)
        ctx.drawImage(Spider, 123, B_Spider_y - 320, 100, 50)
        ctx.drawImage(Spider, 18, B_Spider_y - 2810, 100, 50)
        ctx.drawImage(Spider, 108, B_Spider_y + 510, 100, 50)
        ctx.drawImage(Spider, 46, B_Spider_y - 620, 100, 50)
        ctx.drawImage(Spider, 131, B_Spider_y - 2280, 100, 50)
        ctx.drawImage(Spider, 25, B_Spider_y + 980, 100, 50)
        ctx.drawImage(Spider, 89, B_Spider_y - 1450, 100, 50)
        ctx.drawImage(Spider, 4, B_Spider_y - 1160, 100, 50)
        ctx.drawImage(Spider, 116, B_Spider_y - 2580, 100, 50)
        ctx.drawImage(Spider, 57, B_Spider_y + 250, 100, 50)
        ctx.drawImage(Spider, 140, B_Spider_y - 840, 100, 50)
        ctx.drawImage(Spider, 36, B_Spider_y - 2940, 100, 50)
        ctx.drawImage(Spider, 95, B_Spider_y - 1880, 100, 50)
        ctx.drawImage(Spider, 20, B_Spider_y + 720, 100, 50)
        ctx.drawImage(Spider, 111, B_Spider_y - 430, 100, 50)
        
        ctx.drawImage(Spider, 41, B_Spider_y - 2870, 100, 50)
        ctx.drawImage(Spider, 119, B_Spider_y - 1540, 100, 50)
        ctx.drawImage(Spider, 7, B_Spider_y + 910, 100, 50)
        ctx.drawImage(Spider, 92, B_Spider_y - 760, 100, 50)
        ctx.drawImage(Spider, 133, B_Spider_y - 2190, 100, 50)
        ctx.drawImage(Spider, 28, B_Spider_y + 140, 100, 50)
        ctx.drawImage(Spider, 74, B_Spider_y - 1040, 100, 50)
        ctx.drawImage(Spider, 126, B_Spider_y - 2680, 100, 50)
        ctx.drawImage(Spider, 15, B_Spider_y + 640, 100, 50)
        ctx.drawImage(Spider, 101, B_Spider_y - 480, 100, 50)
        ctx.drawImage(Spider, 52, B_Spider_y - 1980, 100, 50)
        ctx.drawImage(Spider, 137, B_Spider_y + 40, 100, 50)
        ctx.drawImage(Spider, 33, B_Spider_y - 1320, 100, 50)
        ctx.drawImage(Spider, 84, B_Spider_y - 2450, 100, 50)
        ctx.drawImage(Spider, 11, B_Spider_y + 830, 100, 50)
        ctx.drawImage(Spider, 97, B_Spider_y - 910, 100, 50)
        ctx.drawImage(Spider, 62, B_Spider_y - 1730, 100, 50)
        ctx.drawImage(Spider, 123, B_Spider_y - 320, 100, 50)
        ctx.drawImage(Spider, 18, B_Spider_y - 2810, 100, 50)
        ctx.drawImage(Spider, 108, B_Spider_y + 510, 100, 50)
        ctx.drawImage(Spider, 46, B_Spider_y - 620, 100, 50)
        ctx.drawImage(Spider, 131, B_Spider_y - 2280, 100, 50)
        ctx.drawImage(Spider, 25, B_Spider_y + 980, 100, 50)
        ctx.drawImage(Spider, 89, B_Spider_y - 1450, 100, 50)
        ctx.drawImage(Spider, 4, B_Spider_y - 1160, 100, 50)
        ctx.drawImage(Spider, 116, B_Spider_y - 2580, 100, 50)
        ctx.drawImage(Spider, 57, B_Spider_y + 250, 100, 50)
        ctx.drawImage(Spider, 140, B_Spider_y - 840, 100, 50)
        ctx.drawImage(Spider, 36, B_Spider_y - 2940, 100, 50)
        ctx.drawImage(Spider, 95, B_Spider_y - 1880, 100, 50)
        ctx.drawImage(Spider, 20, B_Spider_y + 720, 100, 50)
        ctx.drawImage(Spider, 111, B_Spider_y - 430, 100, 50)

ctx.drawImage(Spider, -3, B_Spider_y - 480, 100, 50)
ctx.drawImage(Spider, 7, B_Spider_y + 120, 100, 50)
ctx.drawImage(Spider, 117, B_Spider_y + 520, 100, 50)
ctx.drawImage(Spider, 27, B_Spider_y - 180, 100, 50)
ctx.drawImage(Spider, 37, B_Spider_y + 820, 100, 50)
ctx.drawImage(Spider, 107, B_Spider_y -680, 100, 50)
ctx.drawImage(Spider, 57, B_Spider_y - 980, 100, 50)
ctx.drawImage(Spider, 67, B_Spider_y + 1020, 100, 50)
ctx.drawImage(Spider, 77, B_Spider_y - 480, 100, 50)
ctx.drawImage(Spider, 87, B_Spider_y + 320, 100, 50)
ctx.drawImage(Spider, 7, B_Spider_y + 20, 100, 50)
ctx.drawImage(Spider, 107, B_Spider_y + 220, 100, 50)
ctx.drawImage(Spider, 97, B_Spider_y - 80, 100, 50)
ctx.drawImage(Spider, 117, B_Spider_y + 720, 100, 50)
ctx.drawImage(Spider, 17, B_Spider_y - 180, 100, 50)
ctx.drawImage(Spider, 127, B_Spider_y - 680, 100, 50)
ctx.drawImage(Spider, -3, B_Spider_y - 1180, 100, 50)
ctx.drawImage(Spider, 117, B_Spider_y - 1280, 100, 50)
ctx.drawImage(Spider, 17, B_Spider_y - 1480, 100, 50)
ctx.drawImage(Spider, 27, B_Spider_y - 1530, 100, 50)
ctx.drawImage(Spider, 7, B_Spider_y - 1680, 100, 50)
ctx.drawImage(Spider, 47, B_Spider_y - 1780, 100, 50)
ctx.drawImage(Spider, 107, B_Spider_y - 1980, 100, 50)
ctx.drawImage(Spider, 67, B_Spider_y - 2080, 100, 50)
ctx.drawImage(Spider, 77, B_Spider_y - 2130, 100, 50)
ctx.drawImage(Spider, 87, B_Spider_y - 2280, 100, 50)
ctx.drawImage(Spider, 7, B_Spider_y - 2380, 100, 50)
ctx.drawImage(Spider, 107, B_Spider_y - 1080, 100, 50)
ctx.drawImage(Spider, 97, B_Spider_y - 2480, 100, 50)
ctx.drawImage(Spider, 117, B_Spider_y - 2680, 100, 50)
ctx.drawImage(Spider, 17, B_Spider_y - 2780, 100, 50)
ctx.drawImage(Spider, 127, B_Spider_y - 2980, 100, 50)

ctx.drawImage(Spider, -28, B_Spider_y - 430, 100, 50)
ctx.drawImage(Spider, -18, B_Spider_y + 170, 100, 50)
ctx.drawImage(Spider, 92, B_Spider_y + 570, 100, 50)
ctx.drawImage(Spider, 2, B_Spider_y - 130, 100, 50)
ctx.drawImage(Spider, 12, B_Spider_y + 870, 100, 50)
ctx.drawImage(Spider, 82, B_Spider_y -630, 100, 50)
ctx.drawImage(Spider, 32, B_Spider_y - 930, 100, 50)
ctx.drawImage(Spider, 42, B_Spider_y + 1070, 100, 50)
ctx.drawImage(Spider, 52, B_Spider_y - 430, 100, 50)
ctx.drawImage(Spider, 62, B_Spider_y + 370, 100, 50)
ctx.drawImage(Spider, -18, B_Spider_y + 70, 100, 50)
ctx.drawImage(Spider, 82, B_Spider_y + 270, 100, 50)
ctx.drawImage(Spider, 72, B_Spider_y - 30, 100, 50)
ctx.drawImage(Spider, 92, B_Spider_y + 770, 100, 50)
ctx.drawImage(Spider, -8, B_Spider_y - 130, 100, 50)
ctx.drawImage(Spider, 102, B_Spider_y - 630, 100, 50)
ctx.drawImage(Spider, -28, B_Spider_y - 1130, 100, 50)
ctx.drawImage(Spider, 92, B_Spider_y - 1230, 100, 50)
ctx.drawImage(Spider, -8, B_Spider_y - 1430, 100, 50)
ctx.drawImage(Spider, 2, B_Spider_y - 1480, 100, 50)
ctx.drawImage(Spider, -18, B_Spider_y - 1630, 100, 50)
ctx.drawImage(Spider, 22, B_Spider_y - 1730, 100, 50)
ctx.drawImage(Spider, 82, B_Spider_y - 1930, 100, 50)
ctx.drawImage(Spider, 42, B_Spider_y - 2030, 100, 50)
ctx.drawImage(Spider, 52, B_Spider_y - 2080, 100, 50)
ctx.drawImage(Spider, 62, B_Spider_y - 2230, 100, 50)
ctx.drawImage(Spider, -18, B_Spider_y - 2330, 100, 50)
ctx.drawImage(Spider, 82, B_Spider_y - 1030, 100, 50)
ctx.drawImage(Spider, 72, B_Spider_y - 2430, 100, 50)
ctx.drawImage(Spider, 92, B_Spider_y - 2630, 100, 50)
ctx.drawImage(Spider, -8, B_Spider_y - 2730, 100, 50)
ctx.drawImage(Spider, 102, B_Spider_y - 2930, 100, 50)

ctx.drawImage(Spider, -18, B_Spider_y - 464, 100, 50)
ctx.drawImage(Spider, -8, B_Spider_y + 136, 100, 50)
ctx.drawImage(Spider, 102, B_Spider_y + 536, 100, 50)
ctx.drawImage(Spider, 12, B_Spider_y - 164, 100, 50)
ctx.drawImage(Spider, 22, B_Spider_y + 836, 100, 50)
ctx.drawImage(Spider, 92, B_Spider_y -664, 100, 50)

ctx.drawImage(Spider, 42, B_Spider_y - 964, 100, 50)
ctx.drawImage(Spider, 52, B_Spider_y + 1036, 100, 50)
ctx.drawImage(Spider, 62, B_Spider_y - 464, 100, 50)
ctx.drawImage(Spider, 72, B_Spider_y + 336, 100, 50)
ctx.drawImage(Spider, -8, B_Spider_y + 36, 100, 50)
ctx.drawImage(Spider, 92, B_Spider_y + 236, 100, 50)
ctx.drawImage(Spider, 82, B_Spider_y - 64, 100, 50)
ctx.drawImage(Spider, 102, B_Spider_y + 736, 100, 50)
ctx.drawImage(Spider, 2, B_Spider_y - 164, 100, 50)
ctx.drawImage(Spider, 112, B_Spider_y - 664, 100, 50)
ctx.drawImage(Spider, -18, B_Spider_y - 1164, 100, 50)
ctx.drawImage(Spider, 102, B_Spider_y - 1264, 100, 50)
ctx.drawImage(Spider, 2, B_Spider_y - 1464, 100, 50)
ctx.drawImage(Spider, 12, B_Spider_y - 1514, 100, 50)
ctx.drawImage(Spider, -8, B_Spider_y - 1664, 100, 50)
ctx.drawImage(Spider, 32, B_Spider_y - 1764, 100, 50)
ctx.drawImage(Spider, 92, B_Spider_y - 1964, 100, 50)
ctx.drawImage(Spider, 52, B_Spider_y - 2064, 100, 50)
ctx.drawImage(Spider, 62, B_Spider_y - 2114, 100, 50)
ctx.drawImage(Spider, 72, B_Spider_y - 2264, 100, 50)
ctx.drawImage(Spider, -8, B_Spider_y - 2364, 100, 50)
ctx.drawImage(Spider, 92, B_Spider_y - 1064, 100, 50)
ctx.drawImage(Spider, 82, B_Spider_y - 2464, 100, 50)
ctx.drawImage(Spider, 102, B_Spider_y - 2664, 100, 50)
ctx.drawImage(Spider, 2, B_Spider_y - 2764, 100, 50)
ctx.drawImage(Spider, 112, B_Spider_y - 2964, 100, 50)

ctx.drawImage(Spider, 12, B_Spider_y - 2450, 100, 50)
ctx.drawImage(Spider, 88, B_Spider_y - 1800, 100, 50)
ctx.drawImage(Spider, 134, B_Spider_y + 320, 100, 50)
ctx.drawImage(Spider, 45, B_Spider_y - 920, 100, 50)
ctx.drawImage(Spider, 109, B_Spider_y + 870, 100, 50)
ctx.drawImage(Spider, 6, B_Spider_y - 1330, 100, 50)
ctx.drawImage(Spider, 73, B_Spider_y - 2700, 100, 50)
ctx.drawImage(Spider, 128, B_Spider_y + 120, 100, 50)
ctx.drawImage(Spider, 39, B_Spider_y - 430, 100, 50)
ctx.drawImage(Spider, 95, B_Spider_y - 2110, 100, 50)
ctx.drawImage(Spider, 18, B_Spider_y + 940, 100, 50)
ctx.drawImage(Spider, 121, B_Spider_y - 760, 100, 50)
ctx.drawImage(Spider, 57, B_Spider_y - 1540, 100, 50)
ctx.drawImage(Spider, 102, B_Spider_y + 610, 100, 50)
ctx.drawImage(Spider, 27, B_Spider_y - 1990, 100, 50)
ctx.drawImage(Spider, 139, B_Spider_y - 300, 100, 50)
ctx.drawImage(Spider, 64, B_Spider_y - 2870, 100, 50)
ctx.drawImage(Spider, 111, B_Spider_y - 1180, 100, 50)
ctx.drawImage(Spider, 34, B_Spider_y + 480, 100, 50)
ctx.drawImage(Spider, 82, B_Spider_y - 970, 100, 50)
ctx.drawImage(Spider, 14, B_Spider_y - 2250, 100, 50)
ctx.drawImage(Spider, 125, B_Spider_y - 1410, 100, 50)
ctx.drawImage(Spider, 49, B_Spider_y + 760, 100, 50)
ctx.drawImage(Spider, 97, B_Spider_y - 620, 100, 50)
ctx.drawImage(Spider, 21, B_Spider_y - 1730, 100, 50)
ctx.drawImage(Spider, 132, B_Spider_y - 2560, 100, 50)
ctx.drawImage(Spider, 58, B_Spider_y + 30, 100, 50)
ctx.drawImage(Spider, 104, B_Spider_y - 840, 100, 50)
ctx.drawImage(Spider, 31, B_Spider_y - 2940, 100, 50)
ctx.drawImage(Spider, 116, B_Spider_y - 1070, 100, 50)
ctx.drawImage(Spider, 67, B_Spider_y + 540, 100, 50)
ctx.drawImage(Spider, 9, B_Spider_y - 1600, 100, 50)
ctx.drawImage(Spider, 65, B_Spider_y - 3020, 100, 50)
ctx.drawImage(Spider, 89, B_Spider_y - 3050, 100, 50)
ctx.drawImage(Spider, 12, B_Spider_y - 3080, 100, 50)
ctx.drawImage(Spider, 104, B_Spider_y - 3110, 100, 50)
ctx.drawImage(Spider, 33, B_Spider_y - 3140, 100, 50)
ctx.drawImage(Spider, 118, B_Spider_y - 3170, 100, 50)
ctx.drawImage(Spider, 57, B_Spider_y - 3200, 100, 50)
ctx.drawImage(Spider, 96, B_Spider_y - 3230, 100, 50)
ctx.drawImage(Spider, 41, B_Spider_y - 3260, 100, 50)
ctx.drawImage(Spider, 77, B_Spider_y - 3290, 100, 50)
ctx.drawImage(Spider, 8, B_Spider_y - 3320, 100, 50)
ctx.drawImage(Spider, 129, B_Spider_y - 3350, 100, 50)
ctx.drawImage(Spider, 84, B_Spider_y - 3380, 100, 50)
ctx.drawImage(Spider, 111, B_Spider_y - 3410, 100, 50)
ctx.drawImage(Spider, 22, B_Spider_y - 3440, 100, 50)
ctx.drawImage(Spider, 138, B_Spider_y - 3470, 100, 50)
ctx.drawImage(Spider, 5, B_Spider_y - 3500, 100, 50)
ctx.drawImage(Spider, 102, B_Spider_y - 3530, 100, 50)
ctx.drawImage(Spider, 44, B_Spider_y - 3560, 100, 50)
ctx.drawImage(Spider, 29, B_Spider_y - 3590, 100, 50)
ctx.drawImage(Spider, 10, B_Spider_y - 3620, 100, 50)
ctx.drawImage(Spider, 51, B_Spider_y - 3650, 100, 50)
ctx.drawImage(Spider, 109, B_Spider_y - 3680, 100, 50)
ctx.drawImage(Spider, 73, B_Spider_y - 3710, 100, 50)
ctx.drawImage(Spider, 88, B_Spider_y - 3740, 100, 50)

ctx.drawImage(Spider, 41, B_Spider_y - 2870, 100, 50)
ctx.drawImage(Spider, 119, B_Spider_y - 1540, 100, 50)
ctx.drawImage(Spider, 7, B_Spider_y + 910, 100, 50)
ctx.drawImage(Spider, 92, B_Spider_y - 760, 100, 50)
ctx.drawImage(Spider, 133, B_Spider_y - 2190, 100, 50)
ctx.drawImage(Spider, 28, B_Spider_y + 140, 100, 50)
ctx.drawImage(Spider, 74, B_Spider_y - 1040, 100, 50)
ctx.drawImage(Spider, 126, B_Spider_y - 2680, 100, 50)
ctx.drawImage(Spider, 15, B_Spider_y + 640, 100, 50)
ctx.drawImage(Spider, 101, B_Spider_y - 480, 100, 50)
ctx.drawImage(Spider, 52, B_Spider_y - 1980, 100, 50)
ctx.drawImage(Spider, 137, B_Spider_y + 40, 100, 50)
ctx.drawImage(Spider, 33, B_Spider_y - 1320, 100, 50)
ctx.drawImage(Spider, 84, B_Spider_y - 2450, 100, 50)
ctx.drawImage(Spider, 11, B_Spider_y + 830, 100, 50)
ctx.drawImage(Spider, 97, B_Spider_y - 910, 100, 50)
ctx.drawImage(Spider, 62, B_Spider_y - 1730, 100, 50)
ctx.drawImage(Spider, 123, B_Spider_y - 320, 100, 50)
ctx.drawImage(Spider, 18, B_Spider_y - 2810, 100, 50)
ctx.drawImage(Spider, 108, B_Spider_y + 510, 100, 50)
ctx.drawImage(Spider, 46, B_Spider_y - 620, 100, 50)
ctx.drawImage(Spider, 131, B_Spider_y - 2280, 100, 50)
ctx.drawImage(Spider, 25, B_Spider_y + 980, 100, 50)
ctx.drawImage(Spider, 89, B_Spider_y - 1450, 100, 50)
ctx.drawImage(Spider, 4, B_Spider_y - 1160, 100, 50)
ctx.drawImage(Spider, 116, B_Spider_y - 2580, 100, 50)
ctx.drawImage(Spider, 57, B_Spider_y + 250, 100, 50)
ctx.drawImage(Spider, 140, B_Spider_y - 840, 100, 50)
ctx.drawImage(Spider, 36, B_Spider_y - 2940, 100, 50)
ctx.drawImage(Spider, 95, B_Spider_y - 1880, 100, 50)
ctx.drawImage(Spider, 20, B_Spider_y + 720, 100, 50)
ctx.drawImage(Spider, 111, B_Spider_y - 430, 100, 50)
// right small spiders
ctx.drawImage(Spider, W - 157, B_Spider_y - 480, 100, 50)
ctx.drawImage(Spider, W - 203, B_Spider_y + 120, 100, 50)
ctx.drawImage(Spider, W - 134, B_Spider_y + 520, 100, 50)
ctx.drawImage(Spider, W - 241, B_Spider_y - 180, 100, 50)
ctx.drawImage(Spider, W - 178, B_Spider_y + 820, 100, 50)
ctx.drawImage(Spider, W - 229, B_Spider_y - 680, 100, 50)

ctx.drawImage(Spider, W - 166, B_Spider_y - 980, 100, 50)
ctx.drawImage(Spider, W - 214, B_Spider_y + 1020, 100, 50)
ctx.drawImage(Spider, W - 189, B_Spider_y - 480, 100, 50)
ctx.drawImage(Spider, W - 231, B_Spider_y + 320, 100, 50)
ctx.drawImage(Spider, W - 125, B_Spider_y + 20, 100, 50)
ctx.drawImage(Spider, W - 243, B_Spider_y + 220, 100, 50)

ctx.drawImage(Spider, W - 172, B_Spider_y - 80, 100, 50)
ctx.drawImage(Spider, W - 205, B_Spider_y + 720, 100, 50)
ctx.drawImage(Spider, W - 149, B_Spider_y - 180, 100, 50)
ctx.drawImage(Spider, W - 236, B_Spider_y - 680, 100, 50)
ctx.drawImage(Spider, W - 123, B_Spider_y - 1180, 100, 50)
ctx.drawImage(Spider, W - 220, B_Spider_y - 1280, 100, 50)
ctx.drawImage(Spider, W - 188, B_Spider_y - 1480, 100, 50)
ctx.drawImage(Spider, W - 163, B_Spider_y - 1530, 100, 50)
ctx.drawImage(Spider, W - 135, B_Spider_y - 1680, 100, 50)
ctx.drawImage(Spider, W - 195, B_Spider_y - 1780, 100, 50)
ctx.drawImage(Spider, W - 210, B_Spider_y - 1980, 100, 50)
ctx.drawImage(Spider, W - 181, B_Spider_y - 2080, 100, 50)
ctx.drawImage(Spider, W - 199, B_Spider_y - 2130, 100, 50)
ctx.drawImage(Spider, W - 233, B_Spider_y - 2280, 100, 50)
ctx.drawImage(Spider, W - 128, B_Spider_y - 2380, 100, 50)
ctx.drawImage(Spider, W - 238, B_Spider_y - 1080, 100, 50)
ctx.drawImage(Spider, W - 216, B_Spider_y - 2480, 100, 50)
ctx.drawImage(Spider, W - 227, B_Spider_y - 2680, 100, 50)
ctx.drawImage(Spider, W - 144, B_Spider_y - 2780, 100, 50)
ctx.drawImage(Spider, W - 234, B_Spider_y - 2980, 100, 50)
ctx.drawImage(Spider, W - 212, B_Spider_y - 430, 100, 50)
ctx.drawImage(Spider, W - 154, B_Spider_y + 170, 100, 50)
ctx.drawImage(Spider, W - 201, B_Spider_y + 570, 100, 50)
ctx.drawImage(Spider, W - 173, B_Spider_y - 130, 100, 50)
ctx.drawImage(Spider, W - 196, B_Spider_y + 870, 100, 50)
ctx.drawImage(Spider, W - 227, B_Spider_y - 630, 100, 50)
ctx.drawImage(Spider, W - 185, B_Spider_y - 930, 100, 50)
ctx.drawImage(Spider, W - 239, B_Spider_y + 1070, 100, 50)
ctx.drawImage(Spider, W - 165, B_Spider_y - 430, 100, 50)
ctx.drawImage(Spider, W - 218, B_Spider_y + 370, 100, 50)
ctx.drawImage(Spider, W - 132, B_Spider_y + 70, 100, 50)
ctx.drawImage(Spider, W - 206, B_Spider_y + 270, 100, 50)
ctx.drawImage(Spider, W - 191, B_Spider_y - 30, 100, 50)
ctx.drawImage(Spider, W - 224, B_Spider_y + 770, 100, 50)
ctx.drawImage(Spider, W - 143, B_Spider_y - 130, 100, 50)
ctx.drawImage(Spider, W - 237, B_Spider_y - 630, 100, 50)
ctx.drawImage(Spider, W - 124, B_Spider_y - 1130, 100, 50)
ctx.drawImage(Spider, W - 219, B_Spider_y - 1230, 100, 50)
ctx.drawImage(Spider, W - 186, B_Spider_y - 1430, 100, 50)
ctx.drawImage(Spider, W - 162, B_Spider_y - 1480, 100, 50)
ctx.drawImage(Spider, W - 134, B_Spider_y - 1630, 100, 50)
ctx.drawImage(Spider, W - 198, B_Spider_y - 1730, 100, 50)
ctx.drawImage(Spider, W - 211, B_Spider_y - 1930, 100, 50)
ctx.drawImage(Spider, W - 179, B_Spider_y - 2030, 100, 50)
ctx.drawImage(Spider, W - 192, B_Spider_y - 2080, 100, 50)
ctx.drawImage(Spider, W - 230, B_Spider_y - 2230, 100, 50)
ctx.drawImage(Spider, W - 129, B_Spider_y - 2330, 100, 50)
ctx.drawImage(Spider, W - 240, B_Spider_y - 1030, 100, 50)
ctx.drawImage(Spider, W - 217, B_Spider_y - 2430, 100, 50)
ctx.drawImage(Spider, W - 226, B_Spider_y - 2630, 100, 50)
ctx.drawImage(Spider, W - 145, B_Spider_y - 2730, 100, 50)
ctx.drawImage(Spider, W - 235, B_Spider_y - 2930, 100, 50)
ctx.drawImage(Spider, W - 214, B_Spider_y - 464, 100, 50)
ctx.drawImage(Spider, W - 136, B_Spider_y + 136, 100, 50)
ctx.drawImage(Spider, W - 201, B_Spider_y + 536, 100, 50)
ctx.drawImage(Spider, W - 173, B_Spider_y - 164, 100, 50)
ctx.drawImage(Spider, W - 198, B_Spider_y + 836, 100, 50)
ctx.drawImage(Spider, W - 227, B_Spider_y - 664, 100, 50)

ctx.drawImage(Spider, W - 185, B_Spider_y - 964, 100, 50)
ctx.drawImage(Spider, W - 239, B_Spider_y + 1036, 100, 50)
ctx.drawImage(Spider, W - 165, B_Spider_y - 464, 100, 50)
ctx.drawImage(Spider, W - 218, B_Spider_y + 336, 100, 50)
ctx.drawImage(Spider, W - 132, B_Spider_y + 36, 100, 50)
ctx.drawImage(Spider, W - 206, B_Spider_y + 236, 100, 50)
ctx.drawImage(Spider, W - 191, B_Spider_y - 64, 100, 50)
ctx.drawImage(Spider, W - 224, B_Spider_y + 736, 100, 50)
ctx.drawImage(Spider, W - 143, B_Spider_y - 164, 100, 50)
ctx.drawImage(Spider, W - 237, B_Spider_y - 664, 100, 50)
ctx.drawImage(Spider, W - 124, B_Spider_y - 1164, 100, 50)
ctx.drawImage(Spider, W - 219, B_Spider_y - 1264, 100, 50)
ctx.drawImage(Spider, W - 186, B_Spider_y - 1464, 100, 50)
ctx.drawImage(Spider, W - 162, B_Spider_y - 1514, 100, 50)
ctx.drawImage(Spider, W - 134, B_Spider_y - 1664, 100, 50)
ctx.drawImage(Spider, W - 198, B_Spider_y - 1764, 100, 50)
ctx.drawImage(Spider, W - 211, B_Spider_y - 1964, 100, 50)
ctx.drawImage(Spider, W - 179, B_Spider_y - 2064, 100, 50)
ctx.drawImage(Spider, W - 192, B_Spider_y - 2114, 100, 50)
ctx.drawImage(Spider, W - 230, B_Spider_y - 2264, 100, 50)
ctx.drawImage(Spider, W - 129, B_Spider_y - 2364, 100, 50)
ctx.drawImage(Spider, W - 240, B_Spider_y - 1064, 100, 50)
ctx.drawImage(Spider, W - 217, B_Spider_y - 2464, 100, 50)
ctx.drawImage(Spider, W - 226, B_Spider_y - 2664, 100, 50)
ctx.drawImage(Spider, W - 145, B_Spider_y - 2764, 100, 50)
ctx.drawImage(Spider, W - 235, B_Spider_y - 2964, 100, 50)
ctx.drawImage(Spider, W - 128, B_Spider_y - 2450, 100, 50)
ctx.drawImage(Spider, W - 204, B_Spider_y - 1800, 100, 50)
ctx.drawImage(Spider, W - 239, B_Spider_y + 320, 100, 50)
ctx.drawImage(Spider, W - 193, B_Spider_y - 920, 100, 50)
ctx.drawImage(Spider, W - 181, B_Spider_y + 870, 100, 50)
ctx.drawImage(Spider, W - 232, B_Spider_y - 1330, 100, 50)
ctx.drawImage(Spider, W - 149, B_Spider_y - 2700, 100, 50)
ctx.drawImage(Spider, W - 201, B_Spider_y + 120, 100, 50)
ctx.drawImage(Spider, W - 212, B_Spider_y - 430, 100, 50)
ctx.drawImage(Spider, W - 231, B_Spider_y - 2110, 100, 50)
ctx.drawImage(Spider, W - 196, B_Spider_y + 940, 100, 50)
ctx.drawImage(Spider, W - 121, B_Spider_y - 760, 100, 50)
ctx.drawImage(Spider, W - 183, B_Spider_y - 1540, 100, 50)
ctx.drawImage(Spider, W - 172, B_Spider_y + 610, 100, 50)
ctx.drawImage(Spider, W - 213, B_Spider_y - 1990, 100, 50)
ctx.drawImage(Spider, W - 141, B_Spider_y - 300, 100, 50)
ctx.drawImage(Spider, W - 176, B_Spider_y - 2870, 100, 50)
ctx.drawImage(Spider, W - 149, B_Spider_y - 1180, 100, 50)
ctx.drawImage(Spider, W - 206, B_Spider_y + 480, 100, 50)
ctx.drawImage(Spider, W - 158, B_Spider_y - 970, 100, 50)
ctx.drawImage(Spider, W - 224, B_Spider_y - 2250, 100, 50)
ctx.drawImage(Spider, W - 133, B_Spider_y - 1410, 100, 50)
ctx.drawImage(Spider, W - 187, B_Spider_y + 760, 100, 50)
ctx.drawImage(Spider, W - 139, B_Spider_y - 620, 100, 50)
ctx.drawImage(Spider, W - 215, B_Spider_y - 1730, 100, 50)
ctx.drawImage(Spider, W - 124, B_Spider_y - 2560, 100, 50)
ctx.drawImage(Spider, W - 198, B_Spider_y + 30, 100, 50)
ctx.drawImage(Spider, W - 162, B_Spider_y - 840, 100, 50)
ctx.drawImage(Spider, W - 205, B_Spider_y - 2940, 100, 50)
ctx.drawImage(Spider, W - 131, B_Spider_y - 1070, 100, 50)
ctx.drawImage(Spider, W - 211, B_Spider_y + 540, 100, 50)
ctx.drawImage(Spider, W - 232, B_Spider_y - 1600, 100, 50)
ctx.drawImage(Spider, W-141, B_Spider_y - 3740, 100, 50)
ctx.drawImage(Spider, W-167, B_Spider_y - 3710, 100, 50)
ctx.drawImage(Spider, W-132, B_Spider_y - 3680, 100, 50)
ctx.drawImage(Spider, W-219, B_Spider_y - 3650, 100, 50)
ctx.drawImage(Spider, W-184, B_Spider_y - 3620, 100, 50)
ctx.drawImage(Spider, W-155, B_Spider_y - 3590, 100, 50)
ctx.drawImage(Spider, W-236, B_Spider_y - 3560, 100, 50)
ctx.drawImage(Spider, W-128, B_Spider_y - 3530, 100, 50)
ctx.drawImage(Spider, W-203, B_Spider_y - 3500, 100, 50)
ctx.drawImage(Spider, W-171, B_Spider_y - 3470, 100, 50)

ctx.drawImage(Spider, W-142, B_Spider_y - 3440, 100, 50)
ctx.drawImage(Spider, W-199, B_Spider_y - 3410, 100, 50)
ctx.drawImage(Spider, W-223, B_Spider_y - 3380, 100, 50)
ctx.drawImage(Spider, W-136, B_Spider_y - 3350, 100, 50)
ctx.drawImage(Spider, W-188, B_Spider_y - 3320, 100, 50)
ctx.drawImage(Spider, W-245, B_Spider_y - 3290, 100, 50)
ctx.drawImage(Spider, W-129, B_Spider_y - 3260, 100, 50)
ctx.drawImage(Spider, W-175, B_Spider_y - 3230, 100, 50)
ctx.drawImage(Spider, W-210, B_Spider_y - 3200, 100, 50)
ctx.drawImage(Spider, W-158, B_Spider_y - 3170, 100, 50)

ctx.drawImage(Spider, W-233, B_Spider_y - 3140, 100, 50)
ctx.drawImage(Spider, W-146, B_Spider_y - 3110, 100, 50)
ctx.drawImage(Spider, W-192, B_Spider_y - 3080, 100, 50)
ctx.drawImage(Spider, W-168, B_Spider_y - 3050, 100, 50)
ctx.drawImage(Spider, W-224, B_Spider_y - 3020, 100, 50)
ctx.drawImage(Spider, W-137, B_Spider_y - 2990, 100, 50)
ctx.drawImage(Spider, W-181, B_Spider_y - 2960, 100, 50)
ctx.drawImage(Spider, W-240, B_Spider_y - 2930, 100, 50)
ctx.drawImage(Spider, W-153, B_Spider_y - 2900, 100, 50)
ctx.drawImage(Spider, W-205, B_Spider_y - 2870, 100, 50)

ctx.drawImage(Spider, W-123, B_Spider_y - 480, 100, 50)
ctx.drawImage(Spider, W-133, B_Spider_y + 120, 100, 50)
ctx.drawImage(Spider, W-233, B_Spider_y + 520, 100, 50)
ctx.drawImage(Spider, W-153, B_Spider_y - 180, 100, 50)
ctx.drawImage(Spider, W-163, B_Spider_y + 820, 100, 50)
ctx.drawImage(Spider, W-203, B_Spider_y -680, 100, 50)
ctx.drawImage(Spider, W-183, B_Spider_y - 980, 100, 50)
ctx.drawImage(Spider, W-193, B_Spider_y + 1020, 100, 50)
ctx.drawImage(Spider, W-203, B_Spider_y - 480, 100, 50)
ctx.drawImage(Spider, W-213, B_Spider_y + 320, 100, 50)
ctx.drawImage(Spider, W-133, B_Spider_y + 20, 100, 50)
ctx.drawImage(Spider, W-233, B_Spider_y + 220, 100, 50)
ctx.drawImage(Spider, W-223, B_Spider_y - 80, 100, 50)
ctx.drawImage(Spider, W-243, B_Spider_y + 720, 100, 50)
ctx.drawImage(Spider, W-143, B_Spider_y - 180, 100, 50)
ctx.drawImage(Spider, W-223, B_Spider_y - 680, 100, 50)
ctx.drawImage(Spider, W-123, B_Spider_y - 1180, 100, 50)
ctx.drawImage(Spider, W-143, B_Spider_y - 1280, 100, 50)
ctx.drawImage(Spider, W-143, B_Spider_y - 1480, 100, 50)
ctx.drawImage(Spider, W-153, B_Spider_y - 1530, 100, 50)
ctx.drawImage(Spider, W-133, B_Spider_y - 1680, 100, 50)
ctx.drawImage(Spider, W-173, B_Spider_y - 1780, 100, 50)
ctx.drawImage(Spider, W-223, B_Spider_y - 1980, 100, 50)
ctx.drawImage(Spider, W-193, B_Spider_y - 2080, 100, 50)
ctx.drawImage(Spider, W-203, B_Spider_y - 2130, 100, 50)
ctx.drawImage(Spider, W-213, B_Spider_y - 2280, 100, 50)
ctx.drawImage(Spider, W-133, B_Spider_y - 2380, 100, 50)
ctx.drawImage(Spider, W-233, B_Spider_y - 1080, 100, 50)
ctx.drawImage(Spider, W-223, B_Spider_y - 2480, 100, 50)
ctx.drawImage(Spider, W-243, B_Spider_y - 2680, 100, 50)
ctx.drawImage(Spider, W-133, B_Spider_y - 2780, 100, 50)
ctx.drawImage(Spider, W-193, B_Spider_y - 2980, 100, 50)
    B_Spider_y += 20
       
        if (boss_Attack_hitboxes[i]["hitbox"].y > H-100 && !B_return) 
            {
                boss_Attack_hitboxes[i]["hitbox"].y -= 10
                ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x - 130, boss_Attack_hitboxes[i]["hitbox"].y- 220, 370, 250)
                ctx.drawImage(bossTongue, boss_Attack_hitboxes[i]["hitbox2"].x - 70, boss_Attack_hitboxes[i]["hitbox2"].y - 50, 220, 500)
                ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x - 30, boss_Attack_hitboxes[i]["hitbox"].y + 30 , 150, 80)
               
            }

        if(boss_Attack_hitboxes[i]["hitbox2"].y > 200)
            {boss_Attack_hitboxes[i]["hitbox2"].y -= 10
             boss_Attack_hitboxes[i]["hitbox2"].height += 10
             ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x - 130, boss_Attack_hitboxes[i]["hitbox"].y - 220, 370, 250)
             ctx.drawImage(bossTongue, boss_Attack_hitboxes[i]["hitbox2"].x - 70, boss_Attack_hitboxes[i]["hitbox2"].y - 50, 220, 500)
             ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x - 30 , boss_Attack_hitboxes[i]["hitbox"].y + 30 , 150, 80)
             
            }
        else if(boss_Attack_hitboxes[i]["hitbox2"].y < 193 && B_moving_right == false){
            B_moving_left = true
            ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x - 130, boss_Attack_hitboxes[i]["hitbox"].y - 220, 370, 250)
            ctx.drawImage(bossTongue, boss_Attack_hitboxes[i]["hitbox2"].x - 70, boss_Attack_hitboxes[i]["hitbox2"].y - 50, 220, 500)
            ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x - 30, boss_Attack_hitboxes[i]["hitbox"].y + 30 , 150, 80)    
            
        }
                
        if (B_moving_left) {
            boss_Attack_hitboxes[i]["hitbox"].x -= 8
            boss_Attack_hitboxes[i]["hitbox2"].x -= 8
            if (boss_Attack_hitboxes[i]["hitbox"].x < 250) {
                B_moving_left = false
                B_moving_right = true                 
            }
            ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x - 130, boss_Attack_hitboxes[i]["hitbox"].y - 220, 370, 250)
            ctx.drawImage(bossTongue, boss_Attack_hitboxes[i]["hitbox2"].x - 70, boss_Attack_hitboxes[i]["hitbox2"].y - 50, 220, 500)
            ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x - 30, boss_Attack_hitboxes[i]["hitbox"].y + 30 , 150, 80)
            
        } else if (B_moving_right) {
            boss_Attack_hitboxes[i]["hitbox"].x += 8
            boss_Attack_hitboxes[i]["hitbox2"].x += 8
            if (boss_Attack_hitboxes[i]["hitbox"].x > 900){
                B_moving_right = false
                B_moving_left = true
            }
            ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x - 130, boss_Attack_hitboxes[i]["hitbox"].y - 220, 370, 250)
            ctx.drawImage(bossTongue, boss_Attack_hitboxes[i]["hitbox2"].x - 70, boss_Attack_hitboxes[i]["hitbox2"].y - 50, 220, 500)
            ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x - 30, boss_Attack_hitboxes[i]["hitbox"].y + 30 , 150, 80)

        }   
        if (character.intersects(boss_Attack_hitboxes[i]["hitbox"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox2"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox_leftWall"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox_rightWall"])) {
            char_x_change(50)
            char_y_change(400)
            deaths_change(deaths+1)
            boss_Health = 200
            boss_Attack_hitboxes[i]["hitbox"].x =500
            boss_Attack_hitboxes[i]["hitbox2"].x =525
            boss_Attack_hitboxes.shift()
            flames.y = 1000
            flames_image_height_change(1000)
            Health_bar_width = W-842
            boss_Currently_Attacking = true
            if (Level == 1 && boss_Health > 0) {
            boss.y = 200
            Arms_first_y = -200
            Arms_second_y = -50
            FatGnomeDeathCounter_change (FatGnomeDeathCounter + 1)
            } 
        } 
        if (B_return) {
            
            boss_Attack_hitboxes[i]["hitbox"].y += 10
            boss_Attack_hitboxes[i]["hitbox2"].y += 100
            boss_Attack_hitboxes[i]["hitbox"].x += 0
            boss_Attack_hitboxes[i]["hitbox2"].x += 0
            
            if (boss_Attack_hitboxes[i]["hitbox"].y > H+10 && boss.y < 200){
                boss.y += 10
                boss_Attack_hitboxes[i]["hitbox_leftWall"].x = 20000
                boss_Attack_hitboxes[i]["hitbox_rightWall"].x = 20000
                ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x, boss_Attack_hitboxes[i]["hitbox"].y, 200, 150)
                ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x, boss_Attack_hitboxes[i]["hitbox"].y , 200, 150)
            }else if (boss.y > 200){
                boss_Attack_hitboxes[i]["hitbox"].x =500
                boss_Attack_hitboxes[i]["hitbox2"].x =525
                  boss_Attack_hitboxes.pop()
                  B_Spider_y = -1000
                  boss_Currently_Attacking = true
                  boss_timer = 10
                  B_return = false
                  B_attack_3_timer = 0
                }
        
        }
            
    }

   

    else if (boss_Attack_hitboxes[i]["type"] == AttackType.BigAttack ){
        

        
        if (character.intersects(boss_Attack_hitboxes[i]["hitbox"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox2"])  || character.intersects(boss_Attack_hitboxes[i]["hitbox3"])){
            char_x_change(50)
            char_y_change(400)
            deaths_change (deaths + 1)
            boss_Health = 200
            boss_Attack_hitboxes.shift()
            flames.y = 1000
            flames_image_height_change(1000)
            Health_bar_width = W-842
            Jesus_y = -150
            U_change (0)
            M_change (0)
            FatGnomeDeathCounter_change (FatGnomeDeathCounter + 1)
        }
    }
   
    else if ( boss_Attack_hitboxes[i]["type"] == AttackType.SmallAttack ) {

        boss_Attack_hitboxes[i]["hitbox"].x -= 15
        boss_Attack_hitboxes[i]["hitbox2"].x -= 15
        boss_Attack_hitboxes[i]["hitbox3"].x -= 15

        if(boss_Attack_hitboxes[i]["hitbox"].x < boss.x && boss_Attack_hitboxes[i]["hitbox"].x > boss.x - 50 || boss_Attack_hitboxes[i]["hitbox2"].x < boss.x && boss_Attack_hitboxes[i]["hitbox2"].x > boss.x - 50 || boss_Attack_hitboxes[i]["hitbox3"].x < boss.x && boss_Attack_hitboxes[i]["hitbox3"].x > boss.x - 50) {
           Vomit.play() 
        }

        ctx.drawImage(Spit_Projectile, boss_Attack_hitboxes[i]["hitbox"].x -10, boss_Attack_hitboxes[i]["hitbox"].y -20, boss_Attack_hitboxes[i]["hitbox"].width + 40, boss_Attack_hitboxes[i]["hitbox"].height + 50)
        ctx.drawImage(Spit_Projectile, boss_Attack_hitboxes[i]["hitbox2"].x -10, boss_Attack_hitboxes[i]["hitbox2"].y -20, boss_Attack_hitboxes[i]["hitbox2"].width + 40, boss_Attack_hitboxes[i]["hitbox2"].height + 50)
        ctx.drawImage(Spit_Projectile, boss_Attack_hitboxes[i]["hitbox3"].x -10, boss_Attack_hitboxes[i]["hitbox3"].y -20, boss_Attack_hitboxes[i]["hitbox3"].width + 40, boss_Attack_hitboxes[i]["hitbox3"].height + 50)

        if (character.intersects(boss_Attack_hitboxes[i]["hitbox"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox2"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox3"])){
            char_x_change(50)
            char_y_change(400)
            deaths_change (deaths + 1 )
            boss_Health = 200
            boss.y -= 0
            Health_bar_width = W-842
            if (Level == 1 && boss_Health > 0){
                boss.y = 200
                Arms_first_y = -200
                Arms_second_y = -50
            }
            boss_Currently_Attacking = true
            flames.y = 1000
            flames_image_height_change(1000)
            FatGnomeDeathCounter_change (FatGnomeDeathCounter + 1)
            boss_Attack_hitboxes = []
        }
    }
    
   
} 

}
export {boss_Which_attack, boss, boss_Health, Health_bar_width, boss_Attack_hitboxes}
export function Health_bar_width_change (nytt_värde) {
    Health_bar_width = nytt_värde
}
export function boss_Health_change(nytt_värde) {
    boss_Health = nytt_värde
}

export function boss_Attack_hitboxes_change (nytt_värde) {
boss_Attack_hitboxes = nytt_värde
}
export function boss_Currently_Attacking_change (nytt_värde) {
    boss_Currently_Attacking = nytt_värde
}
export function boss_y_change (nytt_värde) {
    boss.y = nytt_värde
}

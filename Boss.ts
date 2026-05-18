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
let boss_Health = 200
let boss_Attack_hitboxes= []
let boss_Currently_Attacking = true
let boss_Which_attack = 0
let boss_Blow_attack = 0
let boss_timer = 0
let blow_timer = 0
let blowing = false
let Arms_first_y = -200
let Arms_second_y = -50
let Jesus_y = -150

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



function boss_Attacks () {
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
        "hitbox": new Hitbox(1150, 325, 125, 125),
        "hitbox2": new Hitbox(1150 + 600, 200, 125, 125),
        "hitbox3": new Hitbox(1150 + 1200, 75, 125, 125),
        "type": AttackType.SmallAttack 
    })
    
    B_attack_1_hitboxes = false
    }
        
   
    
} 
else if(boss_Which_attack == 2 && boss_Health > 0) {
    B_attack_2_timer += deltaTime/100
    ctx.drawImage(Jesus, 420, Jesus_y, 300, 250)
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
function Boss_general () {
    if (boss_Which_attack == 2 && boss_Health > 0) {
       
        let blow_hitbox = new Hitbox (0, -10, W, H+10)

        blow_timer += deltaTime/100
        
        if (character.intersects(blow_hitbox)) {
            char_x_change (char_x -1.5)
        }
        if (blow_timer > 30) {
            blowing = false
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
boss.drawOutline()
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
        
        boss_Attack_hitboxes[i]["hitbox2"].drawOutline()
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
            boss_Attack_hitboxes[i]["hitbox"].x -= 7
            boss_Attack_hitboxes[i]["hitbox2"].x -= 7
            if (boss_Attack_hitboxes[i]["hitbox"].x < 250) {
                B_moving_left = false
                B_moving_right = true                 
            }
            ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x - 130, boss_Attack_hitboxes[i]["hitbox"].y - 220, 370, 250)
            ctx.drawImage(bossTongue, boss_Attack_hitboxes[i]["hitbox2"].x - 70, boss_Attack_hitboxes[i]["hitbox2"].y - 50, 220, 500)
            ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x - 30, boss_Attack_hitboxes[i]["hitbox"].y + 30 , 150, 80)
            
        } else if (B_moving_right) {
            boss_Attack_hitboxes[i]["hitbox"].x += 7
            boss_Attack_hitboxes[i]["hitbox2"].x += 7
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
            Goat_Y_change (600)
            if (Level == 1 && boss_Health > 0) {
            boss.y = 200
            Arms_first_y = -200
            Arms_second_y = -50
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
        boss_Attack_hitboxes[i]["hitbox2"].drawOutline()
        

        
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
            //Goat_Y = 600
            U_change (0)
            M_change (0)
        }
    }
   
    else if ( boss_Attack_hitboxes[i]["type"] == AttackType.SmallAttack ) {

        
        boss_Attack_hitboxes[i]["hitbox"].x -= 15
        boss_Attack_hitboxes[i]["hitbox2"].x -= 15
        boss_Attack_hitboxes[i]["hitbox3"].x -= 15

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
            Goat_Y_change (600)
            boss_Attack_hitboxes.shift()
        }
    }
    
   
} 

}
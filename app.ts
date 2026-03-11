let amount_jumps = 2
let amount_dashes = 2
let char_x = W-150
let char_y = 400
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

//ground.push(new Hitbox(275 * 2, 250, 50, 25))
//ground.push(new Hitbox(275 * 3, 300, 50, 25))


// Wall hitboxes
wall.push(new Hitbox(0, 475, 250,200))
wall.push(new Hitbox(1025, 475, 250, 200))

//Death zone
let death_zone = new Hitbox (-1000, 600, 3200, 200)

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
function jump () {// Determines everything that has with the characters movement in y-axis to do.
    let return_jump = 0
    for (let i = 0; i < ground.length ; i++){
        if (dashing && (keyboard.d || keyboard.a) && amount_dashes > 0 ) { // the gravity doesn't affect the character while dashing
            
            return_jump = 0
        } else if(after_dash && !character.intersects(ground[i])) { // makes it so after a dash the gravity resets
            jump_time = 5000
            after_dash = false
            
        } 
        else if(jumping && !character.intersects(ground[i]) && after_dash == false) { // the actual jump
            if (jump_reset) {
                jump_time = 0
                jump_reset = false
            }
            jump_time += deltaTime
            if(jump_time <10000) {
                return_jump = -12 + 12 * jump_time/5000
        } else {return_jump = 6 * jump_time/5000}
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
        if (fall_time> 3000){ // A little delay so that the character doesn't fall immediately
            jump_time += deltaTime
            return_jump = 8 * jump_time/8000 
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

let test = new Hitbox (W-100, 350, 100, 100)

update = () => {
    clear()
    if ( character.intersects(test)) {
        Level++
        char_x = 50
        char_y = 400
    }
    test.drawOutline()
    
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
    
    
   
    if (Level == 1) {
        Platform_1.draw()
        Platform_2.draw()
        Platform_3.draw()
        Platform_1.y = 350
        Platform_2.y = 250
        Platform_3.y = 300
        if(Level_change){
            boss.y = 200
        }
        Level_change = false
        flames.draw()
        boss_Attacks()
    }
    
    
    if (char_x > 250 && Level == 1) {
        flames.y = 322
        
    }


    if (character.intersects(death_zone) || keyboard.r || character.intersects(flames)) { // makes it so if you fall of the map or press "R" you die (reset)
        keyboard.r = false
        char_x = 50
        char_y = 400
        deaths ++
        boss_Health = 200
        boss.y = 200
        flames.y = 1000
        boss_Attack_hitboxes.shift()
        boss_Currently_Attacking = true
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
        jump_time = -1000
        
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

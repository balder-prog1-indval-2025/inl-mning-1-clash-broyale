let amount_jumps = 2
let amount_dashes = 2
let char_x = 50
let char_y = 400
let movement_x = 0
let movement_y = 0
let jumping = false
let jump_time = 0
let character = new Hitbox (char_x,char_y, 25, 40)
let dash_time = 0
let dashing = false
let after_dash = false
let lager_3 = []
let lager_4 = [] 
let fall_time = 0
let char_Direction = false

enum AttackType {
    BigAttack,
    SmallAttack,
    
}

let grassblock1 = await fetchImage("images/Block1.png")
let stoneblock1 = await fetchImage("images/stoneblock1.png")
let Dirtoverlayblock = await fetchImage("images/Dirtoverlayblock.png")
let Dirtblock = await fetchImage("Images/Dirtblock.png")
let Character_RevertedImage = await fetchImage ("images/Character_reverted.png")
let Character_Image = await fetchImage ("images/Character.png")
let ground: Hitbox[] = []
let wall: Hitbox[] = []
let shots = []
let shot_Placement = char_x + 10
let deaths = 0

let boss = new Hitbox(1150, 200, 100, 250)
let boss_Health = 50
let boss_Attack_hitboxes= []
let boss_Currently_Attacking = true
let boss_Which_attack = 0
let boss_Blow_attack = 0
let boss_timer = 0
let blow_timer = 0
let blowing = false


//first attack
let B_attack_1_x = 1150
//second attack
let B_attack_2_timer = 0
// third attack
let B_attack_3_timer = 0



//Platform hitboxes
ground.push(new Hitbox(275, 350, 50, 25))
ground.push(new Hitbox(275 * 2, 250, 50, 25))
ground.push(new Hitbox(275 * 3, 300, 50, 25))


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
           "hitbox": new Hitbox(shot_Placement, char_y + 5, 20, 10),
           "direction": char_Direction
    })
    }
    
}

let attack_2 = false
function boss_Attacks () {
    boss_timer += deltaTime/100
    
    if(boss_Currently_Attacking && boss_timer > 20){
        boss_Currently_Attacking= false
        boss_Which_attack = random(1,3) 
        boss_Blow_attack = random(1, 3)
        boss_timer = 0
        attack_2 = true
        
}
if (boss_Blow_attack == 1 && boss_Health > 0){
    blowing = true
}


if (boss_Which_attack == 1 && boss_Health > 0) {
    
    boss_Attack_hitboxes.push({
        "hitbox": new Hitbox(B_attack_1_x, 350, 100, 100),
        "type": AttackType.SmallAttack 
    })
        //console.log("attack")
    //boss_Attack_type = AttackType.SmallAttack
    boss_Which_attack = 0
    boss_Currently_Attacking= true
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
    boss.y -= 4
    console.log ("yes")
    boss_Currently_Attacking = true
}
else {boss_Currently_Attacking = true}

}



update = () => {
    clear()
    if (character.intersects(death_zone) || keyboard.r) { // makes it so if you fall of the map or press "R" you die (reset)
        keyboard.r = false
        char_x = 50
        char_y = 400
        deaths ++
        boss_Health = 50
    }
    text ("Death count: " + deaths, 10, 20) // a visible death count
    
    boss_Attacks()
    if (boss_Health < 0) {// makes the boss disappear
        boss.y = 2000
        //just to make so boss doesn't move continuously
    } else if (boss_Health > 0 && boss_Which_attack != 3) {boss.y = 200} 
   
    if (blowing) {
        char_x -= 2 
        
        blow_timer += deltaTime/100
        if (blow_timer > 40) {
            blowing = false
            blow_timer = 0
        }
    }
   
    // boss_Attacks
    boss.drawOutline()
    for(let i = 0; i < boss_Attack_hitboxes.length; i++) {
        boss_Attack_hitboxes[i]["hitbox"].drawOutline()
        
        if (boss_Attack_hitboxes[i]["type"] == AttackType.BigAttack ){
            boss_Attack_hitboxes[i]["hitbox2"].drawOutline()
            boss_Attack_hitboxes[i]["hitbox3"].drawOutline()
        
            if (character.intersects(boss_Attack_hitboxes[i]["hitbox2"])  || character.intersects(boss_Attack_hitboxes[i]["hitbox3"])){
                char_x = 50
                char_y = 400
                deaths ++
                boss_Health =50
            }
        }
       
        if ( boss_Attack_hitboxes[i]["type"] == AttackType.SmallAttack ) {boss_Attack_hitboxes[i]["hitbox"].x -= 10}
        else if (boss_Attack_hitboxes[i]["type"] == AttackType.BigAttack ) {
            boss_Attack_hitboxes[i]["hitbox"].x -= 0
            boss_Attack_hitboxes[i]["hitbox2"].x -= 0
            boss_Attack_hitboxes[i]["hitbox3"].x -= 0
        }
        if (character.intersects(boss_Attack_hitboxes[i]["hitbox"])) {
            char_x = 50
            char_y = 400
            deaths ++
            boss_Health = 50
            boss_Attack_hitboxes.shift()
        }
    } 
    //console.log(boss_Attack_hitboxes.length)
    
    
    
   
   
   
   
    shot_Placement = char_x+ 10 
    for(let i = 0; i < wall.length; i++){
    wall[i].drawOutline()        
    }
    for(let i = 0; i < shots.length; i++){
        
        if(!shots[i]["direction"]){ // if character is facing right, bullets go right.
            //console.log("höger")
        shots[i]["hitbox"].x += 14
        } else if (shots[i]["direction"]) { // and vice versa
            //console.log("vänster")
            shots[i]["hitbox"].x -=14
        }
        shots[i]["hitbox"].drawOutline()
        if (shots[i]["hitbox"].intersects(boss)) { // if shots hit boss, they disappear and damage it
            shots.shift()
            boss_Health--
            //console.log (boss_Health)
        }
    }
    shoot()
    draw_map()
    for (let i = 0;  i <= ground.length -1 ; i++) {
        ground[i].drawOutline()

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
 


export { }

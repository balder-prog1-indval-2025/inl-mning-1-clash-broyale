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

let grassblock1 = await fetchImage("images/Block1.png")
let stoneblock1 = await fetchImage("images/stoneblock1.png")
let Dirtoverlayblock = await fetchImage("images/Dirtoverlayblock.png")
let Dirtblock = await fetchImage("Images/Dirtblock.png")
let Character_RevertedImage = await fetchImage ("images/Character_reverted.png")
let Character_Image = await fetchImage ("images/Character.png")
let a: Hitbox[] = []
let shots: Hitbox[] = []
let shot_Placement = char_x + 10
let shot_speed = 1


for (let i = 0; i<=51; i++) {
if(i<10 || i>15 && i<30 || i>35 ) {
    a.push(new Hitbox (i*25 ,450,25,25))
}
}
for(let i = 0; i<= 51; i++) {
    lager_3.push (random(1, 5))
    lager_4.push (random(1, 5))
}
function draw_map () {
for (let i = 0; i<=51; i++) {
if(i<10 || i>15 && i<30 || i>35 ) {
ctx.drawImage(grassblock1, i*25, 450, 25,25)
ctx.drawImage(stoneblock1, i*25, 550, 25, 25)
ctx.drawImage(Dirtblock, i*25, 500, 25, 25)
ctx.drawImage(Dirtblock, i*25, 475, 25, 25)
ctx.drawImage(stoneblock1,i*25,550,25,25)
ctx.drawImage(stoneblock1,i*25,575,25,25)
ctx.drawImage(stoneblock1,i*25,600,25,25)


if (lager_3[i] == 1 || lager_3[i] > 2) {ctx.drawImage(Dirtblock,i*25,500,25,25)}

else if(lager_3[i] == 2 ) {ctx.drawImage(stoneblock1,i*25,500,25,25)}

if(lager_4[i]==2) {ctx.drawImage(Dirtblock,i*25,525,25,25)}
else if(lager_4[i]==1 || lager_4[i]>2) {ctx.drawImage(stoneblock1,i*25,525,25,25)}
}
}
}











function jump () {
    let return_movement = 0
    for (let i = 0; i < a.length ; i++){
        if (dashing && (keyboard.d || keyboard.a) && amount_dashes > 0 ) {
            
            return_movement = 0
        } else if(after_dash && !character.intersects(a[i])) {
            jump_time = 8000
            after_dash = false
            
        } 
        else if(jumping && !character.intersects(a[i]) && after_dash == false) {
            
            jump_time += deltaTime
            if(jump_time <16000) {
                return_movement = -12 + 12 * jump_time/8000
        } else {return_movement = 6 * jump_time/8000}
        } else if (character.intersects (a[i])) { // när karaktären inträffar hitboxen (marken).
            //console.log("intersect")
            jumping = false // när karaktären inträffar hitboxen kan den inte hoppa...
            dashing = false // ... eller "dasha"
            fall_time = 0
            jump_time = 0
            movement_y= 0 // all momentum i y-led blir 0,
           
            amount_jumps = 2
            amount_dashes = 2
        
           
            return_movement = -2
        }
    else if (!jumping && !character.intersects(a[i])) { //när karaktären inte hoppar och inte träffar marken
        fall_time +=deltaTime
        if (fall_time> 5000){
            
            jump_time += deltaTime
        
            return_movement = 8 * jump_time/8000 // då läggs det på "gravitationen", ett värde som med tiden ökar. Gör så att karaktären träffar hitboxen instant
            }
    }
        
    }
    return return_movement
}
function dash () {
    let return_dash = 0
    for (let i = 0; i < a.length ; i++){
        if (dashing && !character.intersects(a[i])) {
        
            if ( keyboard.d && dash_time < 100 && amount_dashes>0) {
            dash_time += deltaTime
            //console.log (dash_time)
        
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
        else if (dashing && character.intersects(a[i])) {
            dashing = false
            return_dash = 0
        }
}
    return return_dash
    
}
    



function walk () {
    if (dashing && (keyboard.a || keyboard.d) && amount_dashes > 0) {
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
function updatePosition () {
char_x += movement_x 
char_y += movement_y
}

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

function shoot () {
    if (keyboard.enter && shots.length < 3) { 
        
        keyboard.enter = false
        shot_Placement = char_x + 10
        shots.push(new Hitbox(shot_Placement, char_y + 5, 20, 10))
    }
}
function updateShot () {
    shot_Placement += shot_speed
    return shot_Placement
}




update = () => {
    clear()
    updateShot()
    if(char_Direction) {shot_speed = -10}
    else {shot_speed = 10}
    //console.log(char_Direction)
    shot_speed = 1
    console.log(shots.length)
    for(let i = 0; i < shots.length; i++){
        shots[i].drawOutline()
        
    }
    shoot()
    draw_map()
    for (let i = 0;  i <= a.length -1 ; i++) {
        a[i].drawOutline()

    }
    movement_x = walk() + dash()
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
        jump_time = -3000
        jump_time = -3000
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

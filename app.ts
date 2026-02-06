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
let ground: Hitbox[] = []
let wall: Hitbox[] = []
let shots = []
let shot_Placement = char_x + 10
let shot_speed = 1




for(let i = 0; i < 3; i++){//platforms
    ground.push (new Hitbox(275 +i*200, 300, 50, 25))
}

wall.push(new Hitbox(0, 475, 250,200))
wall.push(new Hitbox(1025, 475, 250, 200))

for (let i = 0; i<=51; i++) { //ground hitboxes
if(i<10 || i>40 ) {
    ground.push(new Hitbox (i*25 ,450,25,25))
}
}
for(let i = 0; i<= 51; i++) { //ground blocks
    lager_3.push (random(1, 5))
    lager_4.push (random(1, 5))
}
function draw_map () {
for (let i = 0; i<=51; i++) {
if(i<10 || i>40 ) {
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




if(char_Direction) {shot_speed = -10}
else {shot_speed = 10}






function jump () {
    let return_jump = 0
    for (let i = 0; i < ground.length ; i++){
        if (dashing && (keyboard.d || keyboard.a) && amount_dashes > 0 ) {
            
            return_jump = 0
        } else if(after_dash && !character.intersects(ground[i])) {
            jump_time = 5000
            after_dash = false
            
        } 
        else if(jumping && !character.intersects(ground[i]) && after_dash == false) {
            
            jump_time += deltaTime
            if(jump_time <10000) {
                return_jump = -12 + 12 * jump_time/5000
        } else {return_jump = 6 * jump_time/5000}
        } else if (character.intersects (ground[i])) { // när karaktären inträffar hitboxen (marken).
            //console.log("intersect")
            jumping = false // när karaktären inträffar hitboxen kan den inte hoppa...
            dashing = false // ... eller "dasha"
            fall_time = 0
            jump_time = 0
            movement_y= 0 // all momentum i y-led blir 0,
           
            amount_jumps = 2
            amount_dashes = 2
        
           
            return_jump = -2
        }
    else if (!jumping && !character.intersects(ground[i])) { //när karaktären inte hoppar och inte träffar marken
        fall_time +=deltaTime
        if (fall_time> 5000){
            
            jump_time += deltaTime
        
            return_jump = 8 * jump_time/8000 // då läggs det på "gravitationen", ett värde som med tiden ökar. Gör så att karaktären träffar hitboxen instant
            }
    }
        
    }
    for(let i = 0; i < wall.length; i++){
        if (character.intersects(wall[i])){movement_x = 0}
    }
    return return_jump
}
function dash () {
    let return_dash = 0
    for (let i = 0; i < ground.length ; i++){
        if (dashing && !character.intersects(ground[i])) {
        
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
        else if (dashing && character.intersects(ground[i])) {
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
    if (keyboard.enter ) { 
        
        keyboard.enter = false
       
        
        shots.push({
           "hitbox": new Hitbox(shot_Placement, char_y + 5, 20, 10),
            "direction": char_Direction
    })
    }
    
}



let test = new Hitbox(1150, 200, 100, 250)

update = () => {
    clear()
    
    shot_Placement = char_x+ 10 
   
    test.drawOutline()
    for(let i = 0; i < wall.length; i++){
    wall[i].drawOutline()        
    }
    for(let i = 0; i < shots.length; i++){
        
        if(!shots[i]["direction"]){
            //console.log("höger")
        shots[i]["hitbox"].x += 14
        } else if (shots[i]["direction"]) {
            //console.log("vänster")
            shots[i]["hitbox"].x -=14
        }
        shots[i]["hitbox"].drawOutline()
        if (shots[i]["hitbox"].intersects(test)) {
            shots.shift()
            console.log ("intersect")
        }
    }
    shoot()
    draw_map()
    for (let i = 0;  i <= ground.length -1 ; i++) {
        ground[i].drawOutline()

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

let amount_jumps = 2
let amount_dashes = 2
let char_x = 50
let char_y = 400
let movement_x = 0
let movement_y = 0
let jumping = false
let jump_time = 0
let character = new Hitbox (char_x,char_y, 25, 25)
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

let a: Hitbox[] = []




for(let i = 0; i<= 51; i++) {
    lager_3.push (random(1, 5))
    lager_4.push (random(1, 5))
}
function draw_map () {
for (let i = 0; i<=51; i++) {
if(i<10 || i>15) {
ctx.drawImage(grassblock1, i*25, 450, 25,25)
ctx.drawImage(stoneblock1, i*25, 550, 25, 25)
ctx.drawImage(Dirtblock, i*25, 500, 25, 25)
ctx.drawImage(Dirtblock, i*25, 475, 25, 25)
ctx.drawImage(stoneblock1,i*25,550,25,25)
ctx.drawImage(stoneblock1,i*25,575,25,25)
ctx.drawImage(stoneblock1,i*25,600,25,25)
a.push(new Hitbox (i*25 ,450,25,25))

if (lager_3[i] == 1 || lager_3[i] > 2) {ctx.drawImage(Dirtblock,i*25,500,25,25)}

else if(lager_3[i] == 2 ) {ctx.drawImage(stoneblock1,i*25,500,25,25)}

if(lager_4[i]==2) {ctx.drawImage(Dirtblock,i*25,525,25,25)}
else if(lager_4[i]==1 || lager_4[i]>2) {ctx.drawImage(stoneblock1,i*25,525,25,25)}


}
}



}











function jump () {
    let return_movement = 0
    for (let i = 0; i < 45 ; i++){
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
            console.log("intersect")
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
    for (let i = 0; i < 45 ; i++){
        if (dashing && !character.intersects(a[i])) {
        
            if ( keyboard.d && dash_time < 100 && amount_dashes>0) {
            dash_time += deltaTime
            //console.log (dash_time)
        
             return_dash = 2
             return return_dash
            } else if (keyboard.a && dash_time < 100 && amount_dashes>0) {
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
            } if ( dash_time >= 100) {
            amount_dashes--
            dash_time = 0
            dashing = false
            after_dash = true
        
            }
        }
        else if (dashing && character.intersects(a[i])) {
            dashing = false
            return_dash = 0
        }
}
    return return_dash
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

/*function shoot () {
    if (keyboard.)
}

/*function shoot () {
    if (keyboard.)
}

*/




update = () => {
    clear()
    
    
    
    draw_map()
    for (let i = 0; i <= 44 ; i++) {
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
/*
let grassblock1 = await fetchImage("images/Block1.png")
 


export { }


let grassblock1 = await fetchImage("images/Block1.png")
let stoneblock1 = await fetchImage("images/stoneblock1.png")
let Dirtoverlayblock = await fetchImage("images/Dirtoverlayblock.png")
let Dirtblock = await fetchImage("Images/Dirtblock.png")

ctx.drawImage(grassblock1, 0, 450, 25,25)
ctx.drawImage(grassblock1, 25, 450, 25,25)
ctx.drawImage(grassblock1, 50, 450, 25,25)
ctx.drawImage(grassblock1, 75, 425, 25,25)
ctx.drawImage(grassblock1, 100, 425, 25,25)
ctx.drawImage(grassblock1, 100, 325, 25,25)
ctx.drawImage(grassblock1, 75, 325, 25,25)
ctx.drawImage(grassblock1, 50, 325, 25,25)
ctx.drawImage(Dirtblock, 25, 325, 25, 25)
ctx.drawImage(Dirtblock, 0, 325, 25, 25)
ctx.drawImage(Dirtblock, 25, 300, 25, 25)
ctx.drawImage(Dirtblock, 0, 300, 25, 25)
ctx.drawImage(Dirtblock, 25, 275, 25, 25)
ctx.drawImage(Dirtblock, 0, 275, 25, 25)
ctx.drawImage(Dirtblock, 25, 350, 25, 25)
ctx.drawImage(Dirtblock, 0, 350, 25, 25)
ctx.drawImage(Dirtblock, 50, 350, 25, 25)

ctx.drawImage(grassblock1, 0, 450, 25,25)
ctx.drawImage(grassblock1, 25, 450, 25,25)
ctx.drawImage(grassblock1, 50, 450, 25,25)
ctx.drawImage(grassblock1, 75, 450, 25,25)

// NERÅT (jord)
ctx.drawImage(Dirtblock, 0, 475, 25,25)
ctx.drawImage(Dirtblock, 25, 475, 25,25)
ctx.drawImage(Dirtblock, 50, 475, 25,25)
ctx.drawImage(Dirtblock, 75, 475, 25,25)

// FÖRSTA HOPPET UPP
ctx.drawImage(grassblock1, 125, 425, 25,25)
ctx.drawImage(grassblock1, 150, 425, 25,25)

ctx.drawImage(Dirtblock, 125, 450, 25,25)
ctx.drawImage(Dirtblock, 150, 450, 25,25)

// ANDRA PLATTFORMEN (lite högre)
ctx.drawImage(grassblock1, 200, 375, 25,25)
ctx.drawImage(grassblock1, 225, 375, 25,25)

ctx.drawImage(Dirtblock, 200, 400, 25,25)
ctx.drawImage(Dirtblock, 225, 400, 25,25)

// NEDÅT IGEN (fall)
ctx.drawImage(grassblock1, 275, 450, 25,25)

// LÅNG PLATTFORM ÅT HÖGER
ctx.drawImage(grassblock1, 325, 425, 25,25)
ctx.drawImage(grassblock1, 350, 425, 25,25)
ctx.drawImage(grassblock1, 375, 425, 25,25)
ctx.drawImage(grassblock1, 400, 425, 25,25)

// TRAPPA UPP (klassisk IWBTG)
ctx.drawImage(grassblock1, 450, 400, 25,25)
ctx.drawImage(grassblock1, 475, 375, 25,25)
ctx.drawImage(grassblock1, 500, 350, 25,25)
ctx.drawImage(grassblock1, 525, 325, 25,25)

// LITEN SÄKER YTA (lurar spelaren)
ctx.drawImage(grassblock1, 575, 325, 25,25)
ctx.drawImage(grassblock1, 600, 325, 25,25)

// FALL NER IGEN
ctx.drawImage(grassblock1, 650, 450, 25,25)

// SLUTPLATTFORM
ctx.drawImage(grassblock1, 700, 425, 25,25)
ctx.drawImage(grassblock1, 725, 425, 25,25)
ctx.drawImage(grassblock1, 750, 425, 25,25)
//Värden på skärmen: x = 0-1250 y = 0-575 kordinater, alla block ska vara 25 wide och hög.
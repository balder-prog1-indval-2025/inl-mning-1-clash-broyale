

let amount_jumps = 2
let char_x = 50
let char_y = 450
let movement_x = 0
let movement_y = 0
let jumping = false
let jump_time = 0
let character = new Hitbox (char_x,char_y, 25, 50)
let dash_time = 0
let dashing = false

function jump () {
if(jumping && char_y <= 450) {
    jump_time +=deltaTime
    return -10 + 10 * jump_time/350
    
} else if (char_y > 450) {
    jumping = false
    char_y = 450
    jump_time = 0
    amount_jumps = 2
    return 0
}
return 0
}

function dash () {
    if (dashing && keyboard.d) {
       dash_time += deltaTime
       return 10 * dash_time/1000
    } else if (dashing && keyboard.a) {
       dash_time += deltaTime
        return -10 * dash_time/1000
    }else if (dash_time = 500) {
        dash_time = 0
    }
    return 0
}



function walk () {
    if (keyboard.a) {
        return -5
    }else if (keyboard.d ) {
        return 5
    }else if (jumping) {
        return movement_x
    } else if (movement_x < -0.1) {
        return movement_x + 0.2
    } else if (movement_x > 0.1) {
        return movement_x - 0.2
    } else {
        return 0
}
}
function updatePosition () {
char_x += movement_x
char_y += movement_y
}

function updateCharacter(x:number, y:number, hitbox:Hitbox) {
rectangle(x, y, 25, 50, "red")
hitbox.x = x
hitbox.y = y
hitbox.drawOutline()
}




let ground = new Hitbox(0,500,5000,5000)

update = () => {
    clear()
   
    rectangle(300, 450,50,50, "red")
    rectangle(0,500, 5000, 5000, "green")
    ground.drawOutline ()
    movement_x = walk() + dash()
    movement_y = jump() 
    if (keyboard.shift) {
        keyboard.shift = false
        dashing = true
     }
    
    
    
    if (keyboard.space) {
        keyboard.space = false 
    
    if (amount_jumps == 1 && jumping) {
        jump_time = 0
    }
    else {
        jumping = true
    }
    amount_jumps--
}
    
   
    updatePosition()
    updateCharacter(char_x, char_y, character)
      
} 
 
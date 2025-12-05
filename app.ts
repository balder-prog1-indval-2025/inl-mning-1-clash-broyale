

let amount_jumps = 2
let char_x = 50
let char_y = 400
let movement_x = 0
let movement_y = 0
let jumping = false
let jumping2 = false
let space_release = false
let jump_time = 0
let character = new Hitbox (char_x,char_y, 50, 100)

function jump () {
if(jumping && char_y <= 400) {
    jumping2 = true
    jump_time +=deltaTime
    return -5 + 5 * jump_time/1000
    
} else if (char_y > 400) {
    jumping = false
    char_y = 400
    jump_time = 0
    amount_jumps = 2
    return 0
}
return 0
}
function jump2() {
    if (amount_jumps > 0 && jumping2) {
        jumping2 = false
        jump_time = 0
        jump_time += deltaTime 
        return -5 + 5 * jump_time/1000
    } else if(char_y > 400) {
        jumping2 = false
        char_y = 400
        jump_time = 0
        amount_jumps = 2
        return 0
    }
    return 0
}
function walk () {
    if (keyboard.a) {
        return -5
    } else if (keyboard.d ) {
        return 5
    } else if (jumping) {
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
rectangle(x, y, 50, 100, "red")
hitbox.x = x
hitbox.y = y
hitbox.drawOutline()
}




let ground = new Hitbox(0,500,5000,5000)

update = () => {
    clear()
    rectangle(0,500, 5000, 5000, "green")
    ground.drawOutline ()
    movement_x = walk()
    movement_y = jump() + jump2()
    if (keyboard.space && jumping == false) {
        jumping = true
        space_release = false
        amount_jumps-- 
    }
    if (!keyboard.space) {
        space_release = true
    }
    
   
    updatePosition()
    updateCharacter(char_x, char_y, character)
      
} 
 
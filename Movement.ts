import {ground, WallHitbox} from "./Map"
import {death} from "./Death"


let amount_jumps = 2
let amount_dashes = 2
let char_x = 50
let char_y = 400
let movement_x = 0
let movement_y = 0
let jumping = false
let jump_time = 0
let jump_reset = true
let gravity = 18000
let gravity_2_jump = -6500
let fall_gravity = 10000
let character = new Hitbox (char_x,char_y, 25, 40)
let dash_time = 0
let dashing = false
let after_dash = false
let fall_time = 0
let char_Direction = false


let Character_RevertedImage = await fetchImage ("images/Character_reverted.png")
let Character_Image = await fetchImage ("images/Character.png")


export function walk () { //standard movement in x-axis
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
export function updateCharacter(x:number, y:number, hitbox:Hitbox) {
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
//hitbox.drawOutline()
}




    export function dash () {
        let return_dash = 0
        for (let i = 0; i < ground.length ; i++){
            if (dashing && !character.intersects(ground[i])) {
                
                if ( keyboard.d && dash_time < 100 && amount_dashes>0) {
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
    export function jump () {// Determines everything that has with the characters movement in y-axis to do.
        let return_jump = 0
        for (let i = 0; i < ground.length ; i++){
            if (dashing && (keyboard.d || keyboard.a) && amount_dashes > 0 ) { // the gravity doesn't affect the character while dashing
                
                return_jump = 0
            } else if(after_dash && !character.intersects(ground[i])) { // makes it so after a dash the gravity resets
                if (jumping) { 
                    jump_time = gravity
                }else if (fall_time > fall_gravity) {jump_time = 0}
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
                return_jump = -4 // The character moves above the hitbox, creates this jittery movement
            }
        else if (!jumping && !character.intersects(ground[i])) { //när karaktären inte hoppar och inte träffar marken
            fall_time +=deltaTime
            if (fall_time> fall_gravity){ // A little delay so that the character doesn't fall immediately
                jump_time += deltaTime
                return_jump = 8 * jump_time/gravity 
                }
        }
            
        }
        /*for(let i = 0; i < wall.length; i++){ // makes it so the character can't get into walls
            if (character.intersects(wall[i])){
                movement_x = 0
            }
        }*/
        return return_jump
    }

    export function updatePosition () { 
        char_x += movement_x 
        char_y += movement_y
        }
    
    /*    for(let i = 0; i < WallHitbox.length; i++) {
            if(character.intersects(WallHitbox[i]) && keyboard.d && !char_Direction && !jumping) {
            char_x = char_x -5
            char_y = char_y +2
            }
            else if(character.intersects(WallHitbox[i]) && keyboard.a && char_Direction && !jumping) {
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
*/




    export {character, amount_dashes, dashing, amount_jumps, jumping, char_x, char_y, char_Direction, gravity_2_jump}

    export function char_x_change(nytt_värde) {
        char_x = nytt_värde
    }
    export function char_y_change(nytt_värde) {
        char_y = nytt_värde
    }
    export function jump_time_change (nytt_värde) {
       jump_time = nytt_värde
    }
    export function gravity_change (nytt_värde) {
       gravity = nytt_värde
    }
    export function gravity_2_jump_change (nytt_värde) {
       gravity_2_jump = nytt_värde
    }
    export function fall_gravity_change (nytt_värde) {
       fall_gravity = nytt_värde
    }
    export function movement_x_change (nytt_värde) {
        movement_x = nytt_värde
    }
    export function movement_y_change (nytt_värde) {
        movement_y = nytt_värde
    }
    export function dash_time_change (nytt_värde) {
        dash_time = nytt_värde
    }
    export function dashing_change (nytt_värde) {
        dashing = nytt_värde
    }
    export function jumping_change (nytt_värde) {
        jumping = nytt_värde
    }
    export function amount_jumps_change (nytt_värde) {
        amount_jumps = nytt_värde
    }
    export function amount_dashes_change (nytt_värde) {
        amount_dashes = nytt_värde
    }
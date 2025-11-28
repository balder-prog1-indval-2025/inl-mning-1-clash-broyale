
//function hitbox (x, y, width, height):Hitbox { 
//    rectangle(x,y, width, height,)
//}

let ground = new Hitbox(0,500,5000,5000)
function Character (x, y) {
    let character = new Hitbox(x,y,50,100)
    if (keyboard.d) { x+=2}
    else if (keyboard.a) { x-=2}
   // character.drawOutline ()
   rectangle (x,y,50,100,"red")
   return x 
}

let x = 50
update = () => {
    clear()
    rectangle(0,500, 5000, 5000, "green")
    ground.drawOutline ()
    x = Character(x, 400)
    



      
} 
 
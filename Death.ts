import {Level, boss, boss_Health} from "./app"
import {Health_bar_width_change, boss_Health_change, boss_Attack_hitboxes_change, boss_Currently_Attacking_change,} from "./app"
import {char_x_change, char_y_change, jump_time_change, character} from "./Movement"

let death_zone: Hitbox [] = []
let Spiderman = false
let Spiderman2 = false
let Spooderman = true
let SpiderTrigger= new Hitbox(775,0, 250, 1000)
let Spider_hitbox =  new Hitbox ( 675, -700 ,350, 50)
let SecondSpider_hitbox = new Hitbox (-14000,-100,50,350)
let SecondSpider_x = -14025
let Spider_y = -725
let Explode = true
let flames =  new Hitbox (0, 1050, 250, 70)
let flames_image_height = 1000

let HellBombHitbox = new Hitbox(2000000,0,W,H)
let GoatHellBomb = true
let GoatHellBombTimer = 0
let GoatTrigger = false
let GoatNumber = 0
let Goat_Y = 600

let U = 0 // Used for goat trigger
let u = 0 // Used for 2nd Goat trigger

let M = 0 // Used for Hellbomb activation

let SpiderSide = await fetchImage("images/SpiderSide.png")
let Spider =  await fetchImage("images/Spider.png")
let Gnome = await fetchImage("images/Gnome.png")
let Explosion = await fetchImage("images/explosion.png")
let Goat = await fetchImage("images/Goat.png")

let g = 0 // used for explosion to stay active for a while
let b = 0 // used for audio of explosion
let B = 0 // Used for the Godzilla Sound
let G = 0 // Used for audio of Gnome
let V = 0 // Used for Gnome delay
let J = 0 // Used for  SpiderAttack2 audio delay

let Godzilla = new Audio('Audio/Godzilla.mp3')
let GnomeWOO = new Audio('Audio/GnomeWOO.mp3') 
let ExplosionSound = new Audio('Audio/loud-explosion.mp3')
let GoatBaaah = new Audio('Audio/baah.mp3')
let HellBombSound = new Audio('Audio/Hellbomb.mp3')



let deaths = 0
let FatGnomeDeathCounter = 0 


death_zone.push(SecondSpider_hitbox)
death_zone.push(Spider_hitbox)
//death_zone.push(flames)
let GnomeHitbox = new Hitbox(1015,350,25,75)
let ExplosionHitbox = new Hitbox(5000,250,300,300)
death_zone.push(GnomeHitbox)
death_zone.push(ExplosionHitbox)
//let death_zone_floor = new Hitbox (-1000, H, 3200, 200)
//]

death_zone.push (new Hitbox (-1000, H, 3200, 200))
// Spikes ----------------------
//Spikes left
//Kopiera ut allt detta senare från funktionen
death_zone.push(new Hitbox(290, 383, 50, 15))
death_zone.push(new Hitbox(290, 418, 50, 15))
death_zone.push(new Hitbox(535, 425, 64, 10))
death_zone.push(new Hitbox(565, 260, 40, 150))


death_zone.push(new Hitbox(525, 242, 75, 17))
death_zone.push(new Hitbox(525, 207, 75, 17))
death_zone.push(new Hitbox(405, 555, 50, 20))
death_zone.push(new Hitbox(450, 535, 50, 20))

death_zone.push(new Hitbox(155, 145, 75, 15))
death_zone.push(new Hitbox(155, 100, 75, 15))
death_zone.push(new Hitbox(112, 53, 25, 8))

death_zone.push(new Hitbox(1015, 425, 30, 25))


death_zone.push(new Hitbox(1015, 0, 30, 345))


// SpikeRightHitbox


death_zone.push(new Hitbox(200, 545, 95, 50))
death_zone.push(new Hitbox(250, 555, 95, 50))
death_zone.push(new Hitbox(425, 345, 92, 10))
death_zone.push(new Hitbox(425, 318, 75, 15))

death_zone.push(new Hitbox(50, 116, 30, 210)) //RAHHHHh




// SpikeUp
death_zone.push(new Hitbox(100, 290, 15, 25))
death_zone.push(new Hitbox(286, 287, 25, 25))
death_zone.push(new Hitbox(336, 266, 25, 25))
death_zone.push(new Hitbox(192, 296, 5, 5))

death_zone.push(new Hitbox(250, 80, 140, 60))
death_zone.push(new Hitbox(438, 80, 160, 60))


// SpikeDownHitbox
death_zone.push(new Hitbox(369, 445, 15, 33)) //RAHHHH2

export function GnomeAttack() {
    //GÖR KLART DETTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
       if(Spiderman2 && Spooderman && V < 70) {
       V = V + 1
       }
       if(G == 0 && V == 70) {GnomeWOO.play()
       G = 20}
       if(V == 70 && Spiderman2 && Spooderman) {ctx.drawImage(Gnome, 1010,350,40,70)}
   }
   
   export function SpiderAttack_1() {
       if(Spiderman) {
      
           ctx.drawImage(Spider, 650, Spider_y ,400, 200)
           Spider_hitbox.y += 50
           Spider_y += 50
       if(Spiderman && B == 0) {
           Godzilla.play()
           B = 1
       }
       if (Spider_hitbox.y > H) {
           Spiderman = false
       }
       
   }
   }
   export function SpiderAttack_2() {
       if(Spiderman2 && Spooderman) {
       ctx.drawImage(SpiderSide, SecondSpider_x, -100, 200, 400 )
       SecondSpider_hitbox.x +=50
       SecondSpider_x +=50
       if(Spiderman2 && Spooderman && J < 150) {J = J+1}
       if(SecondSpider_x > W || Level == 1) {
           Spiderman2 = false
           Spooderman = false
           GnomeHitbox.x = W+20000
           SecondSpider_hitbox.x = W + 20000
       }
       if(SecondSpider_hitbox.x > -600) {
           Godzilla.play()
       }
       }
   }
   export function explosionsound() {
       if(SecondSpider_x > W && Explode == true && b == 0) {
           ExplosionSound.play()
           b = 1
       }
   }
   export function explosion() {
       if(SecondSpider_x > W && Explode == true && g < 100) {
           ctx.drawImage(Explosion,800,150,500,500)
           ExplosionHitbox.x = 900
           g = g+1
       }
       if(g == 100) {ExplosionHitbox.x = 5000}
   }
export function Hellbomb() {if(GoatNumber == 1 && M == 0 ) {
    HellBombSound.play()
        M = 0
}}
export function GoatAttack() {
  
    for(let i = 0; i < 10;i++) {
    u = u + 1
  }
  if(u == 10 && GoatNumber != 1) {
    GoatNumber = random(0,20000) //changing this will change how often goat attack will happen
    u = 0
   

  }
    
    
   

    if(GoatNumber == 1 && Goat_Y > 301) {
        for(let i = 0; i<301; i ++) {
            Goat_Y = Goat_Y-0.003
            ctx.drawImage(Goat, 650,Goat_Y-100,800, 400)
        
            if(Goat_Y <301 && GoatHellBomb) {
                GoatTrigger = true
                GoatHellBomb = false
            }}
            
        }
    if(GoatTrigger) {
        ctx.drawImage(Goat,650,300-100,800,400)
        GoatHellBombTimer+= deltaTime/100
    }
  if (GoatHellBombTimer > 66.9999) {
    HellBombHitbox.x = 0
    ctx.drawImage(Explosion,-500,-1000,3000,3000)
    U = 1
    if (character.intersects(HellBombHitbox)) {
        deaths_change(deaths + 1)
        char_y_change(-10000000000000000000)
        
    }
} 

if (GoatHellBombTimer > 100) {
    GoatTrigger = false
    GoatHellBombTimer = 0
    GoatHellBomb = true
    Goat_Y = 600
    GoatNumber = 0
    M = 0
    jump_time_change (0)
    HellBombHitbox.x = 200000
    if(HellBombHitbox.x > 0) { 
        char_x_change (50)
        char_y_change (400)
}
}
    if(GoatTrigger && U == 0) {
        U = 0
        GoatBaaah.play()
    }

}
   
   
   
   
   
   
   
   
   
   
   export function death () {
    for(let i = 0; i<death_zone.length; i++) {
        if (character.intersects(death_zone[i]) || keyboard.r) { // makes it so if you fall of the map or press "R" you die (reset)
            keyboard.r = false
            char_x_change(50)
            char_y_change(400)
            deaths ++
            FatGnomeDeathCounter ++
            Spider_hitbox.y = -700
            Spider_y = -700
            SecondSpider_hitbox.x = -14000
            SecondSpider_x = -14025
            if (Level == 0) {
                GnomeHitbox.x = 1015
                GnomeHitbox.y=350
            } if (Level == 1 && boss_Health > 0){
                boss.y = 200
            }
            Health_bar_width_change (W-842)
            Spiderman = false
            Spiderman2 = false
            Spooderman = true
            //GoatTrigger = false
            U = 0
            M = 0
            u = 0
            jump_time_change(0)
            boss_Health_change(200)
            Health_bar_width_change (W-842)
            flames_y_change(1000)
            flames_image_height_change  (1000)
            boss_Attack_hitboxes_change([])
            boss_Currently_Attacking_change (true)
        }
        }
}


export function death_zone_clear () {
    death_zone = []
}
export function FatGnomeDeathCounter_change (nytt_värde) {
    FatGnomeDeathCounter = nytt_värde
}
export function deaths_change (nytt_värde) {
    deaths = nytt_värde
}
export function Spiderman_change (nytt_värde) {
    Spiderman = nytt_värde
}
export function Spiderman2_change (nytt_värde) {
    Spiderman2 = nytt_värde
}
export function flames_image_height_change (nytt_värde) {
    flames_image_height = nytt_värde
}
export function flames_y_change (nytt_värde) {
    flames.y = nytt_värde
}
export function Goat_Y_change (nytt_värde) {
    Goat_Y = nytt_värde
}
export function U_change (nytt_värde) {
    U = nytt_värde
}
export function M_change (nytt_värde) {
    M= nytt_värde
}
export {death_zone, deaths, FatGnomeDeathCounter, SpiderTrigger, GnomeHitbox, flames, flames_image_height}
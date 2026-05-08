import {map, map_2, draw_map, WallHitbox, WallHitbox_clear, ground, ground_clear} from "./Map"
import {death_zone, death_zone_clear, SpiderAttack_1, SpiderAttack_2, GnomeAttack, explosion, explosionsound, FatGnomeDeathCounter, deaths, death, SpiderTrigger, GnomeHitbox} from "./Death"

import {FatGnomeDeathCounter_change, deaths_change, Spiderman_change, Spiderman2_change} from "./Death"
let amount_jumps = 2
let amount_dashes = 2
let char_x = 100
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
let StoryTell = 0 // Used once
let Level = 0
let Level_change = true
enum AttackType {
    BigAttack,
    SmallAttack,
    FlyAttack
}

let Boss_Background_Jesus = await fetchImage("images/BossBackground_Jesus.png")
let Boss_Background_NoJesus = await fetchImage("images/BossBackground_NoJesus.jpg")
let Character_RevertedImage = await fetchImage ("images/Character_reverted.png")
let Character_Image = await fetchImage ("images/Character.png")
let flames_image = await fetchImage ("images/Flames.png")
let platform_image = await fetchImage ("images/Platform.png")
let bullet_image = await fetchImage ("images/Bullet.png")
let Gnome = await fetchImage("images/Gnome.png")
let Goat = await fetchImage("images/Goat.png")
let Explosion = await fetchImage("images/explosion.png")
let SpiderSide = await fetchImage("images/SpiderSide.png")

let Spider =  await fetchImage("images/Spider.png")
let Health_bar_image = await fetchImage ("images/Hpbarfinish.png")
let Spit_Projectile = await fetchImage ("images/Spit_Projectile.png")
let bossDefault = await fetchImage ("images/PearBoss.png")
let bossSpit = await fetchImage ("images/bossSpit.png")
let bossSlamAttack = await fetchImage ("images/bossSlamAttack.png")
let bossLeftArm = await fetchImage ("images/LeftArm.png")
let bossRightArm = await fetchImage ("images/RightArm.png")
let bossLicking_under = await fetchImage("images/bossLicking_under.png")
let bossLicking_over = await fetchImage("images/bossLicking_over.png") 
let bossTongue = await fetchImage("images/Tongue.png")
let Talbubbla = await fetchImage ("images/Talbubbla.png")
let Jesus = await fetchImage ("images/JesusFckingChrist.png")

let FatGnome = await fetchImage("images/FatGnome.png")
let DrDisrespect = await fetchImage("images/The2TimeBackToBack19931994BlockBusterVideoGameChampion.png")
let DrDisrespectLaugh = await fetchImage("images/The2TimeBackToBack19931994BlockBusterVideoGameChampionLaugh.png")
let FatGnomeLaugh = await fetchImage("images/GnomeFatLaugh.png")
let FatGnomeTrigger = new Hitbox(150,350,100,150)    
//let FatGnomeDeathCounter = 0  
let Trashtalking = false
let GnomeWhichTrashTalk = 0
let Trashtalk_timer = 0

let HellBombHitbox = new Hitbox(2000000,0,W,H)
let GoatHellBomb = true
let GoatHellBombTimer = 0
let GoatTrigger = false
let GoatNumber = 0
let Goat_Y = 600


let U = 0 // Used for goat trigger
let u = 0 // Used for 2nd Goat trigger
let g = 0 // used for explosion to stay active for a while
let b = 0 // used for audio of explosion
let B = 0 // Used for the Godzilla Sound
let G = 0 // Used for audio of Gnome
let V = 0 // Used for Gnome delay
let J = 0 // Used for  SpiderAttack2 audio delay
let M = 0 // Used for Hellbomb activation
let GnomeWOO = new Audio('Audio/GnomeWOO.mp3') 
let ExplosionSound = new Audio('Audio/loud-explosion.mp3')
let Godzilla = new Audio('Audio/Godzilla.mp3')
let Idiot = new Audio('Audio/you-are-an-idiot.mp3')
let Pathetic = new Audio('Audio/drdisrespect_patheticguy_by_taihplays_on_twitch.mp3')
let IdiotKid = new Audio('Audio/drdisrespect_getthisidiotkidoutofhere_by_taihplays_on_twitch.mp3')
let Doc19931994 = new Audio('Audio/The2TimeBackToBack19931994BlockBusterVideoGameChampion.mp3')

let BoratSong = new Audio('Audio/Borats Disco Dance .mp3')
let Goat_Simulator_Theme = new Audio('Audio/GoatSimulatorTheme.mp3')
let CP_Åke = new Audio('Audio/CP-ÅKE.mp3')
let BakaLam = new Audio ('Audio/BakaLam.mp3')
let LOL = new Audio ('Audio/GameOverSongIWBTB.mp3')
let Badger = new Audio('Audio/BadgerBadgerBadgerBadgerBadgerBadgerBadgerBadgerBadgerBadgerBadgerBadgerBadgerBadgerBadgerBadgerBadger.mp3')
let World1IWBTB = new Audio('Audio/World1IWBTB.mp3')
let CoconutSong = new Audio('Audio/CoconutSong.mp3')
let OOGABOOGA = new Audio('Audio/OOGABOOGA.mp3')
let BOOGAOOGA = new Audio('Audio/BOOGAOOGA.mp3')
let FatAnkles = new Audio('Audio/FatAnkles.mp3')
let Terrible = new Audio('Audio/DrTerrible.mp3')
let WayBetter = new Audio('Audio/WayBetter.mp3')
let Slicing = new Audio('Audio/slicing.mp3')
let Raul = new Audio('Audio/Raul.mp3')
let Motorcycle = new Audio('Audio/Motorcycle.mp3')
let GetTFOut = new Audio('Audio/GetTFOut.mp3')
let Arena = new Audio('Audio/Arena.mp3')
let Boner = new Audio('Audio/Boner.mp3')
let BodyTrashTalk = new Audio('Audio/BodyTrashTalk.mp3')
let WakeUp = new Audio('Audio/WakeUp.mp3')
let Dolphin = new Audio('Audio/Dolphin.mp3')    
let GoatBaaah = new Audio('Audio/baah.mp3')
let HellBombSound = new Audio('Audio/Hellbomb.mp3')
//let audio = new Audio('audio_file.mp3');
//audio.play();

let music_1 = false
let music_2 = false
let music_3 = false
let music_4 = false 
let music_5 = false
let music_6 = false
let music_7 = false
let music_8 = false
let music_9 = false
let music_0 = false
let music_CP = false


let wall: Hitbox[] = []
let shotStop = {"left": new Hitbox (-100, 0, 100, H),
                "right": new Hitbox (W, 0, 100, H)
}
let shots = []
//let deaths = 0

let Health_bar_width = W-842
let boss = new Hitbox(1150, H, 100, 250)
let boss_Health = 200
let boss_Attack_hitboxes= []
let boss_Currently_Attacking = true
let boss_Which_attack = 0
let boss_Blow_attack = 0
let boss_timer = 0
let blow_timer = 0
let blowing = false
let Arms_first_y = -200
let Arms_second_y = -50
let Jesus_y = -150

let flames =  new Hitbox (0, 1050, 250, 70)
let flames_image_height = 1000



let Platform_1 = new Sprite(platform_image, 1, 1)
Platform_1.y = 300
Platform_1.x = 275
Platform_1.width = 50
Platform_1.height = 25


let Platform_2 = new Sprite(platform_image, 1, 1)
Platform_2.y = 300
Platform_2.x = 550
Platform_2.width = 50
Platform_2.height = 25  


let Platform_3 = new Sprite(platform_image, 1, 1)
Platform_3.y = 499
Platform_3.x = 825
Platform_3.width = 50
Platform_3.height = 25  

function Hellbomb() {if(GoatNumber == 1 && M == 0 ) {
    HellBombSound.play()
        M = 0
}}
function GoatAttack() {
  
    for(let i = 0; i < 10;i++) {
    u = u + 1
  }
  if(u == 10 && GoatNumber != 1) {
    GoatNumber = random(0,200) //changing this will change how often goat attack will happen
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
} if (GoatHellBombTimer > 100) {
    GoatTrigger = false
    GoatHellBombTimer = 0
    GoatHellBomb = true
    Goat_Y = 600
    GoatNumber = 0
    M = 0
    jump_time = 0
    HellBombHitbox.x = 200000
    if(HellBombHitbox.x > 0) { 
        char_x = 100
        char_y = 400
}
}
    if(GoatTrigger && U == 0) {
        U = 0
        GoatBaaah.play()
    }

}
function TrashTalk() {
if(Level == 0 && !character.intersects(FatGnomeTrigger) && Trashtalking == false) {
ctx.drawImage(FatGnome, 55, 344, 275, 125)
ctx.drawImage(DrDisrespect, 150,340,83,83)
}
else if(character.intersects(FatGnomeTrigger) && StoryTell == 0 && Level == 0 || Trashtalking == true) {
ctx.drawImage(FatGnomeLaugh,55,344,275,125) // Story voiceline here
ctx.drawImage(DrDisrespectLaugh, 150,340,83,83)
}
for(let i = 0; i<death_zone.length; i++){
if(character.intersects(death_zone[i]) && FatGnomeDeathCounter > 9) {
GnomeWhichTrashTalk = random(16,16)
Trashtalking = true
FatGnomeDeathCounter_change (0)
}
if (Trashtalking == true) {
ctx.drawImage(Talbubbla, 200, 305, 120, 90)
Trashtalk_timer += deltaTime/100
if (Trashtalk_timer > 4000) {
    Trashtalking = false
    Trashtalk_timer = 0
}
if (GnomeWhichTrashTalk == 1) {
    FatAnkles.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 2350
}
else if (GnomeWhichTrashTalk == 2) {
    Idiot.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 2500
}
else if (GnomeWhichTrashTalk == 3) {
    Pathetic.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 3000
}
else if (GnomeWhichTrashTalk == 4) {
    IdiotKid.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 3150
}
else if (GnomeWhichTrashTalk == 5) {
    Terrible.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 3650
}
else if (GnomeWhichTrashTalk == 6) {
    Doc19931994.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = -1000
}
else if (GnomeWhichTrashTalk == 7) {
    Raul.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 3600
}
else if (GnomeWhichTrashTalk == 8) { 
    Slicing.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 3400
}
else if (GnomeWhichTrashTalk == 9) {
    WayBetter.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 1700
}
else if (GnomeWhichTrashTalk == 10) {
    GetTFOut.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 3150
}
else if (GnomeWhichTrashTalk == 11) {
    Arena.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 3150
}
else if (GnomeWhichTrashTalk == 12) {
    BodyTrashTalk.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 1500
}
else if (GnomeWhichTrashTalk == 13) {
    Dolphin.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 3000
}
else if (GnomeWhichTrashTalk == 14) {
    Boner.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 3000
}   
else if (GnomeWhichTrashTalk == 15) {
    Motorcycle.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = -600
}
else if (GnomeWhichTrashTalk == 16) {
    WakeUp.play()
    GnomeWhichTrashTalk = 0
    Trashtalk_timer = 3000
}

}
}
}      

function Background_music () {
    if (keyboard.one) {
        music_0 = false
        music_1 = true
        music_2 = false
        music_3 = false
        music_4 = false
        music_5 = false
        music_6 = false
        music_7 = false
        music_8 = false
        music_9 = false
        music_CP = false
    } else if (keyboard.two) {
        music_0 = false
        music_1 = false
        music_2 = true
        music_3 = false
        music_4 = false
        music_5 = false
        music_6 = false
        music_7 = false
        music_8 = false
        music_9 = false
        music_CP = false
    } else if (keyboard.three) {
        music_0 = false
        music_1 = false
        music_2 = false
        music_3 = true
        music_4 = false
        music_5 = false
        music_6 = false
        music_7 = false
        music_8 = false
        music_9 = false
        music_CP = false
    } else if (keyboard.four) {
        music_0 = false
        music_1 = false
        music_2 = false
        music_3 = false
        music_4 = true
        music_5 = false
        music_6 = false
        music_7 = false
        music_8 = false
        music_9 = false
        music_CP = false
    } else if (keyboard.five) {
        music_0 = false
        music_1 = false
        music_2 = false
        music_3 = false
        music_4 = false
        music_5 = true
        music_6 = false
        music_7 = false
        music_8 = false
        music_9 = false
        music_CP = false
    } else if (keyboard.six) {
        music_0 = false
        music_1 = false
        music_2 = false
        music_3 = false
        music_4 = false
        music_5 = false
        music_6 = true
        music_7 = false
        music_8 = false
        music_9 = false
        music_CP = false
    } else if (keyboard.seven) {
        music_0 = false
        music_1 = false
        music_2 = false
        music_3 = false
        music_4 = false
        music_5 = false
        music_6 = false
        music_7 = true
        music_8 = false
        music_9 = false
        music_CP = false
    } else if (keyboard.eight) {
        music_0 = false
        music_1 = false
        music_2 = false
        music_3 = false
        music_4 = false
        music_5 = false
        music_6 = false
        music_7 = false
        music_8 = true
        music_9 = false
        music_CP = false
    } else if (keyboard.nine) {
        music_0 = false
        music_1 = false
        music_2 = false
        music_3 = false
        music_4 = false
        music_5 = false
        music_6 = false
        music_7 = false
        music_8 = false
        music_9 = true
        music_CP = false
    } else if (keyboard.zero) {
        music_0 = true
        music_1 = false
        music_2 = false
        music_3 = false
        music_4 = false
        music_5 = false
        music_6 = false
        music_7 = false
        music_8 = false
        music_9 = false
        music_CP = false
    } 
    else if (keyboard.c && keyboard.p) {
        music_CP = true
        music_0 = false
        music_1 = false
        music_2 = false
        music_3 = false
        music_4 = false
        music_5 = false
        music_6 = false
        music_7 = false
        music_8 = false
        music_9 = false
    }
    if (music_1) {
        BoratSong.play()
        Goat_Simulator_Theme.pause()
        CP_Åke.pause()
        BakaLam.pause()
        LOL.pause()
        Badger.pause()
        World1IWBTB.pause()
        CoconutSong.pause()
        OOGABOOGA.pause()
        BOOGAOOGA.pause()
    } else if (music_2) {
        Goat_Simulator_Theme.play()
        BoratSong.pause()
        CP_Åke.pause()
        BakaLam.pause()
        LOL.pause()
        Badger.pause()
        World1IWBTB.pause()
        CoconutSong.pause()
        OOGABOOGA.pause()
        BOOGAOOGA.pause()
    } else if (music_3) {
        BakaLam.play()
        Goat_Simulator_Theme.pause()
        BoratSong.pause()
        CP_Åke.pause()
        LOL.pause()
        Badger.pause()
        World1IWBTB.pause()
        CoconutSong.pause()
        OOGABOOGA.pause()
        BOOGAOOGA.pause()
    } else if (music_4) {
        LOL.play()
        Goat_Simulator_Theme.pause()
        BoratSong.pause()
        CP_Åke.pause()
        BakaLam.pause()
        Badger.pause()
        World1IWBTB.pause()
        CoconutSong.pause()
        OOGABOOGA.pause()
        BOOGAOOGA.pause()
    } else if (music_5) {
        LOL.pause()
        Goat_Simulator_Theme.pause()
        BoratSong.pause()
        CP_Åke.pause()
        BakaLam.pause()
        Badger.play()
        World1IWBTB.pause()
        CoconutSong.pause()
        OOGABOOGA.pause()
        BOOGAOOGA.pause()
    } else if (music_6) {
        LOL.pause()
        Goat_Simulator_Theme.pause()
        BoratSong.pause()
        CP_Åke.pause()
        BakaLam.pause()
        Badger.pause()
        World1IWBTB.play()
        CoconutSong.pause()
        OOGABOOGA.pause()
        BOOGAOOGA.pause()
    } else if (music_7) {
        LOL.pause()
        Goat_Simulator_Theme.pause()
        BoratSong.pause()
        CP_Åke.pause()
        BakaLam.pause()
        Badger.pause()
        World1IWBTB.pause()
        CoconutSong.play()
        OOGABOOGA.pause()
        BOOGAOOGA.pause()
    } else if (music_8) {
        LOL.pause()
        Goat_Simulator_Theme.pause()
        BoratSong.pause()
        CP_Åke.pause()
        BakaLam.pause()
        Badger.pause()
        World1IWBTB.pause()
        CoconutSong.pause()
        OOGABOOGA.play()
        BOOGAOOGA.pause()
    } else if (music_9) {
        LOL.pause()
        Goat_Simulator_Theme.pause()
        BoratSong.pause()
        CP_Åke.pause()
        BakaLam.pause()
        Badger.pause()
        World1IWBTB.pause()
        CoconutSong.pause()
        OOGABOOGA.pause()
        BOOGAOOGA.play()
    } else if (music_0) {
        LOL.play()
        Goat_Simulator_Theme.play()
        BoratSong.play()
        CP_Åke.play()
        BakaLam.play()
        Badger.play()
        World1IWBTB.play()
        CoconutSong.play()
        OOGABOOGA.play()
        BOOGAOOGA.play()
    } 
    else if (music_CP) {
        CP_Åke.play()
        BoratSong.pause()
        Goat_Simulator_Theme.pause()
        BakaLam.pause()
        LOL.pause()
        Badger.pause()
        World1IWBTB.pause()
        CoconutSong.pause()
        OOGABOOGA.pause()
        BOOGAOOGA.pause()
    }
}


//function map_2() {
    if (boss_Which_attack != 2) {
        ctx.drawImage (Boss_Background_Jesus, 0, 0, W, H) 
    } else if (boss_Which_attack == 2) {
        ctx.drawImage (Boss_Background_NoJesus, 0, 0, W, H)
    }
//}
function Platform_move () {
    
        Platform_1.y -= 1
        if (Platform_1.y < 200) {
            Platform_1.y = 500
        }
    
        Platform_2.y += 2 
       if (Platform_2.y > 500) {
        Platform_2.y = 200
       }
    
 
        Platform_3.y -= 1
        if (Platform_3.y < 200) {
            Platform_3.y = 500
        }
    }

//first attack
let B_attack_1 = false
let B_attack_1_hitboxes = true
//second attack
let B_attack_2_timer = 0
let attack_2 = false
let Arms_firstImage = false
let Arms_secondImage = false
// third attack
let B_attack_3_timer = 0
let B_attack_3 = false
let B_moving_left = false
let B_moving_right = false
let B_return = false
let B_Spider_y = -1000
  




// Wall hitboxes
wall.push(new Hitbox(0, 475, 250,200))
wall.push(new Hitbox(1025, 475, 250, 200))

//Death zone
//let death_zone_floor = new Hitbox (-1000, 600, 3200, 200)

for (let i = 0; i<=51; i++) { //ground hitboxes
if(i<10 || i>40 ) {
    ground.push(new Hitbox (i*25 ,450,25,25))
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
    


function walk () { //standard movement in x-axis
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
//hitbox.drawOutline()


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
        //boss_Blow_attack = random(1, 5)
        boss_timer = 0
        attack_2 = true
        B_attack_1_hitboxes = true
        B_attack_3_timer = 0
}
/*if (boss_Blow_attack == 1 && boss_Health > 0){
    blowing = true
}*/


if (boss_Which_attack == 1 && boss_Health > 0) {
    if (boss.y < 0 ) {
        B_attack_1 = true
    }
    if (!B_attack_1 ) {
        boss.y -= 3

    } else {boss.y += 5

    }
        
    
    if (boss.y > 205){
        boss.y = 200

        boss_Which_attack = 0
        boss_Currently_Attacking= true
        B_attack_1_hitboxes = true
        B_attack_1 = false
        boss_timer = 10
    }
    if(B_attack_1_hitboxes) {
       
   ctx.drawImage(bossSpit, boss.x, boss.y, boss.width, boss.height)
        
   boss_Attack_hitboxes.push({
        "hitbox": new Hitbox(1150, 325, 125, 125),
        "hitbox2": new Hitbox(1150 + 600, 200, 125, 125),
        "hitbox3": new Hitbox(1150 + 1200, 75, 125, 125),
        "type": AttackType.SmallAttack 
    })
    
    B_attack_1_hitboxes = false
    }
        
   
    
} 
else if(boss_Which_attack == 2 && boss_Health > 0) {
    B_attack_2_timer += deltaTime/100
    ctx.drawImage(Jesus, 420, Jesus_y, 300, 250)
    Platform_2.draw()
    if(Jesus_y < 120) {
        Jesus_y += 8
    }
    if (attack_2) {
            
            if (B_attack_2_timer < 10) {
                Arms_firstImage = true
                
            }  
        }
        attack_2 = false
                
        if (B_attack_2_timer > 14 ) {
            Arms_firstImage = false
            Arms_secondImage = true
            
            boss_Attack_hitboxes.push ({
                "hitbox":new Hitbox (275, 0, 50, 1000),
                "hitbox2": new Hitbox (550, 0, 50, 1000),
                "hitbox3": new Hitbox (825, 0, 50, 1000),
                "type": AttackType.BigAttack
            })
        }
        if (B_attack_2_timer > 20) {
            boss_Attack_hitboxes = []
            B_attack_2_timer= 0
            boss_Which_attack = 0
            Arms_secondImage = false
            Jesus_y = -150
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
        "hitbox_leftWall": new Hitbox (0, 0, 230, 0),
        "hitbox_rightWall": new Hitbox (1045, 0, 300, 0),
        "type": AttackType.FlyAttack}) 
         
    } }  
    if(B_attack_3_timer >37){
        B_attack_3_timer = 0
        B_moving_left = false
        B_moving_right = false
        
        B_return = true
    }



}

let Next_level = new Hitbox (W-100, 350, 100, 100)

update = () => {
    clear()
    if (character.intersects(HellBombHitbox)) {
        deaths++
        char_y = -10000000000000000000
        
    }
    FatGnomeTrigger.drawOutline()
    for(let i = 0; i < death_zone.length; i ++){
        death_zone[i].drawOutline()
    }



    SpiderTrigger.drawOutline()
    GnomeHitbox.drawOutline()
    if (Level == 0) {map()}
    if (Level == 1) {map_2()}
    GoatAttack()
    Hellbomb()
    GnomeAttack()
    SpiderAttack_1()
    SpiderAttack_2()
    explosion()
    explosionsound()
    if(character.intersects(SpiderTrigger)) { 
        Spiderman_change (true)
        Spiderman2_change (true)
    }
    death()
    
    
    
    
    
        for(let i = 0; i < WallHitbox.length; i++) {
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
            //--------------
    if (character.intersects(Next_level) || keyboard.s && keyboard.v && keyboard.e && keyboard.n && Level == 0) {
        Level++
        char_x = 50
        char_y = 400
    }
    //Next_level.drawOutline()
    
    if (boss_Which_attack == 2 && boss_Health > 0) {
       
        let blow_hitbox = new Hitbox (0, -10, W, H+10)

        blow_timer += deltaTime/100
        
        if (character.intersects(blow_hitbox)) {
            char_x -= 1,5
        }
        if (blow_timer > 30) {
            blowing = false
            blow_timer = 0
        }
    }
    
   
   
    if (Level == 1) {
        
        rectangle(410, 112, W-842, 25, "black")
        rectangle(410, 112, Health_bar_width, 25, "darkgreen")
        ctx.drawImage(Health_bar_image, 340, 30, 550, 200)
        text ("Sven in his dreams", 410, 102, 30 )
        
        
        if(Level_change){
            boss.y = 200
            ground_clear()
            WallHitbox_clear()
            death_zone_clear()
            ground.push(Platform_1)
            ground.push(Platform_2)
            ground.push(Platform_3)
            ground.push(new Hitbox(0, 450, 250, 25))
            ground.push(new Hitbox(1025, 450, 250, 25))

            gravity = 1200
            gravity_2_jump = -300
            fall_gravity = 800
            SpiderTrigger.y = 200000
            GnomeHitbox.y = 200000

    }
        Level_change = false
        ctx.drawImage (flames_image, 0, flames_image_height, 250, 120)
        Platform_move()
        Platform_1.draw()
        Platform_2.draw()
        Platform_3.draw()
        
        if(boss_Health > 0) {boss_Attacks()}
    
    }
    
    if (char_x > 250 && Level == 1) {
        flames.y = 430
        flames_image_height = 350
    }

 
    text ("Death count: " + deaths, 10, 20,15,"White") // a visible death count
    
    
    for(let i = 0; i < boss_Attack_hitboxes.length; i++) {
        if (boss_Health < 0) {// makes the boss disappear
            boss.y = 20000
            Arms_first_y = 200000
            Arms_second_y = 200000

            boss_Attack_hitboxes = []
            //just to make so boss doesn't move continuously
        } else if (boss_Health > 0 && boss_Which_attack != 3 && !AttackType.FlyAttack) {
            boss.y = 200
        } 
}
    
   
    // boss_Attacks
    boss.drawOutline()
    if (boss_Which_attack == 0) {
        ctx.drawImage(bossDefault, boss.x - 135 , boss.y - 70, 250, 350)
    }else if (boss_Which_attack == 1) {
        ctx.drawImage(bossSpit, boss.x - 135 , boss.y - 70, 250, 350)
    }else if (boss_Which_attack == 2) {
        ctx.drawImage(bossSlamAttack, boss.x - 200 , boss.y -240, 375, 515)
    }else if (boss_Which_attack == 3) {
        ctx.drawImage(bossDefault, boss.x - 135 , boss.y - 70, 250, 350)

    } 

    if (Arms_firstImage == true) {
        ctx.drawImage (bossRightArm, 250, Arms_first_y, 100, 300)
        ctx.drawImage (bossLeftArm, 800, Arms_first_y, 100, 300)
    } 
    if (Arms_secondImage == true) {
        ctx.drawImage (bossRightArm, 250, Arms_second_y, 100, 630)
        ctx.drawImage (bossLeftArm, 800, Arms_second_y, 100, 630)
    }

    for(let i = 0; i < boss_Attack_hitboxes.length; i++) {
  
        
        if (boss_Attack_hitboxes[i]["type"] == AttackType.FlyAttack ){
            boss_Attack_hitboxes[i]["hitbox_rightWall"].height += 20 
            boss_Attack_hitboxes[i]["hitbox_leftWall"].height += 20
            
            boss_Attack_hitboxes[i]["hitbox2"].drawOutline()
            boss_Attack_hitboxes[i]["hitbox_rightWall"].drawOutline()
            boss_Attack_hitboxes[i]["hitbox_leftWall"].drawOutline()
            B_attack_3_timer += deltaTime/100
           //left small spiders
            ctx.drawImage(Spider, 10, B_Spider_y - 500, 100, 50)
            ctx.drawImage(Spider, 20, B_Spider_y + 100, 100, 50)
            ctx.drawImage(Spider, 130, B_Spider_y + 500, 100, 50)
            ctx.drawImage(Spider, 40, B_Spider_y - 200, 100, 50)
            ctx.drawImage(Spider, 50, B_Spider_y + 800, 100, 50)
            ctx.drawImage(Spider, 120, B_Spider_y -700, 100, 50)
            ctx.drawImage(Spider, 70, B_Spider_y - 1000, 100, 50)
            ctx.drawImage(Spider, 80, B_Spider_y + 1000, 100, 50)
            ctx.drawImage(Spider, 90, B_Spider_y - 500, 100, 50)
            ctx.drawImage(Spider, 100, B_Spider_y + 300, 100, 50)
            ctx.drawImage(Spider, 20, B_Spider_y, 100, 50)
            ctx.drawImage(Spider, 120, B_Spider_y + 200, 100, 50)
            ctx.drawImage(Spider, 110, B_Spider_y - 100, 100, 50)
            ctx.drawImage(Spider, 130, B_Spider_y + 700, 100, 50)
            ctx.drawImage(Spider, 30, B_Spider_y - 200, 100, 50)
            ctx.drawImage(Spider, 140, B_Spider_y - 700, 100, 50)
            ctx.drawImage(Spider, 10, B_Spider_y - 1200, 100, 50)
            ctx.drawImage(Spider, 130, B_Spider_y - 1300, 100, 50)
            ctx.drawImage(Spider, 30, B_Spider_y - 1500, 100, 50)
            ctx.drawImage(Spider, 40, B_Spider_y - 1550, 100, 50)
            ctx.drawImage(Spider, 20, B_Spider_y - 1700, 100, 50)
            ctx.drawImage(Spider, 60, B_Spider_y - 1800, 100, 50)
            ctx.drawImage(Spider, 120, B_Spider_y - 2000, 100, 50)
            ctx.drawImage(Spider, 80, B_Spider_y - 2100, 100, 50)
            ctx.drawImage(Spider, 90, B_Spider_y - 2150, 100, 50)
            ctx.drawImage(Spider, 100, B_Spider_y - 2300, 100, 50)
            ctx.drawImage(Spider, 20, B_Spider_y - 2400, 100, 50)
            ctx.drawImage(Spider, 120, B_Spider_y - 1100, 100, 50)
            ctx.drawImage(Spider, 110, B_Spider_y - 2500, 100, 50)
            ctx.drawImage(Spider, 130, B_Spider_y - 2700, 100, 50)
            ctx.drawImage(Spider, 30, B_Spider_y - 2800, 100, 50)
            ctx.drawImage(Spider, 140, B_Spider_y - 3000, 100, 50)
            
            // right small spiders
            ctx.drawImage(Spider, W-110, B_Spider_y - 500, 100, 50)
            ctx.drawImage(Spider, W-120, B_Spider_y + 100, 100, 50)
            ctx.drawImage(Spider, W-220, B_Spider_y + 500, 100, 50)
            ctx.drawImage(Spider, W-140, B_Spider_y - 200, 100, 50)
            ctx.drawImage(Spider, W-150, B_Spider_y + 800, 100, 50)
            ctx.drawImage(Spider, W-190, B_Spider_y -700, 100, 50)
            ctx.drawImage(Spider, W-170, B_Spider_y - 1000, 100, 50)
            ctx.drawImage(Spider, W-180, B_Spider_y + 1000, 100, 50)
            ctx.drawImage(Spider, W-190, B_Spider_y - 500, 100, 50)
            ctx.drawImage(Spider, W-200, B_Spider_y + 300, 100, 50)
            ctx.drawImage(Spider, W-120, B_Spider_y, 100, 50)
            ctx.drawImage(Spider, W-220, B_Spider_y + 200, 100, 50)
            ctx.drawImage(Spider, W-210, B_Spider_y - 100, 100, 50)
            ctx.drawImage(Spider, W-230, B_Spider_y + 700, 100, 50)
            ctx.drawImage(Spider, W-130, B_Spider_y - 200, 100, 50)
            ctx.drawImage(Spider, W-210, B_Spider_y - 700, 100, 50)
            ctx.drawImage(Spider, W-110, B_Spider_y - 1200, 100, 50)
            ctx.drawImage(Spider, W-130, B_Spider_y - 1300, 100, 50)
            ctx.drawImage(Spider, W-130, B_Spider_y - 1500, 100, 50)
            ctx.drawImage(Spider, W-140, B_Spider_y - 1550, 100, 50)
            ctx.drawImage(Spider, W-120, B_Spider_y - 1700, 100, 50)
            ctx.drawImage(Spider, W-160, B_Spider_y - 1800, 100, 50)
            ctx.drawImage(Spider, W-210, B_Spider_y - 2000, 100, 50)
            ctx.drawImage(Spider, W-180, B_Spider_y - 2100, 100, 50)
            ctx.drawImage(Spider, W-190, B_Spider_y - 2150, 100, 50)
            ctx.drawImage(Spider, W-200, B_Spider_y - 2300, 100, 50)
            ctx.drawImage(Spider, W-120, B_Spider_y - 2400, 100, 50)
            ctx.drawImage(Spider, W-220, B_Spider_y - 1100, 100, 50)
            ctx.drawImage(Spider, W-210, B_Spider_y - 2500, 100, 50)
            ctx.drawImage(Spider, W-230, B_Spider_y - 2700, 100, 50)
            ctx.drawImage(Spider, W-120, B_Spider_y - 2800, 100, 50)
            ctx.drawImage(Spider, W-180, B_Spider_y - 3000, 100, 50)
        B_Spider_y += 20
           
            if (boss_Attack_hitboxes[i]["hitbox"].y > H-100 && !B_return) 
                {
                    boss_Attack_hitboxes[i]["hitbox"].y -= 10
                    ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x - 130, boss_Attack_hitboxes[i]["hitbox"].y- 220, 370, 250)
                    ctx.drawImage(bossTongue, boss_Attack_hitboxes[i]["hitbox2"].x - 70, boss_Attack_hitboxes[i]["hitbox2"].y - 50, 220, 500)
                    ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x - 30, boss_Attack_hitboxes[i]["hitbox"].y + 30 , 150, 80)
                   
                }

            if(boss_Attack_hitboxes[i]["hitbox2"].y > 200)
                {boss_Attack_hitboxes[i]["hitbox2"].y -= 10
                 boss_Attack_hitboxes[i]["hitbox2"].height += 10
                 ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x - 130, boss_Attack_hitboxes[i]["hitbox"].y - 220, 370, 250)
                 ctx.drawImage(bossTongue, boss_Attack_hitboxes[i]["hitbox2"].x - 70, boss_Attack_hitboxes[i]["hitbox2"].y - 50, 220, 500)
                 ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x - 30 , boss_Attack_hitboxes[i]["hitbox"].y + 30 , 150, 80)
                 
                }
            else if(boss_Attack_hitboxes[i]["hitbox2"].y < 193 && B_moving_right == false){
                B_moving_left = true
                ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x - 130, boss_Attack_hitboxes[i]["hitbox"].y - 220, 370, 250)
                ctx.drawImage(bossTongue, boss_Attack_hitboxes[i]["hitbox2"].x - 70, boss_Attack_hitboxes[i]["hitbox2"].y - 50, 220, 500)
                ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x - 30, boss_Attack_hitboxes[i]["hitbox"].y + 30 , 150, 80)    
                
            }
                    
            if (B_moving_left) {
                boss_Attack_hitboxes[i]["hitbox"].x -= 7
                boss_Attack_hitboxes[i]["hitbox2"].x -= 7
                if (boss_Attack_hitboxes[i]["hitbox"].x < 250) {
                    B_moving_left = false
                    B_moving_right = true                 
                }
                ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x - 130, boss_Attack_hitboxes[i]["hitbox"].y - 220, 370, 250)
                ctx.drawImage(bossTongue, boss_Attack_hitboxes[i]["hitbox2"].x - 70, boss_Attack_hitboxes[i]["hitbox2"].y - 50, 220, 500)
                ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x - 30, boss_Attack_hitboxes[i]["hitbox"].y + 30 , 150, 80)
                
            } else if (B_moving_right) {
                boss_Attack_hitboxes[i]["hitbox"].x += 7
                boss_Attack_hitboxes[i]["hitbox2"].x += 7
                if (boss_Attack_hitboxes[i]["hitbox"].x > 900){
                    B_moving_right = false
                    B_moving_left = true
                }
                ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x - 130, boss_Attack_hitboxes[i]["hitbox"].y - 220, 370, 250)
                ctx.drawImage(bossTongue, boss_Attack_hitboxes[i]["hitbox2"].x - 70, boss_Attack_hitboxes[i]["hitbox2"].y - 50, 220, 500)
                ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x - 30, boss_Attack_hitboxes[i]["hitbox"].y + 30 , 150, 80)

            }   
            if (character.intersects(boss_Attack_hitboxes[i]["hitbox"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox2"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox_leftWall"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox_rightWall"])) {
                char_x = 50
                char_y = 400
                deaths_change(deaths+1)
                boss_Health = 200
                boss_Attack_hitboxes[i]["hitbox"].x =500
                boss_Attack_hitboxes[i]["hitbox2"].x =525
                boss_Attack_hitboxes.shift()
                flames.y = 1000
                flames_image_height = 1000
                Health_bar_width = W-842
                boss_Currently_Attacking = true
                Goat_Y = 600
                if (Level == 1 && boss_Health > 0) {
                boss.y = 200
                Arms_first_y = -200
                Arms_second_y = -50
                } 
            } 
            if (B_return) {
                
                boss_Attack_hitboxes[i]["hitbox"].y += 10
                boss_Attack_hitboxes[i]["hitbox2"].y += 100
                boss_Attack_hitboxes[i]["hitbox"].x += 0
                boss_Attack_hitboxes[i]["hitbox2"].x += 0
                
                if (boss_Attack_hitboxes[i]["hitbox"].y > H+10 && boss.y < 200){
                    boss.y += 10
                    boss_Attack_hitboxes[i]["hitbox_leftWall"].x = 20000
                    boss_Attack_hitboxes[i]["hitbox_rightWall"].x = 20000
                    ctx.drawImage(bossLicking_over, boss_Attack_hitboxes[i]["hitbox"].x, boss_Attack_hitboxes[i]["hitbox"].y, 200, 150)
                    ctx.drawImage(bossLicking_under, boss_Attack_hitboxes[i]["hitbox"].x, boss_Attack_hitboxes[i]["hitbox"].y , 200, 150)
                }else if (boss.y > 200){
                    boss_Attack_hitboxes[i]["hitbox"].x =500
                    boss_Attack_hitboxes[i]["hitbox2"].x =525
                      boss_Attack_hitboxes.pop()
                      B_Spider_y = -1000
                      boss_Currently_Attacking = true
                      boss_timer = 10
                      B_return = false
                      B_attack_3_timer = 0
                    }
            
            }
                
        }

       

        else if (boss_Attack_hitboxes[i]["type"] == AttackType.BigAttack ){
            boss_Attack_hitboxes[i]["hitbox2"].drawOutline()
            

            
            if (character.intersects(boss_Attack_hitboxes[i]["hitbox"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox2"])  || character.intersects(boss_Attack_hitboxes[i]["hitbox3"])){
                char_x = 50
                char_y = 400
                deaths_change (deaths + 1)
                boss_Health = 200
                boss_Attack_hitboxes.shift()
                flames.y = 1000
                flames_image_height = 1000
                Health_bar_width = W-842
                Jesus_y = -150
                //Goat_Y = 600
                U = 0
                M = 0
            }
        }
       
        else if ( boss_Attack_hitboxes[i]["type"] == AttackType.SmallAttack ) {

            
            boss_Attack_hitboxes[i]["hitbox"].x -= 15
            boss_Attack_hitboxes[i]["hitbox2"].x -= 15
            boss_Attack_hitboxes[i]["hitbox3"].x -= 15

            ctx.drawImage(Spit_Projectile, boss_Attack_hitboxes[i]["hitbox"].x -10, boss_Attack_hitboxes[i]["hitbox"].y -20, boss_Attack_hitboxes[i]["hitbox"].width + 40, boss_Attack_hitboxes[i]["hitbox"].height + 50)
            ctx.drawImage(Spit_Projectile, boss_Attack_hitboxes[i]["hitbox2"].x -10, boss_Attack_hitboxes[i]["hitbox2"].y -20, boss_Attack_hitboxes[i]["hitbox2"].width + 40, boss_Attack_hitboxes[i]["hitbox2"].height + 50)
            ctx.drawImage(Spit_Projectile, boss_Attack_hitboxes[i]["hitbox3"].x -10, boss_Attack_hitboxes[i]["hitbox3"].y -20, boss_Attack_hitboxes[i]["hitbox3"].width + 40, boss_Attack_hitboxes[i]["hitbox3"].height + 50)

            if (character.intersects(boss_Attack_hitboxes[i]["hitbox"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox2"]) || character.intersects(boss_Attack_hitboxes[i]["hitbox3"])){
                char_x = 50
                char_y = 400
                deaths_change (deaths + 1 )
                boss_Health = 200
                boss.y -= 0
                Health_bar_width = W-842
                if (Level == 1 && boss_Health > 0){
                    boss.y = 200
                    Arms_first_y = -200
                    Arms_second_y = -50
                }
                boss_Currently_Attacking = true
                flames.y = 1000
                flames_image_height = 1000
                Goat_Y = 600
                boss_Attack_hitboxes.shift()
            }
        }
        
       
    } 
  
    
    
    
   
   
   
   
    /*
    for(let i = 0; i < wall.length; i++){
    wall[i].drawOutline()        
    }
    */


    for(let i = 0; i < shots.length; i++){

        if(!shots[i]["direction"]){ // if character is facing right, bullets go right.

        shots[i]["hitbox"].x += 14
        ctx.drawImage(bullet_image, shots[i]["hitbox"].x, shots[i]["hitbox"].y-5, 30, 15)
        } else if (shots[i]["direction"]) { // and vice versa

            shots[i]["hitbox"].x -=14
            ctx.drawImage(bullet_image, shots[i]["hitbox"].x, shots[i]["hitbox"].y -5, 30, 15)
        }
        //shots[i]["hitbox"].drawOutline()
        if (shots[i]["hitbox"].intersects(boss) ) { // if shots hit boss, they disappear and damage it
            shots.shift()
            //console.log("damage")
            boss_Health--
            Health_bar_width -= 2.07
        } else if (shots[i]["hitbox"].intersects(shotStop["left"]) || shots[i]["hitbox"].intersects(shotStop["right"])) {
            shots.shift()
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
        jump_time = gravity_2_jump
        
    }
    else {
        jumping = true
    }
    amount_jumps--
}
    
    TrashTalk()
    Background_music()
    updatePosition()
    updateCharacter(char_x, char_y, character)
} 
 


export {boss_Which_attack, Level, char_x, char_y, character,Health_bar_width, boss, boss_Health, U, M, flames, flames_image_height, boss_Currently_Attacking, boss_Attack_hitboxes}
export function char_x_change(nytt_värde) {
    char_x = nytt_värde
}
export function char_y_change(nytt_värde) {
    char_y = nytt_värde
}
export function Health_bar_width_change (nytt_värde) {
    Health_bar_width = nytt_värde
}
export function U_change(nytt_värde) {
    U = nytt_värde
}
export function M_change(nytt_värde) {
    M = nytt_värde
}
export function jump_time_change(nytt_värde) {
    jump_time = nytt_värde
}
export function boss_Health_change(nytt_värde) {
    boss_Health = nytt_värde
}
export function flames_image_height_change (nytt_värde) {
    flames_image_height = nytt_värde
}
export function boss_Attack_hitboxes_change (nytt_värde) {
boss_Attack_hitboxes = nytt_värde
}
export function boss_Currently_Attacking_change (nytt_värde) {
    boss_Currently_Attacking = nytt_värde
}
export function flames_y_change (nytt_värde) {
    flames.y = nytt_värde
}
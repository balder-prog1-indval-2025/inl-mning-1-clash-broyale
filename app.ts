import {map, map_2, draw_map, WallHitbox, WallHitbox_clear, ground, ground_clear, grassblock1, Dirtblock, Dirtoverlayblock, stoneblock1, lager_3, lager_4} from "./Map"
import {death_zone, death_zone_clear, SpiderAttack_1, SpiderAttack_2, GnomeAttack, explosion, explosionsound, FatGnomeDeathCounter, deaths, death, SpiderTrigger, GnomeHitbox, flames, flames_image_height, GoatAttack, Hellbomb, deaths_change} from "./Death"
import {jump, dash, walk, updateCharacter, updatePosition, character, amount_dashes, amount_jumps, dashing, jumping, char_x, char_y, char_Direction, gravity_2_jump, Platforms, Platform_1, Platform_2, Platform_3} from "./Movement"
import {boss_Attacks, Boss_general, boss_Which_attack, boss, boss_Health, Health_bar_width, boss_Health_change, Health_bar_width_change, boss_y_change, boss_Attack_hitboxes} from "./Boss"

import {FatGnomeDeathCounter_change, Spiderman_change, Spiderman2_change, flames_image_height_change, } from "./Death"
import {char_x_change, char_y_change, jump_time_change, gravity_change, gravity_2_jump_change, fall_gravity_change, movement_x_change, movement_y_change, dash_time_change, jumping_change, dashing_change, amount_dashes_change, amount_jumps_change} from "./Movement"

let StoryTell = 0 // Used once
let Level = 0
let Level_change = true
let Level_2_change = true
enum AttackType {
    BigAttack,
    SmallAttack,
    FlyAttack
}



let Boss_Background_Jesus = await fetchImage("images/BossBackground_Jesus.png")
let Boss_Background_NoJesus = await fetchImage("images/BossBackground_NoJesus.jpg")

let flames_image = await fetchImage ("images/Flames.png")
let bullet_image = await fetchImage ("images/Bullet.png")

let Health_bar_image = await fetchImage ("images/Hpbarfinish.png")

let Talbubbla = await fetchImage ("images/Talbubbla.png")

let FatGnome = await fetchImage("images/FatGnome.png")
let DrDisrespect = await fetchImage("images/The2TimeBackToBack19931994BlockBusterVideoGameChampion.png")
let DrDisrespectLaugh = await fetchImage("images/The2TimeBackToBack19931994BlockBusterVideoGameChampionLaugh.png")
let FatGnomeLaugh = await fetchImage("images/GnomeFatLaugh.png")
let FatGnomeTrigger = new Hitbox(150,350,100,150)    
//let FatGnomeDeathCounter = 0  
let Trashtalking = false
let GnomeWhichTrashTalk = 0
let Trashtalk_timer = 0

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


function TrashTalk() {
if((Level == 0 || Level == 1) && !character.intersects(FatGnomeTrigger) && Trashtalking == false) {
ctx.drawImage(FatGnome, 55, 344, 275, 125)
ctx.drawImage(DrDisrespect, 150,340,83,83)
}
else if(character.intersects(FatGnomeTrigger) && StoryTell == 0 /*&& Level == 0 */|| Trashtalking == true /*|| Level == 1*/) {
ctx.drawImage(FatGnomeLaugh,55,344,275,125) // Story voiceline here
ctx.drawImage(DrDisrespectLaugh, 150,340,83,83)
}

for(let i = 0; i<death_zone.length; i++){
if(FatGnomeDeathCounter > 9) {
GnomeWhichTrashTalk = random(1,16)
Trashtalking = true
FatGnomeDeathCounter_change (0)
}
if (Trashtalking == true) {
ctx.drawImage(Talbubbla, 200, 305, 120, 90)
Trashtalk_timer += deltaTime/100
if(Level == 0) {
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
    Trashtalk_timer = 3400
}
}
 else if(Level == 1) {
    if (Trashtalk_timer > 2470) {
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
        Trashtalk_timer = 2360
    }
    else if (GnomeWhichTrashTalk == 3) {
        Pathetic.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2390
    }
    else if (GnomeWhichTrashTalk == 4) {
        IdiotKid.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2415
    }
    else if (GnomeWhichTrashTalk == 5) {
        Terrible.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2450
    }
    else if (GnomeWhichTrashTalk == 6) {
        Doc19931994.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2135
    }
    else if (GnomeWhichTrashTalk == 7) {
        Raul.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2450
    }
    else if (GnomeWhichTrashTalk == 8) { 
        Slicing.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2444
    }
    else if (GnomeWhichTrashTalk == 9) {
        WayBetter.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2325
    }
    else if (GnomeWhichTrashTalk == 10) {
        GetTFOut.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2410
    }
    else if (GnomeWhichTrashTalk == 11) {
        Arena.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2410
    }
    else if (GnomeWhichTrashTalk == 12) {
        BodyTrashTalk.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2305
    }
    else if (GnomeWhichTrashTalk == 13) {
        Dolphin.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2290
    }
    else if (GnomeWhichTrashTalk == 14) {
        Boner.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2405
    }   
    else if (GnomeWhichTrashTalk == 15) {
        Motorcycle.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2150
    }
    else if (GnomeWhichTrashTalk == 16) {
        WakeUp.play()
        GnomeWhichTrashTalk = 0
        Trashtalk_timer = 2435
    }
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
    
        Platform_1.y -= 2
        if (Platform_1.y < 200) {
            Platform_1.y = 500
        }
    
        Platform_2.y += 2 
       if (Platform_2.y > 500) {
        Platform_2.y = 200
       }
    
 
        Platform_3.y -= 2
        if (Platform_3.y < 200) {
            Platform_3.y = 500
        }
    }

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

function shoot () { // makes hitboxes for bullets 
    
    if (keyboard.enter ) { 
        keyboard.enter = false

        shots.push({
           "hitbox": new Hitbox (char_x + 10, char_y + 5, 20, 10),
           "direction": char_Direction,
           
    })
    
    }
    
}

let Next_level = new Hitbox (W-100, 350, 100, 100)

update = () => {
    clear()
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
    death()

   
    
    if(character.intersects(SpiderTrigger)) { 
        Spiderman_change (true)
        Spiderman2_change (true)
    }

    
    
    
    
    
        for(let i = 0; i < WallHitbox.length; i++) {
            if(character.intersects(WallHitbox[i]) && keyboard.d && !char_Direction && !jumping) {
            char_x_change (char_x -5)
            char_y_change(char_y +2)
            }
            else if(character.intersects(WallHitbox[i]) && keyboard.a && char_Direction && !jumping) {
                char_x_change(char_x + 5)
                char_y_change(char_y +2)
            }
            else if(character.intersects(WallHitbox[i]) && jumping) {
                char_y_change(char_y + 5)
            }
            else if(character.intersects(WallHitbox[i]) && dashing && keyboard.d) {
                char_x_change(char_x -10)
            }
            else if(character.intersects(WallHitbox[i]) && dashing && keyboard.a) {
                char_x_change(char_x + 10)
            }
            
        }
            //--------------
    if (character.intersects(Next_level) || keyboard.s && keyboard.v && keyboard.e && keyboard.n && Level == 0) {
        Level++
        char_x_change(50)
        char_y_change(400)
    }   
   
    if (Level == 1) {
        if (boss_Health > 0) {
            rectangle(410, 112, W-842, 25, "black")
            rectangle(410, 112, Health_bar_width, 25, "darkgreen")
            ctx.drawImage(Health_bar_image, 340, 30, 550, 200)
            text ("Sven in his dreams", 463, 133, 30 )
        }
        
        if(Level_change){
            boss_y_change (200)
            ground_clear()
            WallHitbox_clear()
            death_zone_clear()
            Platforms.push(Platform_1)
            Platforms.push(Platform_2)
            Platforms.push(Platform_3)
            ground.push(new Hitbox(0, 450, 250, 25))
            ground.push(new Hitbox(1025, 450, 250, 25))
            
            death_zone.push(flames)
            death_zone.push (new Hitbox (-1000, H, 3200, 200))
            gravity_change(600)
            gravity_2_jump_change(-100)
            fall_gravity_change(200)
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
        flames_image_height_change(350)
   
    }
//------------------------------------
if (Level == 2) {
    if(Level_2_change){
        boss.y = 20000
        ground.push(new Hitbox(0,450,W,25)),
        WallHitbox_clear()
        death_zone_clear()
        wall = []
        Platform_1.y = 10000
        Platform_2.y = 10000
        Platform_3.y = 10000
        flames.y = 10000

        gravity_change (1200)
        gravity_2_jump_change (-300)
        fall_gravity_change (800)
        SpiderTrigger.y = 200000
        GnomeHitbox.y = 200000
        FatGnomeTrigger.y = 10000

}
    Level_2_change = false
    for (let i = 0; i<=51; i++) {// Determines the length (x-axis) of the map

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
//----------------------
   /* if (character.intersects(death_zone_floor) || keyboard.r || character.intersects(flames)) { // makes it so if you fall of the map or press "R" you die (reset)
        keyboard.r = false
        char_x_change (50)
        char_y_change (400)
        jump_time_change (0)
        deaths_change (deaths + 1)
        boss_Health_change (200)
        Health_bar_width_change (W-842)
        if (Level == 1 && boss_Health > 0){
            boss.y = 200
        } if ( Level == 0) {
            GnomeHitbox.x = 1015
            GnomeHitbox.y=350
        }
        flames.y = 1000
        flames_image_height = 1000
        boss_Attack_hitboxes.shift()
        boss_Currently_Attacking = true
        Spider_hitbox.y = -700
        Spider_y = -700
        SecondSpider_hitbox.x = -14000
        SecondSpider_x = -14025
        Spiderman = false
        Spiderman2 = false
        Spooderman = true
        GoatNumber = 0
        M = 0
        U = 0
        u = 0
    }*/
    text ("Death count: " + deaths, 10, 20,15,"White") // a visible death count
    
    if (boss_Health > 0) {Boss_general()}



    for(let i = 0; i < shots.length; i++){

        if(!shots[i]["direction"]){ // if character is facing right, bullets go right.

        shots[i]["hitbox"].x += 14
        ctx.drawImage(bullet_image, shots[i]["hitbox"].x, shots[i]["hitbox"].y-5, 30, 15)
        } else if (shots[i]["direction"]) { // and vice versa

            shots[i]["hitbox"].x -=14
            ctx.drawImage(bullet_image, shots[i]["hitbox"].x, shots[i]["hitbox"].y -5, 30, 15)
        }

        if (shots[i]["hitbox"].intersects(boss) ) { // if shots hit boss, they disappear and damage it
            shots.shift()

            boss_Health_change(boss_Health -1)
            Health_bar_width_change (Health_bar_width -2.07)
        } else if (shots[i]["hitbox"].intersects(shotStop["left"]) || shots[i]["hitbox"].intersects(shotStop["right"])) {
            shots.shift()
        }
    } 
    shoot()
    draw_map()
    for (let i = 0;  i <= ground.length -1 ; i++) {
        //ground[i].drawOutline()

    }
    movement_x_change(walk() + dash()) // 
    movement_y_change(jump()) 
    if (keyboard.shift && (keyboard.a || keyboard.d)) {
        keyboard.shift = false
        dashing_change(true) 
        
        if(amount_dashes== 1 && dashing){
            dash_time_change(0)
        }
    }
    
    
    
    if (keyboard.space) {
        keyboard.space = false 
        
     if (amount_jumps == 1 && jumping) {
        jump_time_change(gravity_2_jump)
        char_y_change(char_y - 5)
    }
    else {
        char_y_change(char_y - 5)
        jumping_change(true)
    }
    amount_jumps_change(amount_jumps - 1) 
}
    
    TrashTalk()
    Background_music()
    updatePosition()
    updateCharacter(char_x, char_y, character)
} 
 


export { Level, char_x, char_y, character, flames, flames_image_height, }


---
title: Changelog - 04/09/2022
slug: 2022-09-04-changelog
authors:
  - name: Jundi
    title: Wiki Manager
    image_url: https://avatars.githubusercontent.com/u/102407130?s=400
tags: [changelog, changes, event, fixes, balances]
hide_table_of_contents: false
---

import BCard from "../src/components/bcard";
import ItemIcon from "../src/components/itemicon";

> 04/09/2022 - 21:30 (19:30 ST)     
> Server Version: 1.397.0       
> Client Version: 1.155.0       

## Event
- Happy Hour for 48H (+30% OC)
- Double XP Event for one week (until 11th of September)

## Changes
- Reverted Pets and Partners being able to attack in Arena 
- Bacoom Horn (Quest) now has 100% drop chance
- Bacoom Tail (Quest) now has 100% drop chance
- Unstable Energy (Quest) now has 100% drop chance
- Soul of Innocence (Quest) now has 100% drop chance

## Fixes
- Farming Report wouldn't open on some scenario
- Top reputation from 43 to 50 (we forgot about it)

## SP Balances

### Archer

#### Assassin <ItemIcon iconId="904" width="25px"/>

- Tumble:
  - Cool time: 9s -> 7s 
- Pact of Darkness:
  - Duration: 3s -> 5s
- Sinister Shadow:
  - Duration: 4s -> 5s 

#### Fire Cannoneer <ItemIcon iconId="2545" width="25px"/>

- [Explosive Enhancement]
  - <font color="orange">[NEW]</font> <BCard>Non-elemental damage received is decreased by 15%</BCard>

#### Scout <ItemIcon iconId="2589" width="25px"/>

- [Weak Life Shield]
  - <BCard>Critical damage received is decreased by 60% -> 40%</BCard>

#### Demon Hunter <ItemIcon iconId="2655" width="25px"/>
 
- [Weak Berserk Spirit]:
  - <font color="#fd4949">[REMOVE]</font> <BCard>The effect ends if you take damage from enemies</BCard>
- [Berserk Spirit]:
  - <font color="#fd4949">[REMOVE]</font> <BCard>The effect ends if you take damage from enemies</BCard>
- [Vengeful Spirit Pendulum]:
  - <BCard>Non-elemental damage received is decreased by 20% -> 30%</BCard>
- Bullet Storm:
  - <BCard>There is a 10% -> 20% chance of causing [Gunshot Wound]</BCard>
- Throwing Blade:
  - <BCard>There is a 15% -> 25% chance of causing [Gunshot Wound]</BCard>

#### Avenging Angel <ItemIcon iconId="2707" width="25px"/>

- [Magic Spell]:
  - <font color="#fd4949">[REMOVE]</font> <BCard>Light element is increased by (Player level*2)</BCard>
  - <font color="orange">[NEW]</font> <BCard>Melee attack is increased by (Player level*2)</BCard>
  - <font color="orange">[NEW]</font> <BCard>Damage dealt in PvP is increased by 10%</BCard>
- Darkness:
  - <font color="#fd4949">[REMOVE]</font> <BCard>Teleports you within a radius of 4 fields</BCard>
- [Darkness]:
  - Duration: 4s -> 60s
  - <BCard>Movement speed is increased by 3 -> 1</BCard>
  - <font color="#fd4949">[REMOVE]</font> <BCard>All dodges are increased by (Player level*6)</BCard>
  - <font color="orange">[NEW]</font> <BCard>Up to level 3 there is a 10% chance of never getting a bad effect</BCard>
  - <font color="orange">[NEW]</font> <BCard>Damage dealt in PvP is increased by 10%</BCard>
- Sword of Justice:
  - <BCard>There is a 30% chance of causing [Short Blackout] -> [Blackout]</BCard>
- Spirit Lance:
  - <BCard>There is a 60% chance of causing [Heavy Bleeding] -> [Fatal Bleeding]</BCard>

### Swordsman

#### Warrior <ItemIcon iconId="901" width="25px"/>

- [Iron Skin]:
  - <font color="#fd4949">[REMOVE]</font> <BCard>Non-elemental ranged damage received is decreased by 65% -> 50%</BCard>

#### Crusader <ItemIcon iconId="909" width="25px"/>

- Shining Effect:
  - Duration: 15s -> 20s
  - <BCard>Every 6 Seconds:6% -> 3% HP is recovered.</BCard>

#### Gladiator <ItemIcon iconId="2544" width="25px"/>

- Shield Attack:
  - <BCard>There is a 100% -> 80% of causing [Knockdown]</BCard>

#### Battle Monk <ItemIcon iconId="2588" width="25px"/>

- [Noble Gesture]:
  - Duration: 30s -> 20s
- [Spirit of Sacrifice]:
  - Duration: 30s -> 20s 

#### Death Reaper <ItemIcon iconId="2654" width="25px"/>

- Infinite Armour:
  - Target: Around Friends in 4 cell -> Select One 

#### Renegade <ItemIcon iconId="2706" width="25px"/>

- Judgement of Light:
  - <BCard>There is a 25% chance of causing [Bleeding] -> [Fatal Bleeding]</BCard>
- [Dark Dash]:
  - Duration: 3s -> 8s
  - <font color="#fd4949">[REMOVE]</font> <BCard>Movement speed is increased by (Player level/9)</BCard>
  - <font color="orange">[NEW]</font> <BCard>Movement speed is increased by 4</BCard>

### Mage

#### Holy Mage <ItemIcon iconId="906" width="25px"/>

- Healing:
  - <font color="orange">[NEW]</font> <BCard>MP is reduced by 3%</BCard>
- Group Healing:
  - <font color="orange">[NEW]</font> <BCard>MP is reduced by 5%</BCard>

#### Volcano <ItemIcon iconId="2546" width="25px"/>

- [Lava Swamp]:
  - Duration: 6s -> 10s 
- Volcanic Roar:
  - <BCard>There is a 50% -> 70% chance of causing [Paralysis]</BCard>
- [Magma Shield]:
  - <BCard>Non-elemental damage received is decreased by 20% -> 25%</BCard>
  
#### Seer <ItemIcon iconId="2656" width="25px"/>

- [Armour of Darkness]:
  - <BCard>Non-elemental damage received is decreased by 20% -> 25%</BCard>

#### Archmage <ItemIcon iconId="2708" width="25px"/>

- [Illumination]:
  - <BCard>Every 2 seconds: (Player level/5) -> (Player level/10)</BCard>
- Light Catalyst:
  - Cool time: 7s -> 10s
- Holy Explosion:
  - Cool time: 7s -> 10s

## Other balances

### Hats

#### Zenas' Divine Ring <ItemIcon iconId="4049" width="25px"/>

- [Goddess' Favour]:
  - <BCard>Every 2 seconds: Restores (Player level*20) -> (Player level*10) HP</BCard> 
  - <font color="#fd4949">[REMOVE]</font> <BCard>Up to level 99 there is a 30% chance of never getting a bad effect</BCard>
  
#### Erenia's Crafted Horn <ItemIcon iconId="2791" width="25px"/>

- [Crafted Horn]:
  - <BCard>Every 2 seconds: Restores (Player level*10) -> (Player level*5) HP</BCard>

### Tattoos

#### Spiky Leather <ItemIcon iconId="6437" width="25px"/>

- <BCard>When you're defending, there is a 100% chance of 2/3/4/5/6/8/10/13/16/20 -> 2/3/4/5/6/7/9/11/13/15 of the damage being reflected at the opponent</BCard>

### Costume Hat Changes

#### Oto-Fox Hat <ItemIcon iconId="2570" width="25px"/>

- <BCard>There is a 3% -> 2% chance of causing [Blackout]</BCard>

#### Football Cap <ItemIcon iconId="2652" width="25px"/>

- <BCard>There is a 4% -> 2% chance of causing [Short Blackout]</BCard>

#### Concierge Hat <ItemIcon iconId="2895" width="25px"/>

- <BCard>There is a 3% -> 2% chance of causing [Shock]</BCard>

#### Puppet Master's Hairpin <ItemIcon iconId="4046" width="25px"/>

- <BCard>There is a 3% -> 2% chance of causing [Puppet Curse]</BCard>

#### Puppet Master's Bear Head <ItemIcon iconId="4044" width="25px"/>

- <BCard>There is a 3% -> 2% chance of causing [Puppet Curse]</BCard>

#### Fire Devil Mask <ItemIcon iconId="4098" width="25px"/>

- <BCard>There is a 3% -> 2% chance of causing [Burnt Hand]</BCard>

#### Ice Witch Hat <ItemIcon iconId="4281" width="25px"/>

- <BCard>There is a 3% -> 2% chance of causing [Frozen]</BCard>

#### Wizard of Noz Hat <ItemIcon iconId="4290" width="25px"/>

- <BCard>There is a 3% -> 2% chance of causing [Noz' Blessing]</BCard>

#### Death Lancer Skullcap <ItemIcon iconId="4434" width="25px"/>

- <BCard>There is a 3% -> 2% chance of causing [Cursed!]</BCard>

#### Wonderland Headwear <ItemIcon iconId="4476" width="25px"/>

- <BCard>There is a 3% -> 2% chance of causing [Madness]</BCard>

#### Honeybee Crown <ItemIcon iconId="4506" width="25px"/>

- <BCard>There is a 3% -> 2% chance of causing [Totally Blind]</BCard>

#### Nutcracker Shako <ItemIcon iconId="2811" width="25px"/>

- <BCard>There is a 3% -> 2% chance of causing [Heavy Glue]</BCard>

### Costume Hat Effects

- [Bind]:
  - Duration: 5s -> 3s 
- [Totally Blind]:
  - Duration: 5s -> 4s 
- [Burnt Hand]:
  - Duration: 4s -> 3s
- [Heavy Glue]:
  - Duration: 7s -> 5s
- [Puppet Curse]:
  - Duration: 5s -> 4s
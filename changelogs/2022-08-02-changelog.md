---
title: Changelog - 02/08/2022
slug: 2022-08-02-changelog
authors:
  - name: Jundi
    title: Wiki Manager
    image_url: https://avatars.githubusercontent.com/u/102407130?s=400
tags: [changelog, changes, balance, fixes, features]
hide_table_of_contents: false
---

import BCard from "../src/components/bcard";
import ItemIcon from "../src/components/itemicon";

> 02/08/2022 - 10:30 (8:30 ST)      
> Server Version: 1.356.0       
> Client Version: 1.134.0       

## Features
- Added "Boxes Pity" Tab in box content window
- <a href="https://wiki.olympusgg.com/custom-features/wings-swapper">Wings Swapper</a>
- <a href="https://wiki.olympusgg.com/custom-features/raid-report">Raid Report Window</a>
- <a href="https://wiki.olympusgg.com/custom-features/bid-system">Bidding System</a>
- <a href="https://wiki.olympusgg.com/custom-features/warp-system#public-warps">Public Warps</a>
- "Receive All" button for mails
- Bazaar search QoL (drag & drop item in search bar)

## Raids QoL (v1)
- The seal will now be consumed when entering the raid and not on team creation
- The team won't be destroyed after the raid

## Changes
- Added Recipe for the Unfinished Priest's Spear to Sp4 Quest Shop
- Added a new general achievement that gives an infinite use Cuarry Bank Debit Card.
- Added "There is a 100% chance that every attack hits." to Perti and Chloe's debuffer skills.
- Added unique icons to each wings' buff.
- Reverted arena changes:
  - Removed spectator buff and brought back safe zone
  - Enabled mates' attack
  - Enabled potion use

## Fixes
- Fixed skills visually disappearing under certain circumstances
- Fixed valhalla partners skill cooldown on partner level up
- Fixed a bug where you wouldn't be able to receive any buffs with certain reflection buffs
- Fixed a bug where "Fernon Punishment" debuff would be applied twice instead of once
- Fixed "Another Meeting" Valhalla quest pointing wrong direction for Ragnar's location.

## SP & Items Balance

### Fire Cannoneer <ItemIcon iconId="2545" width="25px"/>

- [Great Explosive Shockwave]
  - Duration: 3s -> 4s 
- [Explosive Enhancement]
  - <font color="orange">[NEW]</font> <BCard>Ranged attack is increased by (Player Level x2)</BCard>
- [Turbo Loader]
  - <font color="#fd4949">[REMOVE]</font> <BCard>Ranged attack is increased by (Player Level x2)</BCard>

### Scout <ItemIcon iconId="2589" width="25px"/>

- Lightning Reload:
  - Cool time: 15s -> 18s
- Mobile Trap:
  - Cool time: 18s -> 25s

### Berserker <ItemIcon iconId="910" width="25px"/>

- [Berserker]:
  - <BCard>Movement speed is increased by 4 -> 3</BCard>
- Sonic Rush:
  - Cool time: 7s -> 10s 

### Gladiator <ItemIcon iconId="2544" width="25px"/>

- Taunt:
  - Cool time: 40s -> 60s 
- Engorgement:
  - <font color="#fd4949">[REMOVE]</font> <BCard>Restores (Player Level x30) HP</BCard>

### Volcano <ItemIcon iconId="2546" width="25px"/>

- [Magma Shield]:
  - <font color="orange">[NEW]</font> <BCard>Movement speed is increased by 1</BCard>
- [Lava Swamp]:
  - <font color="#fd4949">[REMOVE]</font> <BCard>The water element is nullified</BCard>
  - <font color="orange">[NEW]</font> <BCard>Non-elemental damage received is increased by 15%</BCard>
- [Poisonous Volcanic Gas]:
  - <font color="orange">[NEW]</font> <BCard>Non-elemental damage received is increased by 5%</BCard>

### Tide Lord <ItemIcon iconId="2590" width="25px"/>

- Typhoon:
  - <BCard>There is a 30% -> 50% chance of causing [Small Waterfall]</BCard>
- The Large Trident:
  - <BCard>There is a 20% -> 40% chance of causing [Small Electric Shock]</BCard>

### Seer <ItemIcon iconId="2656" width="25px"/>

- Blade Changer:
  - Cool time: 8s -> 11s
- [Armour of Darkness]
  - <BCard>Non-elemental damage received is decreased by 25% -> 20%</BCard>
  - <BCard>Heal 35% -> 30% of inflicted damage by reducing MP</BCard>
  
### Others

#### Zenas' Divine Ring <ItemIcon iconId="4049" width="25px"/>
- [Goddess' Favour]:
  - <BCard>Up to level 99 there is a 100% -> 30% chance of never getting a bad effect.</BCard>
  
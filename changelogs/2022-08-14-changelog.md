---
title: Changelog - 14/08/2022
slug: 2022-08-14-changelog
authors:
  - name: Jundi
    title: Wiki Manager
    image_url: https://avatars.githubusercontent.com/u/102407130?s=400
tags: [changelog, changes, event, fixes, features]
hide_table_of_contents: false
---

import BCard from "../src/components/bcard";
import ItemIcon from "../src/components/itemicon";

> 14/08/2022 - 19:30 (17:30 ST)     
> Server Version: 1.375.0   
> Client Version: 1.143.0        

## Events
- The sealed vessel event has started (check <a href="https://discord.com/channels/468831707877867530/963238377220628551">#pve-events</a> channel on our Discord for more details)

## Fixes
- Fixed Olorun Farm having no aggro limit
- Fixed public warps not refreshing gold properly after usage (visual bug)
- Fixed a bug where "Max. duration" on the bidding system was not calculated properly
- Fixed "Time Increment" option on the bidding system not working properly
- Changed the "Max. duration" option values on bidding system
  - unlimited/1h/2h/5h/10h/24h/48h ->  unlimited/1h/6h/12h/1d/3d/1w
- Fixed a bug where it was possible to list an item into the auction house with "Max. duration" lower than "Duration"
- Raid Seals are now blocked inside of Act 4
- Fixed buff "Blazing Armour (B)" giving 0 melee dodge instead of 120

## Changes
- You can now see the HP/MP of your group members
- You can now see the HP/MP of players by clicking on them
- Buffs and Debuffs icons will now be shown on different lines
- Rainbow Battle now has champion level ranges:
  - +1 -> +24
  - +25 -> +59
  - +60

## Features
- Added champion equipment conversion for partners
  - Your partners need to be at least lvl 90 to wear champion equipment
  - Your character's CLvl must be at least equal to the equipment's CLvl in order for your partner to wear it
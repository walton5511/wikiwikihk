---
title: Act 6.2 Changelog - 19/03/2022
slug: 2022-03-19-changelog
authors:
  - name: Zeref
    title: Game Designer
    image_url: https://avatars.githubusercontent.com/u/64552533?s=200
tags: [changelog, act6, balance]
hide_table_of_contents: false

---

# General

- Implemented followings features:
  - [Caligor](/custom-features/hero-shell-system)
  - [Arena of Talents](/guides/arena-of-talent)
  - [Warp System](/custom-features/warp-system)
  - [SP Upgrades +16~20](/guides/crafting/sp-upgrade)
  - Act6.2
- Reworked [Act6.2 equipment](/information/equipment-act62-rework).
- Added "Divine SP Upgrade Scroll" to Travelling Merchant.
- Added "Perfume" to Malcolm Mix.
- Added three new [Major Trophies](/custom-features/trophy-system) to "Mysterious Monk".
- Added [Fernon fairy craft](guides/crafting/act-6-fairies-craft) recipes to Priest of Transformation.
- Added c50 Lv. Hats recipes to "Graham".
- Added Laurena accessories' recipes to Lilith.
- Increased the mob count in Ancelloan's Will 2 & 5, replaces the Crusaders and Elite Unknown Spirits to other Act6.2 maps.
- Made Holy Blood and Dark Energy Stone tradable.
- Increased hero experience rate by 40%.
- Increased max hero level from 30 to 50.
- Added Unknown Land portal to Bitoren Tundra.
- Rotated God's Altar rare rewards: Dracula's Costume Set, Crystal Wings, Sports Weapon Skins (Super Rare)
- [DISABLED] Added a new option to Teoman Topp for converting Act6.1 equipment to Act6.2 equipment for a fee. Shell options will be carried over but rarity and upgrade will be reset to r0+0.
- Added r5+7 90 equipment set in Advancement Reward (90Lv.).

# Balance

- [Spectator]:
  - [REMOVE] Movement speed is increased by 5.
  - [NEW] Resists forced movement with a probability of 100%.
- Sealed Heavenly Staff:
  - Reduces the enemy's elemental resistances by 19 -> 21.
- Sealed Hellord Wand:
  - Reduces the enemy's elemental resistances by 19 -> 21.
- Arachnophobe:
  - All dodges are increased by (Player Levelx1 -> /2).
- Scorching Webs:
  - [REMOVE] Damage from critical hits is reduced by 10%.
  - [NEW] Concentration is increased by (Player Levelx1).
- Ancient Scripts I:
  - [REMOVE] All elemental energies are increased by 100.
  - [NEW] Increase damage dealt with a probability of 1% by 5%.
- Ancient Scripts II:
  - [REMOVE] All elemental energies are increased by 200.
  - [NEW] Increase damage dealt with a probability of 1% by 10%.
- Ancient Scripts III:
  - [REMOVE] All elemental energies are increased by 300.
  - [NEW] Increase damage dealt with a probability of 1% by 15%.
- Kertos Leather Chest Armour:
  - Dodge is increased by 100 -> 125.
- Sealed Heavenly Leather Armour:
  - Dodge is increased by 100 -> 150.
- Sealed Heavenly Leather Armour:
  - Dodge is increased by 100 -> 150.

# SP Changes

## Destroyer
- [Visual Impairment]:
  - Hit rate of all attacks is decreased by 150 -> 100.
- [Overtrained Body]:
  - [REMOVE] Non-elemental damage received is decreased by 15%.
  - [REMOVE] Defense level is increased by 2.

## Demon Hunter
- [Vengeful Spirit]:
  - Hit rate of all attacks is decreased by (Player Levelx4 -> x3).

## Holy Mage
- Healing:
  - Cool time: 30s -> 60s
- Heaven Song:
  - Attack range: 6 -> 4
  - Cool time: 20s -> 30s
- Mana Shield:
  - Cool time: 30s -> 60s

## Blue Mage
- Freezing Blast:
  - Casting time: 0.8s -> 0.4s
- Ice Chain:
  - Cool time: 45s -> 20s
  - There is a 70% -> 30% chance of causing [Freeze].
- Frozen Shield:
  - [NEW] There is a 100% chance of causing [Forgotten Knowledge].  // only in Fernon raid
- Glacier:
  - [NEW] Summons 2x [Snowball Minion].
- Blizzard:
  - Cool time: 90s -> 40s
  - There is a 80% -> 60% chance of causing [Deadly Blackout].
- [Shivering Frost]:
  - Level: 1 -> 4
  - [NEW] Water resistence is decreased by 15.
- [NEW] Forgotten Knowledge:
  - 5Lv. Positive Magic Effect
  - Duration: 180s
  - Reduces enemy's water resistance by 20.
  - Increses damage dealt with a probability of 10% by 10%.
  - Resists forced movement with a probability of 50%.
- Snowball Minion:
  - The damage causes HP to decrease by 25%.
  - There is a 2% chance of causing [Cold].
  - Undebuffable, decays in 40 seconds.

## Volcano
- [Magma Plating]:
  - [REMOVE] Defense against 7000 critical damage (up to 3 times).
  - [NEW] Defense against 7000 critical damage.  // now working

## Crusader
- [Shining Effect]:
  - Every 4 -> 6 seconds: 6% HP is recovered.
- Growth Shield:
  - Cool time: 30s -> 60s

## Gladiator
- [Enourmously Shaky Status]:
  - Buff level: 3 -> 5
- [Shaky Status]:
  - Buff level: 2 -> 4
- [Engorgement]:
  - [REMOVE] Hit rate of all attacks is decreased by (Player Levelx2).
- [Victory Cry]:
  - [NEW] Hit rate of melee attacks is decreased by (Player Levelx2).
- Double Blow:
  - There is a 10% -> 20% chance of causing [Knockdown].

## Battle Monk
- Noble Gesture and Spirit of Sacrifice will no longer reset each other's durations.
- Noble Gesture won't be castable when target is enemy.
- [Spiritual Strength]:
  - Hit rate of all attacks is increased by (Player Levelx4 -> x3).

## Renegade
- [Ignition]:
  - Hit rate of all attacks is increased by (Player Levelx2 -> x1).

## Pyjama
- Pillow Fight:
  - [NEW] There is a 20% chance of causing [Sleep].
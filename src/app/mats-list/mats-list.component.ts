import { Component, OnInit } from '@angular/core';
import { MatsComponent } from '../mats/mats.component';
//pipes
import { MaterialFilterPipe } from './mats-list.material.pipe';
import { LocationFilterPipe } from './mats-list.location.pipe';

@Component({
  selector: 'app-mats-list',
  templateUrl: './mats-list.component.html',
  styleUrls: ['./mats-list.component.css']
})
export class MatsListComponent implements OnInit {
  private matsList: MatsComponent[];
  private staticValues: any[];
  locationFilter: string;
  materialFilter: string;
  constructor() {
    this.matsList = [];
  }
  /**
   * Adds a component to the list
   * @param MatsComponent comp - the new component
   */
  addComponent(comp: MatsComponent) {
    this.matsList.push(comp);
  }

  ngOnInit() {
    this.loadStaticValues();
  }

  loadStaticValues() {
    this.staticValues = [
      {
        name: 'Tier 14 White Shard',
        drops: [
          'Raid: The Shadow Returns'
        ]
      },
      {
        name: 'Tier 3 Blue Shard',
        drops: [
          "Dungeon: Edas' Keep"
        ]
      },
      {
        name: 'Tier 3 Red Shard',
        drops: [
          "Dungeon: Hunter's Folly"
        ]
      },
      {
        name: 'Tier 3 Yellow Shard',
        drops: [
          "Dungeon: Ice Dragon's Lair"
        ]
      },
      {
        name: 'Tier 4 Blue Shard',
        drops: [
          "Dungeon: Emperor's Court",
          "Dungeon: Karnak's Temple"
        ]
      },
      {
        name: 'Tier 4 Red Shard',
        drops: [
          "Dungeon: Hall of the Goblin King",
          "Dungeon: Karnak's Temple"
        ]
      },
      {
        name: 'Tier 4 Yellow Shard',
        drops: [
          "Dungeon: The Vile Gate",
          "Dungeon: Karnak's Temple"
        ]
      },
      {
        name: 'Tier 5 Blue Shard',
        drops: [
          "Dungeon: Prince of Blades",
        ]
      },
      {
        name: 'Tier 5 Red Shard',
        drops: [
          "Dungeon: Callisto's Keep",
        ]
      },
      {
        name: 'Tier 5 Yellow Shard',
        drops: [
          "Dungeon: Disturbed Grave",
        ]
      },
      {
        name: 'Tier 6 Blue Shard',
        drops: [
          "Dungeon: Yodrin's Tower",
        ]
      },
      {
        name: 'Tier 6 Red Shard',
        drops: [
          "Dungeon: Sha'lyn's Lair",
        ]
      },
      {
        name: 'Tier 6 Yellow Shard',
        drops: [
          "Dungeon: Pinnacle",
        ]
      },
      {
        name: 'Tier 8 White Shard',
        drops: [
          "Raid: Rise of the Spider Queen",
        ]
      },
      {
        name: 'Pure Essence',
        drops: [
          "Raid: Rise of the Spider Queen",
          "Raid: The Shadow Returns",
          "Craft: Pure Essence"
        ]
      },
      { name: 'Refined Essence' },
      { name: 'Essence' },
      { name: 'Amber Flux' },
      { name: 'Emerald Flux' },
      { name: 'Indigo Flux' },
      { name: 'Purifying Salts' },
      { name: 'Refining Salts' },
      { name: 'Alpha Wolf Paw' },
      { name: 'Anger Spirits' },
      { name: 'Black Wyvern Scale' },
      { name: 'Blackened Ichor' },
      { name: 'Blood Raven Tears' },
      { name: 'Cave Serpent Venom' },
      { name: 'Crystal Mantra Wurm Hide' },
      { name: 'Dark Ether' },
      { name: 'Despair' },
      { name: 'Drops of Putrid Oooze' },
      { name: 'Ember of Enduring Fire' },
      { name: 'Exquisite Spider Silk' },
      { name: 'Fell Leaf' },
      { name: 'Fire Crystal' },
      { name: 'Fladhead Stone' },
      { name: 'Crizzly Tooth' },
      { name: 'Impure Shadow' },
      { name: 'Iron Basilisk Eye' },
      { name: 'Iron Ore' },
      { name: 'Mountain Lichen' },
      { name: 'Pearl' },
      { name: 'Polar Melt' },
      { name: 'Pristine Crystal Shard' },
      { name: 'Quill of the Fierce' },
      { name: 'Scroll of Shattered Illusion' },
      { name: 'Shard of the Ancient' },
      { name: 'Spirit Orb' },
      { name: 'Undead Ichor' },
      { name: 'Unstable Ether' },
      { name: 'Vile Extracts' },
      { name: 'Vile Haunch' },
      { name: 'Vile Lichen' },
      { name: 'Werewolf Tooth' },
      {
        name: 'Shard of the Righteous',
        drops: [
          "Keeper: Saydon Keeper of Mist @ Mistwalker Woodlands / River Crossing - 100e/K?"
        ]
      },
      {
        name: 'Shard of the Ancient',
        drops: [
          "Keeper: Bromet Keeper of Ages @ Accursed Steppe / War Council - 125e/K?"
        ]
      },
      {
        name: 'Shard of the Eternal',
        drops: [
          "Keeper: Orisin Keeper of Silence @ Serrated Scar / Underwell Passage - 167e/K?"
        ]
      },
      {
        name: 'Shard of the Pure',
        drops: [
          "Keeper: Graphazul Keeper of Void @ Ethereal Expanse / Void Corridor - 111e/K?"
        ]
      },
      {
        name: 'Immoral Binding',
        drops: [
          "Keeper: Met'Huzil Keeper of the Flame @ The Sanctuary / Third Floor 111e/K?"
        ]
      }
    ];

    for (let mats of this.staticValues) {
      let material = new MatsComponent(mats.name);

      if(mats.drops) {
        for (let drop of mats.drops) {
          material.addLocation(drop);
        }
      }

      this.matsList.push(material);
    }
  }
}

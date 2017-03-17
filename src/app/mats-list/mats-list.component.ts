import { Component, OnInit } from '@angular/core';
import { MatsComponent } from '../mats/mats.component';

@Component({
  selector: 'app-mats-list',
  templateUrl: './mats-list.component.html',
  styleUrls: ['./mats-list.component.css']
})
export class MatsListComponent implements OnInit {
  private matsList: MatsComponent[];
  private staticValues:any[];
  constructor() { 
    this.matsList = [];
  }
  /**
   * Adds a component to the list
   * @param MatsComponent comp - the new component
   */
  addComponent(comp : MatsComponent) {
    this.matsList.push(comp);
  }

  ngOnInit() {
  }

  loadStaticValues() {
    this.staticValues = [
      {name:'Tier 14 White Shard'},
      {name:'Tier 3 Blue Shard'},
      {name:'Tier 3 Red Shard'},
      {name:'Tier 3 Yellow Shard'},
      {name:'Tier 4 Blue Shard'},
      {name:'Tier 4 Red Shard'},
      {name:'Tier 4 Yellow Shard'},
      {name:'Tier 5 Blue Shard'},
      {name:'Tier 5 Red Shard'},
      {name:'Tier 5 Yellow Shard'},
      {name:'Tier 6 Blue Shard'},
      {name:'Tier 6 Red Shard'},
      {name:'Tier 6 Yellow Shard'},
      {name:'Tier 8 White Shard'},
      {name:'Pure Essence'},
      {name:'Refined Essence'},
      {name:'Essence'},
      {name:'Amber Flux'},
      {name:'Emerald Flux'},
      {name:'Indigo Flux'},
      {name:'Purifying Salts'},
      {name:'Refining Salts'},
      {name:'Alpha Wolf Paw'},
      {name:'Anger Spirits'},
      {name:'Black Wyvern Scale'},
      {name:'Blackened Ichor'},
      {name:'Blood Raven Tears'},
      {name:'Cave Serpent Venom'},
      {name:'Crystal Mantra Wurm Hide'},
      {name:'Dark Ether'},
      {name:'Despair'},
      {name:'Drops of Putrid Oooze'},
      {name:'Ember of Enduring Fire'},
      {name:'Exquisite Spider Silk'},
      {name:'Fell Leaf'},
      {name:'Fire Crystal'},
      {name:'Fladhead Stone'},
      {name:'Crizzly Tooth'},
      {name:'Impure Shadow'},
      {name:'Iron Basilisk Eye'},
      {name:'Iron Ore'},
      {name:'Mountain Lichen'},
      {name:'Pearl'},
      {name:'Polar Melt'},
      {name:'Pristine Crystal Shard'},
      {name:'Quill of the Fierce'},
      {name:'Scroll of Shattered Illusion'},
      {name:'Shard of the Ancient'},
      {name:'Spirit Orb'},
      {name:'Undead Ichor'},
      {name:'Unstable Ether'},
      {name:'Vile Extracts'},
      {name:'Vile Haunch'},
      {name:'Vile Lichen'},
      {name:'Werewolf Tooth'}
    ];

    for(let mats of this.staticValues) {
      //console.log('loading', mats.name);
      this.matsList.push(new MatsComponent(mats.name));
    }
  }
}

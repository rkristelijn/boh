import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MatsComponent } from '../mats/mats.component';
//pipes
import { MaterialFilterPipe } from './mats-list.material.pipe';
import { LocationFilterPipe } from './mats-list.location.pipe';
import { HyperlinkPipe } from './mats-list.hyperlink.pipe';

@Component({
  selector: 'app-mats-list',
  templateUrl: './mats-list.component.html',
  styleUrls: ['./mats-list.component.css']
})
export class MatsListComponent implements OnInit {
  sort: string = 'name';
  private matsList: MatsComponent[];
  private staticValues: any[];
  locationFilter: string;
  materialFilter: string;
  constructor(private activatedRoute: ActivatedRoute) {
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

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.materialFilter = params['search'];
    });
  }

  loadStaticValues() {
    this.staticValues = [
      {
        name: "Silverware",
        drops: [
          "Event: Werechef"
        ]
      },
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
      {
        name: 'Refined Essence',
        drops: [
          "Recipe: Refined Essence",
          "Zone: Incursion Portals",
          "Dungeon: Vile Gate",
          "Raid: Karnak's Final Stand",
          "Raid: Rise of the Spider Queen"
        ]
      },
      {
        name: 'Essence',
        drops: [
          "Zone: Incursion Portals",
          "Dungeon: Vile Gate",
          "Raid: Karnak's Final Stand",
          "Raid: All on The Undrian Plateau",
          "Zones: All on The Undrian Plateau"
        ]
      },
      {
        name: 'Amber Flux',
        drops: [
          "Zone: Incursion Portals",
          "Dungeon: Vile Gate",
          "Raid: Karnak's Final Stand",
          "Raid: All on The Undrian Plateau",
          "Zones: All on The Undrian Plateau",
          "Recipe: Amber Flux"
        ]
      },
      {
        name: 'Emerald Flux',
        drops: [
          "Zone: Incursion Portals",
          "Dungeon: Vile Gate",
          "Raid: Karnak's Final Stand",
          "Raid: All on The Undrian Plateau",
          "Zones: All on The Undrian Plateau",
          "Recipe: Emerald Flux"
        ]
      },
      {
        name: 'Indigo Flux',
        drops: [
          "Zone: Incursion Portals",
          "Dungeon: Vile Gate",
          "Raid: Karnak's Final Stand",
          "Raid: All on The Undrian Plateau",
          "Zones: All on The Undrian Plateau",
          "Recipe: Indigo Flux"
        ]
      },
      {
        name: 'Purifying Salts',
        drops: [
          "Shop: Majerio's Shop / Special / 250 silver"
        ]
      },
      {
        name: 'Refining Salts',
        drops: [
          "Shop: Majerio's Shop / Special / 500 silver"
        ]
      },
      {
        name: 'Alpha Wolf Paw',
        drops: [
          "Raid: ?",
          "Zone: Dunia's meadow, Glenfort Planes"
        ]
      },
      {
        name: 'Anger Spirits',
        drops: [
          "Event: ?"
        ]
      },
      {
        name: 'Black Wyvern Scale',
        drops: [
          "Zone: Canyon of Shodows, Urgresh Mountains"
        ]
      },
      {
        name: 'Blackened Ichor',
        drops: [
          "Recipe: Blackend Ichor",
          "Zone: Underwell Passage, Serrated Scar"
        ]
      },
      {
        name: 'Blood Raven Tears',
        drops: [
          "Area: Dense Forrest / Accursed Steppe"
        ]
      },
      {
        name: 'Cave Serpent Venom',
        drops: [
          "Area: Then Energy Mine, Cursed Quarry"
        ]
      },
      {
        name: 'Crystal Mantra Wurm Hide',
        drops: [
          "Area: Windswept Plains / Serrated Scar"
        ]
      },
      {
        name: 'Dark Ether',
        drops: [
          "Area: Helion's Pass / Lake Nithus",
          "Area: Griving Glade / Lake Nithus"
        ]
      },
      {
        name: 'Despair',
        drops: [
          "Event: Tragick Valentine"
        ]
      },
      {
        name: 'Drops of Putrid Ooze',
        drops: [
          "Area: Putrid Pools / Serrated Scar"
        ]
      },
      {
        name: 'Ember of Enduring Fire',
        drops: [
          "Area: River Crossing / Mistwaler Woodlands"
        ]
      },
      {
        name: 'Exquisite Spider Silk',
        drops: [
          "Area: The Warrens / Serrated Scar"
        ]
      },
      {
        name: 'Fell Leaf',
        drops: [
          "Area: Graycoast Bog / Fellmarsh"
        ]
      },
      {
        name: 'Fire Crystal',
        drops: [
          "Area: Flame Cavern, Dragonmoor"
        ]
      },
      {
        name: 'Fladhead Stone',
        drops: [
          "Area: Floating Stones / The Sanctuary"
        ]
      },
      {
        name: 'Gnarly Sticks?',
        drops: [
          "Area: River's Edge, Ethereal Expanse"
        ]
      },
      {
        name: 'Crizzly Tooth',
        drops: [
          "Area: Heart of the Ebian, Ebian Forest"
        ]
      },
      {
        name: 'Impure Shadow',
        drops: [
          "Raid: Primal Mysteries"
        ]
      },
      {
        name: 'Iron Basilisk Eye',
        drops: [
          "Area: Flame Cavern / Dragonmoor"
        ]
      },
      {
        name: 'Iron Ore',
        drops: [
          "Area: Waterfall Cavern, Cursed Quarry"
        ]
      },
      {
        name: 'Mountain Lichen',
        drops: [
          "Area: Urgresh Peaks, Urgresh Mountains"
        ]
      },
      {
        name: 'Pearls',
        drops: [
          "Event: Pirates"
        ]
      },
      {
        name: 'Polar Melt',
        drops: [
          "Area: Icy Wastes, Frozen Vale"
        ]
      },
      {
        name: 'Pristine Crystal Shard',
        drops: [
          "Area: Underwell Passage / Serrated Scar"
        ]
      },
      {
        name: "Rock Wyvern Hides?",
        drops: [
          "Area: River's Edge / Ethereal Expanse"
        ]
      },
      {
        name: "Shadow Crystal?",
        drops: [
          "Area: Spirit Forest / Ethereal Expanse"
        ]
      },
      {
        name: 'Quill of the Fierce',
        drops: [
        ]
      },
      {
        name: 'Scroll of Shattered Illusion',
        drops: [
        ]
      },
      {
        name: 'Spirit Orb',
        drops: [
          "Area: Spirit Forest / Ethereal Expanse"
        ]
      },
      {
        name: 'Undead Ichor',
        drops: [
          "Area: Helion's Pass, Lake Nithus",
          "Area: All with undeads"
        ]
      },
      {
        name: 'Unstable Ether',
        drops: [
          "Area: Ancestral Ruins, Lake Nithus"
        ]
      },
      {
        name: 'Vile Extracts',
        drops: [
          "Area: Sacred Landing / Mistwalker Woodlands"
        ]
      },
      {
        name: 'Vile Haunch',
        drops: [
          "Area: Overlord's View / Accursed Steppe"
        ]
      },
      {
        name: 'Vile Lichen',
        drops: [
          "Area: Dense Forest / Accursed Steppe"
        ]
      },
      {
        name: 'Werewolf Tooth',
        drops: [
          "Event: Werechef"
        ]
      },
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
      },
      {
        name: "Iron Graver",
        drops: [
          "Shop: Majerio's Shop (10000 silver)"
        ]
      },
      {
        name: "Steel Graver",
        drops: [
          "Shop: Majerio's Shop (100000 silver)"
        ]
      },
      {
        name: "Diamond Graver",
        drops: [
          "Shop: Majerio's Shop (1000000 silver)",
          "Shop: Majerio's Shop (20 Gold Shields)"
        ]
      },
      {
        name: "Prismatic Flux",
        drops: [
          "Recipe: Prismatic Flux"
        ]
      },
       {
        name: "Prismatic Gem",
        drops: [
          "Recipe: Prismatic Gem"
        ]
      }
    ];

    for (let mats of this.staticValues) {
      let material = new MatsComponent(mats.name);

      if (mats.drops) {
        for (let drop of mats.drops) {
          material.addLocation(drop);
        }
      }

      this.matsList.push(material);
    }
  }

  /// routerLink
  getLink(value:string, params:boolean = false) :any {
    let split:string[] = value.split(":");
    let type = split[0];
    let search = split[1];

    switch( type ) {
      case "Dungeon":
        if(params) return {search:search.trim()};
        else return '/locations';
      default: return;
    }
  }

  /// sorting events

  /**
   * 
   * @param event 
   * @param col 
   */
  sortOn(event, col) {
    let direction = "";
    if (this.sort === col) {
      this.sort = `-${col}`;
      direction = "-up";
    } else this.sort = col;
    switch (event.srcElement.tagName) {
      case "TR": event.srcElement.children[0].className = `caret${direction}`; break;
      case "SPAN": event.srcElement.className = `caret${direction}`; break;
    }
  }

  /** if this.sort starts with -, the direction is up, not down
   * 
   * @param item 
   */
  getClass(item) {
    let direction = (this.sort[0]) === '-' ? "-up" : "";
    if (item === this.sort || this.sort === `-${item}`) return `caret${direction}`;
  }
}

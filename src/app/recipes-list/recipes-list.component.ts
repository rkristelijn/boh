import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeComponent } from '../recipe/recipe.component';
import { TimePipe } from './time.pipe';
import { OrderBy } from '../../assets/order.pipe';

import { DataService } from '../data.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  sort: string = 'name';
  private staticValues: any[];
  recipes: RecipeComponent[];
  listFilter: string;
  ingredientFilter: string;
  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.recipes = [];
    // this.loadStaticValues(false);
    // this.loadValues(this.staticValues);

    this.data.getRecipes().subscribe(res => {
      this.loadValues(res);
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.listFilter = params['search'];
    });
  }

  addRecipe(recipe: RecipeComponent) {
    this.recipes.push(recipe);
  }

  loadValues(values: any) {
    console.log(values);
    this.recipes = [];
    for (let recipeDesc of values) {
      //create a recipe to work with
      let recipe = new RecipeComponent(recipeDesc.name);
      recipe.setDescription(recipeDesc.name);
      recipe.setTime(recipeDesc.time);

      //if (log) console.log(recipeDesc.name + " (" + recipeDesc.time + " minutes) - " + recipeDesc.description);
      for (let ingredient of recipeDesc.ingredients) {
        //add ingredient
        recipe.addIngredientString(ingredient.name, ingredient.amount);
        //if (log) console.log("\t" + ingredient.amount + " " + ingredient.name);
      }
      //add the recipe
      this.recipes.push(recipe);
    }

    //if (log) console.log(this.recipes);
  }

  loadStaticValues(log: boolean = true) {
    this.staticValues = [
      {
        name: 'Cooking: Bacon',
        time: 180, //3 hours in minutes
        description: 'Cook up a serving of bacon',
        ingredients: [{
          name: 'Purifying Salts',
          amount: 20
        }, {
          name: 'Vile Haunch',
          amount: 1
        }
        ]
      },
      {
        name: 'Cooking: Deviled Eggs',
        time: 180, //3 hours in minutes
        description: 'Cook up some deviled eggs, just watch the magical mustard',
        ingredients: [{
          name: 'Purifying Salts',
          amount: 10
        }, {
          name: 'Drops of Putrid Ooze',
          amount: 5
        }, {
          name: 'Deathstrike Egg',
          amount: 1
        }]
      },
      {
        name: 'Craft: Blackened Ichor',
        time: 5, //minutes
        description: 'Creates Blackened Ichor, useful for creating potions',
        ingredients: [{
          name: 'Undead Ichor',
          amount: 10
        }, {
          name: 'Refining Salts',
          amount: 1
        }
        ]
      },
      {
        name: 'Craft: Pure Essence',
        time: 5, //minutes
        description: 'Creates Pure Essence, useful for high-tier enchantments',
        ingredients: [{
          name: 'Refined Essence',
          amount: 10
        }, {
          name: 'Purifying Salts',
          amount: 1
        }
        ]
      },
      {
        name: 'Craft: Refined Essence',
        time: 5, //minutes
        description: 'Creates Refined Essence, useful for mid-tier enchantments',
        ingredients: [{
          name: 'Essence',
          amount: 10
        }, {
          name: 'Refining Salts',
          amount: 1
        }
        ]
      },
      {
        name: 'Craft: Wereware Necklace',
        time: 2880, // 48 hours in minutes
        description: 'Part werewolf teeth, parth silverware, it looks like arts and crafts gone wrong',
        ingredients: [{
          name: 'Werewolf Tooth',
          amount: 5
        }, {
          name: 'Silverware',
          amount: 20
        }
        ]
      },
      {
        name: 'Craft: Ring of Hornswoggle',
        time: 2880, // 48 hours in minutes
        description: "Craft th' most powerful rn' 'o band 'o pirates legend",
        ingredients: [{
          name: 'Pearls',
          amount: 10
        }, {
          name: 'Anger Spirits',
          amount: 100
        }, {
          name: 'Diamond Graver',
          amount: 5
        }
        ]
      },
      {
        name: "Empower: Karnak's Ring",
        time: 2880, // 48 hours in minutes
        description: "Empower Karnak's Ring to regain its ancient energy",
        ingredients: [{
          name: 'Prismatic Gem',
          amount: 3
        }, {
          name: 'Prismatic Flux',
          amount: 3
        }, {
          name: 'Broken Ring',
          amount: 1
        }
        ]
      },
      {
        name: "Potion: Dodge",
        time: 30, // minutes
        description: "Increase dodge chance by 20% for 10 seconds",
        ingredients: [{
          name: 'Alpha Wolf Paw', //thanks Danae
          amount: 1
        }, {
          name: 'Mountain Lichen',
          amount: 3
        }, {
          name: 'Blackened Ichor',
          amount: 3
        }
        ]
      },
      {
        name: "Potion: Minor Critical Strike",
        time: 5, // minutes
        description: "Increase crit chance by 5% for 10 seconds",
        ingredients: [{
          name: 'Fire Crystal',
          amount: 3
        }, {
          name: 'Undead Ichor',
          amount: 10
        }
        ]
      },
      {
        name: "Potion: Critical Strike",
        time: 30, // minutes
        description: "Increase crit chance by 20% for 10 seconds",
        ingredients: [{
          name: 'Iron Basilisk Eye',
          amount: 1
        }, {
          name: 'Fire Crystal',
          amount: 3
        }, {
          name: 'Blackened Ichor',
          amount: 3
        }
        ]
      },
      {
        name: "Potion: Minor Dodge",
        time: 5, // minutes
        description: "Increase dodge chance by 5% for 10 seconds",
        ingredients: [{
          name: 'Mountain Lichen',
          amount: 3
        }, {
          name: 'Undead Ichor',
          amount: 10
        }
        ]
      },
      {
        name: "Potion: Minor Haste",
        time: 5, // minutes
        description: "Increase haste by 5% for 10 seconds",
        ingredients: [{
          name: 'Fell Leaf',
          amount: 3
        }, {
          name: 'Undead Ichor',
          amount: 10
        }
        ]
      },
      {
        name: "Potion: Haste",
        time: 30, // minutes
        description: "Increase haste by 10% for 10 seconds",
        ingredients: [{
          name: 'Cave Serpent Venom',
          amount: 1
        }, {
          name: 'Fell Leaf',
          amount: 3
        }, {
          name: 'Blackened Ichor',
          amount: 3
        }
        ]
      },
      {
        name: "Potion: Magic Resist",
        time: 30, // minutes
        description: "Increase magic resist by ?% for 10 seconds",
        ingredients: [{
          name: 'Unstable Ether',
          amount: 1
        }, {
          name: 'Dark Ether',
          amount: 3
        }, {
          name: 'Blackened Ichor',
          amount: 3
        }
        ]
      },
      {
        name: "Potion: Minor Magic Resistance",
        time: 5, // minutes
        description: "Reduces magic damage taken by 5% for 10 seconds",
        ingredients: [{
          name: 'Dark Ether',
          amount: 3
        }, {
          name: 'Undead Ichor',
          amount: 10
        }
        ]
      },
      {
        name: "Potion: Minor Melee Resistance",
        time: 5, // minutes
        description: "Reduces physical damage taken by 5% for 10 seconds",
        ingredients: [{
          name: 'Iron Ore',
          amount: 3
        }, {
          name: 'Undead Ichor',
          amount: 10
        }
        ]
      },
      {
        name: "Potion: Melee Resistance", //thanks to Pip_
        time: 30, // minutes
        description: "Reduces physical damage taken by 20% for 10 seconds",
        ingredients: [{
          name: 'Black Wyvern Scale',
          amount: 1
        }, {
          name: 'Blackened Ichor', //thanks Danae
          amount: 3
        }, {
          name: 'Iron Ore',
          amount: 3
        }
        ]
      },
      {
        name: "Potion: Minor Power",
        time: 5, // minutes
        description: "Increases melee and magic rating by 10% for 10 seconds",
        ingredients: [{
          name: 'Polar Melt',
          amount: 3
        }, {
          name: 'Undead Ichor',
          amount: 10
        }
        ]
      },
      {
        name: "Potion: Mystery Potion",
        time: 60, // minutes
        description: "Who knows what this potion can do!?",
        ingredients: [{
          name: 'Vile Lichen',
          amount: 10
        }
        ]
      },
      {
        name: "Potion: Power",
        time: 30, // minutes
        description: "Increase melee and magic rating by 25% for 10 seconds",
        ingredients: [{
          name: 'Grizzly Tootle',
          amount: 1
        }, {
          name: 'Polar Melt',
          amount: 3
        }, {
          name: 'Blackened Ichor',
          amount: 3
        }
        ]
      },
      {
        name: "Transmute: Amber Flux",
        time: 60, // minutes
        description: "Turn one Emerald and Indigo Flux into an Amber Flux",
        ingredients: [{
          name: 'Emerald Flux',
          amount: 1
        }, {
          name: 'Indigo Flux',
          amount: 1
        }
        ]
      },
      {
        name: "Transmute: Emerald Flux",
        time: 60, // minutes
        description: "Turn one Amber and Indigo Flux into an Emerald Flux",
        ingredients: [{
          name: 'Amber Flux',
          amount: 1
        }, {
          name: 'Indigo Flux',
          amount: 1
        }
        ]
      },
      {
        name: "Transmute: Indigo Flux",
        time: 60, // minutes
        description: "Turn one Amber and Emerald Flux into an Indigo Flux",
        ingredients: [{
          name: 'Amber Flux',
          amount: 1
        }, {
          name: 'Emerald Flux',
          amount: 1
        }
        ]
      },
      {
        name: "Transmute: Fire Crit Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Fire Crit Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 8 White Shard',
          amount: 500
        }, {
          name: 'Fire Crystal',
          amount: 250
        }, {
          name: 'Cave Serpent Venom',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Fire Crit Power Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Fire Crit Power Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 8 White Shard',
          amount: 500
        }, {
          name: 'Fire Crystal',
          amount: 250
        }, {
          name: 'Alpha Wolf Paw',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Fire Resistance",
        time: 1440, // 24 hours in minutes
        description: "Creates one Fire Resistance Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 14 White Shard',
          amount: 500
        }, {
          name: 'Fire Crystal',
          amount: 250
        }, {
          name: 'Exquisite Spider Silk',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Ice Crit Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Ice Crit Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 8 White Shard',
          amount: 500
        }, {
          name: 'Dark Ether',
          amount: 250
        }, {
          name: 'Spirit Orb',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Ice Crit Power Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Ice Crit Power Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 8 White Shard',
          amount: 500
        }, {
          name: 'Dark Ether',
          amount: 250
        }, {
          name: 'Polar Melt',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Ice Resistance Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Ice Resistance Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 14 White Shard',
          amount: 500
        }, {
          name: 'Dark Ether',
          amount: 250
        }, {
          name: 'Blackened Ichor',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Melee Crit Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Melee Crit Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 8 White Shard',
          amount: 500
        }, {
          name: 'Fire Crystal',
          amount: 250
        }, {
          name: 'Iron Ore',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Melee Crit Power Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Melee Crit Power Gem out of White Shards and other materials - thanks Pip_",
        ingredients: [{
          name: 'Tier 8 White Shard',
          amount: 500
        }, {
          name: 'Dark Ichor',
          amount: 250
        }, {
          name: 'Polar Melt',
          amount: 100
        }
        ]
      },
      // { name: "Transmute: Melee Resistance Gem",
      //   time: 1440, // 24 hours in minutes
      //   description: "There is no Melee Resistance Gem sadly - thanks Pip_",
      //   ingredients: [{
      //       name: 'Tier 14 White Shards',
      //       amount: 500
      //     },{
      //       name: '?',
      //       amount: 250
      //     },{
      //       name: '?',
      //       amount: 100
      //     }
      //   ]
      // }, //thanks Danae
      {
        name: "Transmute: Nature Crit Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Nature Crit Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 8 White Shard',
          amount: 500
        }, {
          name: 'Fell Leaf',
          amount: 250
        }, {
          name: 'Unstable Ether',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Nature Crit Power Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Nature Crit Power Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 8 White Shard',
          amount: 500
        }, {
          name: 'Fell Leaf',
          amount: 250
        }, {
          name: 'Drops of Putrid Ooze',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Nature Resistance Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Nature Resistance Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 14 White Shard',
          amount: 500
        }, {
          name: 'Fell Leaf',
          amount: 250
        }, {
          name: 'Black Wyvern Scale',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Prismatic Flux",
        time: 720, // 12 hours in minutes
        description: "Creates one Prismatic Flux out of other Flux types",
        ingredients: [{
          name: 'Amber Flux',
          amount: 3
        }, {
          name: 'Emerald Flux',
          amount: 3
        }, {
          name: 'Indigo Flux',
          amount: 3
        }
        ]
      },
      {
        name: "Transmute: Prismatic Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Prismatic Gem out of T4 Gem Shards",
        ingredients: [{
          name: 'Tier 4 Red Shard',
          amount: 50
        }, {
          name: 'Tier 4 Blue Shard',
          amount: 50
        }, {
          name: 'Tier 4 Yellow Shard',
          amount: 50
        }
        ]
      },
      {
        name: "Transmute: Spirit Crit Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Spirit Crit Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 8 White Shard',
          amount: 500
        }, {
          name: 'Mountain Lichen',
          amount: 250
        }, {
          name: 'Grizzly Tooth',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Spirit Crit Power Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Spirit Crit Power Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 8 White Shard',
          amount: 500
        }, {
          name: 'Mountain Lichen',
          amount: 250
        }, {
          name: 'Iron Basilisk Eye',
          amount: 100
        }
        ]
      },
      {
        name: "Transmute: Spirit Resistance Gem",
        time: 1440, // 24 hours in minutes
        description: "Creates one Spirit Resistance Gem out of White Shards and other materials",
        ingredients: [{
          name: 'Tier 14 White Shard',
          amount: 500
        }, {
          name: 'Mountain Lichen',
          amount: 250
        }, {
          name: 'Iron Ore',
          amount: 100
        }
        ]
      },
      {
        name: "Enchant: Power I",
        time: 5, // minutes
        description: "Applied on: Chest, Boots, Pants\n" +
        "Power: Block I - Increases your chance to Block with a Shield (0.80% per level)\n" +
        "Power: Block Power I - Increases the amount of damage a Block will mitigate (1.00% per level)\n" +
        "Power: Defence Recipe I - Increases your Armor's defence (1.0% per level)\n" +
        "Power: Knockback Resist I - Decreases the amount of time you get knocked back by abilities that have knockback (3.00% per level)\n" +
        "Power: Resilience I - Decreases the chance that you will be hit by a critical strike (2.00% per level)\n" +
        "Power: Status Resist I - Reduces the chance a negative effect can be placed on you (1.50% per level)\n",
        ingredients: [{
          name: 'Essence',
          amount: 100
        }, {
          name: 'Emerald Flux',
          amount: 1
        }, {
          name: 'Iron Graver',
          amount: 1
        }
        ]
      },
      {
        name: "Enchant: Power II",
        time: 15, // minutes
        description: "Applied on: Chest, Boots, Pants\n" +
        "Power: Block I - Increases your chance to Block with a Shield (0.80% per level)\n" +
        "Power: Block Power I - Increases the amount of damage a Block will mitigate (1.00% per level)\n" +
        "Power: Defence Recipe I - Increases your Armor's defence (1.0% per level)\n" +
        "Power: Knockback Resist I - Decreases the amount of time you get knocked back by abilities that have knockback (3.00% per level)\n" +
        "Power: Resilience I - Decreases the chance that you will be hit by a critical strike (2.00% per level)\n" +
        "Power: Status Resist I - Reduces the chance a negative effect can be placed on you (1.50% per level)\n",
        ingredients: [{
          name: 'Essence',
          amount: 250 //thanks Pip_
        }, {
          name: 'Emerald Flux',
          amount: 2
        }, {
          name: 'Iron Graver',
          amount: 2
        }
        ]
      },
      {
        name: "Enchant: Power III",
        time: 60, // 1 hour in minutes
        description: "Applied on: Chest, Boots, Pants\n" +
        "Power: Block I - Increases your chance to Block with a Shield (0.80% per level)\n" +
        "Power: Block Power I - Increases the amount of damage a Block will mitigate (1.00% per level)\n" +
        "Power: Defence Recipe I - Increases your Armor's defence (1.0% per level)\n" +
        "Power: Knockback Resist I - Decreases the amount of time you get knocked back by abilities that have knockback (3.00% per level)\n" +
        "Power: Resilience I - Decreases the chance that you will be hit by a critical strike (2.00% per level)\n" +
        "Power: Status Resist I - Reduces the chance a negative effect can be placed on you (1.50% per level)\n",
        ingredients: [{
          name: 'Essence',
          amount: 500
        }, {
          name: 'Emerald Flux',
          amount: 5
        }, {
          name: 'Iron Graver',
          amount: 3
        }
        ]
      },
      {
        name: "Enchant: Power IV",
        time: 180, // 3 hours in minutes
        description: "Applied on: Chest, Boots, Pants\n" +
        "Power: Block I - Increases your chance to Block with a Shield (0.80% per level)\n" +
        "Power: Block Power I - Increases the amount of damage a Block will mitigate (1.00% per level)\n" +
        "Power: Defence Recipe I - Increases your Armor's defence (1.0% per level)\n" +
        "Power: Knockback Resist I - Decreases the amount of time you get knocked back by abilities that have knockback (3.00% per level)\n" +
        "Power: Resilience I - Decreases the chance that you will be hit by a critical strike (2.00% per level)\n" +
        "Power: Status Resist I - Reduces the chance a negative effect can be placed on you (1.50% per level)\n",
        ingredients: [{
          name: 'Refined Essence',
          amount: 100
        }, {
          name: 'Emerald Flux',
          amount: 10
        }, {
          name: 'Steel Graver',
          amount: 1
        }
        ]
      },
      {
        name: "Enchant: Power V",
        time: 360, // 6 hours in minutes
        description: "Applied on: Chest, Boots, Pants\n" +
        "Power: Block I - Increases your chance to Block with a Shield (0.80% per level)\n" +
        "Power: Block Power I - Increases the amount of damage a Block will mitigate (1.00% per level)\n" +
        "Power: Defence Recipe I - Increases your Armor's defence (1.0% per level)\n" +
        "Power: Knockback Resist I - Decreases the amount of time you get knocked back by abilities that have knockback (3.00% per level)\n" +
        "Power: Resilience I - Decreases the chance that you will be hit by a critical strike (2.00% per level)\n" +
        "Power: Status Resist I - Reduces the chance a negative effect can be placed on you (1.50% per level)\n",
        ingredients: [{
          name: 'Refined Essence',
          amount: 250
        }, {
          name: 'Emerald Flux',
          amount: 25
        }, {
          name: 'Steel Graver',
          amount: 2
        }
        ]
      },
      {
        name: "Enchant: Power VI",
        time: 720, // 12 hours in minutes
        description: "Applied on: Chest, Boots, Pants\n" +
        "Power: Block I - Increases your chance to Block with a Shield (0.80% per level)\n" +
        "Power: Block Power I - Increases the amount of damage a Block will mitigate (1.00% per level)\n" +
        "Power: Defence Recipe I - Increases your Armor's defence (1.0% per level)\n" +
        "Power: Knockback Resist I - Decreases the amount of time you get knocked back by abilities that have knockback (3.00% per level)\n" +
        "Power: Resilience I - Decreases the chance that you will be hit by a critical strike (2.00% per level)\n" +
        "Power: Status Resist I - Reduces the chance a negative effect can be placed on you (1.50% per level)\n",
        ingredients: [{
          name: 'Refined Essence',
          amount: 500
        }, {
          name: 'Emerald Flux',
          amount: 50
        }, {
          name: 'Steel Graver',
          amount: 3
        }
        ]
      },
      {
        name: "Enchant: Power VII",
        time: 1440, // 24 hours in minutes
        description: "Applied on: Chest, Boots, Pants\n" +
        "Power: Block I - Increases your chance to Block with a Shield (0.80% per level)\n" +
        "Power: Block Power I - Increases the amount of damage a Block will mitigate (1.00% per level)\n" +
        "Power: Defence Recipe I - Increases your Armor's defence (1.0% per level)\n" +
        "Power: Knockback Resist I - Decreases the amount of time you get knocked back by abilities that have knockback (3.00% per level)\n" +
        "Power: Resilience I - Decreases the chance that you will be hit by a critical strike (2.00% per level)\n" +
        "Power: Status Resist I - Reduces the chance a negative effect can be placed on you (1.50% per level)\n",
        ingredients: [{
          name: 'Pure Essence',
          amount: 100
        }, {
          name: 'Emerald Flux',
          amount: 100
        }, {
          name: 'Diamond Graver',
          amount: 1
        }
        ]
      },
      {
        name: "Enchant: Power VIII",
        time: 2880, // 48 hours in minutes
        description: "Applied on: Chest, Boots, Pants\n" +
        "Power: Block I - Increases your chance to Block with a Shield (0.80% per level)\n" +
        "Power: Block Power I - Increases the amount of damage a Block will mitigate (1.00% per level)\n" +
        "Power: Defence Recipe I - Increases your Armor's defence (1.0% per level)\n" +
        "Power: Knockback Resist I - Decreases the amount of time you get knocked back by abilities that have knockback (3.00% per level)\n" +
        "Power: Resilience I - Decreases the chance that you will be hit by a critical strike (2.00% per level)\n" +
        "Power: Status Resist I - Reduces the chance a negative effect can be placed on you (1.50% per level)\n",
        ingredients: [{
          name: 'Pure Essence',
          amount: 200 //thanks Pip_
        }, {
          name: 'Emerald Flux',
          amount: 200
        }, {
          name: 'Diamond Graver',
          amount: 2
        }
        ]
      },
      {
        name: "Enchant: Power IX",
        time: 5760, // 96 hours in minutes
        description: "Applied on: Chest, Boots, Pants\n" +
        "Power: Block I - Increases your chance to Block with a Shield (0.80% per level)\n" +
        "Power: Block Power I - Increases the amount of damage a Block will mitigate (1.00% per level)\n" +
        "Power: Defence Recipe I - Increases your Armor's defence (1.0% per level)\n" +
        "Power: Knockback Resist I - Decreases the amount of time you get knocked back by abilities that have knockback (3.00% per level)\n" +
        "Power: Resilience I - Decreases the chance that you will be hit by a critical strike (2.00% per level)\n" +
        "Power: Status Resist I - Reduces the chance a negative effect can be placed on you (1.50% per level)\n",
        ingredients: [{
          name: 'Pure Essence',
          amount: 300
        }, {
          name: 'Emerald Flux',
          amount: 400
        }, {
          name: 'Diamond Graver',
          amount: 3
        }
        ]
      },
      {
        name: "Enchant: Skill I",
        time: 5, // minutes
        description: "Two hand Weapon, Main hand Weapon, Off Hand Weapon, Shield, Helmet, Gauntlets\n" +
        "Skill: Accuracy I - Reduces the chance an enemy can dodge your attacks (2,50% per level)\n" +
        "Skill: Armor Penetration I - Increases the amount of damage that is unmitigated against your target's Armor (0.80% per level)\n" +
        "Skill: Initiative I - Increases your chance of catching your enemies off guard or surprise them. (1.00% per level)\n" +
        "Skill: One-handed Bonus I - Increases One-hand weapon damage (1.00% per level)\n" +
        "Skill: Two-handed Bonus I - Increases Two-hand weapon damage (1.00% per level)\n",
        ingredients: [{
          name: 'Essence',
          amount: 100
        }, {
          name: 'Amber Flux',
          amount: 1
        }, {
          name: 'Iron Graver',
          amount: 1
        }
        ]
      },
      {
        name: "Enchant: Skill II",
        time: 15, // minutes
        description: "Two hand Weapon, Main hand Weapon, Off Hand Weapon, Shield, Helmet, Gauntlets\n" +
        "Skill: Accuracy I - Reduces the chance an enemy can dodge your attacks (2,50% per level)\n" +
        "Skill: Armor Penetration I - Increases the amount of damage that is unmitigated against your target's Armor (0.80% per level)\n" +
        "Skill: Initiative I - Increases your chance of catching your enemies off guard or surprise them. (1.00% per level)\n" +
        "Skill: One-handed Bonus I - Increases One-hand weapon damage (1.00% per level)\n" +
        "Skill: Two-handed Bonus I - Increases Two-hand weapon damage (1.00% per level)\n",
        ingredients: [{
          name: 'Essence',
          amount: 200
        }, {
          name: 'Amber Flux',
          amount: 2
        }, {
          name: 'Iron Graver',
          amount: 2
        }
        ]
      },
      {
        name: "Enchant: Skill III",
        time: 60, // minutes
        description: "Two hand Weapon, Main hand Weapon, Off Hand Weapon, Shield, Helmet, Gauntlets\n" +
        "Skill: Accuracy I - Reduces the chance an enemy can dodge your attacks (2,50% per level)\n" +
        "Skill: Armor Penetration I - Increases the amount of damage that is unmitigated against your target's Armor (0.80% per level)\n" +
        "Skill: Initiative I - Increases your chance of catching your enemies off guard or surprise them. (1.00% per level)\n" +
        "Skill: One-handed Bonus I - Increases One-hand weapon damage (1.00% per level)\n" +
        "Skill: Two-handed Bonus I - Increases Two-hand weapon damage (1.00% per level)\n",
        ingredients: [{
          name: 'Essence',
          amount: 500
        }, {
          name: 'Amber Flux',
          amount: 5
        }, {
          name: 'Iron Graver',
          amount: 3
        }
        ]
      },
      {
        name: "Enchant: Skill IV",
        time: 180, // minutes
        description: "Two hand Weapon, Main hand Weapon, Off Hand Weapon, Shield, Helmet, Gauntlets\n" +
        "Skill: Accuracy I - Reduces the chance an enemy can dodge your attacks (2,50% per level)\n" +
        "Skill: Armor Penetration I - Increases the amount of damage that is unmitigated against your target's Armor (0.80% per level)\n" +
        "Skill: Initiative I - Increases your chance of catching your enemies off guard or surprise them. (1.00% per level)\n" +
        "Skill: One-handed Bonus I - Increases One-hand weapon damage (1.00% per level)\n" +
        "Skill: Two-handed Bonus I - Increases Two-hand weapon damage (1.00% per level)\n",
        ingredients: [{
          name: 'Refined Essence',
          amount: 100
        }, {
          name: 'Amber Flux',
          amount: 10
        }, {
          name: 'Steel Graver',
          amount: 1
        }
        ]
      },
      {
        name: "Enchant: Skill V",
        time: 360, // minutes
        description: "Two hand Weapon, Main hand Weapon, Off Hand Weapon, Shield, Helmet, Gauntlets\n" +
        "Skill: Accuracy I - Reduces the chance an enemy can dodge your attacks (2,50% per level)\n" +
        "Skill: Armor Penetration I - Increases the amount of damage that is unmitigated against your target's Armor (0.80% per level)\n" +
        "Skill: Initiative I - Increases your chance of catching your enemies off guard or surprise them. (1.00% per level)\n" +
        "Skill: One-handed Bonus I - Increases One-hand weapon damage (1.00% per level)\n" +
        "Skill: Two-handed Bonus I - Increases Two-hand weapon damage (1.00% per level)\n",
        ingredients: [{
          name: 'Refined Essence',
          amount: 200
        }, {
          name: 'Amber Flux',
          amount: 20
        }, {
          name: 'Steel Graver',
          amount: 2
        }
        ]
      },
      {
        name: "Enchant: Skill VI",
        time: 720, // minutes
        description: "Two hand Weapon, Main hand Weapon, Off Hand Weapon, Shield, Helmet, Gauntlets\n" +
        "Skill: Accuracy I - Reduces the chance an enemy can dodge your attacks (2,50% per level)\n" +
        "Skill: Armor Penetration I - Increases the amount of damage that is unmitigated against your target's Armor (0.80% per level)\n" +
        "Skill: Initiative I - Increases your chance of catching your enemies off guard or surprise them. (1.00% per level)\n" +
        "Skill: One-handed Bonus I - Increases One-hand weapon damage (1.00% per level)\n" +
        "Skill: Two-handed Bonus I - Increases Two-hand weapon damage (1.00% per level)\n",
        ingredients: [{
          name: 'Refined Essence',
          amount: 500
        }, {
          name: 'Amber Flux',
          amount: 50
        }, {
          name: 'Steel Graver',
          amount: 3
        }
        ]
      },
      {
        name: "Enchant: Skill VII",
        time: 1440, // minutes
        description: "Two hand Weapon, Main hand Weapon, Off Hand Weapon, Shield, Helmet, Gauntlets\n" +
        "Skill: Accuracy I - Reduces the chance an enemy can dodge your attacks (2,50% per level)\n" +
        "Skill: Armor Penetration I - Increases the amount of damage that is unmitigated against your target's Armor (0.80% per level)\n" +
        "Skill: Initiative I - Increases your chance of catching your enemies off guard or surprise them. (1.00% per level)\n" +
        "Skill: One-handed Bonus I - Increases One-hand weapon damage (1.00% per level)\n" +
        "Skill: Two-handed Bonus I - Increases Two-hand weapon damage (1.00% per level)\n",
        ingredients: [{
          name: 'Pure Essence',
          amount: 100
        }, {
          name: 'Amber Flux',
          amount: 100
        }, {
          name: 'Diamond Graver',
          amount: 1
        }
        ]
      },
      {
        name: "Enchant: Skill VIII",
        time: 2880, // minutes
        description: "Two hand Weapon, Main hand Weapon, Off Hand Weapon, Shield, Helmet, Gauntlets\n" +
        "Skill: Accuracy I - Reduces the chance an enemy can dodge your attacks (20% per level)\n" +
        "Skill: Armor Penetration I - Increases the amount of damage that is unmitigated against your target's Armor (?% per level)\n" +
        "Skill: Initiative I - Increases your chance of catching your enemies off guard or surprise them. (?% per level)\n" +
        "Skill: One-handed Bonus I - Increases One-hand weapon damage (?% per level)\n" +
        "Skill: Two-handed Bonus I - Increases Two-hand weapon damage (8.00% per level)\n",
        ingredients: [{
          name: 'Pure Essence',
          amount: 200
        }, {
          name: 'Amber Flux',
          amount: 200
        }, {
          name: 'Diamond Graver',
          amount: 2
        }
        ]
      },
      {
        name: "Enchant: Skill IX",
        time: 5760, // minutes
        description: "Two hand Weapon, Main hand Weapon, Off Hand Weapon, Shield, Helmet, Gauntlets\n" +
        "Skill: Accuracy I - Reduces the chance an enemy can dodge your attacks (2,50% per level)\n" +
        "Skill: Armor Penetration I - Increases the amount of damage that is unmitigated against your target's Armor (0.80% per level)\n" +
        "Skill: Initiative I - Increases your chance of catching your enemies off guard or surprise them. (1.00% per level)\n" +
        "Skill: One-handed Bonus I - Increases One-hand weapon damage (1.00% per level)\n" +
        "Skill: Two-handed Bonus I - Increases Two-hand weapon damage (1.00% per level)\n",
        ingredients: [{
          name: 'Pure Essence',
          amount: 300
        }, {
          name: 'Amber Flux',
          amount: 400
        }, {
          name: 'Diamond Graver',
          amount: 3
        }
        ]
      },
      {
        name: "Enchant: Magic I",
        time: 5, // minutes
        description: "Cape, Ring, Amulet\n" +
        "Magic: Damage Bonus Fire I - Increases Fire damage (1.00% per level)\n" +
        "Magic: Damage Bonus Ice I - Increases Ice damage (1.00% per level)\n" +
        "Magic: Damage Healing Bonus I - Increases the amount you get healed by (3.00% per level)\n" +
        "Magic: Luck I - Increases the chance to receive an additional bonus loot roll from enimies (0.50% per level)\n",
        ingredients: [{
          name: 'Essence',
          amount: 100
        }, {
          name: 'Indigo Flux',
          amount: 1
        }, {
          name: 'Iron Graver',
          amount: 1
        }
        ]
      },
      {
        name: "Enchant: Magic II",
        time: 15, // minutes
        description: "Cape, Ring, Amulet\n" +
        "Magic: Damage Bonus Fire I - Increases Fire damage (1.00% per level)\n" +
        "Magic: Damage Bonus Ice I - Increases Ice damage (1.00% per level)\n" +
        "Magic: Damage Healing Bonus I - Increases the amount you get healed by (3.00% per level)\n" +
        "Magic: Luck I - Increases the chance to receive an additional bonus loot roll from enimies (0.50% per level)\n",
        ingredients: [{
          name: 'Essence',
          amount: 200
        }, {
          name: 'Indigo Flux',
          amount: 2
        }, {
          name: 'Iron Graver',
          amount: 2
        }
        ]
      },
      {
        name: "Enchant: Magic III",
        time: 60, // minutes
        description: "Cape, Ring, Amulet\n" +
        "Magic: Damage Bonus Fire I - Increases Fire damage (1.00% per level)\n" +
        "Magic: Damage Bonus Ice I - Increases Ice damage (1.00% per level)\n" +
        "Magic: Damage Healing Bonus I - Increases the amount you get healed by (3.00% per level)\n" +
        "Magic: Luck I - Increases the chance to receive an additional bonus loot roll from enimies (0.50% per level)\n",
        ingredients: [{
          name: 'Essence',
          amount: 500
        }, {
          name: 'Indigo Flux',
          amount: 5
        }, {
          name: 'Iron Graver',
          amount: 3
        }
        ]
      },
      {
        name: "Enchant: Magic IV",
        time: 180, // minutes
        description: "Cape, Ring, Amulet\n" +
        "Magic: Damage Bonus Fire I - Increases Fire damage (1.00% per level)\n" +
        "Magic: Damage Bonus Ice I - Increases Ice damage (1.00% per level)\n" +
        "Magic: Damage Healing Bonus I - Increases the amount you get healed by (3.00% per level)\n" +
        "Magic: Luck I - Increases the chance to receive an additional bonus loot roll from enimies (0.50% per level)\n",
        ingredients: [{
          name: 'Refined Essence',
          amount: 100
        }, {
          name: 'Indigo Flux',
          amount: 10
        }, {
          name: 'Steel Graver',
          amount: 1
        }
        ]
      },
      {
        name: "Enchant: Magic V",
        time: 360, // minutes
        description: "Cape, Ring, Amulet\n" +
        "Magic: Damage Bonus Fire I - Increases Fire damage (1.00% per level)\n" +
        "Magic: Damage Bonus Ice I - Increases Ice damage (1.00% per level)\n" +
        "Magic: Damage Healing Bonus I - Increases the amount you get healed by (3.00% per level)\n" +
        "Magic: Luck I - Increases the chance to receive an additional bonus loot roll from enimies (0.50% per level)\n",
        ingredients: [{
          name: 'Refined Essence',
          amount: 200
        }, {
          name: 'Indigo Flux',
          amount: 20
        }, {
          name: 'Steel Graver',
          amount: 2
        }
        ]
      },
      {
        name: "Enchant: Magic VI",
        time: 720, // minutes
        description: "Cape, Ring, Amulet\n" +
        "Magic: Damage Bonus Fire I - Increases Fire damage (1.00% per level)\n" +
        "Magic: Damage Bonus Ice I - Increases Ice damage (1.00% per level)\n" +
        "Magic: Damage Healing Bonus I - Increases the amount you get healed by (3.00% per level)\n" +
        "Magic: Luck I - Increases the chance to receive an additional bonus loot roll from enimies (0.50% per level)\n",
        ingredients: [{
          name: 'Refined Essence',
          amount: 500
        }, {
          name: 'Indigo Flux',
          amount: 50
        }, {
          name: 'Steel Graver',
          amount: 3
        }
        ]
      },
      {
        name: "Enchant: Magic VII",
        time: 1440, // minutes
        description: "Cape, Ring, Amulet\n" +
        "Magic: Damage Bonus Fire I - Increases Fire damage (1.00% per level)\n" +
        "Magic: Damage Bonus Ice I - Increases Ice damage (1.00% per level)\n" +
        "Magic: Damage Healing Bonus I - Increases the amount you get healed by (3.00% per level)\n" +
        "Magic: Luck I - Increases the chance to receive an additional bonus loot roll from enimies (0.50% per level)\n",
        ingredients: [{
          name: 'Pure Essence',
          amount: 100
        }, {
          name: 'Indigo Flux',
          amount: 100
        }, {
          name: 'Diamond Graver',
          amount: 1
        }
        ]
      },
      {
        name: "Enchant: Magic VIII",
        time: 2880, // minutes
        description: "Cape, Ring, Amulet\n" +
        "Magic: Damage Bonus Fire I - Increases Fire damage (1.00% per level)\n" +
        "Magic: Damage Bonus Ice I - Increases Ice damage (1.00% per level)\n" +
        "Magic: Damage Healing Bonus I - Increases the amount you get healed by (3.00% per level)\n" +
        "Magic: Luck I - Increases the chance to receive an additional bonus loot roll from enimies (0.50% per level)\n",
        ingredients: [{
          name: 'Pure Essence',
          amount: 200
        }, {
          name: 'Indigo Flux',
          amount: 200
        }, {
          name: 'Diamond Graver',
          amount: 2
        }
        ]
      },
      {
        name: "Enchant: Magic IX",
        time: 5760, // minutes
        description: "Cape, Ring, Amulet\n" +
        "Magic: Damage Bonus Fire I - Increases Fire damage (1.00% per level)\n" +
        "Magic: Damage Bonus Ice I - Increases Ice damage (1.00% per level)\n" +
        "Magic: Damage Healing Bonus I - Increases the amount you get healed by (3.00% per level)\n" +
        "Magic: Luck I - Increases the chance to receive an additional bonus loot roll from enimies (0.50% per level)\n",
        ingredients: [{
          name: 'Pure Essence',
          amount: 300
        }, {
          name: 'Indigo Flux',
          amount: 400
        }, {
          name: 'Diamond Graver',
          amount: 3
        }
        ]
      },
      {
        name: "Craft: Scroll of Shattered Illusions",
        time: 0, // minutes
        description: "todo: Needs 3 previously crafted items + 5 quill of the fierce - Vile Cliffs",
        ingredients: [{
          name: 'Quill of the Fierce',
          amount: 5
        }
        ]
      }
    ];
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

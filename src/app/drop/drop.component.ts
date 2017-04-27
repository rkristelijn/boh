import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SortComponent } from '../shared/sort-component';
import { DropFilterPipe } from './drop.pipe';
import { HasDropFilterPipe } from './has-drop.pipe';

import { DataService } from '../data.service';

@Component({
    selector: 'app-drop',
    templateUrl: './drop.component.html',
    styleUrls: ['./drop.component.css']
})
export class DropComponent extends SortComponent implements OnInit {
    rawDrops: any[];
    drops: any[] = [];
    dropFilter: string;
    typeFilter: string;
    nameFilter: string;
    constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { super(); }
    ngOnInit() {
        this.dataService.getDrops().subscribe(data => {
            this.rawDrops = data;
            for (let drop of this.rawDrops) {
                this.addItem(drop);
            }
            this.addDropRate();
            //console.log(this.drops);
        });
    }

    //data manipulators
    addItem(drop) {
        //console.log("processing", drop);
        let index = this.indexOfArea(drop.area, drop.phase);
        //console.log("index", index);
        if (index === -1) {
            //console.log("adding", drop);
            index = this.addArea(drop.area, drop.phase, drop.type, drop.e, drop.waves);
            //console.log("new index:", index);
            this.addDrop(index, drop.amount, drop.item);

            //update onslaughter
            if(drop.item.toLocaleLowerCase() === "silver" && this.isOnslaught(drop.area, drop.phase)) {
                console.log(drop.area, drop.phase, drop.waves);
                this.drops[index]['waves'] = drop.waves;
            }
        } else {
            this.addDrop(index, drop.amount, drop.item);

            //update onslaughter
            if(drop.item.toLocaleLowerCase() === "silver" && this.isOnslaught(drop.area, drop.phase)) {
                console.log("+", drop.area, drop.phase, drop.waves);
                if(!this.drops[index]['waves'] || this.drops[index]['waves'] === -1) this.drops[index]['waves'] = drop.waves;
                else this.drops[index]['waves'] += drop.waves;
            }
        }
    }

    addArea(name: string, phase: number, type: string, ePerWave: number, waves: number): number {
        let index = this.drops.push({
            area: name,
            phase: phase,
            type: type,
            ePerWave: ePerWave,
            waves: this.isOnslaught(name, phase)?-1:waves,
            count: 0,
            drops: [],
            onslaught: this.isOnslaught(name, phase)
        });

        return (index - 1);
    }

    addDrop(index: number, amount: number, item: string) {
        //console.log("adding drop", item, "count is", this.drops[index].count);
        //increase the counter
        if (item.toLocaleLowerCase() === "silver") this.drops[index].count++;

        //console.log("count is", this.drops[index].count);

        let dropIndex = this.indexOfDrop(this.drops[index].drops, item);
        //console.log("dropIndex", dropIndex);
        if (dropIndex === -1) {
            //console.log("adding drop", item);
            this.drops[index].drops.push({
                item: item,
                amount: amount
            });
        } else {
            //console.log("increasing drop", item);
            this.drops[index].drops[dropIndex].amount += amount;
        }
    }

    addDropRate() {
        for (let area of this.drops) {
            //console.log("calculating droprate for", area.area, area.phase);
            let ePerWave = area.ePerWave;
            let count = area.count;
            let waves = area.waves;
            let onslaught = this.isOnslaught(area.area, area.phase);
            area['dropRate'] = [];
            for (let item of area.drops) {
                area.dropRate.push({
                    dropRate: onslaught
                    ?((item.amount / count) / (ePerWave))
                    :((item.amount / count) / (ePerWave)),
                    item: item.item
                })
            }
        }
    }

    //searchers
    indexOfArea(name: string, phase: number): number {
        for (let i = 0; i < this.drops.length; i++) {
            if (this.drops[i].area === name && this.drops[i].phase === phase) return i;
        }
        return -1; //not found
    }

    indexOfDrop(drops: any, item: string) {
        for (let i = 0; i < drops.length; i++) {
            if (drops[i].item === item) return i;
        }
        return -1; //not found
    }

    isOnslaught(area: string, phase: number): boolean {
        let onslaughtZones = [
            { 
                name: "Crypt of Corruption",
                phase: 1 
            },
            { 
                name: "Crypt of Corruption",
                phase: 2
            },
            { 
                name: "Crypt of Corruption",
                phase: 3
            },
            {
                name: "Karnak's Final Stand",
                phase: 2
            },
            {
                name: "Karnak's Final Stand",
                phase: 3
            },
            {
                name: "Crystallized Vengeance",
                phase: 2
            }, 
            {
                name: "Crystallized Vengeance",
                phase: 3
            }, 
            {
                name: "Rise of the Spider Queen",
                phase: 3
            }, 
            {
                name: "The Shadow Returns",
                phase: 2
            }, 
            {
                name: "The Shadow Returns",
                phase: 3
            } 
        ]

        for (let zone of onslaughtZones) {
            if(area === zone.name && phase === zone.phase) return true;
        }

        return false;
    }
}
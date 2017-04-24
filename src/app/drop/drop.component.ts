import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SortComponent } from '../shared/sort-component';

import { DataService } from '../data.service';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent extends SortComponent implements OnInit {
    rawDrops:any[];
    drops:any[] = [];
    constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { super(); }
    ngOnInit() {
        this.dataService.getDrops().subscribe(data => {
            this.rawDrops = data;
            for (let drop of this.rawDrops) {
                this.addItem(drop);
            }
            console.log(this.drops);
        });
    }

    //data manipulators
    addItem(drop) {
        console.log("processing", drop);
        let index = this.indexOfArea(drop.area, drop.phase);
        console.log("index", index);
        if( index === -1 ) {
            console.log("adding", drop);
            index = this.addArea(drop.area, drop.phase, drop.type, drop.e);
            console.log("new index:", index);
            this.addDrop(index, drop.amount, drop.item);
        } else {
            this.addDrop(index, drop.amount, drop.item);
        }
    }

    addArea( name:string, phase:number, type:string, ePerWave:number ): number {
        let index = this.drops.push({
            area:name,
            phase:phase,
            type:type,
            ePerWave:ePerWave,
            count:0,
            drops:[]
        });

        return(index -1);
    }

    addDrop( index: number, amount: number, item:string ) {
        console.log("adding drop", item, "count is", this.drops[index].count);
        //increase the counter
        if(item.toLocaleLowerCase() === "silver") this.drops[index].count++;

        console.log("count is", this.drops[index].count);

        let dropIndex = this.indexOfDrop(this.drops[index].drops, item);
        console.log("dropIndex", dropIndex);
        if(dropIndex === -1 ) {
            console.log("adding drop", item);
            this.drops[index].drops.push({
                item:item,
                amount:amount
            });
        } else {
            console.log("increasing drop", item);
            this.drops[index].drops[dropIndex].amount += amount;
        }
    }

    //searchers
    indexOfArea( name:string, phase:number ): number {
        for( let i = 0; i < this.drops.length; i++ ) {
            if ( this.drops[i].area === name && this.drops[i].phase === phase ) return i;
        }
        return -1; //not found
    }

    indexOfDrop( drops:any, item: string) {
        for( let i = 0; i < drops.length; i++ ) {
            if ( drops[i].item === item ) return i;
        }
        return -1; //not found
    }
}
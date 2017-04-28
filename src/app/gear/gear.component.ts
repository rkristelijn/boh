import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SortComponent } from '../shared/sort-component';

import { DataService } from '../data.service';

import { TimePipe } from '../../assets/time.pipe';

import { CollapsiblePanelComponent } from '../shared/collapsible-panel';

@Component({
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css']
})
export class GearListComponent extends SortComponent implements OnInit {

  //local variables for data
  gear: any[] = [];

  //local variables for behavior (filter/sorting)
  nameFilter: string;
  typeFilter: string;
  valorFilter: string;
  descFilter: string;
  subTypeFilter:string;
  tierFilter:number;

  /** We need the dataservice to load data and to handle ?search= routes
   * @param dataService 
   * @param activatedRoute 
   */
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    super();
    this.sort = '-tier';
  }

  toggle(name) {
    for (let item of this.gear) {
      if (item.name === name) {
        item['collapsed'] = item['collapsed'] == "collapsed" ? "" : "collapsed";
      }
    }
  }

  /** load the data and handle the route for ?search
   *   dataService takes care of caching
   */
  ngOnInit() {
    this.dataService.getGear().subscribe(res => {
      this.gear = res;
      this.setAllCollapsed(this.gear);
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.typeFilter = params['type'];
      this.nameFilter = params['search'];
    });
  }

  setAllCollapsed(gear) {
    let i = 0;
    for (let item of gear) {
      item["collapsed"] = "collapsed";
      item["index"] = i++;
    }
  }
  /**
   * returns an array of unique items
   * @param prop 
   */
  getDistinct(prop: any): any[] {
    let distinct: any[] = [];
    for (let item of this.gear) {
      if (!item.hasOwnProperty(prop)) { continue; }
      if (distinct.indexOf(item[prop]) === -1) {
        distinct.push(item[prop]);
      }
    }
    return distinct;
  }
}
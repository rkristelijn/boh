import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SortComponent } from '../shared/sort-component';

import { DataService } from '../data.service';

import { TimePipe } from '../../assets/time.pipe';

@Component({
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css']
})
export class GearListComponent extends SortComponent implements OnInit {

  //local variables for data
  gear: any[] = [];

  //local variables for behavior (filter/sorting)
  nameFilter: string;
  valorFilter: string;

  /** We need the dataservice to load data and to handle ?search= routes
   * @param dataService 
   * @param activatedRoute 
   */
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    super();
    this.sort = 'tier';
  }

  toggle(name) {
    for (let item of this.gear) {
      if( item.name === name ) {
        item['collapsed']  = item['collapsed'] == "collapsed" ? "" : "collapsed";
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
    });
  }

  setAllCollapsed(gear) {
    let i = 0;
    for (let item of gear) {
      item["collapsed"] = "collapsed";
      item["index"] = i++;
    }
  }
}
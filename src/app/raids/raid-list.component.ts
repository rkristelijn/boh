import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SortComponent } from '../shared/sort-component';

import { DataService } from '../data.service';

import { TimePipe } from '../../assets/time.pipe';

@Component({
  templateUrl: './raid-list.component.html',
  styleUrls: ['./raid-list.component.css']
})
export class RaidListComponent extends SortComponent implements OnInit {

  //local variables for data
  raids: any[] = [];

  //local variables for behavior (filter/sorting)
  nameFilter: string;
  valorFilter: string;

  /** We need the dataservice to load data and to handle ?search= routes
   * @param dataService 
   * @param activatedRoute 
   */
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    super();
    this.sort = 'might';
  }

  toggle(index) {
    this.raids[index]['collapsed'] = this.raids[index]['collapsed'] == "collapsed" ? "" : "collapsed";
  }

  /** load the data and handle the route for ?search
   *   dataService takes care of caching
   */
  ngOnInit() {
    this.dataService.getRaids().subscribe(res => {
      this.raids = res;
      this.setAllCollapsed(this.raids);
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {
    //   this.locationStringFilter = params['search'];
    //   this.areaStringFilter = params['area'];
    //   this.typeStringFilter = params['type'];
    });
  }

  setAllCollapsed(raids) {
    let i = 0;
    for (let raid of raids) {
      raid["collapsed"] = "collapsed";
      raid["index"] = i++;
    }
  }
}
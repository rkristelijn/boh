import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationsComponent implements OnInit {
  //local variables for data
  map: any;
  locations: any[] = [];

  //local variables for behavior (filter/sorting)
  sort: string = 'name';
  locationStringFilter: string;
  typeStringFilter: string;
  areaStringFilter: string;

  /** We need the dataservice to load data and to handle ?search= routes
   * @param dataService 
   * @param activatedRoute 
   */
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {}

  /** load the data and handle the route for ?search
   *   dataService takes care of caching
   */
  ngOnInit() {
    this.dataService.getLocations().subscribe(res => {
      this.map = res;
      this.loadLocations(this.map.zones, '');
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.locationStringFilter = params['search'];
    });
  }

  /// loading functions

  /** recursive loop thought the data and either load the locations or, when there is a member array called zones
   *   do a callback and load the sub-zondes
   * @param items 
   * @param parent 
   */
  loadLocations(items, parent) {
    if (items) for (let item of items) {
      if (item.zones) {
        this.addLocation(item.name, item.type, parent);
        this.loadLocations(item.zones, item.name);
      } else {
        this.addLocation(item.name, item.type, parent);
      }
    }
  }

  /** Adds a location
   * @param name 
   * @param type 
   * @param parent 
   */
  addLocation(name, type, parent) {
    this.locations.push({
      name: name,
      type: type,
      parent: parent
    });
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
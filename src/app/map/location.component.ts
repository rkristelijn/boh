import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Http } from '@angular/http';

//import { OrderBy } from '../../assets/order.pipe';
//qimport { LocationStringFilterPipe } from './locations.filter.pipe';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationsComponent {
  map: any;
  locations: any[] = [];
  sort: string = 'name';
  locationStringFilter: string;
  typeStringFilter: string;
  areaStringFilter: string;

  constructor(private http: Http, private activatedRoute: ActivatedRoute) {
    this.http.get('./app/map/data.json').subscribe(res => {
      this.map = res.json();
      this.loadLocations(this.map.zones, '');
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.locationStringFilter = params['search'];
    });
  }

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
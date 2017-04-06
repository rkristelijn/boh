import { Component, OnInit } from '@angular/core';

import {Http} from '@angular/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationsComponent implements OnInit {
  map: any;
  locations: any[] = [];
  constructor(private http:Http) {
    this.http.get('./app/map/data.json').subscribe(res => {
      this.map = res.json();
      //console.log(this.map)
      this.loadLocations(this.map.zones, 'main');
      console.log("locations", this.locations);
    });
   }

  ngOnInit() {}

  loadLocations(items, parent) {
    console.log("items", items);
    if(items) for (let item of items) {
      console.log("item",item);
      if (item.type === "Area") {
        this.addLocation(item.name, item.type, parent);
        console.log("going to load:", item.zones);
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

}
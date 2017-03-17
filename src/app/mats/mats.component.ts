import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mats',
  templateUrl: './mats.component.html',
  styleUrls: ['./mats.component.css']
})
export class MatsComponent implements OnInit {
  //properties
  name : string;
  locations : string[];

  /**
   * Creates a new material
   * @param name 
   */
  constructor(name : string) { 
    this.name = name;
  }

  /**
   * 
   * @param location - provide the harvest location of the material
   */
  addLocation(location: string) {
    //create the array if not existing
    if(!this.locations) this.locations = [];
    //add the new value
    this.locations.push(location);
  }

  ngOnInit() {
  }

}

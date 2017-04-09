import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MatsComponent } from '../mats/mats.component';
//pipes
import { MaterialFilterPipe } from './mats-list.material.pipe';
import { LocationFilterPipe } from './mats-list.location.pipe';
import { HyperlinkPipe } from './mats-list.hyperlink.pipe';

import { DataService } from '../data.service';

@Component({
  selector: 'app-mats-list',
  templateUrl: './mats-list.component.html',
  styleUrls: ['./mats-list.component.css']
})
export class MatsListComponent implements OnInit {
  sort: string = 'name';
  matsList: MatsComponent[];
  private values: any[];

  locationFilter: string;
  materialFilter: string;

  /** We need the generic DataService and ActivatedRoute to get data and handle search request from url_
   * @param data 
   * @param activatedRoute 
   */
  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  /** loads the materials from the service, service takes care of caching
   *  handle filter from routes if page is opened with ?search=
   */
  ngOnInit() {
    this.data.getMaterials().subscribe(res => {
      this.loadValues(res);
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.materialFilter = params['search'];
    });
  }

  /** Adds a component to the list
   * @param MatsComponent comp - the new component
   */
  addComponent(comp: MatsComponent) {
    this.matsList.push(comp);
  }

  /** Loads the values and drops
   * @param values 
   */
  loadValues(values: any[]) {
    this.matsList = [];
    for (let mats of values) {
      let material = new MatsComponent(mats.name);

      if (mats.drops) {
        for (let drop of mats.drops) {
          material.addLocation(drop);
        }
      }
      //console.log("adding",material);
      this.matsList.push(material);
    }
  }

  /** Handles replacing drops with hyperlinks
   * todo: handle routes to Raids
   * @param value 
   * @param params 
   */
  getLink(value: string, params: boolean = false): any {
    let split: string[] = value.split(":");
    let type = split[0];
    let search = split[1];

    switch (type) {
      case "Dungeon":
        if (params) return { search: search.trim() };
        else return '/locations';
      case "Raids":
        if (params) return { type:'raid', area: search.substr(8, search.length).trim() };
        else return '/locations';
      case "Zones":
        if (params) return { type:'quest', area: search.substr(8, search.length).trim() };
        else return '/locations';
      case "Portals":
        if (params) return { search: 'portal' };
        else return '/locations';
      case "Recipe":
        if (params) return { search: search.trim() };
        else return '/recipes';
         
      default:
        if (params) return { search: search.trim() };
        else return '/locations';
    }
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

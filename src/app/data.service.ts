import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    urlEnemies: string = './app/data/enemies.json';
    urlDrops: string = './app/data/drops.json';
    urlMaterials: string = './app/data/material-list.json';
    urlLocations: string = './app/data/locations.json';
    urlRecipes: string = './app/data/recipe-list.json';
    urlRaids: string = './app/data/raid-list.json';
    urlGear: string = './app/data/gear-list.json';
    urlSchedule: string = './app/data/schedule.json';

    materials: any[];
    recipes: any[];
    raids: any[];
    locations: any;
    gear: any[];
    drops: any[];
    schedule: any[];
    enemies: any[];

    /** empty constructure with dependancy injection for HTTP calls
     * @param http 
     */
    constructor(private http: Http) { }

    /** Returns the materials either from memory or
     * from a REST call
     * @returns Observable <any>
     */
    getMaterials(): Observable<any> {
        if (this.materials) {
            return Observable.of(this.materials);
        } else {
            return this.http.get(this.urlMaterials)
                .map(res => res.json())
                .do((data) => {
                    this.materials = data;
                });
        }
    }

    /** Returns the materials either from memory or
     * from a REST call
     * @returns Observable <any>
     */
    getLocations(): Observable<any> {
        if (this.locations) {
            return Observable.of(this.locations);
        } else {
            return this.http.get(this.urlLocations)
                .map(res => res.json())
                .do((data) => {
                    this.locations = data;
                });
        }
    }

    /** Returns the materials either from memory or
     * from a REST call
     * @returns Observable <any>
     */
    getRecipes(): Observable<any> {
        if (this.recipes) {
            return Observable.of(this.recipes);
        } else {
            return this.http.get(this.urlRecipes)
                .map(res => res.json())
                .do((data) => {
                    this.recipes = data;
                });
        }
    }

    /** Returns the list or Raids either from memory or
     * from a REST call
     * @returns Observable <any>
     */
    getRaids(): Observable<any> {
        if (this.raids) {
            return Observable.of(this.raids);
        } else {
            return this.http.get(this.urlRaids)
                .map(res => res.json())
                .do((data) => {
                    this.raids = data;
                });
        }
    }

    /** Returns the list or Raids either from memory or
     * from a REST call
     * @returns Observable <any>
     */
    getGear(): Observable<any> {
        if (this.gear) {
            return Observable.of(this.gear);
        } else {
            return this.http.get(this.urlGear)
                .map(res => res.json())
                .do((data) => {
                    this.gear = data;
                });
        }
    }

    getDrops():Observable<any> {
        if (this.drops) {
            return Observable.of(this.drops);
        } else {
            return this.http.get(this.urlDrops)
                .map(res => res.json())
                .do((data) => {
                    this.drops = data;
                });
        }
    }

    getSchedule():Observable<any> {
        if (this.schedule) {
            return Observable.of(this.schedule);
        } else {
            return this.http.get(this.urlSchedule)
                .map(res => res.json())
                .do((data) => {
                    this.schedule = data;
                });
        }
    }

    getEnemies():Observable<any> {
        if (this.enemies) {
            return Observable.of(this.enemies);
        } else {
            return this.http.get(this.urlEnemies)
                .map(res => res.json())
                .do((data) => {
                    this.enemies = data;
                });
        }
    }
}
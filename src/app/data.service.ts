import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    urlMaterials: string = './app/data/material-list.json';
    urlLocations: string = './app/data/locations.json';
    urlRecipes:   string = './app/data/recipe-list.json';
    urlRaids:     string = './app/data/raid-list.json';

    materials: any[];
    recipes:   any[];
    raids:     any[];
    locations: any;

    /** empty constructure with dependancy injection for HTTP calls
     * @param http 
     */
    constructor(private http: Http) { }

    /** Returns the materials either from memory or
     * from a REST call
     * @returns Observable <any>
     */
    getMaterials(): Observable <any> {
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
    getLocations(): Observable <any> {
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
    getRecipes(): Observable <any> {
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
    getRaids(): Observable <any> {
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
}
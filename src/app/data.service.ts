import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    urlMaterials: string = './app/data/material-list.json';
    urlLocations: string = './app/data/locations.json';
    urlRecipes:   string = './app/data/recipe-list.json';

    materials: any[];
    recipes:   any[];
    locations: any;
    constructor(private http: Http) { }
    getMaterials(): Observable <any> {
        if (this.materials) {
            console.log("materials from cache");
            return Observable.of(this.materials);
        } else {
            console.log("getting data for materials...");
            return this.http.get(this.urlMaterials)
                .map(res => res.json())
                .do((data) => {
                    this.materials = data;
                });
        }
    }
    getLocations(): Observable <any> {
        if (this.locations) {
            console.log("locations from cache");
            return Observable.of(this.locations);
        } else {
            console.log("getting data for locations...");
            return this.http.get(this.urlLocations)
                .map(res => res.json())
                .do((data) => {
                    this.locations = data;
                });
        }
    }
    getRecipes(): Observable <any> {
        if (this.recipes) {
            console.log("recipes from cache");
            return Observable.of(this.recipes);
        } else {
            console.log("getting data for recipes...");
            return this.http.get(this.urlRecipes)
                .map(res => res.json())
                .do((data) => {
                    this.recipes = data;
                });
        }
    }
}
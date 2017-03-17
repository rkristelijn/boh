import { Component, OnInit } from '@angular/core';

import { MatsComponent } from '../mats/mats.component';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  material:MatsComponent;
  amount:number;
  constructor(material:string,amount:number) { 
    this.material = new MatsComponent(material);
    this.amount = amount;
  }

  ngOnInit() {
  }

}

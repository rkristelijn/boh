/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IngredientComponent } from './ingredient.component';
//import { MatsComponent } from '../mats/mats.component';

describe('IngredientComponent', () => {
  // let component: IngredientComponent;
  // let fixture: ComponentFixture<IngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientComponent ]
    })
    // .overrideComponent(IngredientComponent, { //because we have a value in constructor, we need to provide these
    //   set: {
    //     providers : [{
    //         provide : MatsComponent,
    //         useValue: new MatsComponent('hello')
    //     }, {
    //       provide: IngredientComponent, 
    //       useValue: 1
    //     }]}
    // });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(IngredientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    let component = new IngredientComponent('hello world', 4);
    expect(component).toBeTruthy();
  });
  it('should have specific properties', () => {
    let component = new IngredientComponent('hello world', 10);
    expect(component.material.name).toBe('hello world');
    expect(component.amount).toBe(10);
  });
});

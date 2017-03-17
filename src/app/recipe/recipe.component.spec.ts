/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecipeComponent } from './recipe.component';

describe('RecipeComponent', () => {
  //let component: RecipesComponent;
  //let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeComponent ]
    })
    .overrideComponent(RecipeComponent, { //because we have a value in constructor, we need to provide these
      set: {
        providers : [{
            provide : RecipeComponent,
            useValue: 'hello world'
        }]}
    });
  }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(RecipesComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    let component = new RecipeComponent();
    expect(component).toBeTruthy();
  });

  it('should have a an ingredient', () => {
    let component = new RecipeComponent();
    component.addIngredientString('hello world',10);
    expect(component.ingredients[0].material.name).toBe('hello world');
    expect(component.ingredients[0].amount).toBe(10);
  });
});

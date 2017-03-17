/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatsComponent } from './mats.component';

describe('MatsComponent', () => {
  //let component = new MatsComponent('hello world');
  //let component : MatsComponent;
  //let fixture: ComponentFixture<MatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatsComponent ]
    })
    .overrideComponent(MatsComponent, { //because we have a value in constructor, we need to provide these
      set: {
        providers : [{
            provide : MatsComponent,
            useValue: 'hello world'
        }]}
    });
  }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(MatsComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    let component = new MatsComponent('hello world');
    expect(component).toBeTruthy();
  });

  it('should have property name set to "hello world"', () => {
    let component = new MatsComponent('hello world');
    expect(component['name']).toBe('hello world');
    //expect(1).toBe(1);
  });

  it('should have property farm Location set to "hello world"', () => {
    let component = new MatsComponent('hello world');
    expect(component['locations']).toBeUndefined();
    component.addLocation('hello world');
    expect(component['locations'][0]).toBe('hello world');
    //expect(1).toBe(1);
  });
});

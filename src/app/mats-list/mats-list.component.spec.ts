/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatsListComponent } from './mats-list.component';
import { MatsComponent } from '../mats/mats.component';

describe('MatsListComponent', () => {
  let component: MatsListComponent;
  let fixture: ComponentFixture<MatsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialze', () => {
    expect(component['matsList'].length).toBe(0);
  });
  it('should add a component', () => {
    component.addComponent(new MatsComponent('hello world'));
    expect(component['matsList'][0]['name']).toBe('hello world');
    component.loadStaticValues();
  });
});

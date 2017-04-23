import { Component, NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'collapsible-panel',
    template: `
  <div class="panel">
    <div class="panel-heading" (click)="visible = !visible">
            <h3 class="panel-title">
                <ng-content select="span.title"></ng-content>
            </h3>
            <span [class]="getClass()"></span>
    </div>
    <div class="panel-body" *ngIf="visible">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styles: [`
    .panel {
        border-color: #ddd;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-bottom: 4px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    }
    .panel-heading {
        padding: 10px 15px;
        border-bottom: 1px solid transparent;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        color: #333;
        background-color: #f5f5f5;
        border-color: #ddd;
        cursor: pointer;
    }
    .panel-title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 16px;
        color: inherit;
    }
    .panel-body {
        padding: 15px;
    }
    span {
        margin-top:-10px;
    }
`]
})
export class CollapsiblePanelComponent {
    visible: boolean = false;
    getClass() {
        return (this.visible?"pull-right caret-up":"pull-right caret");
    }
}
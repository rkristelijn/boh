import { Component, OnInit } from '@angular/core';

@Component({
})
export class SortComponent  {
  sort: string = 'name';

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

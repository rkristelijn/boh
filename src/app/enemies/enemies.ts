import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SortComponent } from '../shared/sort-component';

import { TimePipe } from '../../assets/time.pipe';
import { OrderBy } from '../../assets/order.pipe';

import { DataService } from '../data.service';

@Component({
  selector: 'enemies',
  templateUrl: './enemies.html',
  styleUrls: ['./enemies.css']
})
export class Enemies extends SortComponent implements OnInit {
  enemies: any[] = [];
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { 
    super(); 
    this.dataService.getEnemies().subscribe((res) => {
      this.enemies = res;
    });
  }
  ngOnInit() { }
}
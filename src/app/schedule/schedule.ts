import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SortComponent } from '../shared/sort-component';

import { TimePipe } from '../../assets/time.pipe';
import { OrderBy } from '../../assets/order.pipe';

import { DataService } from '../data.service';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.html',
  styleUrls: ['./schedule.css']
})
export class Schedule extends SortComponent implements OnInit {
  schedule: any[] = [];
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { 
    super(); 
    this.dataService.getSchedule().subscribe((res) => {
      this.schedule = res;
    });
  }
  ngOnInit() { }
}
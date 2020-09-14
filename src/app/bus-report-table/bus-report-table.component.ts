import { Component, Input, OnInit } from '@angular/core';
import { BusData } from '../models/bus-report';

@Component({
  selector: 'app-bus-report-table',
  templateUrl: './bus-report-table.component.html',
  styleUrls: ['./bus-report-table.component.css']
})
export class BusReportTableComponent implements OnInit {
  @Input() busDataArray: BusData[] = [];

  constructor() { }

  ngOnInit() {
  }

}

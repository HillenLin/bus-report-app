import { BusReportService } from './../services/bus-report.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { BusReportModel, ReportData } from '../models/bus-report';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit, OnDestroy {
  busReportModel: BusReportModel;
  reportDataArray: ReportData[] = [];

  ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private busReportService: BusReportService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.busReportService.getBusReports().pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe((model: BusReportModel) => {
      if (model) {
        this.busReportModel = model;
        this.reportDataArray = model.data;
      }
    },
    (error: any) => {
      console.error(error);
    });
  }

  saveNotes(data: ReportData) {
    this.busReportService.saveNotes(data).pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe((result: boolean) => {
      let message = 'Unable to save notes.';

      if (result) {
        message = 'Notes saved successfully.';
      }

      this.snackBar.open(message, '', {
          duration: 2000,
      });
    },
    (error: any) => {
      console.error(error);
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

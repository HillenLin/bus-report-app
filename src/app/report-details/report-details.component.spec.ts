import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BusReportService } from './../services/bus-report.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, from, throwError } from 'rxjs';
import { ReportDetailsComponent } from './report-details.component';
import { ReportData, BusReportModel } from '../models/bus-report';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBarModule, MatExpansionModule, MatCardModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReportDetailsComponent', () => {
  let component: ReportDetailsComponent;
  let fixture: ComponentFixture<ReportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule
       ],
      declarations: [
        ReportDetailsComponent
       ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [ BusReportService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the bus reports from the server', () => {
    const reports = { data: [
      {
        organisation: 'test1',
        date: '1/1/2020',
        notes: '',
        busData: []
      },
      {
        organisation: 'test2',
        date: '11/1/2020',
        notes: 'test',
        busData: []
      }
    ]} as BusReportModel;
    const service = TestBed.get(BusReportService);
    spyOn(service, 'getBusReports').and.returnValue(from([ reports ]));

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.busReportModel).toBe(reports);
  });

  it('should save the report notes', () => {
    const report = {
      organisation: 'test1',
      date: '1/1/2020',
      notes: '',
      busData: []
    } as ReportData;
    const isSaved = true;

    const service = TestBed.get(BusReportService);
    const spy = spyOn(service, 'saveNotes').and.returnValue(from([ isSaved ]));

    component.saveNotes(report);

    expect(spy).toHaveBeenCalledWith(report);
  });
});

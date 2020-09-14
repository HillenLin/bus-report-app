import { BusStatusPipe } from './../shared/pipes/bus-status.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoldTextPipe } from '../shared/pipes/bold-text.pipe';
import { BusReportTableComponent } from './bus-report-table.component';

describe('BusReportTableComponent', () => {
  let component: BusReportTableComponent;
  let fixture: ComponentFixture<BusReportTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BusReportTableComponent,
        BoldTextPipe,
        BusStatusPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusReportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

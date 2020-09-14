import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BusReportService } from './bus-report.service';

describe('BusReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: BusReportService = TestBed.get(BusReportService);
    expect(service).toBeTruthy();
  });
});

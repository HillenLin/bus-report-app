import { BusReportService } from './services/bus-report.service';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatSnackBarModule } from '@angular/material';
import { BusReportTableComponent } from './bus-report-table/bus-report-table.component';
import { BoldTextPipe } from './shared/pipes/bold-text.pipe';
import { BusStatusPipe } from './shared/pipes/bus-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReportDetailsComponent,
    BusReportTableComponent,
    BoldTextPipe,
    BusStatusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    BusReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

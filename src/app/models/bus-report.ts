export interface BusReportModel {
    data: ReportData[];
}

export interface ReportData {
    organisation: string;
    date: string;
    notes: string;
    busData: BusData[];
}

export interface BusData {
    busId: string;
    routeVariant: string;
    deviationFromTimetable: number;
}

// types/asylum.ts
export interface OfficeData {
  office: string;
  granted: number;
  adminClosed: number;
  denied: number;
  totalCases: number;
}

export interface YearResult {
  fiscal_year: string;
  granted: number;
  denied: number;
  adminClosed: number;
  totalCases: number;
  yearData: OfficeData[];
}

export interface AsylumData {
  totalCases: number;
  granted: number;
  denied: number;
  yearResults: YearResult[];
  citizenshipResults: any[];
}
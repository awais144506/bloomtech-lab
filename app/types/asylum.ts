// app/types/asylum.ts

export interface YearResult {
  fiscal_year: string;
  granted: number;
  denied: number;
  adminClosed: number;
  totalCases: number;
  yearData: any[]; 
}

export interface CitizenshipResult {
  citizenship: string;
  granted: number;
  adminClosed: number;
  denied: number;
  totalCases: number;
}

// This is the combined data your page will use
export interface AsylumData {
  totalCases: number;
  yearResults: YearResult[];
  citizenshipResults: CitizenshipResult[];
}
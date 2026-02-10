'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { AsylumData } from '@/app/types/asylum';
import { TimeSeriesChart } from './TimeSeriesChart';
import { CitizenshipBarChart } from './CitizenshipBarChart';
const AsylumHeatMap = dynamic(
  () => import('./AsylumHeatMap'),
  { 
    ssr: false, 
    loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse rounded-xl flex items-center justify-center text-gray-400">Loading Map...</div> 
  }
);

export default function GraphsContainer({ data }: { data: AsylumData }) {
  const [view, setView] = useState<'timeline' | 'office' | 'citizenship'>('timeline');
  const [selectedYear, setSelectedYear] = useState(data.yearResults[0]?.fiscal_year);
  const activeYearData = data.yearResults.find(y => y.fiscal_year === selectedYear);
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 mb-6">
        <div className="flex gap-4">
          <button 
            onClick={() => setView('timeline')}
            className={`pb-2 px-4 cursor-pointer transition-all ${view === 'timeline' ? 'border-b-2 border-amber-500 font-bold text-gray-800' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Time Series
          </button>
          <button 
            onClick={() => setView('office')}
            className={`pb-2 px-4 cursor-pointer transition-all ${view === 'office' ? 'border-b-2 border-amber-500 font-bold text-gray-800' : 'text-gray-500 hover:text-gray-800'}`}
          >
            USCIS Asylum Offices Heat Map
          </button>
          <button 
            onClick={() => setView('citizenship')}
            className={`pb-2 px-4 cursor-pointer transition-all ${view === 'citizenship' ? 'border-b-2 border-amber-500 font-bold text-gray-800' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Citizenship
          </button>
        </div>
        {view === 'office' && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-gray-600">Fiscal Year:</span>
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-amber-500"
            >
              {data.yearResults.map(y => (
                <option key={y.fiscal_year} value={y.fiscal_year}>{y.fiscal_year}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        {view === 'timeline' && <TimeSeriesChart data={data.yearResults} />}
        
        {view === 'office' && (
          <AsylumHeatMap yearData={activeYearData?.yearData || []} />
        )}

   {view === 'citizenship' && (
          <CitizenshipBarChart data={data.citizenshipResults} />
        )}
      </div>
    </div>
  );
}
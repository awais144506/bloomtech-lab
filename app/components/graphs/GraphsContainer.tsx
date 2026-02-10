'use client';
import { useState } from 'react';
import { AsylumData } from '@/app/types/asylum';
import {TimeSeriesChart} from './TimeSeriesChart';
// Import other charts here

export default function GraphsContainer({ data }: { data: AsylumData }) {
  const [view, setView] = useState<'timeline' | 'office' | 'citizenship'>('timeline');

  return (
    <div className="space-y-6">
      {/* Navigation for the different graph views */}
      <div className="flex gap-4 border-b border-gray-200 mb-6">
        <button 
          onClick={() => setView('timeline')}
          className={`pb-2 px-4 cursor-pointer ${view === 'timeline' ? 'border-b-2 border-amber-500 font-bold' : 'text-gray-800'}`}
        >
          Time Series
        </button>
        <button 
          onClick={() => setView('office')}
          className={`pb-2 px-4 cursor-pointer ${view === 'office' ? 'border-b-2 border-amber-500 font-bold' : 'text-gray-800'}`}
        >
          USCIS Asylum Offices Heat Map
        </button>
          <button 
          onClick={() => setView('citizenship')}
          className={`pb-2 px-4 cursor-pointer ${view === 'citizenship' ? 'border-b-2 border-amber-500 font-bold' : 'text-gray-800'}`}
        >
          Citizenship of Asylum Seeker
        </button>
      </div>

      {/* Render the appropriate chart based on state */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        {view === 'timeline' && <TimeSeriesChart data={data.yearResults} />}
        {view === 'office' && <p>Office Bar Chart coming next...</p>}
        {view === 'citizenship' && <p>Citizenship Bar Chart coming next...</p>}
      </div>
    </div>
  );
}
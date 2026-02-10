'use client';
import { useState } from 'react';
import GraphsContainer from '../components/graphs/GraphsContainer';
import { AsylumData } from '../types/asylum';
export default function GraphsClient({ initialData }: { initialData: AsylumData }) {
  const [data, setData] = useState<AsylumData | null>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setData(initialData);
      setIsLoading(false);
    }, 1500);
  };

  const handleClear = () => {
    setData({
      totalCases: 0,
      yearResults: [],
      citizenshipResults: []
    });
  };

  return (
    <>
      <div className="flex gap-4 mb-8">
        <button
          onClick={handleUpdate}
          className="bg-[#666555] text-white px-4 py-2 font-semibold hover:bg-[#555444]"
        >
          Update Query
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-300 text-gray-800 px-4 py-2 font-semibold hover:bg-gray-400"
        >
          Clear Query
        </button>
      </div>

      {isLoading ? (
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold text-[#666555] animate-pulse">Loading Data...</h2>
        </div>
      ) : (
        data && <GraphsContainer data={data} />
      )}
    </>
  );
}
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

 const handleDownloadData = async () => {
    try {
      const response = await fetch('https://asylum-be.onrender.com/fiscalSummary'); 
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const result = await response.json();
      if (!result || typeof result !== 'object') {
        alert('No valid data found.');
        return;
      }
      const headers = Object.keys(result).join(',');

      const row = Object.values(result).map(value => {
        const val = value === null || value === undefined ? "" : String(value);
        return `"${val.replace(/"/g, '""')}"`;
      }).join(',');

      const csvContent = `${headers}\n${row}`;
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      link.setAttribute('href', url);
      link.setAttribute('download', 'asylum_summary_data.csv');
      link.style.visibility = 'hidden';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error downloading CSV:', error);
      alert('Could not download data. Check the console for details.');
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadMore = () => {
    window.open('https://www.humanrightsfirst.org', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col w-full bg-white text-gray-800">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center bg-[#666555] py-16 text-white px-4">
        <h1 className="text-5xl mb-4 text-center font-serif">Asylum Office Grant Rate Tracker</h1>
        <p className="text-xl max-w-4xl text-center">
          The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions
        </p>
      </div>

      {/* Main Content - Graphs Section */}
      <div className="flex flex-col items-center py-20 px-4 ">
        <div className="flex flex-wrap justify-center gap-20 mb-12">
          <div className="flex flex-col items-center max-w-xs">
            <Image 
              src="/bar-graph.png" 
              alt="Search Grant Rates By Office" 
              width={320} 
              height={256} 
              className="object-contain mb-6 rounded-2xl" 
            />
            <h3 className="text-2xl font-semibold">Search Grant Rates By Office</h3>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <Image 
              src="/pie-chart.png" 
              alt="Search Grant Rates By Nationality" 
              width={300} 
              height={256} 
              className="object-contain mb-6 rounded-2xl" 
            />
            <h3 className="text-2xl font-semibold">Search Grant Rates By Nationality</h3>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <Image 
              src="/line-graph.png" 
              alt="Search Grant Rates Over Time" 
              width={320} 
              height={256} 
              className="object-contain mb-6 rounded-2xl" 
            />
            <h3 className="text-2xl font-semibold">Search Grant Rates Over Time</h3>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => router.push('/graphs')}
            className="bg-[#666555] text-white px-6 py-2 font-semibold hover:bg-[#555444] transition-colors cursor-pointer"
          >
            View the Data
          </button>
          <button
            onClick={handleDownloadData}
            className="bg-[#666555] text-white px-6 py-2 font-semibold hover:bg-[#555444] transition-colors cursor-pointer"
          >
            Download the Data
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-wrap items-center justify-center py-20 px-10 gap-20">
        <Image 
          src="/paper-stack.jpg" 
          alt="HRF Paper Stacks" 
          width={600} 
          height={400} 
          className="object-cover rounded-3xl" 
        />
        <div className="max-w-xl">
          <p className="text-xl leading-relaxed">
            Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office...
          </p>
        </div>
      </div>

      {/* Systemic Disparity Insights Section */}
      <div className="flex flex-col items-center py-20 px-4">
        <h2 className="text-4xl mb-16">Systemic Disparity Insights</h2>
        <div className="flex flex-wrap justify-center gap-20 mb-16 max-w-7xl">
          <div className="flex flex-col items-center max-w-sm text-center">
            <h4 className="text-5xl mb-6">36%</h4>
            <p className="text-lg">
              By the end of the Trump administration, the average asylum office grant rate had fallen 36%...
            </p>
          </div>
          <div className="flex flex-col items-center max-w-sm text-center">
            <h4 className="text-5xl mb-6">5%</h4>
            <p className="text-lg">
              The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-sm text-center">
            <h4 className="text-5xl mb-6">6x Lower</h4>
            <p className="text-lg">
              The New York asylum office&apos;s average grant rate was 6 times lower than the San Francisco asylum office.
            </p>
          </div>
        </div>
        <button
          onClick={handleReadMore}
          className="bg-[#666555] text-white px-8 py-2 font-semibold hover:bg-[#555444] transition-colors mb-20"
        >
          Read More
        </button>

        <button
          onClick={scrollToTop}
          className="text-lg font-semibold hover:underline"
        >
          Back To Top ^
        </button>
      </div>
    </div>
  );
}
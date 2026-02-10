import { AsylumData } from '../types/asylum';
import GraphsContainer from '../components/graphs/GraphsContainer';

async function getAsylumData(): Promise<AsylumData> {
  const res = await fetch(`${process.env.API_URI}/fiscalSummary`, {
    next: { revalidate: 3600 }, // Cache data for 1 hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch asylum data');
  }

  return res.json();
}

export default async function GraphsPage() {
  const data = await getAsylumData();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#666555] mb-2">Asylum Grant Insights</h1>
        <p className="text-gray-600 mb-8">Analyzing {data.totalCases.toLocaleString()} cases across {data.yearResults.length} fiscal years.</p>
        
        {/* Pass the data to a Client Component that handles tabs/filters */}
        <GraphsContainer data={data} />
      </div>
    </div>
  );
}
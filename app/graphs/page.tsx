import { AsylumData } from '../types/asylum';
import GraphsClient from './GraphsClient';

async function getAsylumData(): Promise<AsylumData> {
  const baseUrl = process.env.API_URI;

  const [fiscalRes, citizenshipRes] = await Promise.all([
    fetch(`${baseUrl}/fiscalSummary`, { next: { revalidate: 3600 } }),
    fetch(`${baseUrl}/citizenshipSummary`, { next: { revalidate: 3600 } })
  ]);

  if (!fiscalRes.ok || !citizenshipRes.ok) {
    throw new Error('Failed to fetch data from one or more endpoints');
  }

  const fiscalData = await fiscalRes.json();
  const citizenshipData = await citizenshipRes.json();

  return {
    totalCases: fiscalData.totalCases,
    yearResults: fiscalData.yearResults,
    citizenshipResults: citizenshipData.citizenshipResults || citizenshipData
  };
}
export default async function GraphsPage() {
  const data = await getAsylumData();
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#666555] mb-2">Asylum Grant Insights</h1>
          <p className="text-gray-600">
            Analyzing <span className="font-bold text-gray-800">{data.totalCases.toLocaleString()}</span> total cases.
          </p>
        </header>
        <GraphsClient initialData={data} />
      </div>
    </div>
  );
}
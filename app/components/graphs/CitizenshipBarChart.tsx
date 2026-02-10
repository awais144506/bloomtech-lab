'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const CitizenshipBarChart = ({ data }: { data: any[] }) => {
  if (!data || !Array.isArray(data)) return null;
  const chartData = data.map((item) => {
    const granted = item.granted ?? 0;
    const denied = item.denied ?? 0;
    const adminClosed = item.adminClosed ?? 0;

    return {
      name: item.citizenship || 'Unknown',
      Granted: parseFloat(granted.toFixed(2)),
      Denied: parseFloat(denied.toFixed(2)),
      'Admin Closed': parseFloat(adminClosed.toFixed(2)),
      total: item.totalCases ?? 0,
    };
  });
  const sortedData = chartData.sort((a, b) => b.Granted - a.Granted);

  return (
    <div className="h-150 w-full">
      <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">
        Outcome Rates by Citizenship (%)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" unit="%" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" width={150} tick={{ fontSize: 12 }} />
          <Tooltip 
            cursor={{ fill: '#f3f4f6' }}
            formatter={(value: number | undefined) => value !== undefined ? `${value}%` : ''}
          />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="Granted" stackId="a" fill="#4F46E5" />
          <Bar dataKey="Denied" stackId="a" fill="#EF4444" />
          <Bar dataKey="Admin Closed" stackId="a" fill="#9CA3AF" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
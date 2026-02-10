'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const TimeSeriesChart = ({ data }: { data: any[] }) => {

  const chartData = data.map(year => ({
    name: year.fiscal_year,
    Granted: parseFloat(year.granted.toFixed(2)),
    Denied: parseFloat(year.denied.toFixed(2)),
    'Admin Closed': parseFloat(year.adminClosed.toFixed(2)),
  }));

  return (
    <div className="h-[400px] w-full bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Global Grant Rates Over Time (%)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis unit="%" domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Granted" stroke="#4F46E5" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Denied" stroke="#EF4444" strokeWidth={2} />
          <Line type="monotone" dataKey="Admin Closed" stroke="#9CA3AF" strokeWidth={2} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
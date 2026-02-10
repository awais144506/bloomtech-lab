'use client';

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { OFFICE_COORDS } from '@/app/constants/officeCords';

export default function AsylumHeatMap({ yearData }: { yearData: any[] }) {
  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-inner border border-gray-200">
      <MapContainer 
        center={[37.0902, -95.7129]} 
        zoom={4} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {yearData.map((office) => {
          const coords = OFFICE_COORDS[office.office];
          if (!coords) return null;

          // Scale radius based on total cases
          const radius = Math.sqrt(office.totalCases) / 2;

          return (
            <CircleMarker
              key={office.office}
              center={coords}
              radius={radius > 5 ? radius : 5} // Minimum radius
              fillColor={office.granted > 25 ? '#10B981' : '#EF4444'} // Green if > 25%, Red otherwise
              color="#fff"
              weight={1}
              fillOpacity={0.6}
            >
              <Popup>
                <div className="font-sans">
                  <h4 className="font-bold text-lg">{office.office}</h4>
                  <p className="text-sm">Total Cases: <b>{office.totalCases.toLocaleString()}</b></p>
                  <p className="text-sm">Grant Rate: <b className={office.granted > 25 ? 'text-green-600' : 'text-red-600'}>{office.granted.toFixed(2)}%</b></p>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
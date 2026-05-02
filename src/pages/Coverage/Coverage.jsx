import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const districtsData = [
  { name: "Dhaka", position: [23.8103, 90.4125] },
  { name: "Chattogram", position: [22.3569, 91.7832] },
  { name: "Rajshahi", position: [24.3745, 88.6042] },
  { name: "Khulna", position: [22.8456, 89.5403] },
  { name: "Sylhet", position: [24.8949, 91.8687] },
  { name: "Barishal", position: [22.7010, 90.3535] },
  { name: "Rangpur", position: [25.7439, 89.2752] },
  { name: "Jamalpur", position: [24.9375, 89.9378] },
];

//  This component controls animation
function FlyToLocation({ position }) {
  const map = useMap();

  if (position) {
    map.flyTo(position, 10, {
      duration: 2,
    });
  }

  return null;
}

export default function Coverage() {
  const [search, setSearch] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);

  const filteredDistricts = districtsData.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    const found = districtsData.find((d) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    );

    if (found) {
      setSelectedPosition(found.position); // 🔑 triggers animation
    }
  };

  return (
    <div className="md:p-6 bg-base-200 min-h-screen">
      <div className="max-w-6xl mx-auto bg-base-100 rounded-2xl shadow p-8">
        
        <h1 className="text-3xl text-[#03373D] font-bold mb-6">
          We are available in 64 districts
        </h1>

        {/* Search */}
        <div className="flex gap-3 mb-8 max-w-lg border py-1 px-2.5 border-gray-200 rounded-full">
          <input
            type="text"
            placeholder="Search here"
            className="input rounded-full w-full border-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="btn btn-primary max-w-24 md:max-w-44 w-full rounded-full text-black"
          >
            Search
          </button>
        </div>

        <h2 className="text-lg font-semibold mb-4">
          We deliver almost all over Bangladesh
        </h2>

        {/* Map */}
        <div className="h-[400px] rounded-xl overflow-hidden mb-6">
          <MapContainer
            center={[23.6850, 90.3563]}
            zoom={7}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* 🔥 Trigger animation */}
            <FlyToLocation position={selectedPosition} />

            {filteredDistricts.map((district, index) => (
              <Marker key={index} position={district.position}>
                <Popup>{district.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* District List */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredDistricts.map((district, index) => (
            <div
              key={index}
              className="p-4 bg-base-200 rounded-lg text-center shadow cursor-pointer"
              onClick={() => setSelectedPosition(district.position)}
            >
              {district.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
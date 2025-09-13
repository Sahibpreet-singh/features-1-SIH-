import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const issues = [
  { id: 1, title: "Pothole near market", lat: 23.3441, lng: 85.3096, status: "Reported" },
  { id: 2, title: "Garbage dump", lat: 23.3511, lng: 85.3180, status: "Resolved" }
];

// custom icon colors
const getIcon = (color) =>
  new L.Icon({
    iconUrl: `https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=flag|${color}`,
    iconSize: [30, 50],
    iconAnchor: [15, 50]
  });

export default function MapView() {
  return (
    <MapContainer center={[23.3441, 85.3096]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='© OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {issues.map((issue) => (
        <Marker
          key={issue.id}
          position={[issue.lat, issue.lng]}
          icon={getIcon(issue.status === "Resolved" ? "green" : "red")}
        >
          <Popup>
            <b>{issue.title}</b>
            <br />
            Status: {issue.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

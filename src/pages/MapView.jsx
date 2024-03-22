import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

const MapView = () => {
  const state = useSelector((store) => store);

  console.log(state.flights)
  return (
    <MapContainer center={[39.149702, 35.420686]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

{state.flights.map((flight)=>(
       <Marker position={[flight.lat,flight.lng]}>
       <Popup>Merhaba</Popup>
     </Marker>

))}
    </MapContainer>
  );
};

export default MapView;

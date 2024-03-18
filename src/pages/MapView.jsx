import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { icon } from "leaflet";

const MapView = () => {
  const state = useSelector((store) => store.flight);

  const flights = state && state.flights;

  //ikon

  const planeIcon = icon({
    iconUrl: "/plane-ico.png",
    iconSize: [70, 60],
  });
  return (
    <MapContainer
      center={[39.149702, 35.420686]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights &&
        Array.isArray(flights) &&
        flights.map((flight) => (
          <Marker icon={planeIcon} position={[flight.lat, flight.lng]}>
            <Popup>
              <div className="popup">
                <span>Kod:{flight.code}</span>
                <button>Detay</button>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default MapView;

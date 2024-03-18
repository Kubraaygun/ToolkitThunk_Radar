import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightAction";

function App() {
  const [isMapView, setIsMapView] = useState(true);
  const [isOpen, setIsOpen] =useState(false);
  const [detailId, setDetailId]=useState(null)
  const dispatch = useDispatch();


  //Modal Acma

  const openModal =(id)=>{
    setDetailId(id); //hangi ucak icin acildiginin statei
    setIsOpen(true)// modal acar
  }
//Modal Kapat
  const closeModal=()=>{
    setDetailId(null);
    setIsOpen(false);
  }

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <>
      <Header />

      <div className="view-buttons">
        <button
          className={isMapView ? "active" : ""}
          onClick={() => setIsMapView(true)}
        >
          Harita Gorunumu
        </button>
        <button
          className={!isMapView ? "active" : ""}
          onClick={() => setIsMapView(false)}
        >
          Liste Gorunumu
        </button>
      </div>

      {/*Hangi bilesen ekrana gelecegini belirleme*/}

      {isMapView ? <MapView /> : <ListView />}
    </>
  );
}

export default App;

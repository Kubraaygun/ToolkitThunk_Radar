import { useState } from "react";
import Header from "./components/Header";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";

function App() {
  const [isMapView, setIsMapView] = useState(true);
  return (
  <>
  <Header/>

  <div className="view-buttons" >
    <button onClick={()=>setIsMapView(true)} >Harita Gorunumu</button>
    <button onClick={()=>setIsMapView(false)} >Liste Gorunumu</button>
  </div>

{/*Hangi bilesen ekrana gelecegini belirleme*/}

{isMapView ? <MapView/> : <ListView/>}

  </>)
}

export default App;

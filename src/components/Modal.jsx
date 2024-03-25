import axios from "axios";
import { useEffect, useState } from "react";
import { options2 } from "../constant";
import { useDispatch } from "react-redux";
import { setTrail } from "../redux/slices/flightSlice";

const Modal = ({ detailId, closeModal }) => {
  const [d, setData] = useState(null);
  const dispatch =useDispatch()

  
  useEffect(() => {
    //Her calistiginda onceki ucusun verilerini temizliyoruz.
    //Bu sayede yukleniyor tetiklenecek
    setData(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        options2
      )
      .then((res) => {
        dispatch(setTrail(res.data.trail))
        setData(res.data);
      });
  }, [detailId]);

  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <p className="close-area">
          <span onClick={closeModal}>X</span>
        </p>

        {!d ? (
          <div className="wrapper">
            <div class="loader">
              <span></span>
            </div>
          </div>
        ) : (
          <>
            <h2>{d.aircraft.model.text}</h2>
            <h2>{d.aircraft.model.code}</h2>
            <p>{d.aircraft.registration}</p>
            <img src={d.aircraft.images.large[0].src} />
            <p>
              <span>Şirket:</span>
              <span> {d.airline.name}</span>
            </p>
            <p>
              <span>Kalkış: </span>
              <a target="_blank" href={d.airport.origin.website}>
                {d.airport.origin.name}
              </a>
            </p>

            <p>
              <span>Hedef: </span>
              <a target="_blank" href={d.airport.destination.name}>
                {d.airport.destination.name}
              </a>
            </p>

            <p className={d.status.icon}>
              <span>{d.status.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;

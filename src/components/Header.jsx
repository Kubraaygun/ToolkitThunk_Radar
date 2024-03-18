import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((store) => store.flight);
  const isLoading  = state && state.isLoading;
  const isError = state && state.isError;
  const flights = state && state.flights;
  return (
    <header>
      <div>
        <img src="/plane-l.png" />
        <h3>Ucus Radari</h3>
      </div>

      <p>
        {isLoading
          ? "Uçuşlar Hesaplanıyor..."
          : isError
          ? "Bir Hata Oluştu :("
          : flights ? flights.length + " Uçuş Bulundu" : " Ucus Bulunamadi"}
      </p>
    </header>
  );
};

export default Header;

import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ListView = ({ openModal }) => {
  const state = useSelector((store) => store);

  // gosterılecek ılk elemanı hesaplar
  const [itemOffset, setItemOffset] = useState(0);
  //sayfa basina gosterilecek eleman sayisi
  const itemsPerPage = 10;
  //gosterilecek son elemani hesaplar
  const endOffset = itemOffset + itemsPerPage;

  //elimizdeki araliga gore verileri kesiyoruz.
  const currentItems = state.flights?.slice(itemOffset, endOffset);
  //Toplam sayfa sayisi hesapla
  const pageCount = Math.ceil(state.flights?.length / itemsPerPage);

  // Her sayfa degıstıgınde calısır
  const handlePageClick = (event) => {
    //gosterilecek ilk elemani belirler
    const newOffset = event.selected * itemsPerPage;
    //statei gunceller
    setItemOffset(newOffset);
  };

  return (
    <div className="p-4">
      <table className="table table-dark table-hover  mt-5 table-responsive">
        <thead>
          <tr>
            <th>İd</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((i) => (
            <tr>
              <td>{i.id}</td>
              <td>{i.code}</td>
              <td>{i.lat}</td>
              <td>{i.lng}</td>
              <td>
                <button onClick={() => openModal(i.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="İleri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< Geri"
        className="pagination"
      />
    </div>
  );
};

export default ListView;

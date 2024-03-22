import { useSelector } from 'react-redux'

const Header = () => {

  const state=  useSelector((store)=>store)
  return (

    <header>
    <div>
        <img src="/plane-l.png"/>
        <h3>Ucus Radari</h3>
    </div>

    <p>{
        state.isLoading ? "Ucuslar hesaplaniyor..." : 
        state.isError ? "Uzgunuz bir sorun olustu" :
        state.flights.length + "ucus bulundu"
        }</p>
    </header>

  )
}

export default Header
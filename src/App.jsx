
import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Header from './components/Header/Header'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Hero from './components/Hero/Hero'
import Loading from './components/Loading/Loading'
import ViewToggle from './components/ViewToggle/ViewToggle'
import { ToastContainer } from 'react-toastify'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'


const fetchPlayersData = async () => {
  const response = await fetch("/players.json");
  return response.json();
}

const PlayerPromise = fetchPlayersData();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(60000000);
  const [boughtPlayers, setBoughtPlayers] = useState([]);
  
  const removePlayer = (p) => {
    const filterData = boughtPlayers.filter(athlete => athlete.name !== p.name);
    setBoughtPlayers(filterData);
    setAvailableBalance(availableBalance + p.price)
  }

  return (
    <>
      <Header availableBalance={availableBalance} />

      <Hero />

      <ViewToggle value={toggle} onChange={setToggle} boughtPlayers={boughtPlayers} />

      {
        toggle === true 
          ? <Suspense fallback={<Loading />}>
              <AvailablePlayers PlayerPromise={PlayerPromise} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} boughtPlayers={boughtPlayers} setBoughtPlayers={setBoughtPlayers} />
            </Suspense> 
          : <SelectedPlayers boughtPlayers={boughtPlayers} removePlayer={removePlayer} value={toggle} onChange={setToggle} />
      }
      
      <Newsletter />

      <Footer />
      
      <ToastContainer />
    </>
  )
}

export default App

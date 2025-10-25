
import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Header from './components/Header/Header'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Hero from './components/Hero/Hero'

const fetchPlayersData = async () => {
  const response = await fetch("/players.json");
  return response.json();
}

function App() {

  const PlayerPromise = fetchPlayersData();

  return (
    <>
      <Header />

      <Hero />

      <Suspense fallback={<div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-[#ffffffcc]'>
        <div className="loading loading-infinity loading-xl"/>
      </div>}>
        <AvailablePlayers PlayerPromise={PlayerPromise} />
      </Suspense>

      <SelectedPlayers />

    </>
  )
}

export default App

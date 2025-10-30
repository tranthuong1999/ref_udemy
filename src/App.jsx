import { useState } from 'react'
import './App.css'
import Player from './components/Player'
import "./index.css";
import TimerChallerger from './components/TimerChallenger';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallerger title="Easy" targetTime={1} />
        <TimerChallerger title="Not Easy" targetTime={5} />
        <TimerChallerger title="Getting tough" targetTime={10} />
        <TimerChallerger title="Pros only" targetTime={15} />
      </div>
    </>
  )
}

export default App

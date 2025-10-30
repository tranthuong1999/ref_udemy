import { useRef, useState } from "react";

function Player() {

    const [playerName, setPlayerName] = useState(null)
    const playerRef = useRef();

    const handleClick = () => {
       setPlayerName(playerRef.current.value) 
    }


    return (
        <section id="player">
            <h2> Welcome {playerName ?? 'unknow entity'}</h2>
            <p>
                <input type="text" ref={playerRef} />
                <button onClick={handleClick}> Set name</button>
            </p>
        </section>
    )
}

export default Player;
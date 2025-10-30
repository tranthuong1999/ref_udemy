import React from 'react'

const TimerChallerger = ({ title, targetTime }) => {
    return (
        <section className='challenge'>
            <h2> {title}</h2>

            <p className='challenge-time'>
                {targetTime} second {targetTime > 1 ? 's' : ''}
            </p>

            <p>
                <button> Start challenge</button>
            </p>

            <p className=''>
                Time is running / Time is inacrtive
            </p>


        </section>
    )
}

export default TimerChallerger
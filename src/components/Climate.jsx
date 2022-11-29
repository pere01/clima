import React from 'react'
import { useState } from 'react'

const Climate = ({ weather, temp }) => {
    const [isCelcius, setIsCelcius] = useState(true)

    const handleClick = () => {
        setIsCelcius(!isCelcius)
    }

    return (
        <article className='card'>

            <header>
                <h1 className='card__title'>WEATHER APP</h1>
                <h2 className='card__sub'>{weather?.name}, {weather?.sys.country}</h2>
            </header>
            <div className='body'>
                <section className='card__icon-container'>

                    <img className='card___icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                    <h3 className='card__temp'>
                        {isCelcius ?
                            `${temp?.celsius}°C`
                            :
                            `${temp?.farenheit}°F`
                        }</h3>

                </section>

                <section className='card__info'>

                    <h3 className='info__title'>"{weather?.weather[0].description}"</h3>
                    <ul className='card__list'>
                        <li className='card__item'><span className='card__span
                    '>🍃Wind Speed <br /></span>{weather?.wind.speed}m/s</li>
                        <li className='card__item'><span className='card__span
                    '>☁Clouds <br /></span>{weather?.clouds.all}%</li>
                        <li className='card__item'><span className='card__span
                    '>🌡Preassure<br /></span>{weather?.main.pressure}hPa</li>
                    </ul>

                </section>
            </div>
            <footer className='footer'>
                <button onClick={handleClick} className='footer__button'>Change to {isCelcius ? '°F' : '°C'}</button>
            </footer>

        </article>
    )
}

export default Climate
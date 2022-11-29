import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Climate from './components/Climate'
import Loading from './components/Loading'


function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  const sucess = pos => {
    setCoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    })
  }

  console.log(coords)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(sucess)
  }, [])

  useEffect(() => {
    if (coords) {
      const apiKey = '7318dbc9ea3d8871ae76364c5a932ba3'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(URL)
        .then(res => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * (9 / 5) + (32)).toFixed(1)
          setTemp({ celsius, farenheit })
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div className="App">
      {weather ?
        <Climate weather={weather}
          temp={temp} />
        :
        <Loading />
      }
    </div>
  )
}

export default App

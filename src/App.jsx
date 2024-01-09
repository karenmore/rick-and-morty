import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'

function App() {

  const locationId = getRandomNumber(126)
  const [inputValue, setInputValue] = useState(locationId)
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, getLocation, hasError] = useFetch(url)
 

  useEffect(() => {
    getLocation()
    
  }, [inputValue])

  const inputLocation = useRef()

  const handleSumit = e => {
    e.preventDefault()
    setInputValue(inputLocation.current.value)

  }

  return (
    <div>
      <div className='header__container'>
        <div className='imagen'></div>
      </div>
      <div className='form__search'>
        <form onSubmit={handleSumit} className='form__search'>
          <input ref={inputLocation} type='text' 
          placeholder="Enter a number"
          className='search__inputs'
        />
        <button className='btn__search'>Search</button>
        </form>
      </div>
      {
        hasError
        ? <h2>❌ Hey! you must provide an id from 1 to 126. 😵 </h2>
        : (
          <>
          <div className='location__container'>
            <LocationCard 
              location={location}
            />
          </div>
            <div className='resident__container'>
              {
                location?.residents.map( (url) => (
                  <ResidentCard 
                    key={url}
                    url={url}
                  />
                ))
              }
            </div>
          </>
        )
      }
    </div>

  )
}

export default App

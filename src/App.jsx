import React , {useState, useEffect} from 'react'
import './app.css'
import Country from './Components/Country'
import Main from './Components/Main'
import Nav from './Components/Nav'

function App() {
  const [filterRegion , setFilterRegion] = useState('')
  const [countryData , setCountryData] = useState([])


  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => setCountryData(data))
  }, [])
  console.log(countryData[40])
    return (
    <div>
      <Nav/>
      <Main filter = {filterRegion} setFilter = {setFilterRegion}/>
      <Country image = { countryData[40].flags.png} name = {countryData[40].name.common} pop = {countryData[40].population} reg = {countryData[40].region} cap ={countryData[40].capital[0]}/>
    </div>
  )
}

export default App

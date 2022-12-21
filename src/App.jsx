import React , {useState, useEffect} from 'react'
import { Link , Routes , Route } from 'react-router-dom'
import './app.css'
import Country from './Components/Country'
import Main from './Components/Main'
import Nav from './Components/Nav'
import CountryDetail from './Components/CountryDetail'

function App() {
  const [filterRegion , setFilterRegion] = useState('')
  const  [countryData , setCountryData] = useState([])
  const [ search , setSearch ]= useState('')
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => setCountryData(data))
  }, [])
    return (
    <div>
      <Nav />
      <Routes>
        <Route exact path='/' element = {  <Main  filterSearch = {setSearch} filter = {filterRegion} setFilter = {setFilterRegion}>
          { countryData.filter((cont) => {
            return filterRegion.toLowerCase() === "" ? cont : cont.region.includes(filterRegion)
          }).filter((filt) => {
            return search.toLowerCase() === '' ? filt : filt.name.common.toLowerCase().includes(search)
          }).map((coun , index) => {
            return <Link  to={`/${coun.ccn3}`} > <Country image = { coun.flags.svg} 
            name = {coun.name.common} 
            pop = {coun.population} 
            reg = {coun.region} 
            cap ={coun.capital}
            key = {coun.ccn3}
            id = {index}
            /> </Link>
          })}
      </Main>}>
        </Route>
        <Route  path=':countryId' element = {<CountryDetail data = {countryData}/>}/>
      </Routes>
      {/* <Country image = { countryData[40].flags.svg} 
      name = {countryData[40].name.common} 
      pop = {countryData[40].population} 
      reg = {countryData[40].region} 
      cap ={countryData[40].capital[0]}/> */}
    </div>
  )
}

export default App

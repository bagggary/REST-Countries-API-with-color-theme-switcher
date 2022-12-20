import React , { useState } from "react"

export default function Main({filterSearch , filter , setFilter , children}) {
    const [active , setActive]  = useState(false)
    const  continents = ['Africa' , 'Americas', 'Asia' , 'Europe' , 'Oceania']

    function filterSelector(e){
        setFilter(e.target.textContent)
        setActive(false)
    }
  return (
    <main>
        <div className='container'>
            <div className='filter-search'>
                <input type="text" placeholder="Search for a country..." onChange={(e) => filterSearch(e.target.value)} />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='dropdown'>
                <div className='dropdown-btn' onClick={() => setActive(!active)}>
                {filter === '' ? 'Filter by Region' : filter}
                <span> <i className="fa-solid fa-caret-down"></i> </span>
                </div>
                {active &&  
                 <div className="dropdown-content">
                    {continents.map((cont , index) => {
                      return   <div  key = {index} onClick={filterSelector} className="dropdown-names">{cont}</div>
                    })}
                </div> }
            </div>
        </div>

        <div className="container">
        <div className="countires-container">
              {children}
            </div>
        </div>

    </main>
  )
}

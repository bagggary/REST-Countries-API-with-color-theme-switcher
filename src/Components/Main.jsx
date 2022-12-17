import React , { useState } from "react"

export default function Main(props) {
    const [active , setActive]  = useState(false)
    const  continents = ['Africa' , 'America', 'Asia' , 'Europe' , 'Oceania']

    function filterSelector(e){
        props.setFilter(e.target.textContent)
        setActive(false)
    }
    console.log(props.filter)
  return (
    <main>
        <div className='container'>
            <div className='filter-search'>
                <input type="text" placeholder="Search for a country..." />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='dropdown'>
                <div className='dropdown-btn' onClick={() => setActive(!active)}>
                {props.filter === '' ? 'Filter by Region' : props.filter}
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

    </main>
  )
}

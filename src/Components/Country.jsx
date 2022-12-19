import React from 'react'

export default function Country(props) {
  return (
    <div className="country">
        <div className="img" style={{'backgroundImage' : `url(${props.image})`}}></div>
        <div className="country-details">
            <h1>{props.name}</h1>
            <div className='info'>
                <div>Population:<span> {props.pop}</span></div>
                <div>Region:<span> {props.reg}</span></div>
                <div>Capital:<span> {props.cap}</span></div>
            </div>
        </div>
    </div>
  )
}

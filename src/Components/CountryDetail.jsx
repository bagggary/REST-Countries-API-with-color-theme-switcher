import React from 'react'
import{useParams} from 'react-router-dom'
export default function CountryDetail({data}) {
    const {countryId} = useParams()
   const detailData  = data && data.find((count) => {
       return count.ccn3 === countryId
    })

  return (
    <div className='details container'>
      <div className="back-btn">
      <i class="fa-solid fa-arrow-left"></i>
      Back
      </div>
      <div className="info-deatils">
        <div className='details-image'>
          <img src={detailData.flags.svg} alt="" />
        </div>
        <div className="info">
          <h1>{detailData.name.common}</h1>
          <div className='country-info'>
            <div className='col-1'>
              <div>Native Name:<span>{detailData.name.nativeName.spa.official}</span></div>
              <div>Population:<span>{detailData.population}</span></div>
              <div>Region:<span>{detailData.region}</span></div>
              <div>Sub Region:<span>{detailData.subregion}</span></div>
              <div>Capital:<span>{detailData.capital}</span></div>
            </div>
            <div className='col-2'>
            <div>Top Level Domain:<span></span></div>
            </div>
          </div>
          
        </div>
      </div>
        {/* <img src={detailData.flags.svg} alt="" />
        <div className="detail-name">
            deatila page [name that exist in the country page and then access throught the final approach]
        </div>
        <div className="detail-border"></div> */}
    </div>

  )
}

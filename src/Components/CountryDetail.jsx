import React from 'react'
import{useParams} from 'react-router-dom'
export default function CountryDetail({data}) {
    const {countryId} = useParams()
   const detailData  = data && data.find((count) => {
       return count.ccn3 === countryId
    })

    console.log(detailData.borders)
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
              <div>Native Name: <span>{detailData.name.official|| 'it doesnt have any official name'}</span></div>
              <div>Population: <span>{(detailData.population).toLocaleString("en-US")}</span></div>
              <div>Region: <span>{detailData.region}</span></div>
              <div>Sub Region: <span>{detailData.subregion}</span></div>
              <div>Capital: <span>{detailData.capital}</span></div>
            </div>
            <div className='col-2'>
            <div>Top Level Domain: <span>{detailData.tld}</span></div>
            <div>currencies: <span>{Object.values(detailData.currencies)[0].name || 'no currencies'}</span></div>
            <div>languages: <span>{Object.values(detailData.languages).join(',')}</span></div>
            </div>
          </div>

          <div className="borders">
            <div className='borders-title'>Border Countries :</div>
            <div className='borders-countries'>
              {detailData.borders &&  detailData.borders.map((bord , index)=>{
                return <div key={index} className='border'>{bord}</div>
              }) || 'no border countries'}
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

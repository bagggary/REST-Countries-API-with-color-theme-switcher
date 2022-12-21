import React from 'react'
import{useParams} from 'react-router-dom'
export default function CountryDetail({data}) {
    const {countryId} = useParams()
   const detailData  = data.find((count) => {
       return count.ccn3 === countryId
    })
    console.log(detailData)
  return (
    <div>
        <img src={detailData.flags.svg} alt="" />
        <div className="detail-name">
            deatila page [name that exist in the country page and then access throught the final approach]
        </div>
        <div className="detail-border"></div>
    </div>

  )
}

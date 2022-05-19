import React from 'react'
import dataoffered from'./offerdata.json'
export default function HomeOffered() {
    console.log(dataoffered)
  return (
      <section className="eventoffered-section">
    <div className="eventoffered">
                   {
                       dataoffered.map((data)=>{
                           return(
                        <div className="event-card card">
                            <div className="event-header">
                                {data.title}
                            </div>
                            <div className="event-image">
                                <img src={data.image} alt={data.title} className="event-img"/>
                            </div>
                            <div className="event-desc">
                                {data.descrip}
                            </div>
                        </div>
                        )
                       })
                   }
        </div>
        </section>
  )
}

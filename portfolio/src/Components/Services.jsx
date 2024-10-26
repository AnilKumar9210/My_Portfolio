import React from 'react'
import './Services.css'


const Services = (props) => {
  return (
    <div className='tech'>
    <div className='info'>Technologies</div>
    <div className='projects'>
        {props.services.map ((item)=> {
            return <div className='card'>
            <img id={item.id} src={item.imgLink} alt={item.title} className="image" />
            </div>
        })}
  </div>
    </div>
  )
}

export default Services

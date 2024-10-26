import React from 'react'
import './Projects.css'

const Projects = (props) => {
  return (
   <div className='projectSec'>
    <div className='gallery'>A small gallery of my projects</div>
    {props.projectDtls.map ((item)=> {
     return<div className='projectDtls'>
      <div className="photo">
      <img className='proImg' src={item.photo} alt="TodoList" />
      <div className='title'>{item.title}</div>
    </div>
    <div className="desc">
      {item.description}
      <a href={item.link} target='__blank'>github</a>
    </div>
    </div>
    })
  }
   </div>
  )
}

export default Projects

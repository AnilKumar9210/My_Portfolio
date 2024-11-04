import React, { useEffect, useState } from 'react'
import './Projects.css'


const Projects = (props) => {
  const [showText,setShowText] = useState ("");
  const text = "A small gallery of my projects";
  
  
  
  useEffect (()=> {
    let index = 0;
    const typeText =()=> {
      if (index < text.length) {
        setShowText (val=>val+text.charAt (index));
        index++;
        setTimeout (typeText,100);
      }
    }
    typeText ();
  
  },[])
  return (
   <div className='projectSec'>
    <div className='gallery'>{showText}</div>
    {props.projectDtls.map ((item)=> {
     return<div className='projectDtls' key={item.id}>
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

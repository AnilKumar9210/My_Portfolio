import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import "typeface-roboto"
import Projects from './Components/Projects';
import Services from './Components/Services';
import { v4 as uuidv4 } from 'uuid';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';

function App() {

  const [displayText,setDisplayText] = useState ("");
  const text = "Hii,I'm Anil, Front-End Developer.";
  const [imageLinks,setImageLinks] = useState ([
    {
      id: uuidv4 (),
      title:"Html5",
      imgLink:"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    },
    {
      id: uuidv4 (),
      title:"Css",
      imgLink:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png?20160530175649"
    },
    {
      id: uuidv4 (),
      title:"JavaScript",
      imgLink:"https://www.svgrepo.com/show/452045/js.svg"
    },
    {
      id: uuidv4 (),
      title:"React",
      imgLink:"https://www.svgrepo.com/show/452092/react.svg"
    },

])

const [projectDtls,setProjectDtls] = useState ([
  {
    id:uuidv4 (),
    title:"Todo-List",
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJbKiKh7k_k3NubyfL-tlQ20fKUddNGVsLA&s",
    description:"This To-Do List Application is a simple yet effective tool for managing daily tasks and staying organized. Built using React. Link -> ",
    link:"https://github.com/AnilKumar9210/Todo-List"
  },
  {
    id:uuidv4 (),
    title:"Spotify",
    photo:"https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
    description:"This Spotify-inspired Music Player is a front-end web application that emulates core features of the Spotify user interface, created with HTML, CSS, and JavaScript. It allows you to play,pause and next the music loads music for local storage Link -> ",
    link:"https://github.com/AnilKumar9210/Spotify-clone"
  },
])


  useEffect (()=> {
    let index = 0;
    const type = ()=> {
      if (index <text.length) {
        setDisplayText (prev=> prev+text.charAt (index))
        index++;
        setTimeout (type,100)
      }
    }
    type();
    
  },[])
  
 const Intro = ()=> {
  return<div className="intro">
  <div>{displayText}</div>
</div>
 }


  return (
    <>
    <Navbar/>
    <Intro/>
    <AboutMe/>
    <Projects projectDtls={projectDtls}/>
    <Services services={imageLinks}/>
    <ContactMe/>
    </>
  )
}

export default App

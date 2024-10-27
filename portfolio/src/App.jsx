import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import "typeface-roboto"
import Projects from './Components/Projects';
import Services from './Components/Services';
import { v4 as uuidv4 } from 'uuid';
import AboutMe from './Components/AboutMe';

function App() {

  const [displayText,setDisplayText] = useState ("");
  const text = "Hii,I'm Anil \n, Front-End Developer.";
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
    <hr />
    <div className="contactMe">
      <h1>Contact me</h1>
      <div className='flex'>
        <a href="https://github.com/AnilKumar9210" target='__blank'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
    <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        </a>
        <a href="https://www.instagram.com/iam_anil009/" target='__blank'>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        </a>
        <a href="mailto:anilkumarr9120@gamil.com" target='__blank'>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
    <path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        </a>
        <a href="https://x.com/AnilAvula001" target='__blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></a>
      </div>

    </div>
    </>
  )
}

export default App

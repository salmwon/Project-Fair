import React from 'react'
import LandingImage from "../assets/Images/LandingImage.png"
import { Link } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
function Home() {
  return (
    <>
      {/* {landing part} */}
      <div className='rounded' style={{ width: "100%", height: "100vh", backgroundColor: "greenyellow" }}>
        <div style={{ height: "100%" }} className='container '>
          <div className="row align-items-center" style={{ height: "100%" }}>
            <div className="col-lg-5">
              <h1 style={{ fontSize: "80px" }} className='fw-bolder text-danger-emphasis'><i style={{ height: '82px' }} className='fa-solid fa-paperclip me-4'></i>Project Fair</h1>
              <p>One Stop Destination For All Software Development Projects. Where User Can add and manage their projects.
                As well as access all projects available in our website... What are you waiting For!!!</p>
              <Link className='btn btn-warning' to={'/login'}>Start to Explore <i className='fa-solid fa-arrow-right ms-2'></i></Link>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <img className='imgfluid' src={LandingImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* {all projects} */}
      <div className="projects mt-5">
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <marquee>
          <div className="d-flex justify-content-between">
            <div className='me-5'>
              <ProjectCard />
            </div>
          </div>
        </marquee>
        <div className="text-center">
          <button className='btn btn-link'>View More Projects</button>
        </div>
      </div>
    </>
  )
}

export default Home
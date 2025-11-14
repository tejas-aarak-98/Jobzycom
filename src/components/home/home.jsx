import "./home.css";
import { useEffect } from "react";
import Header from "../header";
import { Link } from "react-router-dom";

const   Home = () => {

    useEffect(()=>{console.log("Home Component"),[]})

    return(
        
        <>
                <Header/>
               <div className="home-cont">

                 <div className="span-align-cont">

                   <span className="left-cont1 mr-4">

                        <h1 style={{fontSize : "45px"}}>Unlock Your Next Career Chapter</h1>
          
                        <p>Connecting ambition wity. Find your dream jobs on jobzy</p>
                        <br />

                        <h3 className="text-warning">welcome To Jobzy</h3>

                        <div className="span-align-text-cont">
                              <span className="mr-3">

                          <p>At Jobzy, we connect talent with the right opportunity. Whether you're a job-seeker starting your career or a company searching for skilled professionals. Find jobs and employers find talent </p>
                          
                        </span>

                        
                        <span >

                          <p>At Jobzy, we connect talent with the right opportunity. Whether you're a job-seeker starting your career or a company searching for skilled professionals. Find jobs and employers find talent </p>
                          
                        </span>

                        </div>

                    

                      </span>

                      <span className="right-img-cont">

                  
                
                      </span>

                   </div>

                
           

           
                      
                     <br />
                     <Link to={"/jobs"} className="btn btn-warning">Find Jobs</Link>
                     
               </div>
        </>
        
        
    )

}

export default Home;
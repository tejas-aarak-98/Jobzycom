import { data, useParams } from 'react-router-dom';
import './index.css';
import Header from '../header';
import Cookies from 'js-cookie';
import { useEffect,useState } from 'react';
import Footer from "../footer";


const jobsItemDetails =  (props) => {

    const [jobDetails, setJobDetails] = useState({

    });
    
    const {jobsDetails} = props;

    const {id} = useParams();


    useEffect(()=>{

        const getJobDetails = async ()=> {

      

            const api = `https://apis.ccbp.in/jobs/${id}`;

            const token = Cookies.get("myToken");

            const options = {
                method : "GET",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            try {

                const response = await fetch(api,options);
                const data = await response.json();

                if(response.ok){

                     console.log(data);
                     setJobDetails(data.job_details);

                }


            }
            
            catch (error) {
                
                console.log(error);
                

            }

        }

        getJobDetails();

    },[id])

     const {
    company_logo_url,
    title,
    rating,
    location,
    employment_type,
    package_per_annum,
    job_description,
    company_website_url,
    skills = [],
    life_at_company = {},
  } = jobDetails;
// : 
// company_logo_url: "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png"
// company_website_url: "https://about.netflix.com/en"
// employment_type: "Internship"
// id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751"
// job_description: "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support."
// life_at_company: {description: 'Our core philosophy is people over process. Our cu…us common ground. We want to entertain the world.', image_url: 'https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png'}
// location: "Delhi"
// package_per_annum: "10 LPA"
// rating: 4
// skills: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// title: "Devops Engineer"*/

  return (
    <div className="job-details-page">
      <Header/>

      <div className="job-card-dark">
        <div className="job-header">
          <div className="job-top">
            <img src={company_logo_url} alt="company logo" className="job-logo" />
            <div className="job-info">
              <h3 className='text-white'>{title}</h3>
              <div className="rating">
                <span>{rating}</span>
              </div>
            </div>
          </div>

          <div className="job-meta">
            <div className="meta-item">

              <i className="fa-solid fa-location-dot fa-beat"></i>
              <span className="text-white">{location}</span>

            </div>
            <div className="meta-item">
                <i className="fa-solid fa-briefcase"></i>
               <span className='text-white'>{employment_type}</span>
            </div>
            <div className="salary">{package_per_annum}</div>
          </div>
        </div>

        <hr className=" bg-warning " />

        <div className="desc-section">
          <div className="desc-header">
            <h4 className='text-warning'>Description</h4>
            <a href={company_website_url} target="_blank" rel="noreferrer" className="text-primary">
              Visit
            </a>
          </div>
          <p className="desc-text">{job_description}</p>
        </div>

        <div className="skills-section">
          <h4 className='text-warning'>Skills</h4>
          <div className="skills-grid">
            {skills.map((each) => (
              <div key={each.name} className="skill-card">
                <img src={each.image_url} alt={each.name} className="skill-icon" />
                <span>{each.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="life-section">
          <h4 className='text-warning'>Life at Company</h4>
          <div className="life-content">
            <p>{life_at_company.description}</p>
            <img src={life_at_company.image_url} alt="life at company" className="life-img" />
          </div>
        </div>

        
      </div>

         <Footer/>

    </div>

    
  );
}

export default jobsItemDetails;
import "./jobs.css";
import Header from "../header";
import { useEffect, useRef,useState } from "react";
import Cookies from "js-cookie";
import FilterSection from "../filterSection";
import DisplayAllJObs from "../displayAllJobs";
import Loader from "../Loader";




const   Jobs = () => {


        const [allValues,setValues] = useState({

            jobsArr : [],
            empType : [],
            salary : "",
            userin : ""
            

        });

         const [loading, setLoading] = useState(true); // loader state


    useEffect(()=>{



        const getJob = async ()=> {

            setLoading(true); // loader start

            const  {empType,salary,userin} = allValues;

            const api = `https://apis.ccbp.in/jobs?employment_type=${empType}&minimum_package=${salary}&search=${userin}`;

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
                    setValues({...allValues,jobsArr : data.jobs})

                }
                
            } catch (error) {
                console.log(error);
                
            }

        setLoading(false); // loader stop

    }

    getJob();

    },[allValues.userin ,allValues.empType,allValues.salary]);

    const onTitleUpdate = (e)=> {

    


        if(e.key === "Enter"){

            setValues({...allValues,userin:e.target.value})
            e.target.value = ""
           
        }

  


    }

      if (loading) {
    return <Loader />;
  }

    return(
       <div className="jobs-main-cont">
       
        <Header/>
        <br />

        <div className="searchbar">

            <input onKeyUp={onTitleUpdate} type="text" className=" w-75 form-control  border border-dark" placeholder="Search For Jobs"/>

        </div>

        <br />
        
        <div className="jobs-cont container">

            <div className="row h-100 topspace-cont">

                <div className="col-12 col-md-3 overflow-auto">

                        <FilterSection setMyValues = {setValues} myValues = {allValues}/>

                </div>
                <div className="col-12 col-md-9 ">

                    <ul className="w-100">
                           {
                        allValues.jobsArr.map(each => <DisplayAllJObs jobsDetails = {each} key = {each.id} />)
                       }

                    </ul>
                    
                </div>

            </div>

        </div>
       
       </div>
       
        
    )

}

export default Jobs ;
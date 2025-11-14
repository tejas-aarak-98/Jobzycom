import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./login.css";

const Login = () => {

        const navigate  =  useNavigate();

        useEffect(() => {
            
            const token = Cookies.get("myToken")
          
            if(token !== undefined){

                navigate("/");

            }

 
        }, []);


    const [allValues,setValues] = useState({
     
        username : "",
        password : "",
        errorMsg : "",

    });




    const onSubmitUser = async (event)=>{

        event.preventDefault()

         const api = "https://apis.ccbp.in/login";

         const userDetails = {

            username: allValues.username,
            password: allValues.password

         }

         const option = {
            method : "POST",
            "Autharization" : "Application/json",
            "Access" : "Application/json",
            body: JSON.stringify(userDetails)
         }

         try {

            const response = await fetch(api,option)
            const data = await response.json()

             console.log(data);
             console.log(response);

             if(response.ok){
                
                Cookies.set("myToken",data.jwt_token)
                setValues({...allValues,errorMsg  : ""})
                navigate("/")


             }
             
             else(

                      setValues({...allValues,errorMsg  : data.error_msg})
             )
                  
             
             

            
         }
         
         catch (error) {
            console.log(error);
            
         }

    }


    return(

      <div className="login-cont" >


          

            <div className="img-cont">

                 <h3>Welcome To Jobzy</h3>   
                 {/* <br /> */}

                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ex, saepe magni! Perspiciatis commodi deserunt eaque porro!
                    Exercitationem quo corporis, illum rem maxime
                    
                       
                 </p>            

            </div>


         <form className="w-80 p-4 shadow" onSubmit={onSubmitUser}> 

      
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text" className="form-control" onChange={(e)=>{setValues({...allValues,username: e.target.value})}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" onChange={(e)=>{setValues({...allValues,password: e.target.value})}}  className="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" className="btn1">Submit</button>

            <br />

            <b className="text text-danger">{allValues.errorMsg}</b>

        </form>

     </div>

    )

}

export default Login;
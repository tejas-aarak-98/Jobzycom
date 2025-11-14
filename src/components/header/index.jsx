import { Link,useNavigate  } from "react-router-dom";
import Cookies from "js-cookie";
import './index.css';




const Header = ()=> {

      const navigate = useNavigate();
 

  const logout = ()=>{

   

     Cookies.remove("myToken");
  
     navigate("/login")

}

    
return(

    <nav className="navbar-cont" >

        <Link to={"/"}><i className = "fa-solid fa-briefcase fa-bounce fa-lg" style = {{color: "gold"}} >Jobzy</i></Link>

        <ul className="nav-cont">

            <li>

                <Link className=" linktab mr-3" to={"/"} style={{textDecoration:"none"}}>Home</Link>

            </li>

            <li>

                <Link to={"/jobs"} className=" linktab" style={{textDecoration:"none"}}>Jobs</Link>

            </li>


        </ul>

        <button className="btn btn-warning" style={{color: "black"}} onClick={logout}>Logout</button>



    </nav>

)


}

export default Header;
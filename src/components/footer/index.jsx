
import './style.css';

const Footer = ()=>{

    return(
       
    <footer className="main-footer">
  <div className="footer-container">

    <div className="footer-box">
      <h2 className="brand">JOBZY</h2>
      <p className="about">
        At Jobzy, we connect talent with the right opportunity.  
        Whether you're a job-seeker or an employer, Jobzy helps you find the perfect match.
      </p>
    </div>

    <div className="footer-box">
      <h2 className="heading">Useful Links</h2>
      <ul className="footer-list">
        <a href=""><li  style={{color : "white"}}>Home</li></a> 
       <a href="/jobs"  style={{color : "white"}}> <li>Jobs</li> </a> 
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>


    <div className="footer-box contact-social-wrapper">
      
      <div className="contact-box">
        <h2 className="heading">Contact Us</h2>
        <ul className="footer-list">
          <li>Email: support@jobzy.com</li>
          <li>Phone: +91 98765 43210</li>
          <li>Location: India</li>
        </ul>
      </div>

      <div className="social-box">
        <h2 className="heading">Social Media</h2>
        <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <a href="https://www.instagram.com/tejas_aarak_18/profilecard/?igsh=N3dpdzBvcW1pd3Bj"><i className="fa-brands fa-instagram"  style={{color : "white"}}></i></a>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>

    </div>

  </div>

  <p className="copy">© 2025 Jobzy. All Rights Reserved.</p>
</footer>


    )

}

export default Footer;
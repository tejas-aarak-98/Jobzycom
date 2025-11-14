import './index.css';
import { useEffect,useState } from 'react';
import Cookies from 'js-cookie';


const empArr = [
  {
    id:"INTERNSHIP",
    label : "internship"

  },

  {
    id:"FULLTIME",
    label : "Full Time"

  },

   {
    id:"PARTTIME",
    label : "Part Time"

  },

 {
    id:"FREELANCE",
    label : "Freelance"

  },

  
]

const salaryArr = [
  {
    id: 1000000,
    label : "10 LPA and Above"
  },

    {
    id: 2000000,
    label : "20 LPA and Above"
  },

    {
    id: 3000000,
    label : "30 LPA and Above"
  },

    {
    id: 4000000,
    label : "40 LPA and Above"
  },

]

const FilterSection = (prop)=> {

  const {setMyValues,myValues} = prop;

  const [allValues,setValues] = useState ({
    userProfile : {}
  })


     useEffect(()=>{

      const fetchProfile = async () => {

        const token = Cookies.get("myToken")

        const api = "https://apis.ccbp.in/profile";

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

              setValues({...allValues,userProfile : data.profile_details})
              // console.log(data);
              

          }
          
        } catch (error) {
          
          console.log(error);
          

        }

      }

      fetchProfile()

     },[]);

     const displayProfile = () => (

           <div className='w-100 p-3 profile-card  bg-warning'>
      
       <img src= {allValues.userProfile.profile_image_url } width={"100px"} />

       <div>

         <h4>{allValues.userProfile.name}</h4>
         <p>{allValues.userProfile.short_bio}</p>

       </div>

     </div>

     );

  const displayEmpType = () => {

  const onSetEmpType = (e) => {
    if (e.target.checked) {
      setMyValues({
        ...myValues,
        empType: [...myValues.empType, e.target.value]
      });
    } else {
      setMyValues({
        ...myValues,
        empType: myValues.empType.filter(each => each !== e.target.value)
      });
    }
  };

  return (
    <ul className='p-3 filters'>
      <h6 className='text text-warning'>Employment Type :</h6>

      {empArr.map(each => (
        <li key={each.id}>
          <input
            id={each.id}
            type="checkbox"
            value={each.id}
            onChange={onSetEmpType}
            checked={myValues.empType.includes(each.id)}   // ✅ important fix
          />
          <label htmlFor={each.id} className='ml-3 text text-white'>
            {each.label}
          </label>
        </li>
      ))}
    </ul>
  );
};


     const displaySalary=()=>{


      const onSalaryryRange =(e)=>{

      console.log(e.target.value);

      if(e.target.checked === true){

        setMyValues({...myValues, salary: e.target.value});

      }

    else{

      setMyValues({...myValues,salary: myValues.salary.filter(each => each !== e.target.value)}) 


    }
      



      }


      return (

             <ul className='p-3 filters'>

          <h6 className='text text-warning'>Salary Range :</h6>

            {
              salaryArr.map(each =>(
                <li key={each.id}>
                  <input name='salary' id= {each.id} onChange={onSalaryryRange} value={each.id} type="radio" />
                  <label htmlFor= {each.id} className='ml-3 text text-white'>{each.label}</label>
                </li>
              ))
            }

        </ul>

      )

           }

return(

  <div className='w-100 mainfiltersec '>

 
        {displayProfile()}
        <br />
        {displayEmpType()}

        {displaySalary()}

  </div>

)


}

export default FilterSection;

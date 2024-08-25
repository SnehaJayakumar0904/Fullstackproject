import axios from "axios";

import React, { useEffect, useState } from "react"; 
import {Link, useNavigate } from "react-router-dom";

export default function Updateuser() 
{
     let navigate = useNavigate();
     const [user, setuser] = useState({
          id:"",
          name:"",
          type:"",
          password:"",
     });

     const {id, name, type, password, } = user;

     const onInputChange = (e) => {
          setuser({...user, [e.target.name]: e.target.value });

     };
     useEffect(()=>{
        loaduser();
     },);

     const onSubmit  = async (e)=> {
     e.preventDefault();
     await axios.put(`http://localhost:8084/user/${id}`, user); 
     navigate("/Home")
    };

     const loaduser = async () => {
        const result = await axios.get(`http://localhost:8084/user/${id}`);
       setuser(result.data);

     };

     return (

     <div className="container">
          <div className="row">

               <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
               <h2 className="text-center m-4">Edit user Details</h2>
                         <form onSubmit={(e) => onSubmit(e)}>
                         <div className="mb-3">
                         <label htmlFor="id" className="form-label">
                         id
                         </label>
                         <input
                              type={"text"}
                              className="form-control"
                              placeholder="Enter your Id"
                              name="id"
                              value={id}
                              onChange={(e) => onInputChange(e)}
                         />
                         </div>
                         <div className="mb-3">
                         <label htmlFor="name" className="form-label">
                         name
                         </label>
                         <input
                              type={"text"}
                              className="form-control"
                              placeholder="Enter your Name"
                              name="name"
                              value={name}
                              onChange={(e) => onInputChange(e)}
                         />
                         </div>
                         <div className="mb-3">
                         <label htmlFor="type" className="form-label">
                         type
                         </label>
                         <input
                              type={"text"}
                              className="form-control"
                              placeholder="Enter your text"
                              name="type"
                              value={type}
                              onChange={(e) => onInputChange(e)}
                              />
                              </div>
                              <div className="mb-3">
                              <label htmlFor="password" className="form-label">
                              password
                              </label>
                         <input
                              type={"text"}
                              className="form-control"
                              placeholder="Enter your password"
                              name="password"
                              value={password}
                              onChange={(e) => onInputChange(e)}
                         />
                         </div>
                         <button type="submit" className="btn btn-outline-primary">
                              submit
                              </button>
                         <Link className="btn btn-outline-danger mx-2" to={"/Home"}>
                              Cancel
                         </Link>
                         </form>
                    </div>
                    </div>
          </div>
     )
}



     





               
               
               
            


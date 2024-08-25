import axios from "axios";

import React, { useEffect, useState } from "react"; 
import {Link, useParams } from "react-router-dom";
export default function Viewuser() 
{
     

     const [user, setuser] = useState({
          id:"",  
          name:"",
          type:"",
          password:"",
     });
     const loaduser  = async ()=> {
        const result = await axios.get(`http://localhost:8084/user/${id}`, user); 
        setuser(result.data);
     };
     const {id} = useParams();
     useEffect(()=>{
        loaduser();
     },);

     
     return (

        <div className="container">  
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"> 
                <h2 className="text-center m-4">User Details</h2>    
                    <div className="card">        
                        <div className="card-header">        
                            Details of User id: {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                <b>id:</b>
                                {user.id}
                                </li>
                                <li className="list-group-item">
                                <b>name:</b>
                                {user.name}
                                </li>
                                <li className="list-group-item">
                                <b>type:</b>
                                {user.type}
                                </li>
                                <li className="list-group-item">
                                <b>password:</b>
                                {user.password}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/Home"}>
                        Back to Home
                    </Link>
                </div>
                </div>
        </div>
    )    
}




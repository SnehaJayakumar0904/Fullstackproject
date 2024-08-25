import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom';
export default function HomePage(){
return (
<div>
    <html>
        <div>
        <h1 className='text text-secondary p-3 mb-2 bg-gradient-warning text-dark'><center>Shoppingmall Management</center></h1>
        </div>
        <div style={
            {
                fontFamily:'sans-serif',
                color :'black',
                fontSize:20,
            }
        }>
        
        <p><center>Browse user Details</center></p>
        <Link className="btn btn-outline-primary" to="/Home" >
        user Details
        </Link>
        <h5 style={{
fontFamily :'sans- serif',
fontSize :'22px'
}}>
    <br></br>
<p>
    This Shopping Mall is the smoothing experience and good management
</p>
</h5>
</div>
</html>
</div>
);
}

        
            
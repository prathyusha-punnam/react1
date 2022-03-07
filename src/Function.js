import React, { useState } from "react"

const Function=()=>{
    const [status,setstatus]=useState(true)

    const clickfun=()=>{
        setstatus(!status);
    }
    
    return (
        <div>
            <div className="leftbtn">
        <button className="funbtn" onClick={clickfun} >To see styling in functional Component</button>
        </div>
       
        {
         status ?  <div className="leftin">
           <h2>This is created using Functional component </h2> 
           <p className="fpara">This is done using external Css</p>
           <p style={{color:"blue"}}>This is done by using inline css</p>
        </div> : null 
        }
        
        </div>
    )
}
export default Function
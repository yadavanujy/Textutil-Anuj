import React from 'react'

function Alert(props) {
    
    // const capitalize = (word) =>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }

  return (
    <>
         <div className={`alert alert-${props.alert.type} d-flex align-items-center  my-0`} style={{height:40}} role="alert">
         <div>
          <strong>{props.alert.type}</strong> {props.alert.msg}   
         </div>
         </div>
    </>
  )
}

export default Alert

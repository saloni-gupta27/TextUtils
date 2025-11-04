import React from 'react'

export default function Alert(props) {
  
 
    let capitalize = (word) =>{
        let newText= word.toLowerCase();
        newText= newText.charAt(0).toUpperCase() + newText.slice(1);
        return newText;
     }
  return (
    <div style={{height:'50px'}}>
     { props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
 
</div>}
</div>
   
  )
}

import React from 'react'

function Alert(props) {
    // console.log(props.alert.msg)
    const capitalize = (word)=>{
        if (!word) return '';
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}:</strong>{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
  )
}

export default Alert

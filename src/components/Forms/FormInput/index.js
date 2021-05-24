 import React from 'react';
 import './styles.scss'

 const formInput = ({ handeleChange, label, ...otherProps }) =>{
     return (
         <div className="formRow">
             {label && (
                 <label>
                     {label}
                 </label>
             )}

             <input className="formInput" onChange={handeleChange} {...otherProps} />
         </div>
     )
}

export default formInput;
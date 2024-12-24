import React from "react";
const Scroller =({InputList,onInputChange})=>{
    return(
        <div style={{ height: '400px', overflowY: 'auto',display: 'block',width:'45%'}}>
            {InputList.map((input,index,type)=>(
                <div key={index} style={{ marginBottom: '10px' }}>
                <label htmlFor={`input-${index}`}>{`${input}:`}</label>
                <br></br>
                <input key ={index} 
                type={type} 
                name={input} 
                placeholder={input} 
                style={{ textAlign: 'center' }}
                onChange={(e) => onInputChange(e.target.name, e.target.value)}
                />
                </div>
            ))}
            
        </div>

    )

}
 export default Scroller;
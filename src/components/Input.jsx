import React from 'react'

const Input = ({AddData}) =>{
  const [inp,Setinp] = React.useState("");
  return(
   <div>
     <input type="text" placeholder='enter Item' value={inp} onChange={(e)=>Setinp(e.target.value)}/>
    <button onClick={()=>AddData(inp)}>Add</button>
   </div>
  )
}

export default Input

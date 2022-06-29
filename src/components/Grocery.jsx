import React from 'react'
import Input from './Input';
import List from './List';

const Grocery = () => {
  const [items,AddItems] = React.useState([])


  const GetData = () =>{
    fetch(`http://localhost:3001/data`)
    .then((res)=>res.json())
    .then((res)=>AddItems(res))
    .catch((err)=>console.log(err))
  }

  const AddData = (title) =>{
    const data = {
      title:title
    }
    fetch(` http://localhost:3001/data`,{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "content-type": "application/json"
      }
    })
    .then((res)=>res.json())
    .then((res)=>GetData())
    .catch((err)=>console.log(err))
  }

  React.useEffect=(()=>{
    GetData()
  },[items])
  console.log("added list" , items)
  return (
    <div>
      <Input AddData={AddData} />
      <List items = {items}/>
    </div>
  )
}

export default Grocery

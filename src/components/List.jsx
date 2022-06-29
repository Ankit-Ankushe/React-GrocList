import React from 'react'

const List = ({items}) => {
    console.log("in list",items)
  return (
    <div>
        {
          items.map((item)=>(
            <h1 key={item.id}>{item.title}</h1>
          ))
        }
    </div>
  )
}

export default List

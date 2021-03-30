import React from 'react'
import Todo from './Todo'

const List = (props) => {
  return (
    <div>
      {props.list.map((item, index) => {
        return <Todo item={item} index={index} />
      })}
    </div>
  )
}
export default List
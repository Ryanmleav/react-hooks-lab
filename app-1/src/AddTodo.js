import {useState} from 'react'

const AddTodo = props => {
  const [userTodo, setUserTodo] = useState('')

  function handleAddTodo(){
    props.addTodo(userTodo)
    setUserTodo('')
  }

  return (
    <div>
    <input
    placeholder='Add a todo!'
    value={userTodo}
    onChange={(e) => setUserTodo(e.target.value)}
    />
    <button onClick={handleAddTodo}>Submit</button>
    </div>
  )
}

export default AddTodo
import React, {useState} from 'react'

const TodosComponent = () => {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Cong viec 1'},
        {id: 2, title: 'Cong viec 2'},
    ])

    const [todo, setTodo] = useState({
        title: ''
    })

    const changeTodo = (e) => {
        setTodo({
            id: Math.floor(Math.random() * 1000),
            title: e.target.value
        })
  
    }
    
    const onSubmit = (e) =>{
        e.preventDefault();
        if(todo.title !== "")
            setTodos([...todos, todo])
        setTodo({
            title: ''
        })
    }
    return (
        <div>
            {todos.map((todo, index) =>{
                    return(
                        <li key={todo.id}><b>{index + 1}.</b>&nbsp;&nbsp;&nbsp;{todo.title}</li>
                    )
                })}
             <form onSubmit={(e) => onSubmit(e)}>
                <input type="text" name="todo" placeholder="Enter user" value={todo.title} onChange={(e)=>changeTodo(e)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TodosComponent;

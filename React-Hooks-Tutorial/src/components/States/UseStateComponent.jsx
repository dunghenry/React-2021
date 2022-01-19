import React, {useState} from 'react';

const UseStateComponent = () => {
    const [user, setUser] = useState('');
    const [name, setName] = useState('Hehe')
    const [todos, setTodos] = useState([
        {id: 1, title: 'Cong viec 1'},
        {id: 2, title: 'Cong viec 2'},
    ])
    const handleSubmit = (e) =>{
        e.preventDefault();
        setName(user)
        setUser('');
    }
    const changeUse = (event) =>{
        setUser(event.target.value)
    }
    return (
        <div>
            <p>Name: {name}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="name" placeholder="Enter user" value={user} onChange={(e)=>changeUse(e)}/>
                <button type="submit">Submit</button>
            </form>
            <div>
                {todos.map((todo) =>{
                    return(
                        <li key={todo.id}>{todo.title}</li>
                    )
                })}
                
            </div>
        </div>
    )
}

export default UseStateComponent;

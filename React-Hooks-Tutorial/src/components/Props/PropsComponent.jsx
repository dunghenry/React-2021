import React from 'react';

const PropsComponent = (props) => {
    const {todos, title, deleteTodo} = props;
   
    return (
        <div>   
            <h1>{title}</h1>
            {todos.map((todo, index) =>{
                    return(
                       <div className="todo" key={todo.id}>
                            <li ><b>{index + 1}.</b>&nbsp;&nbsp;&nbsp;{todo.title}</li>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                       </div>
                    )
                })}
        </div>
    )
}

export default PropsComponent

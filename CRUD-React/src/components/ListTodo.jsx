import React from 'react';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todos : [
                {id: 1, title: 'Công việc 1'},
                {id: 2, title: 'Công việc 2'},
                {id: 3, title: 'Công việc 3'},
            ],
            editTodo : []
        }
    }
    addTodo = (todo) =>{
        this.setState({
            todos: [...this.state.todos, todo]
        })
        toast.success('Add todo success!');
    }
    
    deleteTodo = (todo) =>{
        let listTodos = this.state.todos;
        listTodos = listTodos.filter(item => item.id !== todo.id)
        this.setState({todos: listTodos})
        toast.success('Delete todo success!');
    }
    editTodo = (todo) => {
        let {editTodo, todos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if(!isEmptyObj && editTodo.id === todo.id) {
            let listTodosCopy = [...todos];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo succeed!")
            return;
        }
       
        this.setState({
            editTodo: todo
        })
        
    }
    onChangeTitle = (e) =>{
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = e.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() { 
        let {todos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log(isEmptyObj)
        console.log(editTodo)
        return(
            <div>
                <AddTodo addTodo={this.addTodo}/>
                {
                    todos.map((item, index) =>{
                        return (
                        <div className="d-flex justify-content-center mt-3" key={item.id}>
                            {isEmptyObj ?
                                <div className="d-flex">
                                    <span>{index + 1}.&nbsp;&nbsp;</span>
                                    <li className="pt-1 mr-3">{item.title}</li>
                                </div>
                                :
                                <div>
                                    {editTodo.id === item.id ?
                                        <div>
                                            <span className="mr-2">{index + 1}.&nbsp;&nbsp;</span>
                                            <input value={editTodo.title} className="mr-4 p-1" onChange={(e)=>this.onChangeTitle(e)}/>
                                        </div>
                                        :
                                        <div className="d-flex">
                                            <span>{index + 1}.&nbsp;&nbsp;</span>
                                            <li className="pt-1 mr-3">{item.title}</li>
                                        </div>
                                    }
                                </div>
                            }
                            <button className="mr-3 btn btn-primary" onClick={() => this.editTodo(item)}>
                                {!isEmptyObj && editTodo.id === item.id ? 'Save' : 'Edit'}
                            </button>
                            <button className="btn btn-danger" onClick={() => this.deleteTodo(item)}>Delete</button>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}
 
export default ListTodo;
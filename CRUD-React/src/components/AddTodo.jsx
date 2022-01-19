import React from 'react';
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.title){
            toast.error("Add todo failed!");
            return;
        }
        this.props.addTodo({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
        });
        this.setState({ title: ''})
        
       
    }
    onChange = (e) =>{
        this.setState({title: e.target.value})
    }
    render() {  
        return(
            <div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <label>Add todo :&nbsp;&nbsp;</label>
                    <input type="text" placeholder="Enter todo..." name="title" value={this.state.title} onChange={(e)=> this.onChange(e)}/>
                    <input type="submit" value="Add" className="btn btn-success"/>
                </form>
            </div>
        )
    }
}
 
export default AddTodo;
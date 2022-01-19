import React from 'react';
class AddComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            salary: ""
        }
    }
    //!Cách 1
    handleChangeUserName = (event) =>{
        this.setState({ title: event.target.value})
    }
 
    //!Cách2 set cho mọi trường chỉ cần thêm att name
    setParams = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }
 
    onSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.title || !this.state.salary){
            alert("Error");
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        });
       
        this.setState({ title: '', salary: ''})
    }
   
    render() { 
        return ( 
            <div>
                <div>
                    <form onSubmit={(e)=>this.onSubmit(e)}>
                        <label htmlFor="title">Title:</label><br/>
                        <input type="text" id="title" name="title" onChange={(event) =>{this.handleChangeUserName(event)}} value={this.state.title}/><br/>
                        <label htmlFor="salary">Salary:</label><br/>
                        <input type="text" id="salary" name="salary" onChange={this.setParams} autoComplete="on" value={this.state.salary}/><br/><br/>
                        <input type="submit" value="Submit"/>
                    </form> 
                </div>
            </div>
        );
    }
}
 
export default AddComponent;
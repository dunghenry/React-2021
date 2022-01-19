import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    //!Cách 1
    handleChangeUserName = (event) =>{
       this.setState({ username: event.target.value})
    }

    //!Cách2 set cho mọi trường chỉ cần thêm att name
    setParams = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }

    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    render() { 
        return(
            <div>
                <h1>{this.props.msg}</h1>
                <form onSubmit={(e)=>this.onSubmit(e)}>
                    <label htmlFor="username">Username:</label><br/>
                    <input type="text" id="username" name="username" onChange={(event) =>{this.handleChangeUserName(event)}}/><br/>
                    <label htmlFor="password">Last name:</label><br/>
                    <input type="password" id="password" name="password" onChange={this.setParams} autoComplete="on"/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
        )
    }
}
 
export default Header;


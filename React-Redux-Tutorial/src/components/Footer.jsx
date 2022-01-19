import React from 'react';
import Child from './Child';
import FunctionComponent from './FunctionComponent';
class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "Trần Văn Dũng",
            age: 20,
            jobs: [
                {id: '001', title: "Developer", salary: 1000},
                {id: '002', title: "Tester", salary: 800},
                {id: '003', title: "Project Manager", salary: 2000},
            ],
        }
    }

    handleChangeName = (event) =>{
        this.setState({fullName: event.target.value})
    }

    render() { 
        return(
            <div>
                <h1>This is Footer Component</h1>
                <input type="text" value={this.state.fullName} onChange={(event)=>this.handleChangeName(event)} />
                <h2>{this.state.fullName} {this.state.age}</h2>
                <Child fullName={this.state.fullName} age={this.state.age} jobs={this.state.jobs}/>
                {/* <FunctionComponent fullName={this.state.fullName} age={this.state.age} jobs={this.state.jobs}/> */}
            </div>
        );
    }
}
 
export default Footer;



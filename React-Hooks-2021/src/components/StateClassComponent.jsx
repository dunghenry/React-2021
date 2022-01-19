import React from 'react';

class StateClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: 'user',
            age: 20
        }
    }
    handleClick = () =>{
        this.setState({
            count : this.state.count + 1
        })

        this.setState({
            name: 'admin',
        })

        // this.state = { 
        //     count: 1,
        //     name: 'admin',
        //     age: 20
        // }

    }
    render() { 
        return (
            <div>
                <h1>Function Component</h1>
                <p>{this.state.count}</p>
                <p>{JSON.stringify(this.state)}</p>
                <button onClick={this.handleClick}>Set count</button>
            </div>
        );
    }
}

export default StateClassComponent;

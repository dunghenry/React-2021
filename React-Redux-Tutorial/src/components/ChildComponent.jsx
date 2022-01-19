import React from 'react';

class ChildComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
    }
    handleClick = () =>{
        this.setState({show: !this.state.show});
    }
    deleteJob = (item) =>{
    //    console.log(item)
       this.props.deleteJob(item)
    }
    
    render() { 
        console.log(this.state)
        let {jobs} = this.props;
       
        return ( 
           
            <div>
                {!this.state.show && 
                    <div>
                        <button onClick={() => this.handleClick()}>Show</button><br></br><br></br>
                    </div>
                }
                
                {this.state.show && 
                    <div>
                        {
                            jobs.map((item, index) =>{
                                return <li key={item.id}>{item.title} - {item.salary} <button onClick={() =>this.deleteJob(item)}>Delete</button></li>
                            })
                        
                        }
                        <button onClick={() =>this.handleClick}>Hide</button>
                    </div>
                }
            </div>
        );
    }
}
 
export default ChildComponent;
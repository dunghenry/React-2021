import React from 'react';
class Child extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
    }
    handleClick = () =>{
        this.setState({show: !this.state.show});
    }
    render() { 
        let {fullName, age, jobs} = this.props;
       
        return ( 
           
            <div>
                {!this.state.show && 
                    <div>
                        <button onClick={this.handleClick}>Show</button><br></br><br></br>
                    </div>
                }
                
                <h1>Tên của bạn lấy từ component Parent là : {fullName} - {age}</h1>
                {this.state.show && 
                    <div>
                        {
                            jobs.map((item) =>{
                                return <li key={item.id}>{item.title} - {item.salary}</li>
                            })
                        
                        }
                        <button onClick={this.handleClick}>Hide</button>
                    </div>
                }
            </div>
        );
    }
}
 
export default Child;
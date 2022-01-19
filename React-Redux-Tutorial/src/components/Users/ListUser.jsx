import React from 'react';
import { withRouter } from "react-router";
const axios = require('axios');
class ListUser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    async componentDidMount() {
        let res  = await axios.get('https://reqres.in/api/users')
        this.setState({
            data: res   && res.data && res.data.data ? res.data.data : []
        })
    }
    viewDetail = (user) =>{
        this.props.history.push(`/user/${user.id}`)
    }
    render() { 
        let {data} = this.state;
        // console.log(data)
        return ( 
            <div>
                {
                    data.map((user, index) => {
                        return(
                            <div key={user.id} className="mt-3">
                               <img src={user.avatar} />
                               &nbsp;&nbsp;&nbsp;&nbsp;
                               <b>{user.id}</b>.&nbsp;&nbsp;
                               {user.first_name} {user.last_name}
                               <button className="btn btn-primary ml-3" onClick={() => this.viewDetail(user)}>View Detail</button>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
 
export default withRouter(ListUser);
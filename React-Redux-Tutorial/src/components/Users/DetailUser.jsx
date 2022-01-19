import React from "react";
import { withRouter } from "react-router";
const axios = require("axios");
class DetailUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  async componentDidMount() {
    try{
      if (this.props.match && this.props.match.params.id) {
        let id = this.props.match.params.id;
        let res = await axios.get(`https://reqres.in/api/users/${id}`);
        this.setState({
          user: res && res.data && res.data.data ? res.data.data : [],
        });
      }
    }
    catch(error){
      console.log(error)
    }
  }
  Back = () =>{
    this.props.history.push(`/user`)
  }
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    
    return (
      <div>
        {!isEmptyObj ?
            <div className="mt-3">
            <img src={user.avatar} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <b>{user.id}</b>.&nbsp;&nbsp;
            {user.first_name} {user.last_name} - Email: {user.email}
            <button className="btn btn-primary ml-3" onClick={() => this.Back()}>Back</button>
          </div>
          :
          <div>
              <p>Loading</p>
          </div>
        }
      </div>
    );
  }
}

export default withRouter(DetailUser);

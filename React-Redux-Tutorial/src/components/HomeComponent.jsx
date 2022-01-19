import React from 'react';
import { withRouter } from "react-router";
import HOCComponent from './HOCComponent';
import { connect } from 'react-redux';
class HomeComponent extends React.Component {
    componentDidMount(){
        // console.log(this.props)
        setTimeout(() =>{
            // this.props.history.push('/news')
        }, 2000)
    }
    deleteUser = (user) =>{
        this.props.deleteUser(user.id)
    }
    createUser = () =>{
        this.props.createUser();
    }
    render() { 
        let data = this.props.data
        return <div>
            <h1>This is Home Page</h1>
            <button onClick={()=> this.createUser()} className="btn btn-success">Create random user</button>
            {data && data.length ?
            <div>
                {data.map((user, index) =>{
                    return <div key={user.id} className="d-flex mt-3">
                        <b style={{fontSize:'18px'}}>{index + 1}. &nbsp;&nbsp;</b>
                        <h5>{user.name}</h5> &nbsp;&nbsp;
                        <h5>{user.email}</h5>
                        <button onClick={() => this.deleteUser(user)} className="btn btn-danger ml-3">Delete</button>
                    </div>
                })}
            </div>
            : 
            <h1 style={{color: 'red'}}>Không lấy được dữ liệu nhé hehe</h1>
            }
        </div>;
    }
}

const mapStateToProps = (state) =>{
   return {
    data: state.users
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteUser: (id) => {
        dispatch({type: 'delete_user', payload: id })
      },
      createUser: () => {
        dispatch({type: 'create_user'})
      }
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps)(HOCComponent(HomeComponent));
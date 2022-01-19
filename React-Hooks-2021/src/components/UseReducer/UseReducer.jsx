import React, {useReducer} from 'react';

const reducer = (state, action) =>{
    switch (action){
        case 'Tang':
            return state + 1;
        case 'Giam':
            return state - 1;
        case 'Xoahet':
            return 0;
        default:
            return state;

    }

}

const reducer2 = (state, action)=>{
    switch (action.type) {
        case "GAN_GIA_TRI":
            return action.data;
        default:
            return state;
    }
}

const intiState = {
    loading: false,
    data: [],
    err: null,
}

const userReducer = (state, action)=>{
    switch(action.type){
        case 'GET_USER_REQUEST':
            return{
                ...state,
                loading: true,
            }
        case 'GET_USER_SUCCESS':
            return{
                ...state,
                loading: false,
                data: action.data
            }
        case 'GET_USER_ERROR':
            return{
                ...state,
                data: [],
                error: action.data
            }
        default:
           return state; 
    }
}
const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, 0);
    const [count2, dispatch2] = useReducer(reducer2, 0);
    const [user, userDispatch] = useReducer(userReducer, intiState);
    
    const getUsers = () =>{
        userDispatch({
            type: 'GET_USER_REQUEST',
        });

        setTimeout(() =>{
            fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => {
                userDispatch({
                    type: 'GET_USER_SUCCESS',
                    data: res.data
                });
            
            })
            .catch(err =>{
                userDispatch({
                    type: 'GET_USER_ERROR',
                    data: err
                });
            })
        }, 2000) 
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch('Tang')}>Tang</button>
            <button onClick={() => dispatch('Giam')}>Giam</button>
            <button onClick={() => dispatch('Xoahet')}>Xoa het</button>
            <p>{count2}</p>
            <button onClick={() => dispatch2({
                type: 'GAN_GIA_TRI',
                data: 100
            })}>Gan gia tri</button>
            <button onClick={getUsers}>GET USERS</button>
            {user.loading ? <p>Loading...</p> : <p>{JSON.stringify(user)}</p>}
            
        </div>
    )
}

export default UseReducer;

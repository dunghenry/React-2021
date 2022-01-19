import React, {useState, useCallback} from 'react';
import ChildComponent from './ChildComponent';

const ParentsComponent = () => {
    const[count, setCount] = useState(0);
    const[name, setName] = useState('Tran Van Dung');
    const handleClick = () =>{
        setCount(count + 1)
    }
    const getUsers = useCallback( () =>{
        return fetch(`https://reqres.in/api/users`)
    }, [])
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => handleClick()}>Count++</button>
            <ChildComponent name={name} getUsers={getUsers}/>
        </div>
    )
}

export default ParentsComponent

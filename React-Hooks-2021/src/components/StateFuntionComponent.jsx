import React, {useState} from 'react'

const StateFuntionComponent = () => {
    const initalValues = () =>{
        let total = 0;
        for (let i = 0; i < 1000000; i++){
            total += i;
        }
        console.log("Check");
        return total;
    }
    //Đảm bảo ct đc performance
    const [count, setCount] = useState(() =>{
        return initalValues();
    });

    const [user, setUser] = useState({
        name: 'user',
        age: 20
        }
    )

    const handleClick = () =>{
        setCount((count) =>{
            return count + 1
        })
        setCount((count) =>{
            return count + 1
        })

        setUser({
            name: 'admin'
        })
        // user = { name: 'adim'}
    }
    
    return (
        <div>
            <h1>Function Component</h1>
            <p>{count}</p>
            <p>{JSON.stringify(user)}</p>
            <button onClick={handleClick}>Set count</button>
        </div>
    )
}

export default StateFuntionComponent

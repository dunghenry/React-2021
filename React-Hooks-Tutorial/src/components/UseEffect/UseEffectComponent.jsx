import React, {useState, useEffect} from 'react'

const UseEffectComponent = () => {
    const initValue = () =>{
        let total = 0;
        for (let i = 0; i <= 10; i++){
            total += i;
        }
        console.log("Check total");
        return total;
    }
    
    const [count, setCount] = useState(() =>{
        return initValue();
    });

    useEffect(() =>{
        console.log("useEffect running...")
    },[])
    const handleClick = () =>{
        setCount((count) =>{
            return count + 1
        })
        setCount((count) =>{
            return count + 1
        })
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=> handleClick()}>Increase</button>
        </div>
    )
}

export default UseEffectComponent;

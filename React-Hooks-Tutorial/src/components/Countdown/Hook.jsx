import React, {useState, useEffect} from 'react';

const Hook = () => {
    const[time, setTime] = useState(10);
    useEffect(()=>{
        if(time === 0 ) return;
        let timer = setInterval(()=>{
            setTime(time - 1)
        }, 1000)
        return () =>{
            clearInterval(timer)
        }
    }, [time])
    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

export default Hook

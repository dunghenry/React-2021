import React, {useState, useMemo} from 'react'


function expensiveFuntion(number) {
    console.log("Bắt đầu");
    const start = new Date();
    while(new Date() - start < 1000)
    console.log("Kết thúc", new Date() - start, 'ms');
    return number * number;
}

const UseMemoComponent = () => {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(20);
    const number = useMemo(() =>{
        return expensiveFuntion(num);
    }, [num])

    const handleClick = () =>{
        setCount(count + 1);
        
    }
    return (
        <div>
            <p>{count}</p>
            <p>{num}</p>
            <button onClick={() => handleClick(setNum(num + 1))}>Add</button>
            <p>Number : {number}</p>
        </div>
    )
}

export default UseMemoComponent

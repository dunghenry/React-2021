import React, {useRef, useEffect} from 'react';

const UseRefComponent = () => {
    let countRef = useRef(0);
    const ref = useRef(null);
    
    const handleClick = () =>{
        countRef.current = countRef.current + 1;
        console.log(countRef)
    }

    useEffect(() =>{
        setInterval(()=>{
            countRef.current = countRef.current + 1;
            console.log(countRef)
        },1000);
        ref.current.focus();
    }, [])
   
    return (
        <div>
            <input ref={ref} />
            <button onClick={() => handleClick()}>Count ++ </button>
        </div>
    )
}

export default UseRefComponent;

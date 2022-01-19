import React, {useState} from 'react'

const EventsComponent = () => {
    const [count, setCount] = useState(0);
    const handleClick = () =>{
        setCount(count + 1);
    }
    const changeValue = (e) =>{
        console.log(e.target.value)
    }
    return (
        <div>
            <p>{count}</p>
           <button onClick={() => handleClick()}>Click me</button>
         <div>
            <input type="text" onChange={(e) => changeValue(e)} autoFocus/>
            <button >Click me</button>
         </div>
        </div>
    )
}

export default EventsComponent

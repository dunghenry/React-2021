import React, {useEffect, useState} from 'react';

const UseEffectComponent = () => {
    const [count, setCount] = useState(0)

    useEffect(() =>{
        document.title = `You click ${count}`;
        console.log("useEffect")
        return () =>{
            console.log("Clean-up function")
        }
    },[count])

    const [action, setAction] = useState('')

    useEffect(() =>{
        fetch(`https://reqres.in/api/${action}`)
        .then((res) => console.log({res}))
        .catch((err) => console.error(err))
    }, [action])


    const handleClick = () =>{
        setCount(count + 1);
    }
    const [scrollPosition, setScrollPosition] = useState(0)

    const handleScroll = () =>{
        setScrollPosition(window.scrollY)
    }
    useEffect(() =>{
        //componentDidMount() & componentDidUpdate()
        document.addEventListener('scroll', handleScroll);

        return () =>{

            //componentWillUnmount()
            document.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div style={{height: '3000px'}}>
            <button onClick={handleClick}>Set count</button>
            <button onClick={() => setAction('users')}>get Users</button>
            <button onClick={() => setAction('comments')}>get Comments</button>
            <p style={{position: 'fixed', bottom: '0', color: 'red'}}>{scrollPosition}</p>
        </div>
    )
}

export default UseEffectComponent

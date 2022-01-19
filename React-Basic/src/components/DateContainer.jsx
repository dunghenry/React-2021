import {useState, useEffect} from 'react';
import './date.css';
import DateDisplay from './DateDisplay';
const DateContainer = () => {
    const [date, setDate] = useState(Date.now());
    console.log()
    useEffect(() => {
       console.log("Running useEffect...")
    }, [])
    

    return (
        <div>
            <input type="date" className="date-input" name="dateRequired" onChange={(e) => setDate(e.target.value)}/>
            <DateDisplay date={date}/>
        </div>
    )
}

export default DateContainer;

import React from 'react';
import { useState, useEffect } from 'react';
const ChildComponent = ({getData}) => {
    const [comments, setComments] = useState([]);
       
   useEffect(() =>{
       getData('comments')
       .then((res) => res.json())
       .then((res) =>{
           const comments = res.data;
           setComments(comments);
       })
   }, [getData])
   
    return (
        <div>
            <h1>Child Component</h1>
            <p>{JSON.stringify(comments)}</p>
        </div>
    )
}

export default ChildComponent;

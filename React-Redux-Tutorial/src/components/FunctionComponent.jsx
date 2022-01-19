import React from 'react';

const FunctionComponent = (props) => {
   let {fullName, age, jobs} = props;
    return (
        <div>
             <h1>Tên của bạn lấy từ component Parent là : {fullName} - {age}</h1>
                {
                    jobs.map((item) =>{
                        return <li key={item.id}>{item.title} - {item.salary}</li>
                    })
                }
        </div>
    )
}

export default FunctionComponent;

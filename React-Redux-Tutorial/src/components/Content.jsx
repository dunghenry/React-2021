import React, {useState} from 'react'

const Content = (props) => {
    let {fullname, age} = props;

    //fullname = Tran Van Dung, age = 20
    
    const [fullName, setFullName] = useState('Tran Van Dung')

    const onChangeName = () =>{
       setFullName("Haha")
    }
    return (
        <div>
            <h1>This is Content Component</h1>

            <h2>{props.fullName}</h2>
            <button onClick={onChangeName} style={{cursor: 'pointer'}}>ChangeName</button>
        </div>
    )
}

export default Content;

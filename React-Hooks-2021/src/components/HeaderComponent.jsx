import React, {useState} from 'react';

const HeaderComponent = () => {
    // let fullName = "Tran Van Dung";

    const [fullName, setFullName] = useState('Trần Văn Dũng');
    const onChange = (e) =>{
        setFullName(e.target.value)
    }
    return (
        <div>
            <h1>This is Header Component</h1>
            <input type="text" value={fullName} onChange={(e) => onChange(e)}/>
            <h2>Tên của bạn là : {fullName}</h2>
            
        </div>
    )
}
export default HeaderComponent;

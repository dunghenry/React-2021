import React from 'react'

const ChildComponent = (props) => {
    console.log("re-render");
    console.log(props);
    return (
        <div>
            {props.name}
        </div>
    )
}

export default React.memo(ChildComponent, (prevProp, nextProp) => {
    return prevProp.name === nextProp.name
});

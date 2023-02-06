import React from "react";

const Contents = ({ key, obj, onRemove }) => {

    const statControl = () => {
        obj.stat === 0 ? setObj(1) : setObj(0);
    };

    return (
        <div>
            <p>{obj.title}</p>
            <p>{obj.desc}</p>
            {obj.stat === 0 ? <button onClick = {statControl}>Done</button> : <button onClick = {statControl}>Cancel</button>}
            <button onClick = {() => onRemove(key)}>Remove</button>
        </div>
    );
}

export default Contents;
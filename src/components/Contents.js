import React from "react";

const Contents = ({ obj, onRemove, onToggle }) => {
    return (
        <div>
            {obj.title}{obj.desc}{obj.key}
            <button onClick = {() => onRemove(obj.key)}>Remove</button>
            {obj.stat === false ? <button onClick = {() => onToggle(obj.key)}>Done</button> : <button onClick = {() => onToggle(obj.key)}>Cancel</button>}
        </div>
    );
}

export default Contents;
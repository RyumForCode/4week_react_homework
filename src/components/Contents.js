import React from "react";
import './Contents.css';

const Contents = ({ obj, onRemove, onToggle }) => {
    return (
        <div className = 'contents-box'>
            <p className = 'title'>{obj.title}</p>
            <p className = 'desc'>{obj.desc}</p>
            <div className = 'button-container'>
                <button className = 'removeButton' onClick = {() => onRemove(obj.key)}>Remove</button>
                {obj.stat === false ? <button className = 'statButton' onClick = {() => onToggle(obj.key)}>Done</button> : <button className = 'statButton' onClick = {() => onToggle(obj.key)}>Cancel</button>}
            </div>
        </div>
    );
}

export default Contents;
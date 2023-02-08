import React, { Children } from "react";
import Contents from "./Contents";
import './ContentsList.css'

const ContentsList = ({ obj, onRemove, onToggle, children }) => {
    return (
        <div className = 'list-container'>
            <h1 className = 'list-title'>Doing</h1>
            <div className = 'process-container'>
                {obj.filter(v => v.stat === false).map(v => <Contents obj = {v} key = {v.key} onRemove = {onRemove} onToggle = {onToggle}/>)}
            </div>
            <h1 className = 'list-title'>Done</h1>
            <div className = 'process-container'>
                {obj.filter(v => v.stat === true).map(v => <Contents obj = {v} key = {v.key} onRemove = {onRemove} onToggle = {onToggle}/>)}
            </div>
        </div>
    );
}

export default ContentsList;
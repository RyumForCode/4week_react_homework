import React from "react";
import Contents from "./Contents";

const ContentsList = ({ obj, onRemove, onToggle }) => {

    return (
        <div>
            <div>
                <h1>Doing</h1>
                {obj.filter(v => v.stat === false).map(v => <Contents obj = {v} key = {v.key} onRemove = {onRemove} onToggle = {onToggle}/>)}
            </div>
            <div>
                <h1>Done</h1>
                {obj.filter(v => v.stat === true).map(v => <Contents obj = {v} key = {v.key} onRemove = {onRemove} onToggle = {onToggle}/>)}
            </div>
        </div>
    );
}

export default ContentsList;
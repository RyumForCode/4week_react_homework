import React from "react";
import Contents from "./Contents";

const ContentsList = ({ obj, onRemove }) => {

    return (
        <div>
            <div>
                {obj.map(v => <Contents obj = {v} key = {v.key} onRemove = {onRemove}/>)}
            </div>
        </div>
    );
}

export default ContentsList;
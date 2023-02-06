import React from "react";

const Contents = ({ obj, onRemove }) => {
    return (
        <div>
            {obj.title}{obj.desc}{obj.key}
            <button onClick = {() => onRemove(obj.key)}>Remove</button>
        </div>
    );
}

export default Contents;
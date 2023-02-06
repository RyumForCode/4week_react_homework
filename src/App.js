import React, { useState } from "react";
import ContentsList from "./components/ContentsList";

const App = () => {

  // Object status control
  const [obj, setObj] = useState([
    {
      key : 0,
      stat : 0,
      title : 'This is the test title',
      desc : 'This is the test description',
    },
  ]);

  // Title input control
  const [title, setTitle] = useState('');
  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  // Description input control
  const [desc, setDesc] = useState('');
  const onDescChange = e => {
    setDesc(e.target.value);
  };

  // Submit input control
  const onSubmit = e => {
    const nextObj = {
      key : obj[obj.length - 1].key + 1,
      stat : 0,
      title,
      desc,
    };
    setObj(obj.concat(nextObj))

    e.preventDefault();
    setTitle('');
    setDesc('');
  }

  // Remove control
  const onRemove = e => {
    setObj(obj.filter(v => v.key !== e));
  }

  return (
    <div className = 'container'>
      <div>
        <form onSubmit = {onSubmit}>
          <label htmlFor = {title}>Title</label>
          <input value = {title} type = 'text' name = {title} onChange = {onTitleChange} required/>
          <label htmlFor = {desc}>Description</label>
          <input value = {desc} type = 'text' name = {desc} onChange = {onDescChange} required/>
          <input type = 'submit' value = 'Add'></input>
        </form>
      </div>
      <div>
        <ContentsList obj = {obj} onRemove = {onRemove}/>
      </div>
    </div>
  );
};

export default App;
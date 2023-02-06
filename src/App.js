import React, { useRef, useState } from "react";
import ContentsList from "./components/ContentsList";
import './App.css'

const App = () => {

  // Key counter
  const counter = useRef(1);

  // Focus
  const inputFocus = useRef();

  // Object status control
  const [obj, setObj] = useState([
    {
      key : 0,
      stat : false,
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
      // I can do with this below code line, but I wanted to use useRef hooks.
      // key : obj[obj.length - 1].key + 1,
      key : counter.current,
      stat : false,
      title,
      desc,
    };
    setObj(obj.concat(nextObj))

    // Prevent refresh, Reset all inputs
    e.preventDefault();
    setTitle('');
    setDesc('');
    counter.current += 1;
    inputFocus.current.focus();
    console.log(obj);
  }

  // Remove control
  const onRemove = e => {
    setObj(obj.filter(v => v.key !== e));
  }

  // Toggle control
  const onToggle = e => {
    setObj(obj.map(v => v.key === e ? {...v, stat : !v.stat} : v))
  }

  return (
    <div className = 'container'>
      <h1 className = 'topTitle'>My Todo List</h1>
      <div className = 'input-container'>
        <form onSubmit = {onSubmit} className = 'submit-form'>
          <label htmlFor = {title} className = 'label-line'>Title</label>
          <input value = {title} type = 'text' name = {title} onChange = {onTitleChange} ref = {inputFocus} className = 'input-box' placeholder = 'Please input your title.' required/>
          <label htmlFor = {desc} className = 'label-line'>Description</label>
          <input value = {desc} type = 'text' name = {desc} onChange = {onDescChange} className = 'input-box' placeholder = 'Please input your description.' required/>
          <input type = 'submit' value = 'Add' className = 'submit-button'></input>
        </form>
      </div>
      <div className = 'contentsList-box'>
        <ContentsList obj = {obj} onRemove = {onRemove} onToggle = {onToggle}/>
      </div>
    </div>
  );
};

export default App;
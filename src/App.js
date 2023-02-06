import { useState } from 'react';
import './App.css';
import Contents from './components/Contents';

function App() {

  // Title set up
  const [title, setTitle] = useState('');
  const onTitleInputChange = e => {
    setTitle(e.target.value);
  };

  // Description set up
  const [desc, setDesc] = useState('');
  const onDescInputChange = e => {
    setDesc(e.target.value);
  };

  // Object set up
  const [obj, setObj] = useState([{
    key : 1,
    stat : 0,
    title : 'This is the title',
    desc : 'This is the description'
  }]);

  // Submit set up
  const handleForm = e => {
    e.preventDefault();
    setTitle('');
    setDesc('');
  };

  // Remove set up
  const handleRemove = key => {
    setObj(obj.filter(v => v.key !== key));
  };

  // Stat set up
  const statControl = () => {
    obj.stat === 0 ? setObj(1) : setObj(0);
  };

  return (
    <div className = 'container'>
      <div className = 'insert'>
        <form onSubmit = {handleForm}>
          <label for = 'title'>Title</label>
          <input value = {title} type = 'text' name = 'title' onChange = {onTitleInputChange} required/>
          <label for = 'desc'>Description</label>
          <input value = {desc} type = 'text' name = 'dssc' onChange = {onDescInputChange} required/>
          <input type = 'submit' />
        </form>
      </div>
      <div>
        <div>
          {obj.map((v) => v.stat === 0 ? <Contents key = {v.key} obj = {v} onRemove = {handleRemove} statControl = {statControl}/> : '')}
        </div>
        <div>
          {obj.map((v) => v.stat === 1 ? <Contents key = {v.key} obj = {v} onRemove = {handleRemove} statControl = {statControl}/> : '')}
        </div>
      </div>
    </div>
  );
}

export default App;
import { useState } from 'react';
import Values from 'values.js';
import Form from './components/Form';
import List from './components/ColorList';

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
      setColor('');
    } catch (error) {
      setError(true);
      setColor('');
      console.log(error);
    }
  };

  const onChangeHandler = e => {
    setColor(e.target.value);
  };

  return (
    <>
      <Form
        onSubmit={submitHandler}
        value={color}
        onChange={onChangeHandler}
        className={`${error ? 'error' : null}`}
      />
      <List list={list} />
    </>
  );
};

export default App;

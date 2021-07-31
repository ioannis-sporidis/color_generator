import { useState } from 'react';
import Values from 'values.js';
import Form from './components/Form';

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (error) {
      setError(true);
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
    </>
  );
};

export default App;

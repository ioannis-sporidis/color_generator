import { useState } from 'react';
import Values from 'values.js';
import Form from './components/Form';

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    console.log('submitted');
  };

  const onChangeHandler = e => {
    setColor(e.target.value);
  };
  return (
    <>
      <Form onSubmit={submitHandler} value={color} onChange={onChangeHandler} />
    </>
  );
};

export default App;

const Form = ({ onSubmit, value, onChange }) => {
  return (
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='#fcf003'></input>
        <button className='btn' type='submit'>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;

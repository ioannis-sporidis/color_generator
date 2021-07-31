const Form = ({ onSubmit, value, onChange, className }) => {
  return (
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='#fcf003'
          className={className}></input>
        <button className='btn' type='submit'>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;

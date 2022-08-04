import './Form.css';

const Form = () => {
  return (
    <div className='container'>
      <div className='form-card'>
        <form>
          <div>
            <label>test</label>
            <input type='text' name='test' />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form;
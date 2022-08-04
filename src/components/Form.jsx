import './Form.css';

// Fields: Name, Email, Address, City, State, Zip

const Form = () => {
  return (
    <div className='container'>
      <div className='form-card'>
        <form className='form-col'>
          <div className='form-item'>
            <label>Full Name</label>
            <input type='text' name='fullName' />
          </div>
          <div className='form-item'>
            <label>Email</label>
            <input type='text' name='email' />
          </div>
          <div className='form-item'>
            <label>Address</label>
            <input type='text' name='address' />
          </div>
          <div className='form-item'>
            <label>City</label>
            <input type='text' name='city' />
          </div>
          <div className='form-item'>
            <label>State</label>
            <input type='text' name='state' />
          </div>
          <div className='form-item'>
            <label>Zip Code</label>
            <input type='text' name='zip' />
          </div>
          <button className='form-submit-btn' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form;
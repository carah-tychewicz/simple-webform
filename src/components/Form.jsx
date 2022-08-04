import './Form.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
// Fields: Name, Email, Address, City, State, Zip

const Form = () => {

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (event) {
      console.log(inputs);
      event.preventDefault();
      validate(inputs);
      navigate('/thank-you', {state: inputs});
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const validate = () => {
    let err = {};
    if (inputs.email) {
      console.log('test')
      const emailCond = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
      if (!inputs.email.match(emailCond)) {
        err.email = 'add valid email'
      }
    }
    
    err.email ? console.log(err.email + ' success') : console.log('failure');
  }

  return (
    <div className='container'>
      <div className='card'>
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <label>Full Name</label>
            <input type='text' name='fullName' onChange={handleInputChange} value={inputs.fullName ?? ''} required />
          </div>
          <div className='form-item'>
            <label>Email</label>
            <input type='text' name='email' onChange={handleInputChange} value={inputs.email ?? ''} required />
          </div>
          <div className='form-item'>
            <label>Address</label>
            <input type='text' name='address' onChange={handleInputChange} value={inputs.address ?? ''} />
          </div>
          <div className='form-item'>
            <label>City</label>
            <input type='text' name='city' onChange={handleInputChange} value={inputs.city ?? ''} />
          </div>
          <div className='form-item'>
            <label>State</label>
            <input type='text' name='state' onChange={handleInputChange} value={inputs.state ?? ''} />
          </div>
          <div className='form-item'>
            <label>Zip Code</label>
            <input type='text' name='zip' onChange={handleInputChange} value={inputs.zip ?? ''} />
          </div>
          <button className='form-submit-btn' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form;
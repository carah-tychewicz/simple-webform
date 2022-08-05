import './Form.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// Fields: Name, Email, Address, City, State, Zip

const Form = () => {

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      validate(inputs);
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const validate = (check) => {
    const emailCond =  "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    const zipCond = "^[0-9]{0,6}$";

    if (!check.email.match(emailCond)) {
      alert('please enter a valid email');
    } else if (!check.zip.match(zipCond)) {
      alert('please enter a valid zip code');
    } else {
      navigate('/thank-you', {state: inputs});
    };
  };

  return (
    <div className='container'>
      <div className='details-card'>
        <h1 className='instructions'>Enter Details Here</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <input type='text' placeholder='Full Name (required)' name='fullName' maxLength='50' onChange={handleInputChange} value={inputs.fullName ?? ''} required />
          </div>
          <div className='form-item'>
            <input type='text' placeholder='Email (required)' name='email' maxLength='50' onChange={handleInputChange} value={inputs.email ?? ''} required />
          </div>
          <div className='form-item'>
            <input type='text' placeholder='Address Line 1' name='addressLineOne' maxLength='50' onChange={handleInputChange} value={inputs.addressLineOne ?? ''} />
          </div>
          <div className='form-item'>
            <input type='text' placeholder='Address Line 2' name='addressLineTwo' maxLength='50' onChange={handleInputChange} value={inputs.addressLineTwo ?? ''} />
          </div>
          <div className='form-item'>
            <input type='text' placeholder='City' name='city' maxLength='50' onChange={handleInputChange} value={inputs.city ?? ''} />
          </div>
          <div className='form-item'>
            <input type='text' placeholder='State' name='state' maxLength="20" onChange={handleInputChange} value={inputs.state ?? ''} />
          </div>
          <div className='form-item'>
            <input type='text' name='zip' placeholder='Zip Code' maxLength='5' onChange={handleInputChange} value={inputs.zip ?? ''} />
          </div>
          <button className='form-submit-btn' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form;
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
      <div className='card'>
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <label>Full Name</label>
            <input type='text' name='fullName' maxLength='50' onChange={handleInputChange} value={inputs.fullName ?? ''} required />
          </div>
          <div className='form-item'>
            <label>Email</label>
            <input type='text' name='email' maxLength='50' onChange={handleInputChange} value={inputs.email ?? ''} required />
          </div>
          <div className='form-item'>
            <label>Address</label>
            <input type='text' name='addressLineOne' maxLength='50' onChange={handleInputChange} value={inputs.addressLineOne ?? ''} />
            <input type='text' name='addressLineTwo' maxLength='50' onChange={handleInputChange} value={inputs.addressLineTwo ?? ''} />
          </div>
          <div className='form-item'>
            <label>City</label>
            <input type='text' name='city' maxLength='50' onChange={handleInputChange} value={inputs.city ?? ''} />
          </div>
          <div className='form-item'>
            <label>State</label>
            <input type='text' name='state' maxLength="20" onChange={handleInputChange} value={inputs.state ?? ''} />
          </div>
          <div className='form-item'>
            <label>Zip Code</label>
            <input type='text' name='zip' maxLength='5' onChange={handleInputChange} value={inputs.zip ?? ''} />
          </div>
          <button className='form-submit-btn' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form;
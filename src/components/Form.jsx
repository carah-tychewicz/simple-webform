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

  const unitedStates = 
    [{
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}]

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
            {/* <select value={inputs.state} onChange={handleInputChange}>
            {
              Object.value(unitedStates)
            </select> */}
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
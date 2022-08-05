import './ThankYou.css';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {

  const location = useLocation();

  return (
    <div className='container'>
      <div className='thankyou-card'>
        <div className='submission-details'>
          <h1>Thank you, {location.state.fullName}!</h1>
          <h2>Your submission details:</h2>
          <div>
            <p>{location.state.fullName}</p>
            <p>{location.state.email}</p>
            <p>{location.state.addressLineOne}</p>
            <p>{location.state.addressLineTwo}</p>
            <p>{location.state.city}, {location.state.state} {location.state.zip}</p>
          </div>
        </div>
        <div className="return-home">
          <a href='/'><p>Return to form!</p></a>
        </div>
      </div>
    </div>
  )
};

export default ThankYou;
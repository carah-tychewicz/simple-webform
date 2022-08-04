import './ThankYou.css';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {

  const location = useLocation();

  return (
    <div>
      <p>{location.state.fullName}</p>
    </div>
  )
};

export default ThankYou;
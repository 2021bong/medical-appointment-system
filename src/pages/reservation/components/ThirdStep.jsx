import { Link } from 'react-router-dom';

const ThirdStep = ({ list, setStep }) => {
  return (
    <div>
      third step
      <Link to='/'>
        <button className='btn'>확인</button>
      </Link>
    </div>
  );
};

export default ThirdStep;

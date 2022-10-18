import { useState } from 'react';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';

const Reservation = ({ list, setList }) => {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <FirstStep list={list} setStep={setStep} />}
      {step === 2 && <SecondStep setList={setList} setStep={setStep} />}
      {step === 3 && <ThirdStep list={list} />}
    </>
  );
};

export default Reservation;

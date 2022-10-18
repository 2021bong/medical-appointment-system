import styled from 'styled-components';

const SecondStep = ({ list, setStep }) => {
  return (
    <Main>
      seconde step
      <div className='btnContainer'>
        <button className='btn' onClick={() => setStep(1)}>
          뒤로 가기
        </button>
        <button className='btn' onClick={() => setStep(3)}>
          예약 하기
        </button>
      </div>
    </Main>
  );
};

export default SecondStep;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  margin: 5rem auto 0 auto;
  border-radius: 35px;
  box-shadow: ${({ theme }) => theme.basicShadow};
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 10px 0 30px 0;
    height: inherit;
    border-radius: 0;
  }

  .btnContainer {
    &:first-child {
      margin-bottom: 10px;
    }
  }
`;

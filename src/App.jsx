import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineSmile } from 'react-icons/ai';

const App = () => {
  return (
    <Wrap>
      <div className='greetingContainer'>
        <AiOutlineSmile size='10rem' />
        <h2 className='greeting'>안녕하세요, 룰루 병원입니다.</h2>
      </div>
      <div className='btnContainer'>
        <Link to='reservation'>
          <button>진료 예약하기</button>
        </Link>
        <Link to='inquiry'>
          <button>예약 조회하기</button>
        </Link>
      </div>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
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
    height: 100vh;
    margin: 0;
    padding: 20px;
    border-radius: 0;
  }

  .greetingContainer {
    margin-bottom: 50px;
    text-align: center;

    svg {
      margin-bottom: 10px;
    }

    .greeting {
      font-size: 26px;
    }
  }

  .btnContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    a {
      display: block;
      width: 50%;
      min-width: 280px;
      height: 3rem;

      &:first-child {
        margin-bottom: 15px;
      }

      button {
        width: 100%;
        height: 100%;
        background-color: inherit;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        color: inherit;
        box-shadow: ${({ theme }) => theme.basicShadow};

        &:hover {
          background-color: ${({ theme }) => theme.red};
          color: #fff;
          box-shadow: ${({ theme }) => theme.basicShadow};
        }
        &:active {
          background-color: ${({ theme }) => theme.red};
          color: #fff;
          box-shadow: ${({ theme }) => theme.activeShadow};
        }
      }
    }
  }
`;

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
        <button>
          <Link>진료 예약하기</Link>
        </button>
        <button>
          <Link>예약 조회하기</Link>
        </button>
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

    button {
      width: 50%;
      height: 3rem;
      border: none;
      border-radius: 10px;
      font-size: 20px;
      color: inherit;
      box-shadow: ${({ theme }) => theme.basicShadow};

      &:first-child {
        margin-bottom: 15px;
      }

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

      a {
        color: inherit;
      }
    }
  }
`;

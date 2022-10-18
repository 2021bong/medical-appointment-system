import { Link } from 'react-router-dom';
import { RiCalendarCheckFill } from 'react-icons/ri';
import styled from 'styled-components';

const ThirdStep = ({ list }) => {
  return (
    <Main>
      <div className='titleContainer'>
        <RiCalendarCheckFill size='2rem' />
        <h2>예약이 완료 되었습니다.</h2>
      </div>
      <div className='alignContainer'>
        <div className='dataContainer'>
          <p className='data'>
            <b>예약번호 </b> 202210210900
          </p>
          <p className='data'>
            <b>이름 </b> 홍길동
          </p>
          <p className='data'>
            <b>연락처 </b> 010-1234-5678
          </p>
          <p className='data'>
            <b>예약 종류 </b> 일반진료
          </p>
        </div>
        <p className='information'>이름이나 예약번호로 조회하실 수 있습니다.</p>
      </div>
      <Link to='/'>
        <button className='btn'>확인</button>
      </Link>
    </Main>
  );
};

export default ThirdStep;

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

  .titleContainer {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 26px;
    color: ${({ theme }) => theme.text};

    svg {
      margin-right: 13px;
    }
    h2 {
      font-weight: 700;
    }
  }

  .alignContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: ${({ theme }) => theme.basicShadow};

    .dataContainer {
      .data {
        margin-bottom: 10px;

        b {
          display: inline-block;
          width: 70px;
          margin-right: 5px;
          border-right: 2px solid #ddd;
        }
      }
    }
  }

  .btn {
    width: 25%;
    min-width: 150px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    color: ${({ theme }) => theme.text};
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

  .information {
    margin-top: 10px;
    font-size: 14px;
    color: #888;
  }
`;

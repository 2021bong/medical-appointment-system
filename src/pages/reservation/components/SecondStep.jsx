import { RiCalendarCheckFill } from 'react-icons/ri';
import styled from 'styled-components';

const SecondStep = ({ list, setStep }) => {
  return (
    <Main>
      <div className='titleContainer'>
        <RiCalendarCheckFill size='2rem' />
        <h2>진료 예약</h2>
      </div>
      <div className='timeContainer'>
        <p>
          <b>예약 날짜 | </b>22년 10월 21일
        </p>
        <p>
          <b>예약 시간 |</b> 9:00
        </p>
      </div>
      <p className='information mb30'>* 선택하신 일정을 확인해주세요.</p>
      <form className='formContainer' onSubmit={(e) => e.preventDefault()}>
        <div className='alignContainer'>
          <label>이름</label>
          <input className='textInput' type='text' />
        </div>
        <div className='alignContainer'>
          <label>휴대폰 번호</label>
          <input className='textInput' type='text' />
        </div>
        <div className='alignContainer'>
          <label className='inputTitle'>예약 종류</label>
          <ul className='listContainer'>
            <li className='typeList'>
              <input type='radio' id='일반진료' name='type' defaultChecked />
              <label htmlFor='일반진료'>일반진료</label>
            </li>
            <li className='typeList'>
              <input type='radio' id='정기검진' name='type' />
              <label htmlFor='정기검진'>정기검진</label>
            </li>
            <li className='typeList'>
              <input type='radio' id='정밀검사' name='type' />
              <label htmlFor='정밀검사'>정밀검사</label>
            </li>
            <li className='typeList'>
              <input type='radio' id='기타' name='type' />
              <label htmlFor='기타'>기타</label>
            </li>
          </ul>
        </div>
        <div className='alignContainer'>
          <label htmlFor='비고' className='inputTitle'>
            비고
          </label>
          <p className='information'>* 전달사항이 있다면 적어주세요.</p>
          <input className='textInput' type='text' id='비고' />
        </div>
      </form>
      <div className='btnContainer'>
        <button onClick={() => setStep(1)}>뒤로 가기</button>
        <button className='recommend' onClick={() => setStep(3)}>
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

  .titleContainer {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;
    font-size: 26px;
    color: ${({ theme }) => theme.text};

    svg {
      margin-right: 13px;
    }
    h2 {
      font-weight: 700;
    }
  }

  .timeContainer {
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
    color: #fff;
    background-color: ${({ theme }) => theme.red};
    border: 1px solid ${({ theme }) => theme.red};

    p:first-child {
      margin-bottom: 10px;
    }
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .listContainer {
      display: flex;

      .typeList {
        margin-right: 10px;

        label {
          font-weight: 400;
          color: ${({ theme }) => theme.text};
        }
      }
    }

    .alignContainer {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;

      &:last-child {
        border-bottom: none;
      }

      label {
        font-weight: 700;

        &:first-child {
          width: 120px;
          margin-right: 10px;
        }
      }

      .textInput {
        width: 100%;
        padding: 5px;
        border: none;
        border-radius: 10px;
        outline: none;
      }

      &:nth-child(3),
      &:nth-child(4) {
        flex-direction: column;
        align-items: flex-start;
      }

      .inputTitle {
        margin-bottom: 10px;
      }

      .memo {
        width: 100%;
      }
    }
  }
  .information {
    margin-bottom: 10px;
    font-size: 14px;
    color: #888;
  }

  .btnContainer {
    width: 80%;
    display: flex;
    justify-content: center;

    button {
      width: 25%;
      min-width: 150px;
      height: 3rem;
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

      &:first-child {
        margin-right: 10px;
      }
    }

    .recommend {
      background-color: #ff6961bf;
      color: #fff;

      &:hover {
        color: #fff;
        background-color: ${({ theme }) => theme.red};
      }
      &:active {
        color: #fff;
        box-shadow: ${({ theme }) => theme.activeShadow};
      }
    }
  }

  .mb30 {
    margin-bottom: 30px;
  }
`;

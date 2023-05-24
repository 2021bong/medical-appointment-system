import React from 'react';
import styled from 'styled-components';

const NotAllowPopup = ({ type, setPopup }) => {
  return (
    <Background>
      <div className='popupContainer'>
        {type === 1 && (
          <>
            <p>이름과 생년월일, 전화번호를</p>
            <p>모두 입력해주세요.</p>
          </>
        )}
        {type === 2 && (
          <>
            <p>인터넷 예약이 불가한 환자입니다.</p>
            <p>병원으로 연락주시기 바랍니다.</p>
          </>
        )}
        <button onClick={() => setPopup(false)}>확인</button>
      </div>
    </Background>
  );
};

export default NotAllowPopup;

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;

  .popupContainer {
    width: 400px;
    height: 200px;
    padding-top: 50px;
    border-radius: 35px;
    color: ${({ theme }) => theme.text};
    background-color: #eee;
    font-size: 16px;
    text-align: center;
    box-shadow: ${({ theme }) => theme.popupShadow};

    p:nth-of-type(1) {
      margin-bottom: 10px;
    }

    button {
      width: 150px;
      height: 3rem;
      margin-top: 20px;
      background-color: inherit;
      border: none;
      border-radius: 10px;
      color: inherit;
      font-size: 16px;
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
  }
`;

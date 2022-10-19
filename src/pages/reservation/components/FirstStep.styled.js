import DatePicker from 'react-datepicker';
import styled from 'styled-components';

export const CustomDatePicker = styled(DatePicker)`
  margin-bottom: 20px;
  padding: 8px 2px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  text-align: center;
  outline: none;
  box-shadow: ${({ theme }) => theme.basicShadow};
  cursor: pointer;
`;

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  margin: 5rem auto 0 auto;
  border-radius: 35px;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.basicShadow};

  @media screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: inherit;
    margin: 0;
    padding: 10px 0 30px 0;
    border-radius: 0;

    .back {
      top: 0;
      left: 1%;
      svg {
        width: 2rem;
      }
    }

    .titleContainer {
      margin: 20px 0;
    }

    .date {
      display: inline-block;
      width: 100%;
      margin-bottom: 20px;
    }

    .name {
      display: inline-block;
      width: 100%;
      margin-bottom: 20px;
    }

    .timeBox {
      flex-direction: column;
    }
  }

  .back {
    position: absolute;
    top: 2%;
    left: 2%;
    border: none;
    color: ${({ theme }) => theme.text};

    &:active {
      color: ${({ theme }) => theme.red};
    }
  }

  .titleContainer {
    margin-bottom: 10px;
    text-align: center;
    font-size: 26px;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;

      svg {
        margin-right: 13px;
      }
      h2 {
        font-weight: 700;
      }
    }

    // react-date-picker 커스텀
    .react-datepicker {
      margin-left: -20px;
      margin-top: -20px;
      border-radius: 15px;
      box-shadow: ${({ theme }) => theme.basicShadow};
      overflow: hidden;

      .react-datepicker__header {
        border: none;
      }

      .react-datepicker__current-month {
        padding: 5px 0;
        color: ${({ theme }) => theme.text};
      }

      .react-datepicker__navigation-icon--previous,
      .react-datepicker__navigation--next {
        margin-top: 5px;
      }

      .react-datepicker__day-name {
        color: ${({ theme }) => theme.text};
      }

      .react-datepicker__day {
        color: ${({ theme }) => theme.text};

        &:hover {
          border-radius: 50%;
          background-color: #ff696180;
        }
      }

      .react-datepicker__day--disabled {
        color: #ccc;

        &:hover {
          background-color: #fff;
        }
      }

      .react-datepicker__day--selected {
        border-radius: 50%;
        background-color: ${({ theme }) => theme.red};
        color: #fff;
      }
    }
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    font-size: 20px;

    .timeContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 15px;

      p {
        font-weight: 500;
      }

      &:first-child {
        margin-bottom: 20px;
        border-bottom: 1px solid #bbb;
      }

      .timeBox {
        display: flex;

        .radioBox {
          margin: 20px 10px;
        }
      }
    }
  }

  .btn {
    width: 25%;
    min-width: 280px;
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
  }
`;

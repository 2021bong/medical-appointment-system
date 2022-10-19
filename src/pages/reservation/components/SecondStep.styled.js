import styled from 'styled-components';

export const Main = styled.div`
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

      .phoneNumberBox {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }

      &:nth-child(2),
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

  .mb0 {
    margin-bottom: 0;
  }

  .mb30 {
    margin-bottom: 30px;
  }
`;

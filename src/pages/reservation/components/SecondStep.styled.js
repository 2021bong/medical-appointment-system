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
  }

  .titleContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
      color: ${({ theme }) => theme.text};
      font-size: 26px;
      text-align: center;

      svg {
        margin-right: 13px;
      }
      h2 {
        font-weight: 700;
      }
    }

    .timeContainer {
      margin-bottom: 15px;
      padding: 15px;
      background-color: ${({ theme }) => theme.red};
      border: 1px solid ${({ theme }) => theme.red};
      border-radius: 10px;
      color: #fff;

      p > span {
        font-weight: 700;
      }

      p:first-child {
        margin-bottom: 10px;
      }
    }

    .information {
      margin-bottom: 10px;
      color: #888;
      font-size: 14px;
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
          color: ${({ theme }) => theme.text};
        }
      }
    }

    .flexColumn {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;

      &:last-of-type {
        border-bottom: none;
        margin-bottom: 0px;
        padding-bottom: 0px;
      }

      .flexRow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
    }
  }

  .boldLabel {
    font-weight: 700;

    &:first-child {
      min-width: 85px;
      margin-right: 10px;
    }
  }

  .note {
    transform: translateY(-10px);
  }

  .textInput {
    width: 100%;
    min-width: 260px;
    padding: 5px 5px 5px 8px;
    border: none;
    border-radius: 10px;
    outline: none;
  }

  .flexStart {
    display: flex;
    flex-direction: column;
    width: 100%;

    .information {
      position: relative;
      margin-top: 10px;
      color: #888;
      font-size: 14px;
    }
  }

  .btnContainer {
    display: flex;
    justify-content: center;
    width: 80%;

    button {
      width: 25%;
      min-width: 150px;
      height: 3rem;
      background-color: inherit;
      border: none;
      border-radius: 10px;
      color: inherit;
      font-size: 20px;
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
        background-color: ${({ theme }) => theme.red};
        color: #fff;
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
`;

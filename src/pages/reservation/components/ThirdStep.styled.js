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

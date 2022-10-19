import styled from 'styled-components';

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
    height: 100%;
    margin: 0;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    font-size: 26px;
    text-align: center;

    svg {
      margin-right: 13px;
    }

    h2 {
      font-weight: 700;
    }
  }

  .searchContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    min-width: 280px;
    margin-bottom: 50px;
    padding: 2rem;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 500;
    box-shadow: ${({ theme }) => theme.basicShadow};

    .searchBox {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      li {
        width: 100%;
        text-align: center;
        cursor: pointer;

        &:first-child {
          border-right: 2px solid #ccc;
        }

        &:active {
          color: ${({ theme }) => theme.red};
        }
      }
    }

    .select {
      color: ${({ theme }) => theme.red};
      font-weight: 700;
    }

    .formContainer {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        min-width: 80px;
        height: inherit;
        padding: 10px;
        border: none;
        border-radius: 0 5px 5px 0;
        font-weight: 500;
        box-shadow: ${({ theme }) => theme.basicShadow};

        &:active {
          box-shadow: ${({ theme }) => theme.activeShadow};
        }
      }

      .searchInput {
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        border: none;
        border-radius: 5px 0 0 5px;
        outline: none;
      }
    }
  }

  .listContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    min-width: 280px;
    height: 50%;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.bg};
    border-radius: 15px;
    overflow: scroll;
    box-shadow: ${({ theme }) => theme.activeShadow};

    .noResult {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: inherit;
      margin-top: 12%;

      svg {
        margin-bottom: 30px;
      }

      p {
        margin-bottom: 10px;
      }
    }

    .boderBottomBox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      padding: 30px 0;
      border-bottom: 1px solid #ccc;

      svg {
        margin-right: 15px;
      }

      &:last-child {
        margin-bottom: 0;
        border-bottom: none;
      }

      .infoBox {
        div {
          margin-bottom: 20px;

          &:last-child {
            margin-bottom: 0;
          }

          .idNumber {
            display: inline-block;
            margin-right: 20px;
          }

          .date {
            margin-right: 20px;
          }

          .name {
            display: inline-block;
            margin-right: 20px;
          }
        }
      }
    }
  }
`;

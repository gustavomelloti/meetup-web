import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto 0px;
  padding-bottom: 50px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input[type='file'] {
      display: none;
    }

    img {
      margin: 0 0 10px;
      border-radius: 4px;
      cursor: pointer;
    }

    input,
    textarea {
      font-size: 16px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      padding-top: 15px;
      height: 200px;
      resize: none;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 10px 0 20px;
    }

    span {
      color: #f94d6a;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin: 5px 0 0;
    height: 42px;
    width: 162px;
    background: #f94d6a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }

    i {
      margin-right: 10px;
      font-size: 20px;
    }
  }
`;

export const InputFile = styled.div`
  cursor: pointer;
  border-radius: 4px;
  height: 300px;
  width: 940px;
  margin: 0 0 10px;
  background: ${darken(0.03, '#22202c')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.3);
  font-weight: bold;
  i {
    font-size: 50px;
  }
  p {
    padding-top: 10px;
    font-size: 20px;
  }
`;

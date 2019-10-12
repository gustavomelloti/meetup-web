import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 40px;
`;

export const Content = styled.div`
  height: 94px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  div {
    font-size: 14px;
    text-align: right;
    margin-right: 30px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 5px;
      color: #999;
    }
  }
  button {
    height: 42px;
    width: 70px;
    background: #f94d6a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }
  }
`;

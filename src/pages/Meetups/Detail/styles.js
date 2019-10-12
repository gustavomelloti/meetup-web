import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto 0px;
  padding-bottom: 50px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
  }

  button {
    height: 42px;
    width: 116px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    i {
      margin-right: 10px;
      font-size: 16px;
    }
  }
`;

export const ButtonEdit = styled.button`
  background: #4dbaf9;
  margin-right: 20px;
  &:hover {
    background: ${darken(0.03, '#4dbaf9')};
  }
`;

export const ButtonCancel = styled.button`
  background: #d44059;
  &:hover {
    background: ${darken(0.03, '#f94d6a')};
  }
`;

export const MeetupBanner = styled.div`
  margin: 50px 0px 30px;
  img {
    height: 300px;
    width: 940px;
  }
`;

export const MeetupDescription = styled.div`
  color: #fff;
  font-size: 18px;
`;

export const Actions = styled.div`
  display: flex;
`;

export const MeetupInfo = styled.div`
  display: flex;
  margin-top: 30px;

  i {
    padding-right: 15px;
    color: #999;
    font-size: 16px;
  }

  div {
    padding-right: 40px;
  }

  span {
    font-size: 16px;
    color: #999;
  }
`;

import styled from 'styled-components';
import { darken, lighten } from 'polished';

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

export const MeetupBox = styled.div`
  margin-top: 100px;
`;

export const Meetup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  background: ${darken(0.1, '#402845')};
  margin-top: 10px;
  border-radius: 5px;
  padding: 0px 20px;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: ${lighten(0.02, '#402845')};
  }

  div {
    display: flex;

    i {
      color: #fff;
    }
  }
`;

export const MeetupName = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const MeetupDate = styled.div`
  color: #999;
  font-size: 16px;
  padding-right: 20px;
`;

export const WithoutResults = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

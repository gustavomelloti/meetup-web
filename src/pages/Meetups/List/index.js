import React from 'react';

import { Link } from 'react-router-dom';

import {
  Container,
  Title,
  MeetupBox,
  Meetup,
  MeetupName,
  MeetupDate,
} from './styles';

export default function List() {
  return (
    <Container>
      <Title>
        <span>Meus meetups</span>
        <Link to="/meetups/register">
          <button type="button">
            <i className="fa fa-plus-circle" />
            Novo meetup
          </button>
        </Link>
      </Title>
      <MeetupBox>
        <Meetup>
          <div>
            <MeetupName>Meetup de React Native</MeetupName>
          </div>
          <div>
            <MeetupDate>23 de junho, as 20h</MeetupDate>
            <i className="fa fas fa-chevron-right" />
          </div>
        </Meetup>
        <Meetup>
          <div>
            <MeetupName>Meetup de React Native</MeetupName>
          </div>
          <div>
            <MeetupDate>23 de junho, as 20h</MeetupDate>
            <i className="fa fas fa-chevron-right" />
          </div>
        </Meetup>
        <Meetup>
          <div>
            <MeetupName>Node JS</MeetupName>
          </div>
          <div>
            <MeetupDate>23 de junho, as 20h</MeetupDate>
            <i className="fa fas fa-chevron-right" />
          </div>
        </Meetup>
      </MeetupBox>
    </Container>
  );
}

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

import {
  listMeetupsRequest,
  redirectToMeetupDetail,
} from '../../../store/modules/meetup/actions';

import {
  Container,
  Title,
  MeetupBox,
  Meetup,
  MeetupName,
  MeetupDate,
  WithoutResults,
} from './styles';

export default function List() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    dispatch(listMeetupsRequest());
  }, [dispatch]);

  function redirectToDetail(meetup) {
    dispatch(redirectToMeetupDetail(meetup));
  }

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
        {meetups.map(m => (
          <Meetup key={m.id} onClick={() => redirectToDetail(m)}>
            <div>
              <MeetupName>{m.title}</MeetupName>
            </div>
            <div>
              <MeetupDate>
                {format(parseISO(m.date), "dd 'de' MMMM', às ' HH:mm'h'", {
                  locale: pt,
                })}
              </MeetupDate>
              <i className="fa fas fa-chevron-right" />
            </div>
          </Meetup>
        ))}
        {meetups.length <= 0 && (
          <WithoutResults>Nenhum meetup encontrado </WithoutResults>
        )}
      </MeetupBox>
    </Container>
  );
}

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

import {
  cancelMeetupRequest,
  redirectToUpdate,
} from '../../../store/modules/meetup/actions';

import history from '../../../services/history';

import {
  Container,
  Title,
  ButtonEdit,
  ButtonCancel,
  MeetupBanner,
  MeetupDescription,
  Actions,
  MeetupInfo,
} from './styles';

export default function Detail() {
  const dispatch = useDispatch();
  const detail = useSelector(state => state.meetup.detail);

  useEffect(() => {
    if (!detail.id) history.push('/meetups');
  }, [detail, dispatch]);

  function handleCancel() {
    dispatch(cancelMeetupRequest(detail));
  }

  function handleUpdate() {
    dispatch(redirectToUpdate(detail));
  }

  return (
    <Container>
      <Title>
        <span>{detail.title}</span>
        <Actions>
          <ButtonEdit onClick={handleUpdate}>
            <i className="fa fa-pencil" />
            Editar
          </ButtonEdit>
          <ButtonCancel onClick={handleCancel}>
            <i className="fa fa-trash" />
            Cancelar
          </ButtonCancel>
        </Actions>
      </Title>
      <MeetupBanner>
        <img src={detail.banner.url} alt="banner" />
      </MeetupBanner>
      <MeetupDescription>{detail.description}</MeetupDescription>
      <MeetupInfo>
        <div>
          <i className="fa fa-calendar" />
          {detail.date && (
            <span>
              {format(parseISO(detail.date), "dd 'de' MMMM', às ' HH:mm'h'", {
                locale: pt,
              })}
            </span>
          )}
        </div>
        <div>
          <i className="fa fa-map-marker" />
          <span>{detail.location}</span>
        </div>
      </MeetupInfo>
    </Container>
  );
}

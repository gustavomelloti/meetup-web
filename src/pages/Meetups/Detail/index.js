import React from 'react';
import { useSelector } from 'react-redux';

import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

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
  const detail = useSelector(state => state.meetup.detail);
  return (
    <Container>
      <Title>
        <span>{detail.title}</span>
        <Actions>
          <ButtonEdit>
            <i className="fa fa-pencil" />
            Editar
          </ButtonEdit>
          <ButtonCancel>
            <i className="fa fa-trash" />
            Cancelar
          </ButtonCancel>
        </Actions>
      </Title>
      <MeetupBanner>
        <img src={detail.File.url} alt="banner" />
      </MeetupBanner>
      <MeetupDescription>{detail.description}</MeetupDescription>
      <MeetupInfo>
        <div>
          <i className="fa fa-calendar" />
          <span>
            {format(parseISO(detail.date), "dd 'de' MMMM', às ' HH:mm'h'", {
              locale: pt,
            })}
          </span>
        </div>
        <div>
          <i className="fa fa-map-marker" />
          <span>{detail.location}</span>
        </div>
      </MeetupInfo>
    </Container>
  );
}

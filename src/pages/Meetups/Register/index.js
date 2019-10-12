import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import * as Yup from 'yup';

import ReactDatePicker from 'react-datepicker';
import { pt } from 'date-fns/locale';

import { registerMeetupRequest } from '../../../store/modules/meetup/actions';

import { Container, ButtonBox } from './styles';

export default function Register() {
  const [selected, setSelected] = useState('');

  const schema = Yup.object().shape({
    title: Yup.string().required('O título é obrigatório'),
    description: Yup.string().required('A descrição é obrigatória'),
    location: Yup.string().required('A localização é obrigatória'),
  });

  const dispatch = useDispatch();
  const loading = useSelector(state => state.meetup.loadgin);

  function handleSubmit(data) {
    dispatch(registerMeetupRequest({ ...data, date: selected }));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Textarea name="description" placeholder="Descrição completa" />
        <ReactDatePicker
          name="date"
          selected={selected}
          onChange={date => setSelected(date)}
          placeholderText="Data do Meetup"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="Pp"
          locale={pt}
          timeCaption="Hora"
        />
        <Input name="location" placeholder="Localização" />
        <ButtonBox>
          <button type="submit">
            {loading ? (
              <>Salvando...</>
            ) : (
              <>
                <i className="fa fa-plus-circle" />
                Salvar meetup
              </>
            )}
          </button>
        </ButtonBox>
      </Form>
    </Container>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea, useField } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import ReactDatePicker from 'react-datepicker';
import { pt } from 'date-fns/locale';

import api from '../../../services/api';

import { registerMeetupRequest } from '../../../store/modules/meetup/actions';

import { Container, ButtonBox, InputFile } from './styles';

export default function Register() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.meetup.loadgin);

  const { registerField } = useField('banner_id');

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const refFile = useRef();

  useEffect(() => {
    if (refFile.current) {
      registerField({
        name: 'banner_id',
        ref: refFile.current,
        path: 'dataset.file',
      });
    }
  }, [refFile, registerField]);

  const { registerField: registerDate } = useField('date');

  const [selected, setSelected] = useState();

  const refDate = useRef();

  useEffect(() => {
    if (refDate.current) {
      registerDate({
        name: 'date',
        ref: refDate.current,
        path: 'props.selected',
      });
    }
  }, [refDate, registerDate]);

  function handleSubmit(data) {
    // TODO: Verificar o motivo de não estar dando bind nos campos
    dispatch(
      registerMeetupRequest({ ...data, date: selected, banner_id: file })
    );
  }

  async function handleBannerChange(event) {
    try {
      const data = new FormData();
      data.append('file', event.target.files[0]);

      const response = await api.post('files', data);
      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    } catch (err) {
      toast.error('Erro ao realizar upload do banner.');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="banner">
          {preview ? (
            <img src={preview} alt="banner" height="300" width="940" />
          ) : (
            <InputFile>
              <i className="fa fas fa-camera" />
              <p>Selecionar imagem</p>
            </InputFile>
          )}
          <input
            type="file"
            id="banner"
            accept="image/*"
            onChange={handleBannerChange}
            name="banner_id"
            data-file={file}
            ref={refFile}
          />
        </label>
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
          ref={refDate}
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

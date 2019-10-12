import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Link to="/meetups">
          <nav>
            <img src="../logo-header.svg" alt="logo" />
          </nav>
        </Link>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil </Link>
            </div>
            <button type="button" onClick={handleLogout}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

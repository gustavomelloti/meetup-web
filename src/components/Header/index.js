import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src="./logo-header.svg" alt="logo" />
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Gustavo Mello</strong>
              <Link to="/profile">Meu perfil </Link>
            </div>
            <button type="button">Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

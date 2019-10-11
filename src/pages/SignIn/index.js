import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <>
      <img src="./logo.svg" alt="logo" />
      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta grátis</Link>
      </form>
    </>
  );
}

import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';

import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper
      className={`${
        children.props.horizontalBackground ? 'horizontal' : 'vertical'
      }`}
    >
      <Header horizontal={children.props.horizontalBackground} />
      {children}
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
  }
  *:focus {
    outline: 0;
  }

  html,body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Helvetica', 'Arial', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .transparent {
    background: linear-gradient(to right, ${darken(
      0.08,
      '#22202c'
    )}  50%, ${darken(0.08, '#402845')} 50%);
  }

  .black {
    background: #000;
  }

  .vertical {
    background: linear-gradient(-180deg, #22202c, #402845);
  }

  .horizontal {
    background: linear-gradient(to right, #22202c 50%, #402845 50%);
  }

  .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: #f94d6a !important;
  }

  .react-datepicker__input-container {
    input {
      width: 100%;
    }
  }
`;

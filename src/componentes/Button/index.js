import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    background-color: #7e8fca;
    &:hover,
    &:focus {
      box-shadow: 0px 0px 15px #7e8fca;
     
  }
`;


export default Button;

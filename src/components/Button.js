import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-fa';

const Button = styled.button`
  margin-top: 34px;
  width: 78px;
  height: 78px;
  background: #FF5636;
  border-radius: 50%;
  border: none;
  color: white;
  box-shadow: 0 10px 20px 4px rgba(0, 0, 0, 0.18);
  text-shadow: 0 10px 11px rgba(0, 0, 0, 0.21);
  font-size: 3.8rem;
  outline: 0;

  transition: transform 0.2s ease-in-out, box-shadow 0.2s;

  &:hover {
    box-shadow: 0 18px 25px 5px rgba(0, 0, 0, 0.21);
  }

  &:active {
    transform: translateY(5px);
  }
`;

const IconButton = (props) => {
  return(
    <Button {...props}>
      <Icon name='pencil'/>
    </Button>
  );
};

export default IconButton;

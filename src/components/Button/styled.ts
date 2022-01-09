import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button`
  outline: none;
  border: 0;
  width: 195px;
  height: 48px;
  border-radius: 20px;
  background: var(--purple);
  color: var(--gray-50);
  font-size: 16px;
  font-weight: 600;
  line-height: 19.36px;

  &:hover {
    background: ${darken("0.04", "rgb(172, 109, 222)")};
    transition: background-color 0.2s ease-in;
  }
`;

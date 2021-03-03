import styled, { css } from "styled-components";

// call to action button

const primaryCss = css`
  background: black;
  color: white;
  &:hover {
    background: #333;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 2rem;
  border: 1px solid;
  background: none;

  &:hover {
    color: white;
    background: #333;
  }

  ${(props) => props.primary && primaryCss}

  & + & {
    margin-left: 10px;
  }
`;

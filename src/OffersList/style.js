import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: var(--row-gap);
  padding: calc(var(--row-gap) * 1.5) var(--outer-margin);
  width: 100%;
`;

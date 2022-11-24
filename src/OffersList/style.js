import styled from "styled-components";
import { device } from "../App/style";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: var(--row-gap);
  padding: calc(var(--row-gap) * 1.5) var(--outer-margin);
  width: 100%;

  @media ${device.mobileM} {
    padding-left: calc(var(--outer-margin) * 1.5);
    padding-right: calc(var(--outer-margin) * 1.5);
  }

  @media ${device.desktopS} {
    padding-left: var(--outer-margin);
    padding-right: var(--outer-margin);
  }

  @media ${device.desktopM} {
    width: 1200px;
    padding-left: 0;
    padding-right: 0;
    margin: 0 auto;
  }
`;

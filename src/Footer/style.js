import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: var(--bg);
  text-align: center;
  color: var(--secondary-txt);

  a {
    color: var(--titles);
  }
`;

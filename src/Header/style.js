import styled from "styled-components";
import { ReactComponent as headerBgMobile } from "../images/bg-header-mobile.svg";
import { ReactComponent as headerBgDesktop } from "../images/bg-header-desktop.svg";

const BgImg = window.innerWidth < 1024 ? headerBgMobile : headerBgDesktop;

export const StyledBg = styled(BgImg)`
  width: 100%;
`;
export const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--primary-txt);
`;

import { ReactComponent as headerBgMobile } from "../images/bg-header-mobile.svg";
import { ReactComponent as headerBgDesktop } from "../images/bg-header-desktop.svg";
import { StyledHeader } from "./style";

const Header = () => {
  const Bg = window.innerWidth <= 1024 ? headerBgMobile : headerBgDesktop;
  return (
    <StyledHeader>
      <Bg />
    </StyledHeader>
  );
};

export default Header;

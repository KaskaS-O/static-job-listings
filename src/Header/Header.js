import { StyledBg, StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <h1 className="visually-hidden">Static Job Listing</h1>
      <StyledBg />
    </StyledHeader>
  );
};

export default Header;

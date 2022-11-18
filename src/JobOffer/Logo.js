import { StyledLogoContainer } from "./style";

const Logo = (props) => {
  return (
    <StyledLogoContainer>
      <img src={props.logo} alt="Company logo" />
    </StyledLogoContainer>
  );
};

export default Logo;

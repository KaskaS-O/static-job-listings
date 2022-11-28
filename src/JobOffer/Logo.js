import { StyledLogoContainer } from "./style";

const Logo = (props) => {
  return (
    <StyledLogoContainer>
      <img src={props.logo} alt={props.company} />
    </StyledLogoContainer>
  );
};

export default Logo;

import {
  dotIcon,
  StyledCompanyName,
  StyledDetail,
  StyledDetailsContainer,
  StyledFeatured,
  StyledInfo,
  StyledNew,
  StyledPosition,
} from "./style";

const Info = (props) => {
  const { company, featured, position, postedAt, contract, location } = props;

  return (
    <StyledInfo>
      <StyledCompanyName>{company}</StyledCompanyName>
      {props.new ? <StyledNew>New!</StyledNew> : null}
      {featured ? <StyledFeatured>Featured</StyledFeatured> : null}
      <StyledPosition>{position}</StyledPosition>

      <StyledDetailsContainer>
        <StyledDetail>{postedAt}</StyledDetail>
        <span aria-hidden="true" focusable="false">
          {dotIcon}
        </span>
        <StyledDetail>{contract}</StyledDetail>
        <span aria-hidden="true" focusable="false">
          {dotIcon}
        </span>
        <StyledDetail>{location}</StyledDetail>
      </StyledDetailsContainer>
    </StyledInfo>
  );
};

export default Info;

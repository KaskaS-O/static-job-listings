import Logo from "./Logo";
import Info from "./Info";
import Categories from "./Categories";
import { StyledBar, StyledBorder, StyledElement } from "./style";

const JobOffer = (props) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    handleFilter,
  } = props;

  return (
    <StyledElement>
      <StyledBar />
      <Logo logo={logo} />
      <Info
        company={company}
        new={props.new}
        featured={featured}
        position={position}
        postedAt={postedAt}
        contract={contract}
        location={location}
      />
      <StyledBorder />
      <Categories
        role={role}
        level={level}
        languages={languages}
        tools={tools}
        handleFilter={handleFilter}
      />
    </StyledElement>
  );
};

export default JobOffer;

import Logo from "./Logo";
import Info from "./Info";
import Categories from "./Categories";
import { StyledElement } from "./style";

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
    <StyledElement featured={featured}>
      <Logo logo={logo} company={company} />
      <Info
        company={company}
        new={props.new}
        featured={featured}
        position={position}
        postedAt={postedAt}
        contract={contract}
        location={location}
      />
      <Categories
        role={role}
        level={level}
        languages={languages}
        tools={tools}
        handleFilter={handleFilter}
        isMobile={window.innerWidth < 1200 ? true : false}
      />
    </StyledElement>
  );
};

export default JobOffer;

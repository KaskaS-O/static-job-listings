import Logo from "./Logo";
import Info from "./Info";
import Categories from "./Categories";

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
  } = props;
  return (
    <div>
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
      <Categories
        role={role}
        level={level}
        languages={languages}
        tools={tools}
      />
    </div>
  );
};

export default JobOffer;

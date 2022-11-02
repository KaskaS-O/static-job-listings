import JobOffer from "../JobOffer/JobOffer";
import { StyledList } from "./style";

const OffersList = (props) => {
  let offers = [];

  if (!props.data) {
    return;
  } else {
    offers = props.data.map((offer) => (
      <JobOffer
        key={offer.id}
        id={offer.id}
        company={offer.company}
        logo={offer.logo}
        new={offer.new}
        featured={offer.featured}
        position={offer.position}
        role={offer.role}
        level={offer.level}
        postedAt={offer.postedAt}
        contract={offer.contract}
        location={offer.location}
        languages={offer.languages}
        tools={offer.tools}
      />
    ));
  }

  return <StyledList>{offers}</StyledList>;
};

export default OffersList;

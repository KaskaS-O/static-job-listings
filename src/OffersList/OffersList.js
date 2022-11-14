import JobOffer from "../JobOffer/JobOffer";
import { StyledList } from "./style";

const OffersList = (props) => {
  let offers = [];
  let offersToVerify = [];
  let activeOffers = [];

  if (!props.data) {
    return;
  } else {
    offersToVerify = props.data.map((offer) => {
      offer.offerFilters = [
        offer.role,
        offer.level,
        ...offer.languages,
        ...offer.tools,
      ].map((filter) => filter.toLowerCase());
      return offer;
    });

    activeOffers = offersToVerify.filter((offer) =>
      props.activeFilters.every((item) => offer.offerFilters.includes(item))
    );

    offers = activeOffers.map((offer) => (
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
        handleFilter={props.handleFilter}
      />
    ));
  }

  return <StyledList>{offers}</StyledList>;
};

export default OffersList;

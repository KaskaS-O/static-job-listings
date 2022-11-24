import { StyledFilter, StyledFiltersContainer } from "./style";

const Categories = (props) => {
  const { role, level, languages, tools, handleFilter } = props;

  const filters = [role, level]
    .concat(languages)
    .concat(tools)
    .map((filter, index) => (
      <StyledFilter shouldHover key={index} onClick={handleFilter}>
        {filter}
      </StyledFilter>
    ));

  return <StyledFiltersContainer>{filters}</StyledFiltersContainer>;
};

export default Categories;

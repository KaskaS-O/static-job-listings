import { StyledFilterBtn, StyledFiltersContainer } from "./style";

const Categories = (props) => {
  const { role, level, languages, tools, handleFilter, isMobile } = props;

  const filters = [role, level]
    .concat(languages)
    .concat(tools)
    .map((filter, index) => (
      <li>
        <StyledFilterBtn shouldHover key={index} onClick={handleFilter}>
          {filter}
        </StyledFilterBtn>
      </li>
    ));

  return (
    <StyledFiltersContainer isMobile={isMobile} role="filters list">
      {filters}
    </StyledFiltersContainer>
  );
};

export default Categories;

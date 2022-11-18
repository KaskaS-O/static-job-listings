import RemoveIcon from "../images/icon-remove.svg";
import {
  StyledActiveFilter,
  StyledClearBtn,
  StyledElement,
  StyledFilterList,
  StyledFilterPanel,
  StyledRemoveBtn,
} from "./style";

const FilterPanel = (props) => {
  const filters = props.filters.map((filter, index) => (
    <StyledElement key={index}>
      <StyledActiveFilter>{filter}</StyledActiveFilter>
      <StyledRemoveBtn onClick={props.handleRemove} data-id={filter}>
        <img src={RemoveIcon} alt="remove" />
      </StyledRemoveBtn>
    </StyledElement>
  ));

  return (
    <StyledFilterPanel>
      <StyledFilterList>{filters}</StyledFilterList>
      <StyledClearBtn onClick={props.handleClear}>Clear</StyledClearBtn>
    </StyledFilterPanel>
  );
};

export default FilterPanel;

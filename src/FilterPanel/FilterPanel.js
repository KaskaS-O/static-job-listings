import RemoveIcon from "../images/icon-remove.svg";

const FilterPanel = (props) => {
  const filters = props.filters.map((filter, index) => (
    <li key={index}>
      <span>{filter}</span>
      <span onClick={props.handleRemove} data-id={filter}>
        <img src={RemoveIcon} alt="remove" />
      </span>
    </li>
  ));

  return (
    <div>
      <ul>{filters}</ul>
      <button onClick={props.handleClear}>Clear</button>
    </div>
  );
};

export default FilterPanel;

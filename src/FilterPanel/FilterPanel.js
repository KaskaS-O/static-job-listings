import RemoveIcon from "../images/icon-remove.svg";

const FilterPanel = (props) => {
  const filters = props.filters.map((filter, index) => (
    <li key={index}>
      <span>{filter}</span>
      <button onClick={props.handleRemove} data-id={filter}>
        <img src={RemoveIcon} alt="remove" />
      </button>
    </li>
  ));

  return (
    <div>
      <ul>{filters}</ul>
      <button>Clear</button>
    </div>
  );
};

export default FilterPanel;

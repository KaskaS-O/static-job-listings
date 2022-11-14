const Categories = (props) => {
  const { role, level, languages, tools, handleFilter } = props;

  const filters = [role, level]
    .concat(languages)
    .concat(tools)
    .map((filter, index) => (
      <span key={index} onClick={handleFilter}>
        {filter}
      </span>
    ));
  // const { role, level } = props;
  // const languages = props.languages.map((lang) => <button>{lang}</button>);
  // const tools = props.tools.map((tool) => <button>{tool}</button>);

  return (
    <div>
      {/* <button>{role}</button>
      <button>{level}</button>
      {languages}
      {tools} */}
      {filters}
    </div>
  );
};

export default Categories;

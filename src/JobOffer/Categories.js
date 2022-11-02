const Categories = (props) => {
  const { role, level, languages, tools } = props;
  languages.map((lang) => <span>{lang}</span>);

  tools.map((tool) => <span>{tool}</span>);
  return (
    <div>
      <span>{role}</span>
      <span>{level}</span>
      {languages}
      {tools}
    </div>
  );
};

export default Categories;

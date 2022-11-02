const Info = (props) => {
  const { company, featured, position, postedAt, contract, location } = props;
  return (
    <div>
      <h3>{company}</h3>
      <h2>{position}</h2>
      <span>{props.new}</span>
      <span>{featured}</span>
      <div>
        <span>{postedAt}</span>
        <span>{contract}</span>
        <span>{location}</span>
      </div>
    </div>
  );
};

export default Info;

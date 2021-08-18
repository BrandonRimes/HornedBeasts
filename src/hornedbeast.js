import { useState } from 'react';
// import Button from 'react-bootstrap/Button';

function HornedBeast(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="beast" onClick={handleClick}>
      <h2>{props.title}</h2>
      <img title={props.title} src={props.image_url} alt={props.keyword} ></img>
      <p>{props.description}</p>
      <div className="heart"><div className="count">{count}</div></div>
    </div>
  );
}

export default HornedBeast;

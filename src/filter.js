// import { useState } from 'react';

import Form from 'react-bootstrap/Form';

import beasts from './data/beasts.json';

function Filter(props) {
  // const [numHorn, setNumHorn] = useState(0);

  // const handleChange = (e) => {
  //   setNumHorn(e.target.value);
  // };

  const hornsArr = (props) => {
    let horns = [];
    beasts.forEach(beast => {
      if (!(horns.includes(beast.horns))) {
        horns.push(beast.horns);
      }
    });
    return horns.sort((a,b) => a > b);
  };

  const options = (props) => {
    return (
      hornsArr().map(num => <option value={num} key={num}>{num}</option>)
    );
  };

  return (
    <Form id="filter">
      <Form.Select
        className="select"
        onChange={props.handleChange}
        aria-label="Default select example"
      >
        <option value="">All</option>
        {options()}
      </Form.Select>
    </Form>
  );
}

export default Filter;

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

function HornedBeast(props) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleModal = () => {
    setShow((show) ? false : true);
  };

  return (
    <div className="beast">
      <h2>{props.title}</h2>
      <img title={props.title} src={props.image_url} alt={props.keyword} onClick={handleModal}></img>
      <p>{props.description}</p>
      <div className="heart" onClick={handleClick}><div className="count">{count}</div></div>
      <Modal
        className='modal'
        show={show}
        onHide={handleModal}
        onClick={handleModal}
      >
        <Modal.Title><h2>{props.title}</h2></Modal.Title>
        <img title={props.title} src={props.image_url} alt={props.keyword}></img>
        <Modal.Footer><p>{props.description}</p></Modal.Footer>
      </Modal>
    </div>
  );
}

export default HornedBeast;

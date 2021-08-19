// import {useState} from 'react';

function Header(props) {
  // const [xform, setXform] = useState(0);
  // const transform = `rotate(${xform}deg) translateX(${xform}px)`;
  const transform = (window.scrollY < 90) ? `rotate(${props.xform}deg) translateX(${props.xform}px)` : `rotate(90deg) translateX(${90 + (props.xform * 0.25)}px)`;

  // window.addEventListener('scroll', () => {
  //   xform = props.xform : setXform(89);
  // });

  return (
    <h1 id="header" style={{ transform }}>Horned Beasts</h1>
  );
}

export default Header;

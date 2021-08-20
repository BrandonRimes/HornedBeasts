import HornedBeast from './hornedbeast';
import beasts from './data/beasts.json';


function Main(props) {
  let filtered = [];
  if (props.numHorn) {
    filtered = beasts.filter(beast => beast.horns === parseInt(props.numHorn));
    console.log(filtered);
  } else {
    filtered = beasts;
    console.log(filtered);
  }
  return filtered.map((beast, index) => <HornedBeast key={index} title={beast.title} image_url={beast.image_url} keyword={beast.keyword} description={beast.description}/>);
}

export default Main;

import HornedBeast from './hornedbeast';
import beasts from './data/beasts.json';


function Main(props) {
  return beasts.map(beast => <HornedBeast title={beast.title} image_url={beast.image_url} keyword={beast.keyword} description={beast.description}/>);
}

export default Main;

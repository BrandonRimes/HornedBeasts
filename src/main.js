import HornedBeast from './hornedbeast';
import beasts from './beasts';

function Main(props) {
  let beastArray = [];
  beasts.forEach(beast => {
    beastArray.push(<HornedBeast title={beast.title} image_url={beast.image_url} keyword={beast.keyword} description={beast.description}/>);
  });
  return (
    <main>{beastArray}</main>
  )
}

export default Main;
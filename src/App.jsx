import "./App.css";
import Accordians from "./components/Accordians";
import RandomColor from "./components/RandomColor";
import ImageSlider from "./components/ImageSlider";
import LoadMoreButton from "./components/LoadButton";
import StarRating from "./components/StarRating";
import TreeView from "./components/TreeView";
import menus from './components/TreeView/data'
import QRCodeGenerator from "./components/QRCodeGenerator";

function App() {
  return (
    <div>
      <Accordians />
      <RandomColor />
      <ImageSlider url="https://picsum.photos/v2/list" page={'1'} limit={10}/>
      <StarRating noOfStars={10}/>
      <LoadMoreButton />
      <TreeView menus={menus}/>
      <QRCodeGenerator />
    </div>
  );
}

export default App;

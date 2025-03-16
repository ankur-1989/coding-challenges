import Background from "./components/Background/Background.component";
import Header from "./components/Header/Header.component";
import ThreeDiamond from "./images/threeDiamonds.svg";
import "./App.css";
import Deals from "./features/Deals/Deals";

function App() {
  return (
    <Background>
      <Header title="Aktuelle Angebote" icon={ThreeDiamond} />
      <Deals />
    </Background>
  );
}

export default App;

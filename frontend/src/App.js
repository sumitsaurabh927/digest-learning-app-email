import Body from "./components/Body";
import "./app.css";
import Header from "./components/Header";
import Svg from "./assets/b1.png";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Body />
      <img src={Svg} alt="blob" className="absolute top-7 bottom-0 right-0 left-0 -z-10"/>
    </div>
  );
}

export default App;

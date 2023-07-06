import Body from "./components/Body";
import "./app.css";
import Header from "./components/Header";
import Img from "./components/Img";

function App() {
  return (
    <div className="bg-[#303053] text-white m- h-[110vh]">
      {/* <Header /> */}
      <div className="flex justify-evenly">
        <div className=" mt-[3rem]">
          <Img />
        </div>
        <div className="w-1/2 py-20 pt-[10rem]">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;

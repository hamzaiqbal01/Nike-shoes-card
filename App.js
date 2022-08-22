import logo from "./logo.svg";
import "./App.css";
import "./components/firstCard.css";
import FirstCard from "./components/FirstCard";

console.log(FirstCard);
function App() {
  return (
    <>
      <div className="mainContainer  container-fluid py-5">
        <div className="container   my-auto mt-5">
          <div className="row">
            <div className=" col-md-3 col-11   mx-auto  my-4">
              <FirstCard
                image={require("./components/images/running_shoes_PNG5816.png")}
              />
            </div>
            <div className=" col-md-3 col-11 mx-auto  my-4">
              <FirstCard image={require("./components/images/redNike.png")} />
            </div>
            <div className=" col-md-3 col-11 mx-auto  my-4">
              <FirstCard image={require("./components/images/green2.png")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

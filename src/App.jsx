import "./App.css";
import Banking from "./pages/banking";
import Boost from "./pages/boost";
import Hero from "./pages/hero";
import Investing from "./pages/investing";
import Payments from "./pages/payments";

function App() {
  return (
    <>
      <div className="snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 smlap:hidden">
        <Hero />
        <Payments />
        <Banking />
        <Boost />
        <Investing />
      </div>
    </>
  );
}

export default App;

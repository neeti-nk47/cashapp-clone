import MobileLastSection from "./pages/MobileLastSection";
import Banking from "./pages/Banking";
import Boost from "./pages/Boost";
import Hero from "./pages/Hero";
import Investing from "./pages/Investing";
import Payments from "./pages/Payments";

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

      <div className="snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 revsmlap:hidden">
        <Hero />
        <Payments />
        <Banking />
        <Boost />
        <Investing />
        <MobileLastSection />
      </div>
    </>
  );
}

export default App;

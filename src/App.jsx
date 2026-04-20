import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import Newsletter from "./components/Newsletter";
import Idea from "./components/Idea";
import ProblemStatementsList from "./components/ProblemStatements";

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Statistics />
      <ProblemStatementsList />
      <Newsletter />
      <Idea />
      <Footer />
    </div>
  );
}

export default App;

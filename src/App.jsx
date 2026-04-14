import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import ProblemStatements from "./components/ProblemStatements";
import Newsletter from "./components/Newsletter";
import Idea from "./components/idea";



function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Statistics />
      <ProblemStatements
        title="Digital Encode"
        description="Digital Encode is a leading consulting and integration firm founded in 2003 that specializes in the design, management, and security of business-critical networks..."
        reverse={false}
        pattern={
          <>
            <div className="absolute -left-15 top-[25%] w-10 h-10 border-4 border-[#37D67A] rounded-full z-0 hidden md:block" />
            <div className="absolute top-[45%] -left-16 grid grid-cols-4 gap-x-6 gap-y-10 z-0">
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#37D67A]"
                />
              ))}
            </div>
          </>

        }
      />

      <ProblemStatements
        title="New Year challenge"
        description="Add something great"
        reverse={true}
        pattern={
          <>
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-12 h-12 border-4 border-[#37D67A] rounded-full z-20" />

            <div className="absolute top-1/2 -right-21 -translate-y-1/2 grid grid-cols-3 gap-x-8 gap-y-10 z-0 opacity-80">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#37D67A]"
                />
              ))}
            </div>
          </>
        }
      />

      <ProblemStatements
        title="Instant ATM Card Dispensing Kiosk Naming Challenge"
        description="Introducing the Wema Bank's Kiosk machine that instantly prints cards for our customers, designed to boost our transacting customer base. To differentiate us from competitors such as Xpress Card and Vend-Your-Card, we are seeking a bold and memorable brand name that embodies our values and resonates with our customers. We encourage staff members to submit their creative suggestions and help us establish a lasting brand identity..."
        pattern={
          <>
            <div className="absolute -top-10 -left-10 w-12 h-12 border-4 border-[#37D67A] rounded-full z-20 hidden md:block" />
            <div className="absolute -bottom-24 -right-20 grid grid-cols-8 gap-x-10 gap-y-10 z-0 opacity-80">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#37D67A]"
                />
              ))}
            </div>
          </>
        }
      />
      <Newsletter />
      <Idea />
      <Footer />
    </div>
  );
}

export default App;

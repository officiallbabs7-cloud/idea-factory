import ProblemStatement from "./ProblemStatement";

const ProblemStatementsList = () => {
  return (
    <>
      <ProblemStatement
        title="Digital Encode"
        description="Digital Encode is a leading consulting and integration firm..."
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

      <ProblemStatement
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

      <ProblemStatement
        title="Instant ATM Card Dispensing Kiosk Naming Challenge"
        description="Introducing the Wema Bank's Kiosk machine..."
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
    </>
  );
};

export default ProblemStatementsList;

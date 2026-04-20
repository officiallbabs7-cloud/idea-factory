import digitalEncode from "../assets/digital-encode.png";

const ProblemStatement = ({ title, description, reverse, pattern }) => {
  return (
    <div className="my-40 w-full max-w-6xl mx-auto px-6 md:px-10">
      <section
        className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        <div className="relative shrink-0">
          {pattern}

          <div className="relative z-10 bg-[#F1F1F1] rounded-3xl w-80 h-100 md:w-85 md:h-110 shadow-2xl overflow-hidden border border-gray-100">
            <img
              src={digitalEncode}
              alt="Challenge Visual"
              className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>

        <div className="max-w-lg md:flex-1 text-left">
          <h2 className="text-4xl md:text-5xl font-medium text-[#455261] mb-6 font-urbanist leading-tight">
            {title}
          </h2>
          <p className="text-xl text-[#374151]/80 leading-relaxed mb-10 font-urbanist font-light line-clamp-5">
            {description}
          </p>
          <button className="bg-[#92008E] hover:bg-[#7a0076]/70 text-white px-10 py-4 rounded-xl text-xl font-light shadow-lg flex items-center gap-3 transition-all cursor-pointer">
            View Problem Statement
            <span className="text-2xl">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProblemStatement;

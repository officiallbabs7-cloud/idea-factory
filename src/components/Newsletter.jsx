const Newsletter = () => {
  return (
    <div className="relative w-full -mt-1 pt-12 pb-40 px-6 overflow-hidden bg-[#980b80]">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 7v10M7 12h10' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-white text-3xl md:text-4xl font-normal mb-6 font-urbanist tracking-tight">
          Subscribe to our Newsletters
        </h2>
        <p className="text-white/90 text-base font-extralight mb-12 max-w-xl mx-auto leading-relaxed font-urbanist">
          Cultivate the habit of expanding your knowledge. Learn about
          technology and emerging technology
        </p>

        <div className="w-full max-w-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:bg-white sm:p-1.5 sm:rounded-full shadow-sm">
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full flex-1 px-6 py-4 bg-white sm:bg-transparent rounded-full sm:rounded-none outline-none text-gray-700 text-lg placeholder-gray-400"
          />
          <button className="w-full sm:w-auto bg-[#9b117c] cursor-pointer text-white px-10 py-4 rounded-full font-semibold transition-all hover:opacity-90">
            Subscribe
          </button>
        </div>
      </div>
    </div> 
  );
};

export default Newsletter;
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

        <div className="w-full max-w-lg bg-white p-1.5 rounded-full shadow-lg flex items-center">
  <input
    type="email"
    placeholder="Enter your email here"
    className="w-full flex-1 px-4 sm:px-6 py-3 bg-transparent outline-none text-gray-700 text-sm sm:text-base md:text-lg placeholder-gray-400 min-w-0"
  />
  <button className="bg-[#9b117c] cursor-pointer text-white px-5 sm:px-10 py-3 rounded-full font-semibold transition-all text-sm sm:text-base whitespace-nowrap">
    Subscribe
  </button>
</div>
      </div>
    </div> 
  );
};

export default Newsletter;
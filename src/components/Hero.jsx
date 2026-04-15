import leftGroup from "../assets/left group.png";
import rightGroup from "../assets/right group.png";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen font-urbanist mt-[106px] pb-20">
      
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-purple-100/40 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-100 h-100 bg-blue-50/40 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 mt-10">
        
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-semibold text-[#455261] mb-5">
            Welcome to the IdeaFactory
          </h1>
          <p className="text-2xl font-extralight">
            Exploration is the engine that drives innovation. Innovation drives
            economic growth. So let's all go exploring.
          </p>

          <div className="flex items-center justify-center space-x-4 mt-8">
          <button className=" bg-[#92008E] hover:bg-[#7a0076]/70 text-white px-8 py-2.5 rounded-md font-semibold flex justify-center items-center transition-ease-in-out text-xl cursor-pointer">
            Log In 
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-3 w-8 h-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path></svg>
          </button>
          </div>
        </div>

        <div className="w-full relative">
          <img
            src={leftGroup}
            className="hidden lg:block absolute top-0 "
            alt="leftheads"
            width="250"
          />
<div className="relative max-w-[512px] mx-auto mt-20 px-4">
  
  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] h-full bg-[#f3e8ff] rounded-[30px] -z-20 border border-gray-100/20"></div>
  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[95%] h-full bg-[#f3e8ff] rounded-[30px] -z-10 border border-gray-100/40"></div>

  <div className="relative z-10 w-full  min-h-[324px] bg-white rounded-[30px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col justify-between text-center md:text-left">
    
    <div
      className="absolute top-6 left-6 bg-[#92008E] text-white w-10 h-10 flex items-center justify-center font-bold text-base z-20 shadow-md"
      style={{ clipPath: "polygon(50% 0%, 61% 10%, 75% 5%, 78% 18%, 91% 21%, 88% 35%, 100% 45%, 91% 55%, 94% 69%, 81% 72%, 78% 86%, 64% 83%, 50% 100%, 36% 83%, 22% 86%, 19% 72%, 6% 69%, 9% 55%, 0% 45%, 9% 35%, 6% 21%, 19% 18%, 22% 5%, 36% 10%)" }}
    >
      1st
    </div>

<div className="flex items-center justify-center gap-4 mb-4 mt-1">
  
  <div className="w-10 h-10  bg-[#E0F2FE] rounded-full flex items-center justify-center overflow-hidden shrink-0 border-2 border-white shadow-sm">
    <svg className="w-10 h-10 text-blue-300/40" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </div>

  <div className="flex flex-col text-left">
    <h3 className="text-xl font-semibold font-urbanist text-[#92008E] leading-tight">
      Adeboye Ola
    </h3>
    <p className="text-gray-400 text-sm font-light">
      Ekiti, ARAMOKO
    </p>
  </div>
</div>

    <div className="flex-1">
      <h4 className="font-semibold text-[#92008E] text-xl mb-3 font-urbanist line-clamp-1 leading-tight">
        Loan restructure option or button on Alat App
      </h4>
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-urbanist">
        This loan restructure button will allow a customer who's enjoying 
        a facility on Alat app to restructure how his loan is repaid at 
        convenience, for instance if I've chosen 24month repayment...
      </p>
    </div>

    <div className="flex gap-6 items-center text-gray-300 pt-4 justify-center">
      <div className="flex items-center gap-2">
        <span className="text-lg">💬</span>
        <span className="font-medium text-sm text-gray-400">26</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg">🤍</span>
        <span className="font-medium text-sm text-gray-400">144</span>
      </div>
    </div>

  </div>
</div>
          <img
            src={rightGroup}
            className="hidden lg:block absolute right-0 top-0"
            alt="rightheads"
            width="250"
          />
</div>
        </div>
    </section>
  );
};

export default Hero;


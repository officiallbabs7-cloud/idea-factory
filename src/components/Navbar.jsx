import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "Shared Ideas",
    "Innovation Challenge",
    "Leaderboard",
  ];

  return (
    <>
      <nav className="w-full bg-[#f9fafb] border-b border-gray-200 fixed top-0 z-50">
        <div className="flex items-center justify-between px-6 md:px-24 py-6">
          
          
          <div className="flex items-center gap-2 cursor-pointer">
            <img 
              src={logo} 
              alt="logo" 
              className="w-36 h-auto object-contain" 
            />
          </div>

          
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <div key={item} className="relative flex flex-col items-center group">
                <button
                  onClick={() => setActive(item)}
                  className={`font-semibold text-[15px] cursor-pointer transition-colors ${
                    active === item
                      ? "text-[#92008E]"
                      : "text-gray-500 hover:text-[#92008E]"
                  }`}
                >
                  {item}
                </button>

                
                <div
                  className={`absolute -bottom-2 h-0.5 bg-[#92008E] rounded-t-full transition-all duration-300 
                  ${active === item 
                      ? "w-full opacity-100 animate-pulse" 
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#92008E] text-white px-6 py-2.5 rounded-md font-semibold text-[14px] hover:bg-[#7a0076]/70 cursor-pointer active:scale-95 transition-all">
              Log In
            </button>

            
            <svg
              onClick={() => setIsOpen(true)}
              className="w-8 h-auto cursor-pointer md:hidden text-gray-600"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
        </div>
      </nav>

      
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-brightness-90 z-40 cursor-pointer"
        />
      )}

      
      <div
        className={`fixed top-0 right-0 h-full w-70 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <img src={logo} alt="logo" className="w-28" />
          <button onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer">
            ✕
          </button>
        </div>

        <div className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setIsOpen(false);
              }}
              className={`text-left px-4 py-3 rounded-md cursor-pointer ${
                active === item
                  ? "bg-purple-100 text-[#92008E]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}

          <hr />

          <button className="bg-[#92008E] text-white py-3 rounded-md mt-4 cursor-pointer font-semibold">
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
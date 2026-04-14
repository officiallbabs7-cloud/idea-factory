import lastImage from "../assets/last image.png";

const Idea = () => {
    return (
        <div className="w-full bg-white py-32 px-10 font-urbanist overflow-hidden">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12">
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-[#455261] text-xl md:text-xl leading-relaxed mb-8 font-extralight max-w-md">
                      When we share our ideas, we make it easier to build the future but
                      when we do it together, we make it 10x easier to explore
                    </p>
        
                    <button className="bg-[#92008E] hover:bg-[#7a0076]/70 text-white ml-14 px-10 py-3.5 rounded-lg text-xl font-normal justify-center shadow-lg flex items-center gap-3 transition-ease-in-out cursor-pointer mx-auto md:mx-0">
                      Share your idea
                      <span className="text-lg">→</span>
                    </button>
                  </div>
        
                  <div className="w-full md:w-7/12 relative flex justify-center md:justify-end">
                    <img
                      src={lastImage}
                      alt="Share your idea collage"
                      className="w-full h-auto object-contain scale-110"
                    />
                  </div>
                </div>
              </div>
    )
}
export default Idea;
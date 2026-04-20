const Statistics = () => {
  return (
      <div className="bg-[#92008E] text-white rounded-lg py-6 w-11/12 mx-auto max-w-6xl mt-20 mb-20">
         <div className="w-full flex">
        
        <div className="text-center flex-1 px-3 flex flex-col justify-between border-r-2">
          <h3 className="text-xl sm:text-xl font-semibold font-urbanist">Total Challenge Entries</h3>
          <h2 className="text-3xl sm:text-5xl mt-5 font-bold font-urbanist">9</h2>
        </div>

        

        <div className="text-center flex-1 px-3 flex flex-col justify-between border-r-2">
          <h3 className="text-xl sm:text-xl font-semibold font-urbanist">Total Ideas Submitted</h3>
          <h2 className="text-3xl sm:text-5xl mt-5 font-bold font-urbanist">684</h2>
        </div>

        

        <div className="text-center flex-1 px-3 flex flex-col justify-between">
          <h3 className="text-xl sm:text-xl font-semibold font-urbanist">Total Approved Ideas</h3>
          <h2 className="text-3xl sm:text-5xl mt-5 font-bold font-urbanist">37</h2>
        </div>
</div>
      </div>
  );
};

export default Statistics;
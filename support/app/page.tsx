
export default function Home() {
  return (
    <>
   <div className="flex justify-center flex-col text-white  items-center h-[44vh] gap-4 "> 
    <div className="font-bold text-5xl flex  gap-2 items-center justify-center">Buy Me a Chai <span><img className="w-15" src="/tea.gif" alt="" /></span></div>
    <p>Here you can support your fav influencer </p>
    <div className="gap-4 flex ">
    <button type="button" className="text-white bg-gradient-to-br rounded-2xl from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Support Now</button>
    <button type="button" className="text-white bg-gradient-to-br rounded-2xl from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Read More</button>

    </div>
   </div>
   <div className="bg-white h-0.5 opacity-15"></div>

   <div className="text-white container mx-auto">
    <h1 className="text-2xl font-bold text-center my-14">Your fans can buy tea for you</h1>
    <div className="flex gap-5 justify-around">
    <div className="item space-y-3 flex flex-col justify-center items-center">
        <img className="w-[88] bg-slate-500 rounded-full p-2 text-black" src="/man.gif" alt="" />
        <p className="font-bold">Fans want to help</p>
        <p className="text-center">Your fans are available for you to help </p>

      </div>
      <div className="item space-y-3 flex flex-col justify-center items-center">
        <img className="w-[88] bg-slate-500 rounded-full p-2 text-black" src="/coin.gif" alt="" />
        <p className="font-bold">Fans want to help</p>
        <p className="text-center">Your fans are available for you to help </p>

      </div>
       <div className="item space-y-3 flex flex-col justify-center items-center">
        <img className="w-[88] bg-slate-500 rounded-full p-2 text-black" src="/group.gif" alt="" />
        <p className="font-bold">Fans want to Support</p>
        <p className="text-center">Your fans are available for you to help </p>

      </div>
      
    </div>
   </div>
   </>
  );
}

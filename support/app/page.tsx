
export default function Home() {
  return (
    <>
   <div className="flex justify-center flex-col text-white  items-center h-[44vh] gap-4 "> 
    <div className="font-bold text-3xl ">Buy Me a Chai </div>
    <p>Here you can support your fav influencer </p>
    <div className="gap-4 flex ">
    <button type="button" className="text-white bg-gradient-to-br rounded-2xl from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Support Now</button>
    <button type="button" className="text-white bg-gradient-to-br rounded-2xl from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Read More</button>

    </div>
   </div>
   <div className="bg-white h-0.5 opacity-15"></div>
   </>
  );
}

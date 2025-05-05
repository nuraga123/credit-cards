export function App() {
  return (
    <div className="border border-solid border-orange-400 p-8">
      <h1
        className="
      mt-10 text-center text-xl font-bold
      after:content-['Nuraga\__group']
      after:block
      "
      >
        Enter your name
      </h1>

      <input
        type="text"
        placeholder="Enter your name"
        className="
        m-8 outline-0
        border border-solid border-white/50
        placeholder:text-orange-400 focus:placeholder:text-white/50  focus:placeholder:transition focus:placeholder:ease-in-out focus:placeholder:duration-300 
        p-2 rounded
        transition ease-in-out duration-300 
        focus:border-orange-400"
      />

      <button
        className={`
          bg-orange-500 rounded 
          hover:bg-orange-400 
          transition ease-in-out duration-300
          mt-10 mx-auto block px-2 border border-solid border-white/50
        `}
      >
        help me
      </button>

      <div
        className="flex items-center justify-center 
      mx-auto mt-10 w-30 h-30 
      bg-orange-400 rounded shadow font-bold 
      md:bg-blue-400 transition ease-in-out duration-500
      lg:bg-green-400
      xl:bg-red-400
      "
      />

      <div className="perspective-distant">
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          className="w-full h-full aspect-video rotate-x-40 rotate-z-10 transform-3d"
        />
      </div>
    </div>
  );
}

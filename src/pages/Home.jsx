function Home() {
  return (
    <div className="flex min-h-screen">

      {/* ฝั่งซ้ายสีดำ */}
      <div className="w-1/3 bg-black text-white flex flex-col justify-center px-16">
        <span className="text-yellow-400 text-sm tracking-widest mb-4">
          WELCOME
        </span>

        <h1 className="text-5xl font-extrabold leading-tight">
          We Help to Build <br /> You the Product
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Business Solution
        </p>

        <button className="mt-8 bg-yellow-400 text-black px-6 py-3 font-semibold hover:bg-yellow-500 transition">
          Get in touch
        </button>
      </div>

      {/* ฝั่งขวาเป็นภาพ */}
      <div className="w-2/3">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
          alt="workspace"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  )
}

export default Home
import Navbar from "./navbar";

export default function Hero() {
  return (
    <section className="w-full h-screen bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1762424361036-ec4c08265053?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=985)]">
      <div className="w-full h-full bg-black/30 p-6 flex flex-col justify-between">
        <Navbar />

        <div className="w-full flex justify-between items-start text-white">
          <div className="flex flex-col gap-5">
            <p className="w-1/2 tracking-tight text-5xl text-white/80">
              Designing Dreams, Building Futures with Timeless Elegance and
              Innovation
            </p>

            <button className="w-fit bg-white/80 text-black/80 p-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-150">
              <p className="font-medium">Book an Appointment</p>
            </button>
          </div>

          {/* Right Section */}
          {/* <div className="w-2/6 bg-[#3E3E3E] flex flex-col gap-4 rounded-lg p-2 cursor-pointer">
            <img
              className="w-full h-32 rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1762424361036-ec4c08265053?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=985"
              alt="img"
            />

            <div className="flex justify-between">
              <span className="flex flex-col">
                <p className="text-xl">Iconic Architecteur</p>
                <p className="text-sm text-white/70">
                  Explore our handpicked c...
                </p>
              </span>

              <ArrowRight />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 21 21"
    >
      <path
        fill="none"
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.5 13.5v-7h-7m7 0l-8 8"
      />
    </svg>
  );
}

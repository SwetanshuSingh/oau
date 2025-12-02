import Navbar from "./navbar";

export default function Hero() {
  return (
    <section className="w-full h-screen bg-[url(../../public/images/hero.png)] bg-cover bg-center">
      <div className="w-full h-full bg-black/50 flex flex-col justify-between p-10">
        <Navbar variant="dark" />

        <div className="flex flex-col gap-6">
          <span className="text-6xl text-white font-medium italic">
            <h2>Transforming</h2>
            <h2>Ideas Architecture</h2>
          </span>

          <p className="max-w-96 text-xl italic text-neutral-300">
            we specialize in turning creative concepts into immersive
            experiences, blending innovation with precision for a digital
          </p>
        </div>
      </div>
    </section>
  );
}

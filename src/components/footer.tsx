export default function Footer() {
  return (
    <footer>
      <section className="w-full flex bg-[#FAFBFC] border-t border-gray-100 px-6 py-8">
        <div className="flex flex-col gap-4 w-1/4">
          <p className="text-4xl font-bold uppercase text-black">OAU</p>

          <div className="flex flex-col text-gray-600 tracking-tight leading-none gap-1.5">
            <p>
              F-16, Shankar Path, Todel Marg, Kanti Chandra Road, Bani Park,
              Jaipur
            </p>
            <p>Rajasthan, 302016</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFBFC] px-6 py-4 flex items-center justify-between">
        <p className="text-black/70">
          © 2025 OAU - Objects Architecture Urbansism
        </p>

        <span className="flex justify-center items-center gap-5 text-black/70">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Code of Conduct</p>
        </span>
      </section>
    </footer>
  );
}

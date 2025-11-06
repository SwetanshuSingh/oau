export default function Navbar() {
  const items = ["OAU", "Initiatives", "Work", "Contact"];

  return (
    <nav className="w-full sticky top-0 border-b px-2 hidden lg:flex border-accent-metal/20">
      {items.map((item) => (
        <div
          key={item}
          className={`w-1/4 p-1.5 border-accent-metal/20 cursor-pointer text-base-black hover:bg-accent-earth hover:text-base-white transition-colors duration-150 ease-in ${
            item === "Contact" ? "border-none" : "border-r"
          }`}
        >
          <p className="text-lg">{item.toUpperCase()}</p>
        </div>
      ))}
    </nav>
  );
}

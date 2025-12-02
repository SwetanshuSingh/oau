import Link from "next/link";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full p-10 font-futura-book flex flex-col gap-10">
      <Link href="/">
        <h4 className="font-medium tracking-tight text-black text-4xl">OAU</h4>
      </Link>
      {children}
    </div>
  );
}

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-400 flex justify-between items-center px-20 py-3 font-bold text-black">
      <Link href="/">Home</Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Users</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

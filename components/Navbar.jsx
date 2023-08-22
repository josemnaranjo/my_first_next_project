import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

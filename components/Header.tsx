import Link from "next/link";

const Header = () => (
  <div className="container mx-auto bg-purple-300 p-5">
    <nav className="flex justify-between">
    <ul className="flex flex-row">
      <li className="pr-5">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-800 font-medium">Home</a>
        </Link>
      </li>
      <li className="pr-5">
        <Link href="/brand">
          <a className="text-blue-500 hover:text-blue-800">Brand</a>
        </Link>
      </li>
      <li className="pr-5">
        <Link href="/about">
          <a className="text-blue-500 hover:text-blue-800">About</a>
        </Link>
      </li>
    </ul>
    </nav>
  </div>
);

export default Header;

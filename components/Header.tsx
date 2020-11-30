import Link from "next/link";

const Header = () => (
  <div className="">
    <ul className="flex">
      <li className="mr-6">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-800">Home</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/brand">
          <a className="text-blue-500 hover:text-blue-800">Brand</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/about">
          <a className="text-blue-500 hover:text-blue-800">About</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/all-services"}>All Services</Link>
      </li>
      <li>
        <Link href={"/"}>Login</Link>
      </li>
    </>
  );
  return (
    <nav className="shadow-xl py-2">
      <div className="flex justify-between container mx-auto">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="font-semibold text-orange-500 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost">
            <Image
              src={"/logo.png"}
              height={24}
              width={24}
              className="rounded-full mr-3"
            />
            <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">City Service</span>
          </Link>
        </div>

        <div className="hidden md:flex">
          <ul className="font-semibold text-orange-500 menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

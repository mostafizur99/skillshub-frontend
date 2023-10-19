import { useState } from "react";
import Link from "next/link";

interface MobileMenuProps {
  isMenuOpen: boolean;
}

const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  const loginSession = false;
  const signOut = () => {
    console.log("sign out");
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
      <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <li>
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300"
          >
            Services
          </Link>
        </li>
        {loginSession ? (
          <li>
            <a
              className="block text-center px-3 py-2 font-medium text-themePrimary bg-themeSecondary ase-in duration-300 rounded-md cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </a>
          </li>
        ) : (
          <li>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-white hover:text-themeSecondary hover:bg-themeSecondary/5 ase-in duration-300"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;

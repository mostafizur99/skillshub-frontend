import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";

const Sidebar = () => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  return (
    <div className="bg-white w-2/12 min-h-screen max-h-full flex flex-col justify-between fixed left-0 border-r border-themeGray overflow-y-scroll overflow-x-hidden">
      <nav className="my-0">
        <ul className="pl-0">
          <Link href={"/"}>
            <li className="flex justify-start items-center bg-themePrimary/50 py-5 px-3">
              <p className="flex items-center justify-center w-full h-full ">
                <span className="mr-0">
                  <AiFillHome className=" text-themeSecondary h-6 w-6" />
                </span>
                <span className="ml-2 font-semibold text-themePrimary hidden md:block">
                  Home
                </span>
              </p>
            </li>
          </Link>
          {SidebarData.map((item, index) => (
            <li
              key={item.id}
              className="flex justify-start items-center py-5 px-3"
            >
              <Link href={item.path}>
                <p className="flex items-center justify-center w-full h-full ">
                  <span className="mr-0">{item?.iconSvg}</span>
                  <span className="ml-2 text-themePrimary font-medium hidden md:block">
                    {item.title}
                  </span>
                </p>
              </Link>
            </li>
          ))}

          <li
            onClick={logOut}
            className="flex justify-start items-center bg-red-500 mt-2 py-5 px-3 cursor-pointer"
          >
            <p className="flex items-center justify-center w-full h-full ">
              <span className="mr-0">
                <RiLogoutBoxRFill className=" text-white h-6 w-6" />
              </span>
              <span className="ml-2 font-semibold text-white hidden md:block">
                Logout
              </span>
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

const SidebarData = [
  {
    title: "Profile",
    path: "/profile",
    iconSvg: <BiSolidUser className=" text-themeSecondary h-6 w-6" />,
    id: 1,
  },
  {
    title: "Services",
    path: "/manage-services",
    iconSvg: <BsBoxes className=" text-themeSecondary h-6 w-6" />,
    id: 2,
  },
  {
    title: "Users",
    path: "/manage-users",
    iconSvg: <FaUsersCog className=" text-themeSecondary h-6 w-6" />,
    id: 3,
  },
];

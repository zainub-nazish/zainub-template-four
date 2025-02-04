"use client"
import { IoIosArrowDown, } from "react-icons/io";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const Header = () => {


  return (
    <header className="bg-[#7E33E0] text-white">
      {/* Top Header */}
      <div className="flex flex-wrap justify-between items-center px-4 md:px-8 py-2 text-sm">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2">
            <span role="img" aria-label="email">📧</span>
            <a href="mailto:mihasamul@gmail.com" className="hover:underline">
              mihasamul@gmail.com
            </a>
          </span>
          <span>(12345) 678900</span>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center space-x-4 mt-2 md:mt-0">
          <div className="flex items-center space-x-1">
            <span>English</span>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center space-x-1">
            <span>USD</span>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center space-x-1">
            <a href="#" className="hover:underline">
              Login
            </a>
            <RiAccountBoxFill  />
          </div>
          <div className="flex items-center space-x-1">
            <a href="#" className="hover:underline">
              Wishlist
            </a>
            <FaRegHeart />
          </div>
          <div className="flex items-center space-x-1">
            <a href="#" className="hover:underline">
              <CiShoppingCart />
            </a>
          </div>
        </div>
      </div>



      {/* /==================================================================== */}

      {/* Lower Header */}
      <div className="bg-white text-black">
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">Hekto</h1>

          {/* Navigation Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="#" className="hover:text-purple-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="../pp" className="hover:text-purple-600">
                Pages
              </Link>
            </li>
            <li>
              <Link href="../latest" className="hover:text-purple-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="../blog" className="hover:text-purple-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="../shoplist" className="hover:text-purple-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="../contact" className="hover:text-purple-600">
                Contact
              </Link>
            </li>
          </ul>


          <div>


            {/*   menu bar */}
            <DropdownMenu>
              <DropdownMenuTrigger> <IoMdMenu /> </DropdownMenuTrigger>
              <DropdownMenuContent>

                <DropdownMenuSeparator />
                <DropdownMenuItem> <ul><li>
                  <Link href="#" className="hover:text-purple-600">
                    Home
                  </Link>
                </li> </ul> </DropdownMenuItem>
                <DropdownMenuItem><ul> <li>
                  <Link href="../pp" className="hover:text-purple-600">
                    Pages
                  </Link>
                </li> </ul>  </DropdownMenuItem>
                <DropdownMenuItem><ul> <li>
                  <Link href="../latest" className="hover:text-purple-600">
                    Products
                  </Link>
                </li> </ul></DropdownMenuItem>
                <DropdownMenuItem> <ul> <li>
                  <Link href="../blog" className="hover:text-purple-600">
                    Blog
                  </Link>
                </li> </ul></DropdownMenuItem>
                <DropdownMenuItem><ul> <li>
                  <Link href="../shoplist" className="hover:text-purple-600">
                    Shop
                  </Link>
                </li> </ul></DropdownMenuItem>
                <DropdownMenuItem><ul> <li>
                  <Link href="../contact" className="hover:text-purple-600">
                    Contact
                  </Link>
                </li> </ul></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>


          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
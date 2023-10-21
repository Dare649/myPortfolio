import { navLinks } from "../data/data"
import dami from '../assets/images/dami1.jpg';
import { BiMenu} from 'react-icons/bi';
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BiMenu
        size={30}
        className="lg:hidden cursor-pointer "
        onClick={() => setOpen((prev) => !prev)}
      />
      {
        open ? 
        (
          <nav id="#" className="bg-purple-700 lg:h-20 w-[100%] ">
            <div className="flex lg:flex-row lg:item-center justify-between">
              <div className="lg:w-14 lg:h-5 lg:p-1 sm:w-48 sm:h-full sm:p-5">
                <img src={dami} alt=""/>
              </div>
              <div className="lg:p-5 sm:p-10">
                <ul className="flex lg:flex-row sm:flex-col gap-5 text-white">
                  {
                    navLinks.map((nav, index) =>(
                      <Link key={index} spy={true} to={nav.path} smooth={true}
                        className="text-md font-bold cursor-pointer text-xl capitalize"
                      >
                        {nav.title}
                      </Link>
                    ))
                  }
                </ul>
              </div>
            </div>
          </nav>
        ):
        (
          ""
        )
      }    
    </>
  )
}

export default Navbar

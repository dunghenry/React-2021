import {useState} from 'react';
import { BsSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {MdOutlineClose} from "react-icons/md";
import useDarkMode from '../useDarkMode';
import  {FaMoon} from "react-icons/fa";
const NavBar = (props) => {
  const {isMobile} = props;

  const [isDarkMode, toggleDarkMode] = useDarkMode()
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () =>{
    setOpenMenu(!openMenu)
  }
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 mr-2 font-extrabold">NerCard</div>
        {
          isDarkMode ? (
            <FaMoon size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=> toggleDarkMode(!isDarkMode)} />
          ):
          (
            <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=> toggleDarkMode(!isDarkMode)} />
          )
        }
       
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        { openMenu && isMobile ? (
          <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={handleMenu}/>
        ): !openMenu && isMobile ? 
          (<GiHamburgerMenu size={"24px"} className="cursor-pointer" onClick={handleMenu}/>)
          : 
          (
            <>
              <li className="btn-hover">Features</li>
              <li className="btn-hover">Menu </li>
              <li className="btn-hover">Our Story</li>
              <li className="btn-hover ml-28">Contact</li>
            </>
          )
        }
        {
          openMenu && (
            <div className="absolute right-8 bg-white p-8 text-center text-black text-13 z-10">
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Menu </li>
              <li className="cursor-pointer">Our Story</li>
              <li className="cursor-pointer">Contact</li>
            </div>
          )
        }
      </ul>
    </nav>
  );
};

export default NavBar;

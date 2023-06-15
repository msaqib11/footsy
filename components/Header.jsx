import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setlastScrollY] = useState(0);

  const controlNavBar = () =>{
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      }else{
       setShow("shadow-sm");  
      }
      setlastScrollY(window.scrollY);
    } else {
      setShow("translate-y-0");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll",controlNavBar)
  
    return () => {
      window.removeEventListener("scroll",controlNavBar)
    }
  }, [lastScrollY])
  

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show} bg-white `}
    >
      {/* navbar */}
      <Wrapper className="h-[60px] flex items-center justify-between">
        {/* logo */}
        <Link href={"/"}>
          <img src="/logo.png" className="w-[40px] md:w-[60px] md:mt-5" />
        </Link>
        {/* logo ends */}

        {/* menu starts */}
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {/* menu ends  */}
        {/*Mobile menu starts */}
        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        {/*Mobile menu ends */}

        {/* icons main div starts */}

        <div className="flex items-center gap-2 text-black">
          <div className="flex items-center justify-center w-8 md:w-12 h-8 md:h-12 hover:bg-black/[0.05] cursor-pointer rounded-full relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px] " />
            <div className="flex items-center justify-center h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] text-[10px] md:text-[12px] px-[2px] md:px-[5px] absolute top-1 left-5 md:left-7  bg-red-600 text-white rounded-full">
              5
            </div>
          </div>

          <div className="flex items-center justify-center w-8 md:w-12 h-8 md:h-12 hover:bg-black/[0.05] cursor-pointer rounded-full relative">
            <BsCart className="text-[15px] md:text-[20px] " />
            <div className="flex items-center justify-center h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] text-[10px] md:text-[12px] px-[2px] md:px-[5px] absolute top-1 left-5 md:left-7  bg-red-600 text-white rounded-full">
              5
            </div>
          </div>

          {/* mobile icon starts */}
          <div className="md:hidden flex items-center justify-center w-8 md:w-12 h-8 md:h-12 hover:bg-black/[0.05] cursor-pointer rounded-full relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* mobile icon ends */}
        </div>
        {/* icons Ends */}
      </Wrapper>
      {/* navbar ends */}
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import MobileMenu from './MobileMenu';


const NAV_LINKS = [
  { id: "landPageID", label: "Hem", src: "/Resources/home.png" },
  { id: "gridDiv", label: "Portfölj", src: "/Resources/briefcase.png" },
  { id: "omMigID", label: "Kontakt", src: "/Resources/user.png" },

];

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [activeLink, setActiveLink] = useState(null);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.pageYOffset + 300;
      const currentActiveLink = NAV_LINKS.find((link) => {
        const element = document.getElementById(link.id);
        if (!element) return false;
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
        return currentScrollY >= elementTop && currentScrollY < elementBottom;
      });

      if (currentActiveLink) {
        setActiveLink(currentActiveLink.id);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToElement(id) {
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop - 100;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }

  const scrollToSection = (id) => {
    scrollToElement(id);
    closeMobileMenu(); // Close the mobile menu after clicking a link
  };

  useEffect(() => {
    ScrollReveal().reveal('.fade', {
      delay: 500,
      easing: "cubic-bezier(0.175, 0.885, 0.1, 0.01)",
      distance: '80px',
      origin: 'bottom'

    });
  }, []);



  const handleClick = (id) => {
    scrollToElement(id);
  };
  return (
    <div>

      <img className={`${window.pageYOffset < 20 ? "" : " -translate-y-32 opacity-0  sm:h-14 z-50"}  h-32 sm:h-24 md:h-28 z-50 fixed items-center left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-12 transition-all`} src="/Resources/AhlstromVisualsLogo.png" />
      <a className=" fixed right-7 top-4 z-50" onClick={toggleMobileMenu}>
        <img src="/Resources/menu.png" alt="Menu" className="  h-8 w-8 dark:invert transition-all duration-100 hover:-translate-y-0.5 hover:h-9 ease-in-out" />
      </a>

      <MobileMenu
  
        class=" z-50"
        isOpen={showMobileMenu}
        closeMenu={closeMobileMenu}
        scrollToSection={scrollToSection} // Pass the function as a prop

      />
      
      <div class="fixed hidden md:block top-0 z-30">
        <div className={`${window.pageYOffset < 10 ? "" : "shadow-lg h-14 dark:bg-secondaryDark glass  bg-secondary"} transition-all  `} style={{
          position: "relative",
          zIndex: "1",

        }}>



          <nav className="w-screen   text-textColor dark:text-textColorDark  ">
          
            <div className="py-3  flex items-center justify-between ">
              <div className="hidden sm:block ">
                <div className=" py-12 right-7 absolute sm:block flex items-center space-x-4 ">
                  <a href="mailto:jonathan.ahlstrom@outlook.com">
                    <img src="/Resources/email.png" target="_blank" alt="Mail" className="h-8 w-8  dark:invert  transition-all duration-100 hover:-translate-y-0.5 ease-in-out" />
                  </a>
                  <a href="https://www.instagram.com/jonathanplz/" target="_blank">
                    <img src="/Resources/instagram.png" alt="Instagram" className="h-8 w-8 dark:invert transition-all duration-100 hover:-translate-y-0.5 ease-in-out" />
                  </a>
                  <a href="https://www.linkedin.com/in/jonathanahlstrom/" target="_blank">
                    <img src="/Resources/linkedin.png" alt="LinkedIn" className="h-8 w-8 dark:invert transition-all duration-100 hover:-translate-y-0.5 ease-in-out" />
                  </a>
                  
                </div>
              </div>


              <div className="flex-grow">

                <div className="flex justify-center space-x-10 text-center  ">

                  {NAV_LINKS.map((link) => (

                    <button

                      key={link.id}
                      className={`${activeLink === link.id
                          ? "shadow-sm bg-white dark:bg-black rounded-xl text-textColor dark:text-textColorDark transition-all"
                          : "shadow-lg bg-secondary dark:bg-secondaryDark rounded-xl "
                        }  transition-all duration-100 hover:-translate-y-0.5 ease-in-out  w-28  md:w-36 h-8`}
                      onClick={() => handleClick(link.id)}
                    >

                      <div className="flex items-center justify-center ">
                        <img
                          src={`${link.src}`}
                          className=" mx-2 dark:invert h-4 xl:h-3"
                          alt={link.label}
                        />
                        <a className="hidden md:block">{link.label}</a>
                      </div>
                    </button>

                  ))}
                </div>
              </div>


            </div>
          </nav>

        </div>
      </div>
    </div>
  );
};

export default Header;

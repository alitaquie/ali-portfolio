import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
      if (scrollTop <= 100) setActive("");
    };

    const navbarHighlighter = () => {
      document.querySelectorAll("section[id]").forEach((sec) => {
        const id = sec.getAttribute("id");
        const rect = sec.getBoundingClientRect();
        if (rect.top < rect.height * 0.2 && rect.bottom > rect.height * 0.2) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", navbarHighlighter);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  const linkedinUrl = "https://www.linkedin.com/in/ali-taquie-82481b17a/";

  return (
    <nav
      className={`
        ${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5
        ${scrolled ? "bg-primary" : "bg-transparent"}
      `}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo + Title */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="text-[18px] font-bold text-white">
            {config.html.title}
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden list-none flex-row gap-6 sm:flex items-center">
          {navLinks.map((nav) => (
            <li key={nav.id} className="flex items-center gap-2">
              <a
                href={`#${nav.id}`}
                className={`
                  cursor-pointer text-[18px] font-medium hover:text-white
                  ${active === nav.id ? "text-white" : "text-secondary"}
                `}
              >
                {nav.title}
              </a>
              {nav.id === "contact" && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <FaLinkedin className="h-5 w-5 text-white" />
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          {toggle && (
            <div className="black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="flex items-center gap-2 font-poppins text-[16px] font-medium cursor-pointer"
                    onClick={() => setToggle(false)}
                  >
                    <a
                      href={`#${nav.id}`}
                      className={
                        active === nav.id ? "text-white" : "text-secondary"
                      }
                    >
                      {nav.title}
                    </a>
                    {nav.id === "contact" && (
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80"
                      >
                        <FaLinkedin className="h-5 w-5 text-white" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";


const MobileMenu = ({isMenuOpen,setIsMenuOpen,navLinks,pathname}) => {
    return (
        <div className={`top-30 left-0 right-0 w-full bg-white z-50 shadow transition-all  duration-500 ease-in-out ${
          isMenuOpen? "translate-y-0 opacity-100 "
      : "-translate-y-5 opacity-0 "
      }`}>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`block py-2 rounded-md px-2 transition ${
            pathname === link.path
              ? "text-[var(--primary-color)]"
              : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
    );
};

export default MobileMenu;



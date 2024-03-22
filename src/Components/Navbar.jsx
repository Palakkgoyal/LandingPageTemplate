import React, { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef();
  useScroll(navRef);
  return (
    <header
      ref={navRef}
      className="sticky-nav z-50 shadow-lg"
    >
      <div className="flex max-w-[1280px] mx-auto justify-between items-center px-4 h-full">
        <img
          src="https://pbs.twimg.com/profile_images/1751559032849186816/cdCsBKvJ_400x400.jpg"
          alt="Anukiran's Portfolio"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full"
        />
        <ul className="flex gap-5 md:gap-16 justify-center items-center h-full md:text-lg">
          <li><a href="#" className="pb-2 border-solid border-gray-100 hover:border-b-2 highlight-text text-slate-700">About</a></li>
          <li><a href="#" className="pb-2 border-solid border-gray-100 hover:border-b-2 highlight-text text-slate-700">Project</a></li>
          <li><a href="#" className="pb-2 border-solid border-gray-100 hover:border-b-2 highlight-text text-slate-700">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

function useScroll(navRef) {
  const lastScrollTop = useRef(0);
  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    navRef.current.style.top =
      scrollTop > lastScrollTop.current ? "-90px" : "0px";
    lastScrollTop.current = scrollTop;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export default Navbar;

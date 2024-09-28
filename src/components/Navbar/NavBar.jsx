import { useCallback, useEffect, useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  //TODO trạng thái khi scroll, nếu window.scrollY > 100 thì chuyển thành true
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);

    //TODO lắng nghe sự kiện scroll của window
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //TODO xử lý sự kiện khi click nút search
  function handlerSearch() {
    window.location.href = "/search";
  }
  return (
    <nav
      id="navbar"
      className={
        `navbar ${isScrolled ? "black" : "transparent"}` +
        " mx-auto fixed top-0 left-0 right-0 z-20"
      }
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[60px]">
          <div className="nav__logo text-red-600 font-bold text-xl tracking-tighter">
            <a href="/">Movie App</a>
          </div>
          <button
            className="nav__search text-gray-400 px-2 cursor-pointer"
            onClick={handlerSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

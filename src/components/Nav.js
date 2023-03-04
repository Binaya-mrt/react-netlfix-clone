import React, { useState, useEffect } from "react";

function Nav() {
  const [showbg, setShowbg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShowbg(true);
      } else setShowbg(false);
      return;
    });
  }, []);
  return (
    <div
      className={`nav  w-full h-16 px-4 py-2 fixed top-0 z-10 flex justify-between items-center ${
        showbg && "bg-black duration-100  ease-in transition-all "
      } `}
    >
      <img
        alt="netlfix"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1920px-Netflix_2014_logo.svg.png"
        className="w-20 object-contain "
      />
      <img
        alt="avatar"
        src="https://th.bing.com/th/id/OIP.xAXJEHzw-bQdld_FM6ELSAAAAA?w=182&h=182&c=7&r=0&o=5&pid=1.7"
        className="w-10 rounded-[50%] object-contain"
      />
    </div>
  );
}

export default Nav;

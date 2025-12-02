import React from "react";

const Footer = () => {
  return (
    <div className="h-[70px] w-full flex justify-between items-center border-t-2 border-gray-200 p-3">
      <div className="flex text-gray-400 gap-2">
        <div>© 2022 - <span className="text-blue-500">Frox</span> Dashboard</div>
        <div>  Made by <span className="text-blue-500">AliThemes</span></div>
      </div>
      <div className="flex gap-2 text-gray-400">
        <div>About</div>
        <div>Careers</div>
        <div>Policy</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Footer;

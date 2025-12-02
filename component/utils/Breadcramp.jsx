'use client'
import Link from "next/link";
import React from "react";
import { FiHome } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";

const Breadcramp = () => {
  const pathname = usePathname();
  const location = pathname.split("/")[1] || "home";

  return (
    <ul className="flex items-center gap-3 text-secondary font-semibold text-gray-400">
      <li>
        <Link href="/" className="flex items-center gap-1.5 text-brand">
          <FiHome />
          <span>Home</span>
        </Link>
      </li>

      {location !== "home" && (
        <>
          <li>
            <MdKeyboardArrowRight className="text-xs" />
          </li>
          <li>
            <p className="capitalize">{location}</p>
          </li>
        </>
      )}
    </ul>
  );
};

export default Breadcramp;

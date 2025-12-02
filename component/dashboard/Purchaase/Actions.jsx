import Link from "next/link";
import React from "react";

const Actions = ({sat}) => {
  return (
    <div className="text-[#7E7E8F] text-[11px] font-normal flex flex-col w-[109px] h-[120px] border border-gray-200 rounded-xl p-4 gap-1.5 bg-white">
      <Link href={'/'}>View details</Link>
      <Link href={'/'}>{sat}</Link>
      <Link href={'/'}>Completed</Link>
      <Link href={'/'} className="text-[#E23738] border-t-2 border-gray-200 pt-1">Cancel</Link>
    </div>
  );
};

export default Actions;

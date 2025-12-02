import React from "react";
import image from "@/public/product.png";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";

export default function ProductGridPage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-4">
            <div className="grid grid-cols-3">
              <div>
                <Image
                  src={image}
                  alt=""
                  className="border border-gray-200 rounded-lg"
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <h2 className="font-semibold text-lg mb-1">
                  Cubitt Smart Watch
                </h2>
                <div className="flex mb-1 text-amber-300">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <div className="flex justify-between">
                  <p className="font-bold mb-1">$576.28</p>
                  <p className="text-sm text-gray-600 mb-1">FROX-13563</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-2 py-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quae
              qui doloribus. Modi, odit rerum vitae nulla harum eligendi est?
              Dolores temporibus laboriosam nulla esse mollitia veniam
              recusandae ullam vel.
            </p>
            <div className="flex justify-between border-t-2 border-gray-100 pt-2.5">
              <p className="text-green-600 text-sm mb-1">Active</p>
              <p className="text-sm">186 / 2058</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

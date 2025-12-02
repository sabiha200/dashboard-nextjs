
import React from "react";
import image from "@/public/product.png";
import Image from "next/image";
import Link from "next/link";

export default function ProductListPage() {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <Link href={'/productdetails'}>
      <table className="w-full text-left text-sm p-3">
        <thead className="bg-white text-center text-gray-600 uppercase text-xs">
          <tr>
            <th className="p-5">Image</th>
            <th className="p-5">Name</th>
            <th className="p-5">SKU</th>
            <th className="p-5">Price</th>
            <th className="p-5">Status</th>
            <th className="p-5">QTY</th>
            <th className="p-5">Rating</th>
            <th className="p-5">Sales</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, i) => (
            <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-3">
                <Image src={image} alt="product" className="w-24 h-24" />
              </td>
              <td className="p-3 font-semibold">Cubitt Smart Watch</td>
              <td className="p-3">FROX-13563</td>
              <td className="p-3 font-bold">$576.28</td>
              <td className="p-3 text-green-600">Active</td>
              <td className="p-3">556</td>
              <td className="p-3">★★★★★</td>
              <td className="p-3">186 / 2058</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Link>
    </div>
  );
}

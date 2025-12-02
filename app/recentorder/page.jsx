"use client";

import Image from "next/image";
import img from "@/public/img3.png";
import Actions from "../../component/dashboard/Purchaase/Actions";

const orders = [
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Bessie Cooper", img: "/avatars/1.png" },
    status: "Delivered",
    amount: "$400.00",
  },
  {
    product: "iPhone 11 Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Annette Black", img: "/avatars/2.png" },
    status: "Pending",
    amount: "$200.00",
  },
  {
    product: "Oppo A20",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Bessie Cooper", img: "/avatars/1.png" },
    status: "Delivered",
    amount: "$250.00",
  },
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Kristin Watson", img: "/avatars/3.png" },
    status: "Canceled",
    amount: "$400.00",
  },
  {
    product: "MacBook Air",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Esther Howard", img: "/avatars/4.png" },
    status: "Delivered",
    amount: "$100.00",
  },
  {
    product: "Samsung A50",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Jerome Bell", img: "/avatars/5.png" },
    status: "Pending",
    amount: "$150.00",
  },
  {
    product: "MacBook Air",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Brooklyn", img: "/avatars/6.png" },
    status: "Canceled",
    amount: "$150.00",
  },
   {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Bessie Cooper", img: "/avatars/1.png" },
    status: "Delivered",
    amount: "$400.00",
  },
  {
    product: "iPhone 11 Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Annette Black", img: "/avatars/2.png" },
    status: "Pending",
    amount: "$200.00",
  },
  {
    product: "Oppo A20",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Bessie Cooper", img: "/avatars/1.png" },
    status: "Delivered",
    amount: "$250.00",
  },
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Kristin Watson", img: "/avatars/3.png" },
    status: "Canceled",
    amount: "$400.00",
  },
  {
    product: "MacBook Air",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Esther Howard", img: "/avatars/4.png" },
    status: "Delivered",
    amount: "$100.00",
  },
  {
    product: "Samsung A50",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Jerome Bell", img: "/avatars/5.png" },
    status: "Pending",
    amount: "$150.00",
  },
  {
    product: "MacBook Air",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Brooklyn", img: "/avatars/6.png" },
    status: "Canceled",
    amount: "$150.00",
  },
];

const statusColor = {
  Delivered: "bg-teal-400",
  Pending: "bg-orange-400",
  Canceled: "bg-red-500",
};

export default function RecentPurchases() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow w-full">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="w-10 py-3">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="text-left py-3">Products</th>
              <th className="text-left py-3">Order ID</th>
              <th className="text-left py-3">Date</th>
              <th className="text-left py-3">Customer name</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Amount</th>
              <th className="text-right py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((row, idx) => (
              <tr
                key={idx}
                className="border-t last:border-b border-gray-200 text-sm text-gray-700"
              >
                <td className="py-4">
                  <input type="checkbox" className="w-4 h-4" />
                </td>

                <td className="py-4">{row.product}</td>

                <td className="py-4">{row.orderId}</td>

                <td className="py-4">{row.date}</td>

                <td className="py-4 flex items-center gap-2">
                  <Image
                    src={img}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  {row.customer.name}
                </td>

                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        statusColor[row.status]
                      }`}
                    />
                    {row.status}
                  </div>
                </td>

                <td className="py-4">{row.amount}</td>

                <td className="py-4 text-right flex justify-center">
                  <button className="text-gray-400 hover:text-gray-600">
                    ...
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Actions/>
    </div>
  );
}

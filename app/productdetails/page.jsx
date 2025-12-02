"use client";
import Image from "next/image";
import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function EditProductPage() {
  const [gallery, setGallery] = useState([
    { name: "Product_thumbnail_1.png", progress: 45, img: "/product.png" },
    { name: "Product_thumbnail_2.png", progress: 100, img: "/product.png" },
    { name: "Product_thumbnail_3.png", progress: 100, img: "/product.png" },
    { name: "Product_thumbnail_4.png", progress: 100, img: "/product.png" },
    { name: "Product_thumbnail_5.png", progress: 100, img: "/product.png" },
  ]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];

    const newFiles = files.map((file) => ({
      name: file.name,
      progress: 100,
      img: URL.createObjectURL(file),
    }));

    setGallery([...gallery, ...newFiles]);
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          {/* Product Name */}
          <div>
            <label className="block font-semibold">Product Name</label>
            <input
              type="text"
              className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3"
              placeholder="Type name here"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold">Description</label>
            <textarea
              rows={6}
              className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3"
              placeholder="Type description here"
            />
          </div>

          {/* Row: Category / Brand */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Category</label>
              <input
                type="text"
                className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3"
                placeholder="Type Category here"
              />
            </div>

            <div>
              <label className="block font-semibold">Brand</label>
              <input
                type="text"
                className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3"
                placeholder="Type Brand name here"
              />
            </div>
          </div>

          {/* Row: SKU / Stock */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">SKU</label>
              <input
                type="text"
                className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3"
                placeholder="FOX-2983"
              />
            </div>

            <div>
              <label className="block font-semibold">Stock quantity</label>
              <input
                type="number"
                className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3"
                placeholder="1258"
              />
            </div>
          </div>

          {/* Row: Prices */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Regular Price</label>
              <input
                type="text"
                className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3"
                placeholder="$500"
              />
            </div>

            <div>
              <label className="block font-semibold">Sale Price</label>
              <input
                type="text"
                className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3"
                placeholder="$450"
              />
            </div>
          </div>

          {/* Row: Tax */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Tax Status</label>
              <select className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3">
                <option>Taxable</option>
                <option>None</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold">Tax Class</label>
              <select className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3">
                <option>Standard</option>
                <option>Reduced</option>
              </select>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block font-semibold">Tag</label>
            <input
              type="text"
              className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3"
              placeholder="smartwatch, Apple, etc."
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg">
              Update
            </button>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
              Delete
            </button>
            <button className="bg-gray-300 text-black px-6 py-3 rounded-lg">
              Cancel
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Main Product Image */}
          <div className="border border-gray-200 rounded-xl p-6 flex justify-center">
            <Image
              src="/product.png"
              alt="Product"
              width={100}
              height={100}
              className="w-60 h-auto object-cover"
            />
          </div>

          {/* Product Gallery */}
          <div>
            <h3 className="font-semibold mb-3">Product Gallery</h3>

            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center bg-slate-50"
            >
              <p className="text-gray-500">
                Drop your image here, or{" "}
                <button className="text-purple-600 underline">browse</button>
              </p>
              <p className="text-sm text-gray-400">
                JPG, PNG and GIF files are allowed
              </p>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 space-y-3">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-3 flex items-center gap-4 bg-white"
                >
                  <Image
                    src={item.img}
                    alt="thumb"
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded object-cover"
                  />

                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <div className="w-full bg-gray-200 h-2 rounded mt-1">
                      <div
                        className="bg-green-500 h-2 rounded"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {item.progress === 100 ? (
                    <span className="text-green-600 bg-green-300 rounded-full text-xl"><CiCircleCheck /></span>
                  ) : (
                    <span className="text-red-600 bg-red-300 rounded-full text-xl cursor-pointer">
                      <IoIosCloseCircleOutline />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

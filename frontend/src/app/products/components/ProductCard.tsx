'use client';

import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="w-full  bg-white rounded-md border hover:shadow-lg transition duration-300 cursor-pointer">
      <div className="flex justify-between items-start px-3 pt-3">
        <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded-md">
          ⭐ {product.ratings?.toFixed(1) ?? '0.0'}
        </span>
        <FaHeart className="text-gray-500 hover:text-red-500 cursor-pointer" />
      </div>

      <div className="w-full p-3">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-contain"
        />
      </div>

      <div className="px-3 pb-3">
        <h3 className="text-sm font-medium text-gray-800 truncate">{product.name}</h3>

        <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>

        <div className="text-sm mt-1">
          <span className="font-semibold text-black">₹ {product.price?.toLocaleString()}</span>
        </div>

        <div className="text-xs mt-1 text-green-600">
          In stock: {product.stock ?? 0}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/app/products/components/ProductCard';
import ImageBanner from '../../earring/components/ImageBanner';

export default function Fashion() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/api/products/Ring/Engagement') 
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <ImageBanner />
      <div className="p-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product: any, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        )}
      </div>
      </div>
)
}
'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/app/products/components/ProductCard';
import ImageBanner from '../components/ImageBanner';

export default function Dangler() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products/Earrings/Dangles');
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err: any) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-10">Loading products...</div>;
  if (error) return <div className="text-center py-10 text-red-600">Error: {error}</div>;

  return (
    <div>
      <ImageBanner />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {products.length > 0 ? (
          products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No products found.</div>
        )}
      </div>
    </div>
  );
}

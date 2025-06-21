'use client';

import Image from 'next/image';

export default function ImageBanner() {
  return (
    <div className="w-full flex justify-center items-center text-white py-6">
      <Image
        src="/images/banner.png"
        alt="Engagement Banner"
        width={1600}
        height={700}
        className="w-full"
        priority
      />
    </div>
  );
}

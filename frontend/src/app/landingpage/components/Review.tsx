'use client';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        name: 'Shilpa Patil',
        review:
            'I was skeptical on ordering from them at first, but I loved the designs and so ordered it. The studs I ordered are gorgeous. And they have all the certificates any jewellery company would provide. I am buying again from here for my Diwali...',
    },
    {
        name: 'Nimrit Shetty',
        review:
            'Wedding collection is something that I fell head over heels for. As a bride I was looking for green diamonds and also in my budget range. And to my surprise, maximum shopping happened with their video chat support. Their team is very...',
    },
    {
        name: 'Aarti Verma',
        review:
            'I am very happy with the support and customer care. They resolved my ring resizing quickly and were very patient on call. Great experience overall!',
    },
    {
        name: 'Rhea Kapoor',
        review:
            'The product quality is top notch and delivery was fast. Their return policy is simple and honest. Definitely recommended!',
    },
    {
        name: 'Kunal Joshi',
        review:
            'The gentlemen’s edit is simply elegant and classy. I wore it to my engagement party and got tons of compliments.',
    },
    {
        name: 'Sneha Agarwal',
        review:
            'Their designs are elegant yet modern. I’ve already placed my second order after trying out their pendants. Beautiful work!',
    },
    {
        name: 'Varun Mehta',
        review:
            'Super happy with the quality and customer service. The online video consultation was very helpful before placing the order.',
    },
];

export default function CustomerReviews() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -500 : 500,
            behavior: 'smooth',
        });
    };

    return (
        <section className="py-12 text-center text-black">
            <h2 className="text-3xl font-bold mb-6 font-serif">Customer Reviews</h2>

            <div className="relative w-full overflow-hidden px-56">
                <button
                    className="absolute left-0 top-1/2 translate-x-[200px] z-10 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300 cursor-pointer"
                    onClick={() => scroll('left')}
                    title="Scroll left"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    className="absolute right-0 top-1/2 -translate-x-[200px] z-10 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300 cursor-pointer"
                    onClick={() => scroll('right')}
                    title="Scroll right"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>


                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 px-12 py-4 scroll-smooth"
                >
                    {reviews.map((r, idx) => (
                        <div
                            key={idx}
                            className="min-w-[300px] max-w-md bg-black text-white p-6 rounded-xl flex-shrink-0"
                        >
                            <p className="text-sm sm:text-base leading-relaxed mb-4">{r.review}</p>
                            <p className="font-semibold">{r.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

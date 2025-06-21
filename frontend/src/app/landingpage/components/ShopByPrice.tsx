import Image from "next/image";

const items = [
    {
        image: "https://geer.in/cdn/shop/collections/Under_9999.webp?v=1741158836&width=1070", // Save your image in public/images
        label: "Under ₹9999",
    },
    {
        image: "https://geer.in/cdn/shop/collections/Under_14999.webp?v=1741158889&width=1070",
        label: "Under ₹14999",
    },
    {
        image: "https://geer.in/cdn/shop/collections/Under_24999.webp?v=1741158931&width=1070",
        label: "Under ₹24999",
    },
    {
        image: "https://geer.in/cdn/shop/collections/Under_39999.jpg?v=1741158983&width=1070",
        label: "Under ₹39999",
    },
];

export default function ShopByPrice() {
    return (
        <section className="my-12 px-4 md:px-16">
            <h2 className="text-center text-3xl font-serif font-semibold mb-8 text-black">Shop By Price</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center cursor-pointer px-20">
                {items.map((item, index) => (
                    <div key={index} className="text-center">
                        <img
                            src={item.image}
                            alt={item.label}
                            width={250}
                            height={250}
                            className="rounded-md object-cover w-full h-auto"
                        />
                        <p className="mt-2 text-[17px] text-black font-poppins hover:underline cursor-pointer">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

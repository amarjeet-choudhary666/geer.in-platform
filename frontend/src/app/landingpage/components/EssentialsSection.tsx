

const essentials = [
    {
        title: "Traditional Wear",
        image: "https://geer.in/cdn/shop/collections/Traditional_Wear.webp?v=1741159290&width=1070",
    },
    {
        title: "Office Wear",
        image: "https://geer.in/cdn/shop/collections/Office_Wear.webp?v=1741159223&width=1070",
    },
    {
        title: "Party Wear",
        image: "https://geer.in/cdn/shop/collections/Party_Wear.webp?v=1741159253&width=1070",
    },
    {
        title: "Everyday Wear",
        image: "https://geer.in/cdn/shop/collections/Everyday_Wear.webp?v=1741159191&width=1070",
    },
];

export default function EssentialsSection() {
    return (
        <section className="py-12 px-6 text-center text-black">
            <h2 className="text-3xl font-semibold font-serif mb-10">Essentials for You</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {essentials.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full h-60 rounded-[3rem] overflow-hidden group cursor-pointer"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

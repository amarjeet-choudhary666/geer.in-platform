const collections = [
    {
        title: "EVERYDAY ROMANCE",
        image: "http://geer.in/cdn/shop/collections/valentine_collection.webp?v=1741158446&width=1070",
    },
    {
        title: "WEDDING SEASON READY",
        image: "http://geer.in/cdn/shop/collections/Wedding_colletion.webp?v=1741158488&width=1070",
    },
    {
        title: "RINGS – THAT SAY YES!",
        image: "https://geer.in/cdn/shop/files/engagement_ring_collection.webp?v=1741158587&width=1070",
    },
    {
        title: "THE GENTLEMAN'S EDIT",
        image: "https://geer.in/cdn/shop/files/Men_s_collection.webp?v=1741158518&width=1070",
    },
]

export default function ExploreCollections() {
    return (
        <section className="py-4 text-center text-black">
            <h2 className="text-3xl font-bold mb-10 font-serif">Explore Collections</h2>

            <div className="flex flex-wrap justify-center gap-8 px-6">
                {collections.map((item) => (
                    <div
                        key={item.title}
                        className="flex flex-col items-center space-y-4 hover:cursor-pointer group"
                    >
                        <div className="w-60 h-60 rounded-full overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <p className="text-sm  transition-all duration-300 group-hover:underline">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

const categories = [
    {
        name: "RINGS",
        image: "https://geer.in/cdn/shop/files/Rings.webp?v=1741156953&width=1070",
        description: "A touch of grace, a lifetime of sparkle"
    },
    {
        name: "EARRINGS",
        image: "https://geer.in/cdn/shop/files/Earring.webp?v=1741157271&width=1070",
        description: "Light up your look, one shimmer at a time"
    },
    {
        name: "PENDANTS",
        image: "https://geer.in/cdn/shop/files/Pendants.webp?v=1741157319&width=1070",
        description: "Grace that rests near your heart"
    },
    {
        name: "BRACELETS",
        image: "https://geer.in/cdn/shop/files/Bracelets.webp?v=1741157408&width=1070",
        description: "Wrapped in elegance, worn with grace"
    },
    {
        name: "BANGLES",
        image: "https://geer.in/cdn/shop/files/Bangles.webp?v=1741157414&width=1070",
        description: "Elegance that echoes with every move"
    },
    {
        name: "NECKLACES",
        image: "https://geer.in/cdn/shop/files/Necklaces.webp?v=1741157129&width=1070",
        description: "Where beauty rests close to your heart"
    },
]




export default function ShopByCategory() {
    return (
        <section className="py-4 text-center text-black">
            <h2 className="text-3xl font-serif font-bold mb-8">Shop By Category</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16 font-poppins">
                {categories.map((cat) => (
                    <div
                        key={cat.name}
                        className="relative group overflow-hidden cursor-pointer"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />


                        <div className="absolute inset-0 flex items-center justify-center  px-5 hover:backdrop-blur-md">
                            <div className="opacity-0 group-hover:opacity-100 transition duration-300  bg-white/30 px-4 py-2 rounded">
                <span className="text-black font-poppins font-bold tracking-wide text-sm sm:text-base">
                  {cat.name}
                    <div className="font-light" >
                        {cat.description}
                    </div>
                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

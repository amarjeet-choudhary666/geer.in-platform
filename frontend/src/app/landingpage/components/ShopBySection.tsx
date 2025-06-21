// components/ShopBySection.js

const shapes = [
    { name: "Round", icon: "https://geer.in/cdn/shop/collections/round.webp?v=1745760030&width=1070" },
    { name: "Oval", icon: "https://geer.in/cdn/shop/collections/oval.png?v=1745760292&width=1070" },
    { name: "Cushion", icon: "https://geer.in/cdn/shop/collections/cushion.png?v=1745760311&width=1070" },
    { name: "Emerald", icon: "https://geer.in/cdn/shop/collections/emerald.png?v=1745760249&width=1070" },
    { name: "Pear", icon: "https://geer.in/cdn/shop/collections/pear.png?v=1745760183&width=1070" },
    { name: "Heart", icon: "https://geer.in/cdn/shop/collections/heart.png?v=1745760265&width=1070" },
    { name: "Radiant", icon: "https://geer.in/cdn/shop/collections/radiant.png?v=1745760334&width=1070" },
    { name: "Princess", icon: "https://geer.in/cdn/shop/collections/princess.png?v=1745760215&width=1070" },
    { name: "Marquise", icon: "https://geer.in/cdn/shop/collections/marquise.png?v=1745760234&width=1070" },
    { name: "Asscher", icon: "https://geer.in/cdn/shop/collections/asscher.png?v=1745760365&width=1070" },
]

export default function ShopBySection() {
    return (
        <section className="py-8 text-center text-black">
            <h2 className="text-3xl font-serif mb-12 font-bold">Shop By Shape</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-6 justify-items-center px-4 sm:px-10 md:px-20 lg:px-36">
                {shapes.map((shape) => (
                    <div
                        key={shape.name}
                        className="flex flex-col items-center space-y-2 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    >
                        <img
                            src={shape.icon}
                            alt={shape.name}
                            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                        />
                        <span className="text-sm">{shape.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

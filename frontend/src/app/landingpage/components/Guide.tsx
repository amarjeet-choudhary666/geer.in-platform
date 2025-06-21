const guides = [
    {
        title: "Find Your Ring Size.",
        image: "https://cdn.shopify.com/s/files/1/0695/7524/6002/files/Geer_website_banner_2-1.png?v=1749924469", // make sure this is in your public/images folder
        link: "#",
    },
    {
        title: "Jewellery Care Guide",
        image: "https://cdn.shopify.com/s/files/1/0695/7524/6002/files/Geer_website_banner_2-2.png?v=1749924469", // make sure this is in your public/images folder
        link: "#",
    },
];

export default function Guide() {
    return (
        <div className="flex justify-center gap-6 py-10 flex-wrap">
            {guides.map((guide, idx) => (
                <div
                    key={idx}
                    className="w-[300px] h-[130px] bg-gray-100 rounded-2xl border border-black flex items-center px-4 space-x-4 shadow-sm"
                >
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <img
                            src={guide.image}
                            alt={guide.title}
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center text-black">
                        <p className="font-medium text-sm mb-2">{guide.title}</p>
                        <a
                            href={guide.link}
                            className="text-sm underline underline-offset-4 hover:text-blue-500 transition"
                        >
                            View
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

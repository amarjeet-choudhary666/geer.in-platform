import Image from "next/image";

const Images = [
    {
        imagePath: "/images/Free_14_Days_Return (3).svg",
    },
    {
        imagePath: "/images/Free_Shipping_Both_Ways.svg",    },
    {
        imagePath: "/images/Assured_Buy_Back.svg",
    },
    {
        imagePath: "/images/Certified_Jewellery.svg",
    },
];

export default function Enquiry() {
    return (
        <div className="w-full py-6">

            <div className="w-full flex justify-center">
                <img
                    src="https://geer.in/cdn/shop/files/Geer_website_banner_4-1.png?v=1749924487&width=1500"
                    alt="enquiry banner"
                    className="w-[70%] rounded-xl"
                />
            </div>


            <div className="flex justify-between items-center px-80 py-6">
                {Images.map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <Image
                            src={item.imagePath}
                            alt={`info-icon-${index}`}
                            width={130}
                            height={130}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

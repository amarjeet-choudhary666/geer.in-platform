"use client";

import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "ABOUT",
    links: ["OUR STORY", "BEYOND CONFLICT FREE", "CUSTOMER REVIEW"],
  },
  {
    title: "POLICIES",
    links: ["TERMS & CONDITIONS", "PRIVACY POLICY", "FAQ", "RETURN & REFUND", "SHIPPING POLICY"],
  },
  {
    title: "EDUCATION",
    links: ["DIAMOND BUYING GUIDE", "LAB GROWN DIAMONDS", "RING SIZE CHART", "JEWELLERY CARE", "BLOG"],
  },
];

export default function Footer() {
  return (
      <footer className="bg-black text-white pt-12 pb-6 px-4 md:px-20 text-sm">
        <div className="max-w-7xl mx-auto space-y-12">


          <section className="text-center">
            <h2 className="text-lg font-serif mb-4">Subscribe To Newsletter</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-xl mx-auto border-b border-white pb-2">
              <div className="flex items-center w-full">
                <MdOutlineEmail className="text-2xl mr-2" />
                <Input
                    placeholder="Your Email"
                    className="w-full border-none bg-black text-white placeholder-white focus:outline-none"
                />
              </div>
              <Button className="text-white font-normal" variant="link">
                Subscribe
              </Button>
            </div>
          </section>

          {/* Main Footer Content */}
          <section className="flex flex-col md:flex-row justify-between gap-12">


            <div className="max-w-sm">
              <img
                  src="https://geer.in/cdn/shop/files/logo.png_white.png?v=1746534976&width=100"
                  alt="Geer Logo"
                  className="mb-6"
              />
              <p>2nd floor, Rajhans House, opp. Nayara petrol pump, Varachha road, Surat 395006</p>
              <p className="mt-2">Mon - Sat from 9:00 AM - 7:00 PM IST</p>
              <p className="mt-2">Email: <span className="font-bold">contact@geer.in</span></p>
              <p className="mt-2">Phone: <span className="font-bold">+91 9773114418</span></p>
              <div className="flex gap-4 mt-4 text-xl">
                <FaFacebookF className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
              </div>
            </div>

            {/* Footer Links using .map() */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-start w-full">
              {footerLinks.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-white font-semibold mb-4">{section.title}</h2>
                    <ul className="space-y-2">
                      {section.links.map((link, idx) => (
                          <li key={idx} className="hover:underline cursor-pointer">
                            {link}
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </section>


          <div className="border-t border-white pt-4 text-center">
            <p className="text-gray-300">
              © 2025, <span className="font-semibold text-white">Geer</span>.
            </p>
          </div>
        </div>
      </footer>
  );
}

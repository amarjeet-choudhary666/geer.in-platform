'use client';

import { Button } from '@/components/ui/button';
import { useState, useRef } from 'react';
import { FaUser, FaSearch, FaShoppingCart, FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const menuItems = [
  {
    name: 'RINGS',
    route: '/products/rings',
    subItems: [
      { name: 'Wedding Rings', route: '/products/rings/wedding' },
      { name: 'Engagement Rings', route: '/products/rings/engagement' },
      { name: 'Fashion Rings', route: '/products/rings/fashion' },
    ],
  },
  {
    name: 'EARRINGS',
    route: '/products/earring',
    subItems: [
      { name: 'Studs', route: '/products/earring/studs' },
      { name: 'Hoops', route: '/products/earring/hoops' },
      { name: 'Danglers', route: '/products/earring/dangler' },
    ],
  },
  {
    name: 'Products',
    route: '/products',
    subItems: [],
  },
  {
    name: 'CONTACT',
    route: '/landingpage/contact',
    subItems: [],
  },
  {
    name: 'ABOUT',
    route: '/landingpage/about',
    subItems: [],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  

  return (
    <header className="w-full bg-white shadow-md text-black">
      <div className="max-w-[1740px] mx-auto px-6 flex justify-between items-center py-2">
        <div className="flex-shrink-0 cursor-pointer" onClick={() => router.push('/')}>
          <img
            src="https://geer.in/cdn/shop/files/logo.png?v=1740073087&width=600"
            alt="Geer Logo"
            height={100}
            width={110}
            className="object-contain"
          />
        </div>

        <ul className="hidden lg:flex space-x-6 text-sm font-medium cursor-pointer">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative group "
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => router.push(item.route)}
                className={`flex items-center hover:text-gray-700 cursor-pointer ${
                  activeDropdown === item.name ? 'text-gray-900 underline '  : ''
                }`}
              >
                {item.name}
                {item.subItems.length > 0 && (
                  <FaChevronDown
                    className={`ml-1 transition-transform duration-300  ${
                      activeDropdown === item.name ? 'rotate-180 ' : ''
                    }`}
                  />
                )}
              </button>

              {item.subItems.length > 0 && (
                <div
                  className={`absolute  left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10 transition-all duration-300 ease-in-out  ${
                    activeDropdown === item.name ? 'opacity-100 visible ' : 'opacity-0 invisible '
                  }`}
                >
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.name}
                      onClick={() => router.push(subItem.route)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex space-x-4 items-center">
          <Button variant="ghost" size="icon">
            <FaSearch />
          </Button>
          <Button variant="ghost" size="icon">
            <FaUser />
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon">
              <FaShoppingCart />
            </Button>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
          <Button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl">
            ☰
          </Button>
        </div>
      </div>

      {menuOpen && (
        <ul className="lg:hidden flex flex-col space-y-3 px-4 py-4 bg-white shadow-md">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className="flex items-center w-full justify-between py-2"
                onClick={() => {
                  if (item.subItems.length === 0) {
                    router.push(item.route);
                    setMenuOpen(false);
                  } else {
                    setActiveDropdown(activeDropdown === item.name ? null : item.name);
                  }
                }}
              >
                <span>{item.name}</span>
                {item.subItems.length > 0 && (
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>
              {activeDropdown === item.name && item.subItems.length > 0 && (
                <ul className="pl-4 py-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <button
                        onClick={() => {
                          router.push(subItem.route);
                          setMenuOpen(false);
                        }}
                        className="block w-full text-left py-1 hover:underline"
                      >
                        {subItem.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

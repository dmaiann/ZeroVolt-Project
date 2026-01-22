// Footer.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { BsGooglePlay } from "react-icons/bs";

export default function Footer() {
  const latestProducts = [
    {
      name: "Smartphone X12",
      price: "$899",
      image: "./images/products/iphone.jpeg",
    },
    {
      name: "Laptop Pro 15",
      price: "$1299",
      image: "./images/products/laptop.jpeg",
    },
    {
      name: "Smartwatch Z",
      price: "$299",
      image: "./images/products/smart.jpeg",
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding & Newsletter */}
        <div>
          <h2 className="text-2xl font-bold text-black">ZeroVolt</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Store elektronik modern dengan teknologi terbaru.
          </p>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">
              Subscribe Newsletter
            </label>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button className="bg-black hover:bg-gray-800 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Smartphones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Laptops
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Smart Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Accessories
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Latest Products</h3>
            <TooltipProvider>
              <div className="flex gap-2">
                {latestProducts.map((product, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.price}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Warranty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Returns
              </a>
            </li>
          </ul>
        </div>

        {/* Social & App */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Twitter />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Instagram />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Youtube />
            </a>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Download App</h3>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" className="flex items-center gap-2">
                <IoLogoAppleAppstore />
                App Store
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <BsGooglePlay />
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 dark:border-gray-700 text-center py-6 mt-6 text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ZeroVolt. All rights reserved.
      </div>
    </footer>
  );
}

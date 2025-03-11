'use client';
import NavLogo from "@/assets/icons/food-icon.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaAmazon } from 'react-icons/fa';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    const [email, setEmail] = useState('');

    return (
        <>
            <footer className="bg-gray-100 py-10 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <Link href="/ads" className="text-2xl font-bold flex items-center">
                            <Image src={NavLogo} alt="Logo" width={50} height={50} />
                            <span>Organic</span>
                        </Link>
                        <div className="flex space-x-3 mt-4">
                            <div className="p-2 border border-[#747474] rounded-[8px] hover:bg-blue-600 cursor-pointer">
                                <FaFacebookF className="text-blue-700 hover:text-white cursor-pointer" />
                            </div>
                            <div className="p-2 border border-[#747474] rounded-[8px] hover:bg-blue-400 cursor-pointer">
                                <FaTwitter className="text-blue-500 hover:text-white cursor-pointer" />
                            </div>
                            <div className="p-2 border border-[#747474] rounded-[8px] hover:text-white hover:bg-pink-600 cursor-pointer">
                                <FaInstagram className="text-pink-500 hover:text-white cursor-pointer" />
                            </div>
                        </div>

                    </div>

                    {/* Links */}
                    <div className="flex flex-col">
                        <h3 className="font-semibold">Organic</h3>
                        <ul className="mt-3 space-y-2 text-gray-600 leading-7">
                            <Link href="#"><li>About us</li></Link>
                            <Link href="#"><li>Conditions</li></Link>
                            <Link href="#"><li>Our Journals</li></Link>
                            {/* <Link href="#"><li>Careers</li></Link> */}
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="font-semibold">Customer Service</h3>
                        <ul className="mt-3 space-y-2 text-gray-600 leading-7">
                            <Link href="#"><li>FAQ</li></Link>
                            <Link href="#"><li>Contact</li></Link>
                            <Link href="/blog"><li>Blogs</li></Link>
                            <Link href="#"><li>Privacy Policy</li></Link>
                            <Link href="#"><li>Returns & Refunds</li></Link>
                            <Link href="#"><li>Delivery Information</li></Link>
                        </ul>
                    </div>

                    {/* Subscription */}
                    <div className="flex flex-col">
                        <h3 className="font-semibold">Subscribe Us</h3>
                        <p className="mt-3 text-gray-600 leading-7">Subscribe now to receive the latest updates and special offers from us.</p>
                        <div className="mt-3 flex">
                            <input
                                type="email"
                                className="p-2 border rounded-l-md w-full"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="w-full bg-green-600 py-5 text-center">
                <span className="text-md text-white text-center">© 2025 Organic. All rights reserved.</span>
            </footer>
        </>
    );
}

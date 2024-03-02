"use client";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {useEffect, useState} from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [header, setHeader] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const linkStyle = "ml-10 text-xl font-bold text-blue-900";
    const underlineStyle = "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900";

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        if(window.scrollY >= lastScrollY && window.scrollY >= 50) {
            setHeader(true);
        } else {
            setHeader(false);
        }

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [handleScroll, lastScrollY])

    return(
        <nav className={`fixed w-full transition-transform duration-400 transform h-24 dark:bg-slate-800 dark:text-white ${header ? 'md:-translate-y-full' : 'md:translate-y-0'}`}>
            <div className={"flex justify-between items-center h-full w-full px-4 2xl:px-16"}>
                <div>
                    <Link href={"/"}>
                        Insert Image Here
                    </Link>
                </div>
                <div className={"hidden md:flex"}>
                    <ul className={"hidden sm:flex"}>
                        <Link href={"/store"} className={"group transition duration-500"}>
                            <li className={linkStyle}>
                                Store
                                <span className={underlineStyle}></span>
                            </li>
                        </Link>
                        <Link href={"/products"} className={"group transition duration-500"}>
                            <li className={linkStyle}>
                                Products
                                <span className={underlineStyle}></span>
                            </li>
                        </Link>
                        <Link href={"/about"} className={"group transition duration-500"}>
                            <li className={linkStyle}>
                                About Us
                                <span className={underlineStyle}></span>
                            </li>
                        </Link>
                        <Link href={"/contact"} className={"group transition duration-500"}>
                            <li className={linkStyle}>
                                Contact
                                <span className={underlineStyle}></span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className={"md:hidden cursor-pointer pl-24"}>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            <div className={menuOpen
                ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] padding-10 ease-in-out duration-500 dark:text-white dark:bg-slate-400"
                : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500 h-full dark:text-white dark:bg-slate-400"}
            >
                <div className={"flex w-full items-center justify-end"}>
                    <div onClick={handleNav} className={"cursor-pointer p-10"}>
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <div className={"flex-col py-4"}>
                    <ul className={""}>
                        <Link href={"/store"} onClick={handleNav}>
                            <li className={linkStyle}>
                                Store
                            </li>
                        </Link>
                        <Link href={"/products"} onClick={handleNav}>
                            <li className={linkStyle}>
                                Products
                            </li>
                        </Link>
                        <Link href={"/about"} onClick={handleNav}>
                            <li className={linkStyle}>
                                About Us
                            </li>
                        </Link>
                        <Link href={"/contact"} onClick={handleNav}>
                            <li className={linkStyle}>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

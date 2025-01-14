import React from "react";
import Link from "next/link";

const Navbar = ({ blok }) => {
    const { title, cta_button_text } = blok;
    return (
        <nav
            className={
                "container relative mx-auto flex w-full flex-wrap items-center justify-between p-8 xl:px-0"
            }
        >
            <div className={"flex w-full flex-wrap items-center justify-between lg:w-auto"}>
                <Link href={"/"}>
                    <span className={"text-2xl font-medium text-gray-100"}>{title}</span>
                </Link>
            </div>

            <div className={"nav__item mr-3 hidden items-center space-x-4 lg:flex"}>
                <Link href={"/zh"}>
                    Chinese
                </Link>
                <Link href={"/en"}>
                    English
                </Link>
                <a
                    href={"#contact"}
                    className={"rounded-md bg-indigo-600 px-6 py-2 text-white md:ml-5"}
                >
                    {cta_button_text}
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

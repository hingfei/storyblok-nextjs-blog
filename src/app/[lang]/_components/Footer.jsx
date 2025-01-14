import React from "react";

const Footer = ({ blok }) => {
    const text = blok.text;
    return (
        <footer
            className={
                "mb-10 mt-5 flex w-full flex-col items-center justify-center pt-10 text-center"
            }
        >
            {text}
        </footer>
    );
};

export default Footer;

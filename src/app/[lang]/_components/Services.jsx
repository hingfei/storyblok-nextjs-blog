import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Services = ({ blok }) => {
    const { title, service_cards } = blok;
    return (
        <section {...storyblokEditable(blok)} className={"pb-32 pt-24"}>
            <h2 className={"mb-20 text-center text-4xl font-bold"}>{title}</h2>
            <div className={"mx-auto max-w-screen-xl px-4 py-4"}>
                <div
                    className={
                        "place-items-center space-y-8 sm:gap-6 lg:grid lg:grid-cols-2 lg:space-y-0 xl:gap-10"
                    }
                >
                    {service_cards.map((service) => (
                        <ServiceCard service={service} key={service._uid} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

const ServiceCard = ({ service }) => {
    const { title, subtitle, price, description } = service;
    return (
        <>
            <div className="flex max-w-lg flex-col rounded-lg border border-gray-600 bg-neutral-800 p-6 text-center text-white shadow sm:mx-auto lg:mx-1 xl:p-8">
                <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
                <p className="text-xl font-light text-gray-400">{subtitle}</p>
                <p className="mt-4 text-xl">{description}</p>
                <div className="my-8 flex justify-center">
                    <span className="mr-2 text-5xl font-extrabold">
                        {Number(price).toLocaleString("en-US", {
                            style: "currency",
                            currency: "MYR",
                        })}
                    </span>
                </div>
            </div>
        </>
    );
};

import React from "react";
import Container from "@/app/[lang]/_components/Container";
import { storyblokEditable } from "@storyblok/react";

const Faq = ({ blok }) => {
    const { title, faq_cards } = blok;

    return (
        <section {...storyblokEditable(blok)} className={"bg-zinc-950 pb-32 pt-24"}>
            <Container>
                <h2 className={"mb-20 text-center text-4xl font-bold"}>{title}</h2>
                <div className={"grid gap-10 lg:grid-cols-2"}>
                    {faq_cards.map((faq) => (
                        <FaqCard faq={faq} key={faq._uid} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Faq;

const FaqCard = ({ faq }) => {
    const { question, answer } = faq;

    return (
        <div className={"lg:col-span-2 xl:col-auto"}>
            <div
                className={
                    "flex h-full w-full flex-col justify-between rounded-2xl bg-neutral-800 px-5 py-5"
                }
            >
                <h3 className={"pb-2 text-2xl text-gray-400"}>{question}</h3>
                <p className={"text-xl leading-normal"}>{answer}</p>
            </div>
        </div>
    );
};

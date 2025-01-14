import React from "react";
import Image from "next/image";
import Container from "@/app/[lang]/_components/Container";

const Testimonials = ({ blok }) => {
    const { title, testimonial_cards } = blok;
    return (
        <section className={"bg-zinc-950 pb-32 pt-24"}>
            <Container>
                <h2 className={"mb-20 text-center text-4xl font-bold"}>{title}</h2>
                <div className={"grid gap-10 lg:grid-cols-2"}>
                    {testimonial_cards.map((testimonial) => (
                        <TestimonialCard testimonial={testimonial} key={testimonial.name} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;

const TestimonialCard = ({ testimonial }) => {
    const { image, name, comment } = testimonial;

    return (
        <div className="lg:col-span-2 xl:col-auto">
            <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-neutral-800 px-5 py-5">
                <p className="text-xl leading-normal">{comment}</p>

                <Avatar image={image} name={name} />
            </div>
        </div>
    );
};

const Avatar = ({ image, name }) => {
    return (
        <div className="mt-3 flex items-center space-x-3">
            <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                    src={image.filename}
                    width="100"
                    height="100"
                    alt={image.alt}
                    className={"h-full w-full object-cover"}
                />
            </div>
            <div>
                <div className="text-lg font-medium">{name}</div>
            </div>
        </div>
    );
};

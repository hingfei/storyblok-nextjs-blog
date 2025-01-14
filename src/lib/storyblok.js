import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import LandingPage from "@/app/[lang]/_components/LandingPage";
import Navbar from "@/app/[lang]/_components/Navbar";
import Hero from "@/app/[lang]/_components/Hero";
import Services from "@/app/[lang]/_components/Services";
import Testimonials from "@/app/[lang]/_components/Testimonials";
import Contact from "@/app/[lang]/_components/Contact";
import Faq from "@/app/[lang]/_components/Faq";
import Footer from "@/app/[lang]/_components/Footer";

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {
        "landing_page": LandingPage,
        "navigation": Navbar,
        "hero": Hero,
        "services": Services,
        "testimonials": Testimonials,
        "contact": Contact,
        "faq": Faq,
        "footer": Footer,
    },
})

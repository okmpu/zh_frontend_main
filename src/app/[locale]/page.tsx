import About from "@/components/app/home/About";
import AcademicEducation from "@/components/app/home/Academic";
import Carousel from "@/components/app/home/Carousel";
import Contact from "@/components/app/home/Contact";
import Events from "@/components/app/home/Events";
import Journals from "@/components/app/home/Journals";
import Partners from "@/components/app/home/Partners";
import OurProgramms from "@/components/app/home/Programs";
import Publics from "@/components/app/home/Publics";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";


type Props = {
    params: {
        locale: string
    }
}


export const metadata: Metadata = {
    title: 'Zhanibekov university',
    description: 'Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті',
}


async function getMainData() {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/`, { cache: "no-store" })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export default async function Home({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);
    const data = await getMainData();
    const { 
        headliners, 
        programs, 
        academics,
        news, announcements, events
    } = data;

    return (
        <div>
            {/* Offer */}
            <Carousel headliners={headliners} />
            
            {/* Our programms */}
            <OurProgramms programs={programs} />

            {/* Publics */}
            <Publics news={news} announcements={announcements} />

            {/* Events */}
            <Events events={events} />

            {/* Journals */}
            <Journals />

            {/* About */}
            <About />
            
            {/* Academic education */}
            <AcademicEducation academics={academics} />

            {/* Partners */}
            <Partners />

            {/* Contact */}
            <Contact />
        </div>
    );
}

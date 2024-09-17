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


type HomProps = {
    params: {
        locale: string
    }
}


// Metadata
export async function generateMetadata({ params, }: HomProps): Promise<Metadata> {
    const currentLocale = params.locale;

    return {
        title: 
            currentLocale === "ru" ? 
                "Главная - Zhanibekov university" 
            : currentLocale === "en" ? 
                "Home page - Zhanibekov university" 
            : 
                "Басты бет - Zhanibekov university"
            ,
        description: 
            currentLocale === "ru" ?
                "Южно-Казахстанский педагогический университет имени У. Жанибекова"
            : currentLocale === "en" ?
                "South Kazakhstan Pedagogical University named after U. Zhanibekov"
            :    
                "Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті"
            ,
    }
}


// Actions
async function getMainData() {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/`, { cache: "no-store" })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


// Page
export default async function Home({ params: { locale } }: HomProps) {
    unstable_setRequestLocale(locale);
    const data = await getMainData();
    const {
        headliners, 
        programs, 
        academics,
        news, announcements, events, 
        journals,
        partners
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
            {events.length > 0 && <Events events={events} />}

            {/* Journals */}
            {journals.length > 0 && <Journals journals={journals} />}

            {/* About */}
            <About />
            
            {/* Academic education */}
            <AcademicEducation academics={academics} />

            {/* Partners */}
            {partners.length > 0 && <Partners partners={partners} />}

            {/* Contact */}
            <Contact />
        </div>
    );
}

"use client"
import { Atom, FlaskConical, Globe, GraduationCap, SquareArrowOutUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';


function GetIcon({ slug, }: { slug: string }) {
    if (slug === "bachelor") {
        return <GraduationCap size={64} strokeWidth={1} />
    } else if (slug === "magistracy") {
        return <Atom size={64} strokeWidth={1} />
    } else {
        return <FlaskConical size={64} strokeWidth={1} />
    }
}


export default function OurProgramms({ programs, }: { programs: any }) {
    const currentLocal = useLocale();
    const t = useTranslations("HomePage");
    
    return (
        <div className="container grid items-center gap-10 mx-auto py-10">
            <div className="max-w-xl w-full text-center mx-auto">
                <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-foreground">
                    {t("admission.title")}
                </h1>
                <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                <span>{t("admission.sub_title")}</span>
            </div>

            <div className="w-full">
                <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {programs.map((item: any) => (
                        <Link
                            key={item.id}
                            href={`/university/admission/${item.slug}`} 
                            className="border rounded-lg flex flex-col justify-center items-center gap-2 p-5 md:p-10 transition-all text-secondary bg-primary hover:bg-secondary hover:text-foreground"
                        >
                            {GetIcon({slug: item.slug})}
                            <h1 className="text-base md:text-xl font-semibold">
                                {currentLocal === "ru" ? item.name_ru : currentLocal === "en" ? item.name_en : item.name_kk}
                            </h1>
                        </Link>
                    ))}
                    <Link
                        href={"https://talapker.okmpu.edu.kz/"}
                        target="_blank"
                        className="relative border rounded-lg flex flex-col justify-center items-center gap-2 p-5 md:p-10 transition-all text-secondary bg-primary hover:bg-secondary hover:text-foreground"
                    >
                        <SquareArrowOutUpRight size={20} strokeWidth={1} className="absolute top-2 right-2"/>
                        <Globe size={64} strokeWidth={1} />
                        <h1 className="text-base md:text-xl font-semibold">{t("admission.link")}</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}
"use client"
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";


const reports: {id: number, count: number, name: string, name_ru: string, name_en: string }[] = [
    {
        id: 1,
        count: 6598,
        name: "Студент",
        name_ru: "Студент",
        name_en: "Student"
    },
    {
        id: 2,
        count: 2773,
        name: "Грант",
        name_ru: "Грант",
        name_en: "Grant"
    },
    {
        id: 3,
        count: 6047,
        name: "Бакалавр",
        name_ru: "Бакалавр",
        name_en: "Bachelor"
    },    
    {
        id: 4,
        count: 518,
        name: "Магистрант",
        name_ru: "Магистрант",
        name_en: "Magister"
    },
    {
        id: 5,
        count: 33,
        name: "Доктарант",
        name_ru: "Доктарант",
        name_en: "Doctoral"
    },

]

export default function About() {
    const currentLocal = useLocale();
    const t = useTranslations("HomePage");

    return (
        <div className="border-t">
            <div className="container mx-auto py-10 grid gap-10">
                <div className="max-w-xl w-full text-center mx-auto">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-foreground">
                        {t("about.title")}
                    </h1>
                    <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                    <span>{t("about.sub_title")}</span>
                </div>

                <div className="flex gap-10 flex-wrap lg:flex-nowrap">
                    <div className="max-w-xl">
                        <h1 className="text-xl font-bold text-amber-500">
                            {t("about.content.title")}
                        </h1>
                        <div className="text-justify">
                            {t("about.content.body")}
                        </div>
                        <Link href={"/content/university/about-us/history/history"}>
                            <Button variant={"link"} className="px-0 h-auto text-base">
                                {t("about.link")}
                            </Button>
                        </Link>
                    </div>

                    <div className="flex-1">
                        <Image
                            src={"/about.jpg"} width={1920} height={1080} alt="Image" 
                            className="rounded-xl"
                        />
                    </div>
                </div>

                {/* Reports */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {reports.map((report: any) => (
                        <div key={report.id} className="bg-primary p-4 rounded-lg text-center">
                            <h1 className="text-4xl font-bold text-secondary">{report.count}</h1>
                            <span className="text-secondary">{currentLocal === "ru" ? report.name_ru : currentLocal === "en" ? report.name_en : report.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

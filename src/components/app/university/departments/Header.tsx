"use client"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";



export default function DepartmentHead({ department }: { department: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("FacultyPage");

    return (
        <div className="h-80 bg-cover bg-center">
            <div className="flex justify-center h-full w-full backdrop-blur-lg bg-secondary/80">
                <div className="flex items-center justify-center gap-4">
                    <div>
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-neutral-900 dark:text-neutral-100">
                            {currentLocale === "ru" ? department.name_ru : currentLocale === "en" ? department.name_en : department.name_kk}
                        </h1>
                        <span>Кафедра</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
"use client"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";



export default function FacultyHead({ faculty }: { faculty: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("FacultyPage");

    return (
        <div>
            <div
                style={{ backgroundImage: `url('${faculty.poster ? faculty.poster : "/poster.png"}')` }}
                className="h-80 bg-cover bg-center"
            ></div>
            <div className="flex h-full w-full py-5 border-b">
                <div className="flex items-center justify-center gap-4">
                    <Image
                        src={faculty.image ? faculty.image : "/card.png"} width={512} height={512} alt="Image"
                        className="w-28 rounded-full border"
                    />
                    <div>
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-foreground">
                            {currentLocale === "ru" ? faculty.name_ru : currentLocale === "en" ? faculty.name_en : faculty.name_kk}
                        </h1>
                        <span>{t("sub_title")}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
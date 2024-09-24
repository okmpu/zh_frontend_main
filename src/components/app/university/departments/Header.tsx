"use client"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";


export default function DepartmentHead({ department }: { department: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("DepartmentPage");

    return (
        <div>
            <div
                style={{ backgroundImage: `url('${department.poster ? department.poster : "/poster.png"}')` }}
                className="h-80 bg-cover bg-center"
            ></div>
            <div className="flex h-full w-full py-5 border-b">
                <div className="flex items-center justify-center gap-4">
                    <Image
                        src={department.image ? department.image : "/card.png"} width={512} height={512} alt="Image"
                        className="w-28 rounded-full border"
                    />
                    <div>
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-neutral-900 dark:text-neutral-100">
                            {currentLocale === "ru" ? department.name_ru : currentLocale === "en" ? department.name_en : department.name_kk}
                        </h1>
                        <span>{t("sub_title")}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
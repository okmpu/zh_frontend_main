import { useLocale, useTranslations } from "next-intl"


export default function AboutDepartment({ about, }: { about: any }) {
    const t = useTranslations("FacultyPage.detail");
    const currentLocale = useLocale();

    return (
        <div className="grid gap-4 my-10">
            <div className="flex">
                <h1 className="text-xl font-bold text-foreground">
                    {t("about.head")}
                </h1>
            </div>

            <div
                dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? about.about_ru : currentLocale === "en" ? about.about_en : about.about_kk }}
                id="text-content"
            ></div>
        </div>
    )
}
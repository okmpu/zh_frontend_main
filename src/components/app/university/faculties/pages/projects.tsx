import { Clock, FolderKanban } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";


export default function ProjectsFaculty({ projects }: { projects: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("FacultyPage.detail");

    return (
        <div className="grid gap-4 my-10">
            <div className="">
                <h1 className="text-xl font-bold text-foreground">
                    {t("projects.head")}
                </h1>
            </div>

            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {projects.map((item: any) => {
                    const date = new Date(item.date_created)
                    return (
                        <Link
                            key={item.id}
                            href={item.file}
                            target="_blank"
                            className="grid gap-2 items-center border overflow-hidden rounded-lg text-foreground"
                        >
                            <div className="py-6 bg-primary flex justify-center text-secondary">
                                <FolderKanban size={64} strokeWidth={1} />
                            </div>
                            <div className="flex-1 px-4 py-2">
                                <h1 className="font-semibold text-lg line-clamp-1">
                                    {currentLocale === "ru" ? item.name_ru : currentLocale === "en" ? item.name_en : item.name_kk}
                                </h1>
                                <div className="flex justify-between items-center gap-2 text-neutral-500">
                                    <span>
                                        {currentLocale === "ru" ? item.author_ru : currentLocale === "en" ? item.author_en : item.author_kk}
                                    </span>

                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span suppressHydrationWarning={true}>
                                            {date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}
                                            .{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}
                                            .{date.getFullYear()} -
                                            {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                            :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
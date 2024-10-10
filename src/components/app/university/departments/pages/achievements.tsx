"use client"
import { Clock, FileText, TrendingUp } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


export default function AchievementsDepartment({ achievements }: { achievements: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("DepartmentPage.detail");

    return (
        <div className="grid gap-4 my-10">
            <div className="">
                <h1 className="text-xl font-bold text-foreground">
                    {t("achievements.head")}
                </h1>
            </div>

            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {achievements.map((item: any) => {
                    const date = new Date(item.date_created)
                    return (
                        <Dialog key={item.id}>
                            <DialogTrigger asChild>
                                <div className="grid gap-2 items-center border cursor-pointer overflow-hidden rounded-lg text-foreground">
                                    <div className="py-6 bg-amber-500 flex justify-center text-secondary">
                                        <TrendingUp size={48} strokeWidth={1} />
                                    </div>
                                    <div className="flex-1 px-4 py-2">
                                        <h1 className="font-semibold text-lg line-clamp-3">
                                            {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
                                        </h1>
                                        <div className="grid gap-2 text-neutral-500">
                                            <span>
                                                {currentLocale === "ru" ? item.author_ru : currentLocale === "en" ? item.author_en : item.author_kk}
                                            </span>

                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock size={16} strokeWidth={1.5} />
                                                <span suppressHydrationWarning={true}>
                                                    {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
                                                    .{(date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}
                                                    .{date.getFullYear()} -
                                                    {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                                    :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="flex flex-col max-w-screen-xl h-screen overflow-auto xl:h-[90%]">
                                <DialogHeader>
                                    <DialogTitle className="text-foreground">
                                        {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
                                    </DialogTitle>
                                    <DialogDescription></DialogDescription>
                                </DialogHeader>
                                <div className="flex flex-col text-center gap-4 h-full">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? item.description_ru : currentLocale === "en" ? item.description_en : item.description_kk }}
                                        id="text-content"
                                    ></div>

                                    <div className="flex-1 overflow-hidden h-full rounded-md">
                                        <iframe src={item.file} className="w-full h-full"></iframe>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    )
                })}
            </div>
        </div>
    )
}

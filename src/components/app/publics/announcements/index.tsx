"use client"
import { Clock, MessageSquare } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";


export default function AllAnnouncements({ announcements, }: { announcements: any }) {
    const currentLocal = useLocale();
    const t = useTranslations("Publics");

    return (
        <div className="grid gap-2">
            {announcements.map((item: any) => {
                const date = new Date(item.date_created);
                return (
                    <Link
                        key={item.id}
                        href={`/publics/announcements/${item.id}`}
                        className="border rounded-lg flex gap-2 overflow-hidden transition-all hover:bg-secondary"
                    >
                        <div className="py-4 px-6 bg-amber-500 text-white flex items-center">
                            <MessageSquare size={32} strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 p-2 grid gap-2">
                            <h1 className="font-semibold line-clamp-2 text-lg text-foreground">
                                {currentLocal === "ru" ? item.title_ru : currentLocal === "en" ? item.title_en : item.title_kk}
                            </h1>
                            <div className="flex items-center gap-2">
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
                    </Link>
                )
            })}
        </div>
    )
}
"use client"
import { Clock, MessageSquare, UserRound } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";


export default function AllAnnouncements({ announcements, }: { announcements: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("Publics");

    return (
        <div className="grid gap-2 grid-cols-1 xl:grid-cols-2">
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
                            <h1 className="font-semibold line-clamp-1 text-lg text-foreground">
                                {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
                            </h1>
                            <div className="grid">
                                <div className="flex items-center gap-2">
                                    <UserRound size={16} strokeWidth={1.5} />
                                    <span>
                                        {item.user.first_name + " " + item.user.last_name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} strokeWidth={1.5} />
                                    <span suppressHydrationWarning={true}>
                                        {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
                                        .{date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}
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
    )
}
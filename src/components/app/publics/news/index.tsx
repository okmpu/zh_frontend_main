"use client"
import { Button } from "@/components/ui/button";
import { Clock, UserRound } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";


export default function AllNews({ news, }: { news: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("Publics");

    return (
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {news.map((item: any) => {
                const date = new Date(item.date_created);

                return (
                    <Link
                        href={`/publics/news/${item.id}`}
                        key={item.id} 
                        className="flex flex-col justify-between overflow-hidden rounded-lg border transition-all hover:bg-secondary"
                    >
                        <Image src={item.poster ? item.poster : "/poster.png"}
                            width={1920} height={1080} alt="Image"
                            className="w-full"
                        />
                        <div className="px-4 py-4 grid gap-2">
                            <h1 className="font-semibold text-lg line-clamp-2 text-foreground">
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
"use client"
import { Button } from "@/components/ui/button"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { Clock, MessageSquare, UserRound } from "lucide-react"


export default function Publics({ news, announcements }: { news: any, announcements: any }) {
    const currentLocal = useLocale();
    const t = useTranslations("HomePage");

    return (
        <div className="border-t">
            <div className="container flex flex-col lg:flex-row items-start gap-6 mx-auto py-10">
                {/* Announcements */}
                <div className="w-full lg:max-w-md grid gap-4">
                    <h1 className="text-xl font-bold text-foreground">{t("publics.tabs.announcements")}</h1>

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
                                        <h1 className="font-semibold text-lg line-clamp-1 text-foreground">
                                            {currentLocal === "ru" ? item.title_ru : currentLocal === "en" ? item.title_en : item.title_kk}
                                        </h1>
                                        <div className="grid">
                                            {/* <div className="flex items-center gap-2">
                                                <UserRound size={16} strokeWidth={1.5} />
                                                <span>
                                                    {item.user.first_name + " " + item.user.last_name}
                                                </span>
                                            </div> */}
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

                    <Link href={`/publics/announcements`}>
                        <Button variant={"link"} className="text-base p-0 h-auto">{t("publics.showAll")}</Button>
                    </Link>
                </div>
                
                {/* News */}
                <div className="flex-1 grid gap-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold text-foreground">{t("publics.tabs.news")}</h1>
                        
                        <Link href={`/publics/news`}>
                            <Button variant={"link"} className="text-base p-0 h-auto">{t("publics.showAll")}</Button>
                        </Link>
                    </div>
                    
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                        {news.map((item: any) => {
                            const date = new Date(item.date_created);
                            return (
                                <Link 
                                    key={item.id}
                                    href={`/publics/news/${item.id}`}
                                    className="flex flex-col justify-between overflow-hidden rounded-lg border transition-all hover:bg-secondary"
                                >
                                    <Image src={item.poster ? item.poster : "/poster.png"}
                                        width={1920} height={1080} alt="Image"
                                        className="w-full"
                                    />
                                    <div className="px-4 py-4 grid gap-2">
                                        <h1 className="font-semibold text-lg line-clamp-2 text-foreground">
                                            {currentLocal === "ru" ? item.title_ru : currentLocal === "en" ? item.title_en : item.title_kk}
                                        </h1>

                                        <div className="grid">
                                            {/* <div className="flex items-center gap-2">
                                                <UserRound size={16} strokeWidth={1.5} />
                                                <span>
                                                    {item.user.first_name + " " + item.user.last_name}
                                                </span>
                                            </div> */}
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
                </div>
            </div>
        </div>
    )
}
"use client"
import { useLocale, useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Clock, MessageSquare } from "lucide-react";
import Link from "next/link";


export default function PublicsDepartment({ news, events, announcements }: { news: any, events: any, announcements: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("FacultyPage.detail");

    return (
        <div className="grid gap-4 my-10">
            <div className="flex">
                <h1 className="text-xl font-bold text-foreground">
                    {t("publics.head")}
                </h1>
            </div>

            <Tabs defaultValue="news" className="w-full grid gap-4">
                <TabsList className="grid grid-cols-3 h-auto">
                    <TabsTrigger value={"news"}>
                    {t("publics.news_head")}
                    </TabsTrigger>
                    <TabsTrigger value={"events"}>
                        {t("publics.events_head")}
                    </TabsTrigger>
                    <TabsTrigger value={"announcements"}>
                        {t("publics.announcements_head")}
                    </TabsTrigger>
                </TabsList>
                <TabsContent value={"news"}>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {news.map((item: any) => {
                            const date = new Date(item.date_created);

                            return (
                                <div key={item.id} className="flex flex-col justify-between overflow-hidden rounded-lg border">
                                    <Image src={item.poster ? item.poster : "/poster.png"}
                                        width={1920} height={1080} alt="Image"
                                        className="w-full"
                                    />
                                    <div className="px-4 py-4 grid gap-2">
                                        <h1 className="font-semibold text-lg line-clamp-2 text-foreground">
                                            {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
                                        </h1>

                                        <div className="flex items-center gap-2">
                                            <Clock size={16} strokeWidth={1.5} />
                                            <span>
                                                {date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}
                                                .{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}
                                                .{date.getFullYear()} -
                                                {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                                :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                            </span>
                                        </div>

                                        <Link href={`/publics/news/${item.id}`}>
                                            <Button variant={"link"} className="p-0 h-auto text-base">{t("publics.link")}</Button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </TabsContent>
                <TabsContent value={"events"}>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {events.map((event: any) => {
                            const date = new Date(event.date_created);

                            return (
                                <Link
                                    key={event.id}
                                    href={`/publics/all-events/${event.id}`}
                                    className="block bg-background border rounded-lg overflow-hidden transition-all hover:bg-secondary"
                                >
                                    <Image
                                        src={event.poster ? event.poster : "/card.png"} width={1080} height={1080} alt="Image"
                                        className="w-full"
                                    />

                                    <div className="px-4 py-4 grid gap-2">
                                        <h1 className="font-semibold text-lg line-clamp-2 text-foreground">
                                            {currentLocale === "ru" ? event.title_ru : currentLocale === "en" ? event.title_en : event.title_kk}
                                        </h1>

                                        <div className="flex items-center gap-2">
                                            <Clock size={16} strokeWidth={1.5} />
                                            <span>
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
                </TabsContent>
                <TabsContent value={"announcements"}>
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
                                            {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
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
                </TabsContent>
            </Tabs>
        </div>
    )
}
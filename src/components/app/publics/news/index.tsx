"use client"
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";


export default function AllNews({ news, }: { news: any }) {
    const currentLocal = useLocale();
    const t = useTranslations("Publics");

    return (
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
                            <h1 className="font-semibold line-clamp-2 text-foreground">
                                {currentLocal === "ru" ? item.title_ru : currentLocal === "en" ? item.title_en : item.title_kk}
                            </h1>

                            <div className="flex items-center gap-2 text-xs">
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
                                <Button variant={"link"} className="p-0 h-auto">{t("news.link")}</Button>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
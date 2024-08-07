"use client"
import { Clock } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";


export default function SimilarItems({ similars, code }: { similars: any, code: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("Publics");

    return (
        <div className="w-full lg:max-w-sm flex flex-col gap-4">
            <h1 className="text-foreground text-xl font-bold">{t("similar")}</h1>

            <div className="grid gap-2">
                {similars.map((item: any) => {
                    const date = new Date(item.date_created)

                    return (
                        <Link
                            key={item.id}
                            href={`/publics/${code}/${item.id}`}
                            className="flex rounded-lg border overflow-hidden transition-all hover:bg-secondary"
                        >
                            {code === "news" ?
                                <Image
                                    src={item.poster ? item.poster : "/poster.png"}
                                    width={1920} height={1080} alt="Image"
                                    priority={true}
                                    className="w-28"
                                />
                            : code === "all-events" ?
                                <Image
                                    src={item.poster ? item.poster : "/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    priority={true}
                                    className="w-28"
                                />
                            :
                                null
                            }
                            
                            <div className="grid gap-1 p-2">
                                <h1 className="line-clamp-1 text-lg font-bold text-foreground">
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
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
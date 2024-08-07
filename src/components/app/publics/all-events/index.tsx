"use client"
import { Clock } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";


export default function AllEvents({ events, }: { events: any }) {
    const currentLocal = useLocale();
    const t = useTranslations("Publics");

    return (
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
                                {currentLocal === "ru" ? event.title_ru : currentLocal === "en" ? event.title_en : event.title_kk}
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
    )
}
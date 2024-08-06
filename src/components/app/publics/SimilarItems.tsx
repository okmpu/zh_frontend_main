import { Clock } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";


export default function SimilarItems({ similars, }: { similars: any }) {
    const currentLocale = useLocale();

    return (
        <div className="w-full lg:max-w-sm flex flex-col gap-4">
            <h1 className="text-foreground text-xl font-bold">Осыған ұқсас тақырыптар</h1>

            <div className="grid gap-2">
                {similars.map((item: any) => {
                    const date = new Date(item.date_created)

                    return (
                        <Link
                            key={item.id}
                            href={`/publics/news/${item.id}`}
                            className="flex rounded-lg border overflow-hidden transition-all hover:bg-secondary"
                        >
                            <Image
                                src={item.poster ? item.poster : "/poster.png"}
                                width={1920} height={1080} alt="Image"
                                priority={true}
                                className="w-24"
                            />
                            <div className="grid gap-1 p-2">
                                <h1 className="line-clamp-1 font-bold text-foreground">
                                    {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
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
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
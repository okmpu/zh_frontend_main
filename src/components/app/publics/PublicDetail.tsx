"use client"
import { ArrowDownToLine, Clock, UserRound } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";


export default function PublicDetail({ item, files, code }: { item: any, files: any, code: string }) {
    const currentLocale = useLocale();
    const date = new Date(item.date_created);

    return (
        <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-4 border-b pb-4">
                {code === "news" ?
                    <Image src={item.poster ? item.poster : "/poster.png"} width={1920} height={1080} alt="Image"
                        className="w-full border rounded-lg"
                        priority={true}
                    />
                    : code === "all-events" ?
                        <Image src={item.poster ? item.poster : "/card.png"} width={1080} height={1080} alt="Image"
                            className="w-full border rounded-lg"
                            priority={true}
                        />
                        :
                        null
                }

                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
                    {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
                </h1>

                <div className="flex justify-between items-center">
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

            <div className="text-justify flex flex-col gap-2 border-b pb-4">
                <div
                    dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? item.description_ru : currentLocale === "en" ? item.description_en : item.description_kk }}
                    id="text-content"
                ></div>

                {files.length > 0 &&
                    <div>
                        <h1 className="text-foreground text-lg font-semibold mb-2">Бекітілген құжаттар</h1>
                        <ul className="grid gap-2">
                            {files.map((fl: any) => (
                                <li key={fl.id}>
                                    <Link
                                        href={fl.file}
                                        download={true}
                                        target="_blank"
                                        className="border rounded-lg py-2 px-4 inline-flex gap-4 transition-all hover:shadow"
                                    >
                                        <span>{fl.title}</span>
                                        <ArrowDownToLine />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}
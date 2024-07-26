import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"


export default function Publics({ news, announcements, vacancies }: { news: any, announcements: any, vacancies: any }) {
    const currentLocal = useLocale();
    const t = useTranslations("HomePage");

    return (
        <div className="border-t">
            <div className="container grid gap-10 mx-auto py-10">
                <div className="max-w-xl w-full text-center mx-auto">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                        {t("publics.title")}
                    </h1>
                    <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                    <span>{t("publics.sub_title")}</span>
                </div>

                <Tabs defaultValue="news">
                    <TabsList className="flex-wrap">
                        <TabsTrigger value="news" className="hover:text-primary">{t("publics.tabs.news")}</TabsTrigger>
                        <TabsTrigger value="announcements" className="hover:text-primary">{t("publics.tabs.announcements")}</TabsTrigger>
                        <TabsTrigger value="vacancies" className="hover:text-primary">{t("publics.tabs.vacancies")}</TabsTrigger>
                    </TabsList>

                    {/* News */}
                    <TabsContent value="news">
                        <div className="grid mt-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {news.map((item: any) => {
                                const date = new Date(item.date_created);
                                return (
                                    <div key={item.id} className="rounded-lg border">
                                        <Image src={"/card.png"}
                                            width={1080} height={1080} alt="Image"
                                            className="w-full"
                                        />
                                        <div className="px-4 pb-4">
                                            <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                                {currentLocal === "ru" ? item.title_ru : currentLocal === "en" ? item.title_en : item.title_kk}
                                            </h1>

                                            <span className="line-clamp-2 mt-2">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                                deleniti autem sapiente atque exercitationem.
                                            </span>

                                            <div className="flex items-center gap-2 mt-2 text-xs">
                                                <Clock size={16} strokeWidth={1.5} />
                                                <span>
                                                    {date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}
                                                    .{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}
                                                    .{date.getFullYear()} - 
                                                    {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                                    :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                                </span>
                                            </div>

                                            <Link href={`/publics/${item.id}`}>
                                                <Button variant={"link"} className="px-0">{t("publics.link")}</Button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </TabsContent>

                    <TabsContent value="announcements">
                        <div className="grid mt-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {announcements.map((item: any) => {
                                const date = new Date(item.date_created);
                                return (
                                    <div key={item.id} className="rounded-lg border">
                                        <Image src={"/card.png"}
                                            width={1080} height={1080} alt="Image"
                                            className="w-full"
                                        />
                                        <div className="px-4 pb-4">
                                            <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                                {currentLocal === "ru" ? item.title_ru : currentLocal === "en" ? item.title_en : item.title_kk}
                                            </h1>

                                            <span className="line-clamp-2 mt-2">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                                deleniti autem sapiente atque exercitationem.
                                            </span>

                                            <div className="flex items-center gap-2 mt-2 text-xs">
                                                <Clock size={16} strokeWidth={1.5} />
                                                <span>
                                                    {date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}
                                                    .{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}
                                                    .{date.getFullYear()} - 
                                                    {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                                    :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                                </span>
                                            </div>

                                            <Link href={`/publics/${item.id}`}>
                                                <Button variant={"link"} className="px-0">{t("publics.link")}</Button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </TabsContent>

                    <TabsContent value="vacancies">
                        <div className="grid mt-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {vacancies.map((item: any) => {
                                const date = new Date(item.date_created);
                                return (
                                    <div key={item.id} className="rounded-lg border">
                                        <Image src={"/card.png"}
                                            width={1080} height={1080} alt="Image"
                                            className="w-full"
                                        />
                                        <div className="px-4 pb-4">
                                            <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                                {currentLocal === "ru" ? item.title_ru : currentLocal === "en" ? item.title_en : item.title_kk}
                                            </h1>

                                            <span className="line-clamp-2 mt-2">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                                deleniti autem sapiente atque exercitationem.
                                            </span>

                                            <div className="flex items-center gap-2 mt-2 text-xs">
                                                <Clock size={16} strokeWidth={1.5} />
                                                <span>
                                                    {date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}
                                                    .{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}
                                                    .{date.getFullYear()} - 
                                                    {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                                    :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                                </span>
                                            </div>

                                            <Link href={`/publics/${item.id}`}>
                                                <Button variant={"link"} className="px-0">{t("publics.link")}</Button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
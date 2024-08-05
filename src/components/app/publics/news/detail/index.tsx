import { useLocale } from "next-intl";
import Image from "next/image";


export default function NewsContent({ news, }: { news: any }) {
    const currentLocale = useLocale();

    return (
        <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <Image src={news.poster ? news.poster : "/poster.png"} width={1920} height={1080} alt="Image"
                    className="w-full border rounded-lg"
                />
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
                    {news.title_kk}
                </h1>
            </div>

            <div className="text-justify flex flex-col gap-2">
                <div
                    dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? news.description_ru : currentLocale === "en" ? news.description_en : news.description_kk }}
                    id="text-content"
                ></div>
            </div>
        </div>
    )
}
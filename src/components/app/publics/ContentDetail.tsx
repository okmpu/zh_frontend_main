import { useLocale } from "next-intl";
import Image from "next/image";


export default function ContentDetail({ item, }: { item: any }) {
    const currentLocale = useLocale();

    return (
        <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <Image src={item.poster ? item.poster : "/poster.png"} width={1920} height={1080} alt="Image"
                    className="w-full border rounded-lg"
                />
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
                    {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
                </h1>
            </div>

            <div className="text-justify flex flex-col gap-2">
                <div
                    dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? item.description_ru : currentLocale === "en" ? item.description_en : item.description_kk }}
                    id="text-content"
                ></div>
            </div>
        </div>
    )
}
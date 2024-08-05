import { useLocale } from "next-intl";
import Image from "next/image";

export default function EventContent({ event }: { event: any }) {
    const currentLocale = useLocale();

    return (
        <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <Image src={event.poster ? event.poster : "/card.png"} width={1080} height={1080} alt="Image"
                    className="w-full border rounded-lg"
                />
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
                    {event.title_kk}
                </h1>
            </div>

            <div className="text-justify flex flex-col gap-2">
                <div
                    dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? event.description_ru : currentLocale === "en" ? event.description_en : event.description_kk }}
                    id="text-content"
                ></div>
            </div>
        </div>
    )
}
import { useLocale } from "next-intl"


export default function TextContent({ textContents }: {textContents: any}) {
    const currentLocale = useLocale()

    return (
        <div>
            {textContents && textContents.map((text: any) => (
                <div
                    key={text.id}
                    dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? text.description_ru : currentLocale === "en" ? text.description_en : text.description_kk }}
                    id="text-content"
                ></div>
            ))}
        </div>
    )
}
"use client"
import { useLocale } from "next-intl"


export default function TextContent({ content }: { content: any }) {
    const currentLocale = useLocale();

    return (
        <div
            dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? content.body_ru : currentLocale === "en" ? content.body_en : content.body_kk }}
            id="text-content"
        ></div>
    )
}
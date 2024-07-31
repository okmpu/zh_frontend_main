"use client"
import { useLocale, useTranslations } from "next-intl";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
import TextContent from "./TextContent";
import FileContent from "./FileContent";
import ImageContent from "./ImageContent";
import { Rss } from "lucide-react";

// Types
type Props = {
    content: any, 
    category: any, 
    sub_category: any, 
    section: any
}

export default function ContentBody({ category, sub_category, section, content }: Props) {
    const currentLocale = useLocale();
    const t = useTranslations("ContentPage");

    return (
        <div className="flex-1 flex flex-col gap-8">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-neutral-500">
                            {currentLocale === "ru" ? category.name_ru : currentLocale === "en" ? category.name_en : category.name_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-neutral-500">
                            {currentLocale === "ru" ? sub_category.name_ru : currentLocale === "en" ? sub_category.name_en : sub_category.name_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className="text-neutral-500">
                        <BreadcrumbPage className="text-neutral-500">
                            {currentLocale === "ru" ? section.name_ru : currentLocale === "en" ? section.name_en : section.name_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-primary font-semibold">
                            {currentLocale === "ru" ? content.title_ru : currentLocale === "en" ? content.title_en : content.title_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="grid gap-8">
                <div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-foreground">
                        {currentLocale === "ru" ? content.title_ru : currentLocale === "en" ? content.title_en : content.title_kk}
                    </h1>
                    <span className="py-8 block border-y">
                        {currentLocale === "ru" ? content.description_ru : currentLocale === "en" ? content.description_en : content.description_kk}
                    </span>
                </div>

                <div className="grid gap-4">
                    {content.items.length > 0 ? content.items.map((item: any) => {
                        if (item.content_object.type === "text_content") {
                            return <TextContent key={item.id} content={item.content_object.content} />
                        } else if (item.content_object.type === "file_content") {
                            return <FileContent key={item.id} head={content} content={item.content_object.content} />
                        } else if (item.content_object.type === "image_content") {
                            return <ImageContent key={item.id} content={item.content_object.content} />
                        }
                    })
                    :
                        <div className="flex flex-col items-center gap-2 max-w-lg mx-auto text-center py-10 text-foreground">
                            <Rss size={96} strokeWidth={1.5} />
                            <h1 className="font-semibold text-xl lg:text-2xl">{t("noContent.title")}</h1>
                            <span className="text-neutral-500">{t("noContent.sub_title")}</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

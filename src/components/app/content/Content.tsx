import { useLocale, useTranslations } from "next-intl";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
import TextContent from "./TextContent";
import FileContent from "./FileContent";


export default function ContentRoot({ content, textContents, fileContents }: { content: any, textContents: any, fileContents: any }) {
    const currentLocale = useLocale()
    const t = useTranslations("TopicPage")

    return (
        <div className="flex-1">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">{t("Breadcrumb.title")}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            {currentLocale === "ru" ? content.chapter.topic.category.name_ru : currentLocale === "en" ? content.chapter.topic.category.name_en : content.chapter.topic.category.name_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/${content.chapter.topic.category.slug}/${content.chapter.topic.slug}`}>
                            {currentLocale === "ru" ? content.chapter.topic.name_ru : currentLocale === "en" ? content.chapter.topic.name_en : content.chapter.topic.name_kk}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            {currentLocale === "ru" ? content.chapter.name_ru : currentLocale === "en" ? content.chapter.name_en : content.chapter.name_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            {currentLocale === "ru" ? content.title_ru : currentLocale === "en" ? content.title_en : content.title_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-8">
                <h1 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
                    {currentLocale === "ru" ? content.title_ru : currentLocale === "en" ? content.title_en : content.title_kk}
                </h1>
                <span className="py-8 block border-y">
                    {currentLocale === "ru" ? content.description_ru : currentLocale === "en" ? content.description_en : content.description_kk}
                </span>

                <div className="py-8 grid gap-8">
                    <TextContent textContents={textContents} />
                    
                    <FileContent content={content} fileContents={fileContents}/>
                </div>
            </div>
        </div>
    )
}
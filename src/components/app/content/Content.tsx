import { useLocale } from "next-intl"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function ContentRoot({ content, }: { content: any, }) {
    const currentLocale = useLocale()

    return (
        <div className="flex-1">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Басты бет</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{content.chapter.topic.category.name_kk}</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/${content.chapter.topic.category.slug}/${content.chapter.topic.slug}`}>{content.chapter.topic.name_kk}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{content.chapter.name_kk}</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{content.title_kk}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-8">
                <h1 className="text-4xl font-bold text-neutral-900">
                    {currentLocale === "ru" ? content.title_ru : currentLocale === "en" ? content.title_en : content.title_kk}
                </h1>
                
                <div
                    dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? content.description_ru : currentLocale === "en" ? content.description_en : content.description_kk }}
                    className="mt-8"
                ></div>
            </div>
        </div>
    )
}
import { useLocale } from "next-intl"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function TopicRoot({ topic, }: { topic: any, }) {
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
                        <BreadcrumbPage>{topic.category.name_kk}</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{topic.name_kk}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-8">
                <h1 className="text-4xl font-bold text-neutral-900">
                    {currentLocale === "ru" ? topic.name_ru : currentLocale === "en" ? topic.name_en : topic.name_kk}
                </h1>
                
                <div
                    dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? topic.description_ru : currentLocale === "en" ? topic.description_en : topic.description_kk }}
                    className="mt-8"
                ></div>
            </div>
        </div>
    )
}
import { useLocale, useTranslations } from "next-intl";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb";


export default function TopicRoot({ topic, }: { topic: any, }) {
    const currentLocale = useLocale();
    const t = useTranslations("TopicPage");

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
                            {currentLocale === "ru" ? topic.category.name_ru : currentLocale === "en" ? topic.category.name_en : topic.category.name_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="font-semibold">
                            {currentLocale === "ru" ? topic.name_ru : currentLocale === "en" ? topic.name_en : topic.name_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-8">
                <h1 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
                    {currentLocale === "ru" ? topic.name_ru : currentLocale === "en" ? topic.name_en : topic.name_kk}
                </h1>
                
                <div
                    dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? topic.description_ru : currentLocale === "en" ? topic.description_en : topic.description_kk }}
                    id="text-content"
                ></div>
            </div>
        </div>
    )
}
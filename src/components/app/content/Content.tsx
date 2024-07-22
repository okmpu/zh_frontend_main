import { useLocale } from "next-intl";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
import TextContent from "./TextContent";


export default function ContentRoot({
    content, textContents, category, sub_category, section
}:
    {
        content: any, textContents: any, category: any, sub_category: any, section: any

    }) {
    const currentLocale = useLocale();

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

            <div className="relative">
                <h1 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
                    {currentLocale === "ru" ? content.title_ru : currentLocale === "en" ? content.title_en : content.title_kk}
                </h1>
                <span className="py-8 block border-y">
                    {currentLocale === "ru" ? content.description_ru : currentLocale === "en" ? content.description_en : content.description_kk}
                </span>

                <div className="py-8 grid gap-8">
                    <TextContent textContents={textContents} />
                </div>
            </div>
        </div>
    )
}

"use client"
import { useLocale, useTranslations } from "next-intl";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
import TextContent from "./TextContent";
import FileContent from "./FileContent";
import ImageContent from "./ImageContent";
import { Rss } from "lucide-react";
import StaffContent from "./StaffContent";

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
                        <BreadcrumbPage className="text-neutral-500 text-base">
                            {currentLocale === "ru" ? category.name_ru : currentLocale === "en" ? category.name_en : category.name_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-neutral-500 text-base">
                            {currentLocale === "ru" ? sub_category.name_ru : currentLocale === "en" ? sub_category.name_en : sub_category.name_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-neutral-500 text-base">
                            {currentLocale === "ru" ? section.name_ru : currentLocale === "en" ? section.name_en : section.name_kk}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-primary text-base font-semibold">
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
                    {
                        content.text_contents.length ||
                        content.image_contents.length ||
                        content.file_contents.length ||
                        content.staff_contents.length
                        ?
                            <>
                                {content.text_contents.length > 0 &&
                                    <div>
                                        {content.text_contents.map((item: any) => (
                                            <TextContent key={item.id} content={item} />
                                        ))}
                                    </div>
                                }
                                {content.image_contents.length > 0 &&
                                    <div>
                                        {content.image_contents.map((item: any) => (
                                            <ImageContent key={item.id} content={item} />
                                        ))}
                                    </div>
                                }
                                {content.file_contents.length > 0 &&
                                    <div className="grid gap-2">
                                        {content.file_contents.map((item: any) => (
                                            <FileContent key={item.id} head={content} content={item} />
                                        ))}
                                    </div>
                                }
                                {content.staff_contents.length > 0 &&
                                    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                                        {content.staff_contents.map((item: any) => (
                                            <StaffContent key={item.id} content={item} />
                                        ))}
                                    </div>
                                }
                            </>

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

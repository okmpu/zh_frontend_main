import { useLocale } from "next-intl";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
import { ReactNode } from "react";
import { ArrowDownToLine, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function ContentRoot({ content, textContents, fileContents }: { content: any, textContents: any, fileContents: any }) {
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
                <h1 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
                    {currentLocale === "ru" ? content.title_ru : currentLocale === "en" ? content.title_en : content.title_kk}
                </h1>
                <span className="py-8 block border-y">
                    {currentLocale === "ru" ? content.description_ru : currentLocale === "en" ? content.description_en : content.description_kk}
                </span>

                <div className="py-8 grid gap-8">
                    <div>
                        {textContents && textContents.map((text: any) => (
                            <div
                                key={text.id}
                                dangerouslySetInnerHTML={{ __html: currentLocale === "ru" ? text.description_ru : currentLocale === "en" ? text.description_en : text.description_kk }}
                                id="text-content"
                            ></div>
                        ))}
                    </div>
                    
                    <div className="grid gap-4">
                        {fileContents && fileContents.map((file: any) => (
                            <div 
                                key={file.id}
                                className="flex justify-between items-center border rounded-md py-2 px-4"
                            >
                                <div className="flex gap-2 items-center">
                                    <FileText size={32} strokeWidth={1.5} />
                                    <div>
                                        <h1 className="text-neutral-900 text-base font-semibold">{file.title_kk}</h1>
                                        <span className="text-sm">{content.title_kk}</span>
                                    </div>
                                </div>

                                <div>
                                    <Button variant={"ghost"} className="px-3">
                                        <Eye size={20} strokeWidth={1.5} />
                                    </Button>
                                    <Button variant={"ghost"} className="px-3">
                                        <ArrowDownToLine size={20} strokeWidth={1.5} />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
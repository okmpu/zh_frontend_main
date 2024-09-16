"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ExternalLink } from "lucide-react";


export default function SidebarSheet({ category, sub_categories, contents }: { category: any, sub_categories: any, contents: any }) {
    const pathname = usePathname();
    const currentLocale = useLocale();

    return (
        <Sheet>
            <SheetTrigger className="flex items-center w-full p-2 border-b text-left bg-background/80 backdrop-blur-lg">
                <span>
                    {currentLocale === "ru" ? category.name_ru : currentLocale === "en" ? category.name_en : category.name_kk}
                </span>
                <ChevronRight size={20} strokeWidth={1.5} />
            </SheetTrigger>
            <SheetContent className="overflow-auto">
                <SheetHeader>
                    <SheetTitle className="text-xl font-bold border-b">
                        {currentLocale === "ru" ? category.name_ru : currentLocale === "en" ? category.name_en : category.name_kk}
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div>
                    {sub_categories.map((sub_category: any) => (
                        <div key={sub_category.id} className="pb-4">
                            <div className="pb-4">
                                <h1 className="font-bold text-xl text-foreground">
                                    {currentLocale === "ru" ? sub_category.name_ru : currentLocale === "en" ? sub_category.name_en : sub_category.name_kk}
                                </h1>
                            </div>

                            <Accordion type="single" collapsible>
                                {sub_category.children.map((section: any) => {
                                    if (section.multiple) {
                                        return (
                                            <AccordionItem
                                                key={section.id}
                                                value={`item-${section.id}`}
                                            >
                                                <AccordionTrigger className="ml-4 text-left">
                                                    {currentLocale === "ru" ? section.name_ru : currentLocale === "en" ? section.name_en : section.name_kk}
                                                </AccordionTrigger>
                                                <AccordionContent className="ml-4 mb-4 border-l pb-0">
                                                    {contents.map((content: any) => {
                                                        if (content.category === section.id) {
                                                            return (
                                                                <Link
                                                                    key={content.id}
                                                                    href={
                                                                        section.app_name === "content" ?
                                                                            `/content/${category.slug}/${sub_category.slug}/${section.slug}/${content.slug}`
                                                                            : section.app_name === "university" ?
                                                                                `/university/${section.slug}`
                                                                                : section.url
                                                                    }
                                                                    target={section.target ? "_blank" : "_self"}
                                                                >
                                                                    <Button
                                                                        variant={"ghost"}
                                                                        className={`
                                                                            w-full h-auto text-left justify-start text-base whitespace-normal hover:text-primary
                                                                            ${pathname === `/${currentLocale}/content/${category.slug}/${sub_category.slug}/${section.slug}/${content.slug}` && "bg-secondary text-primary"}
                                                                        `}
                                                                    >
                                                                        {currentLocale === "ru" ? content.title_ru : currentLocale === "en" ? content.title_en : content.title_kk}
                                                                        {section.target && <ExternalLink size={20} strokeWidth={1.5} />}
                                                                    </Button>
                                                                </Link>
                                                            )
                                                        }
                                                    })}
                                                </AccordionContent>
                                            </AccordionItem>
                                        )
                                    } else {
                                        return (
                                            <Link
                                                key={section.id}
                                                href={
                                                    section.app_name === "content" ?
                                                        `/content/${category.slug}/${sub_category.slug}/${section.slug}/${section.slug}`
                                                        : section.app_name === "university" ?
                                                            `/university/${section.slug}`
                                                            : section.url
                                                }
                                                target={section.target ? "_blank": "_self"}
                                            >
                                                <Button
                                                    variant={"ghost"}
                                                    className={`
                                                        w-full h-auto text-base justify-between whitespace-normal text-left hover:text-primary
                                                        ${pathname === `/${currentLocale}/content/${category.slug}/${sub_category.slug}/${section.slug}/${section.slug}` && "bg-secondary text-primary"}
                                                    `}
                                                >
                                                    {currentLocale === "ru" ? section.name_ru : currentLocale === "en" ? section.name_en : section.name_kk}
                                                    {section.target && <ExternalLink size={20} strokeWidth={1.5} />}
                                                </Button>
                                            </Link>
                                        )
                                    }
                                })}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}
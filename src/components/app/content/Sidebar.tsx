"use client"
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "../../ui/button";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useLocale } from "next-intl";


export default function ContentSidebar({ category, sub_categories, contents }: { category: any, sub_categories: any, contents: any }) {
    const pathname = usePathname();
    const currentLocale = useLocale();

    return (
        <div className="sticky top-20 max-w-xs w-full">
            {sub_categories.map((sub_category: any) => (
                <div key={sub_category.id} className="pb-4">
                    <div className="py-4 border-b">
                        <h1 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                            {currentLocale === "ru" ? sub_category.name_ru : currentLocale === "en" ? sub_category.name_en : sub_category.name_kk}
                        </h1>
                    </div>

                    <Accordion type="single" collapsible>
                        {sub_category.children.map((section: any) => {
                            return (
                                <React.Fragment key={section.id}>
                                    {contents.map((content: any) => {
                                        if (content.category === section.id) {
                                            if (section.multiple) {
                                                return (
                                                    <AccordionItem
                                                        key={content.id}
                                                        value={`item-${section.id}`}
                                                    >
                                                        <AccordionTrigger className="text-left pl-4">
                                                            {currentLocale === "ru" ? section.name_ru : currentLocale === "en" ? section.name_en : section.name_kk}
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <Link
                                                                key={content.id}
                                                                href={`/content/${category.slug}/${sub_category.slug}/${section.slug}/${content.slug}`}
                                                            >
                                                                <Button
                                                                    variant={"ghost"}
                                                                    className={`
                                                                        w-full px-8 justify-start
                                                                        ${pathname === `/${currentLocale}/content/${category.slug}/${sub_category.slug}/${section.slug}/${content.slug}` && "bg-secondary text-primary"}
                                                                    `}
                                                                >
                                                                    {currentLocale === "ru" ? content.title_ru : currentLocale === "en" ? content.title_en : content.title_kk}
                                                                </Button>
                                                            </Link>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                )
                                            } else {
                                                return (
                                                    <Link
                                                        key={content.id}
                                                        href={`/content/${category.slug}/${sub_category.slug}/${section.slug}/${content.slug}`}
                                                    >
                                                        <Button
                                                            variant={"ghost"}
                                                            className={`
                                                                w-full justify-start
                                                                ${pathname === `/${currentLocale}/content/${category.slug}/${sub_category.slug}/${section.slug}/${content.slug}` && "bg-secondary text-primary"}
                                                            `}
                                                        >
                                                            {currentLocale === "ru" ? content.title_ru : currentLocale === "en" ? content.title_en : content.title_kk}
                                                        </Button>
                                                    </Link>
                                                )
                                            }
                                        }
                                    })}
                                </React.Fragment>
                            )
                        })}
                    </Accordion>
                </div>
            ))}
        </div>
    )
}

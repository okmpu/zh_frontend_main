"use client"
import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { Button } from "../../ui/button"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useLocale } from "next-intl"


export default function TopicSidebar({ topic, chapters, contents }: { topic: any, chapters: any, contents: any }) {
    const pathname = usePathname()
    const currentLocale = useLocale()

    return (
        <div className="sticky top-20 max-w-xs w-full">
            <Accordion type="single" collapsible defaultValue={`item-1`}>
                {chapters.map((chapter: any) => {
                    if (chapter.multiple_content) {
                        return (
                            <AccordionItem key={chapter.id} value={`item-1`}>
                                <AccordionTrigger className="px-4 text-left rounded-md hover:no-underline hover:text-neutral-900">
                                    {currentLocale === "ru" ? chapter.name_ru : currentLocale === "en" ? chapter.name_en : chapter.name_kk}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {contents.map((content: any) => {
                                        if (chapter.id === content.chapter) {
                                            return (
                                                <Link key={content.id} href={`/${topic.category.slug}/${topic.slug}/${chapter.slug}/${content.slug}`}>
                                                    <Button 
                                                        variant={"ghost"} 
                                                        className={`
                                                            w-full h-auto justify-start whitespace-normal text-left font-normal px-6
                                                            ${pathname === `/${currentLocale}/${topic.category.slug}/${topic.slug}/${chapter.slug}/${content.slug}` && "bg-secondary"}
                                                        `}
                                                    >
                                                        {currentLocale === "ru" ? content.title_ru : currentLocale === "en" ? content.title_en : content.title_kk}
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
                            <React.Fragment key={chapter.id}>
                                {contents.map((content: any) => {
                                    if (content.chapter === chapter.id) {
                                        return (
                                            <Link key={chapter.id} href={`/${topic.category.slug}/${topic.slug}/${chapter.slug}/${content.slug}`} className="my-1 block">
                                                <Button variant={"ghost"} 
                                                    className={`
                                                        w-full justify-start
                                                        ${pathname === `/${currentLocale}/${topic.category.slug}/${topic.slug}/${chapter.slug}/${content.slug}` && "bg-secondary"}
                                                    `}
                                                >
                                                    {currentLocale === "ru" ? chapter.name_ru : currentLocale === "en" ? chapter.name_en : chapter.name_kk}
                                                </Button>
                                            </Link>
                                        )
                                    }
                                })}
                            </React.Fragment>
                        )
                    }
                })}
            </Accordion>
        </div>
    )
}
"use client"
import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Equal } from "lucide-react"
import Link from "next/link"
import Settings from "./Settings"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { useLocale, useTranslations } from "next-intl";


export default function BurgerMenu({ resourceLinks, categories }: { resourceLinks: any, categories: any }) {
    const currentLocal = useLocale();
    const t = useTranslations("Header");

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={"ghost"} className="px-3">
                    <Equal size={20} strokeWidth={1.5} />
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="overflow-auto flex flex-col justify-between">
                <div className="grid gap-4">
                    <SheetHeader>
                        <SheetTitle className="text-left">{t("resources.title")}</SheetTitle>
                        <SheetDescription className="text-left flex flex-col">
                            {resourceLinks.map((item: any) => (
                                <Link
                                    key={item.id}
                                    href={item.src}
                                >
                                    <Button
                                        className="w-full justify-start text-base"
                                        variant={"ghost"}
                                    >
                                        {currentLocal === "ru" ? item.label_ru : currentLocal === "en" ? item.label_en : item.label}
                                    </Button>
                                </Link>
                            ))}
                        </SheetDescription>
                    </SheetHeader>
                    
                    <div className="grid">
                        <h1 className="text-xl font-semibold text-foreground">{t("nav.title")}</h1>
                        <Accordion type="single" collapsible>
                            {categories.map((category: any) => {
                                if (category.children.length > 0) {
                                    return (
                                        <AccordionItem key={category.id} value={`item-${category.id}`}>
                                            <AccordionTrigger className="pl-4">
                                                {currentLocal === "ru" ? category.name_ru : currentLocal === "en" ? category.name_en : category.name_kk}
                                            </AccordionTrigger>

                                            <AccordionContent className="ml-4 mb-4 border-l pb-0">
                                                {category.children.map((sub_category: any) => (
                                                    <div key={sub_category.id}>
                                                        <div className="p-4">
                                                            <h1 className="text-xl font-semibold whitespace-nowrap px-4 pb-2 text-foreground">
                                                                {currentLocal === "ru" ? sub_category.name_ru : currentLocal === "en" ? sub_category.name_en : sub_category.name_kk}
                                                            </h1>

                                                            {sub_category.children.map((section: any) => (
                                                                <Link
                                                                    key={section.id}
                                                                    href={
                                                                        section.app_name === "content" ?
                                                                            `/content/${category.slug}/${sub_category.slug}/${section.slug}/${section.slug}`
                                                                            : section.app_name === "university" ?
                                                                                `/university/${section.slug}`
                                                                                : "#"
                                                                    }
                                                                >
                                                                    <Button
                                                                        variant={"ghost"}
                                                                        className="justify-start text-base w-full whitespace-normal text-left h-auto text-neutral-500 hover:text-primary"
                                                                    >
                                                                        {currentLocal === "ru" ? section.name_ru : currentLocal === "en" ? section.name_en : section.name_kk}
                                                                    </Button>
                                                                </Link>
                                                            ))}
                                                        </div>

                                                    </div>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    )
                                }
                                else {
                                    return (
                                        <Link
                                            key={category.id} 
                                            href={`/${category.slug}`}
                                        >
                                            <Button 
                                                variant={"ghost"}
                                                className="w-full justify-start text-base whitespace-normal h-auto"
                                            >
                                                {currentLocal === "ru" ? category.name_ru : currentLocal === "en" ? category.name_en : category.name_kk}
                                            </Button>
                                        </Link>
                                    )
                                }
                            })}
                        </Accordion>
                    </div>
                </div>
                <Settings />
            </SheetContent>
        </Sheet>
    )
}
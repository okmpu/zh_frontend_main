"use client"

import { resourceLinks } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Equal } from "lucide-react";
import Settings from "./Settings";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import React from "react";
import { useLocale } from "next-intl";


export default function Navbar({ data }: { data: any }) {
    const currentLocal = useLocale();
    const { sections, sub_sections } = data


    return (
        <nav className="border-b sticky top-0 z-50 backdrop-blur-lg">
            <div className="container mx-auto py-2 flex justify-between items-center">
                <div className="block xl:hidden">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant={"ghost"} className="px-3">
                                <Equal size={20} strokeWidth={1.5} />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle className="text-neutral-900 dark:text-neutral-100">Ресурстар</DialogTitle>
                            <DialogDescription className="border-b">
                                {resourceLinks.map(item =>
                                    <Link key={item.id} href={`/${item.src}`}>
                                        <Button variant={"ghost"} className="justify-start">
                                            {currentLocal === "ru" ? item.label_ru : currentLocal === "en" ? item.label_en : item.label}
                                        </Button>
                                    </Link>
                                )}
                            </DialogDescription>
                            <DialogTitle className="text-neutral-900 dark:text-neutral-100">Сілтемелер</DialogTitle>
                            <DialogDescription>
                                {sections.map((section: any) =>
                                    <Link 
                                        key={section.id}    
                                        href={`/${section.slug}`}
                                    >
                                        <Button variant={"ghost"} className="justify-start">
                                            {currentLocal === "ru" ? section.name_ru : currentLocal === "en" ? section.name_en : section.name_kk}
                                        </Button>
                                    </Link>
                                )}
                            </DialogDescription>
                        </DialogContent>
                    </Dialog>
                </div>

                <a href={"/"} className="min-w-32">
                    <Image
                        src={"/logo.png"} width={1709} height={366} alt="Logo image" priority={true}
                        className="w-32"
                    />
                </a>

                <div className="hidden xl:flex">
                    {sections.map((section: any) => (
                        <React.Fragment key={section.id}>
                            {section.dropdown ?
                                <NavigationMenu key={section.id}>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="bg-transparent">
                                                {currentLocal === "ru" ? section.name_ru : currentLocal === "en" ? section.name_en : section.name_kk}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="flex flex-col">
                                                {sub_sections.map((sub_section: any) => {
                                                    if (section.id === sub_section.section.id) {
                                                        return (
                                                            <NavigationMenuLink key={sub_section.id} href={`/${section.slug}/${sub_section.slug}`}>
                                                                <Button variant={"ghost"} className="justify-start w-full text-neutral-500">
                                                                    {currentLocal === "ru" ? sub_section.name_ru : currentLocal === "en" ? sub_section.name_en : sub_section.name_kk}
                                                                </Button>
                                                            </NavigationMenuLink>
                                                        )
                                                    }
                                                })}
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            :
                                <a href={`/${section.slug}`}>
                                    <Button variant={"ghost"}>
                                        {currentLocal === "ru" ? section.name_ru : currentLocal === "en" ? section.name_en : section.name_kk}
                                    </Button>
                                </a>
                            }
                        </React.Fragment>
                    ))}
                </div>
                
                <Settings />
                <div className="block md:hidden"></div>
            </div>
        </nav>
    )
}

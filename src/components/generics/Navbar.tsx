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


export default function Navbar({ context }: { context: any }) {
    const currentLocal = useLocale();
    const { categories, topics } = context


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
                                    <Link key={item.id} href={item.src}>
                                        <Button variant={"ghost"} className="justify-start">
                                            {currentLocal === "ru" ? item.label_ru : currentLocal === "en" ? item.label_en : item.label}
                                        </Button>
                                    </Link>
                                )}
                            </DialogDescription>
                            <DialogTitle className="text-neutral-900 dark:text-neutral-100">Сілтемелер</DialogTitle>
                            <DialogDescription>
                                {categories.map((category: any) =>
                                    <Link href={category.src} key={category.id}>
                                        <Button variant={"ghost"} className="justify-start">
                                            {currentLocal === "ru" ? category.name_ru : currentLocal === "en" ? category.name_en : category.name_kk}
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
                    {categories.map((category: any) => (
                        <React.Fragment key={category.id}>
                            {category.dropdown ?
                                <NavigationMenu key={category.id}>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="bg-transparent">
                                                {currentLocal === "ru" ? category.name_ru : currentLocal === "en" ? category.name_en : category.name_kk}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="flex flex-col">
                                                {topics.map((topic: any) => {
                                                    if (category.id === topic.category.id) {
                                                        return (
                                                            <NavigationMenuLink key={topic.id} href={`${category.src}${topic.src}`}>
                                                                <Button variant={"ghost"} className="justify-start w-full text-neutral-500">
                                                                    {currentLocal === "ru" ? topic.name_ru : currentLocal === "en" ? topic.name_en : topic.name_kk}
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
                                <a href={category.src}>
                                    <Button variant={"ghost"}>
                                        {currentLocal === "ru" ? category.name_ru : currentLocal === "en" ? category.name_en : category.name_kk}
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

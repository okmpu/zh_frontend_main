"use client"

import { resourceLinks } from "@/data/links";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Settings from "./Settings";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu"
import React from "react";
import { useLocale } from "next-intl";
import BurgerMenu from "./BurgerMenu";


export default function Navbar({ data }: { data: any }) {
    const currentLocal = useLocale();
    const { categories, contents } = data;


    return (
        <nav className="border-b sticky top-0 z-50 backdrop-blur-lg bg-background/70">
            <div className="container mx-auto py-2 flex justify-between items-center">
                <div className="block xl:hidden">
                    <BurgerMenu resourceLinks={resourceLinks} />
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
                            {category.children.length > 0 ?
                                <NavigationMenu key={category.id}>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="bg-transparent hover:text-primary">
                                                {currentLocal === "ru" ? category.name_ru : currentLocal === "en" ? category.name_en : category.name_kk}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="flex">
                                                {category.children.map((sub_category: any) => (
                                                    <div key={sub_category.id}>
                                                        <div className="p-4">
                                                            <h1 className="font-semibold whitespace-nowrap px-4 pb-2 text-neutral-900 dark:text-neutral-100">
                                                                {currentLocal === "ru" ? sub_category.name_ru : currentLocal === "en" ? sub_category.name_en : sub_category.name_kk}
                                                            </h1>

                                                            {sub_category.children.map((section: any) => (
                                                                <NavigationMenuLink
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
                                                                        className="justify-start w-full text-neutral-500 hover:text-primary"
                                                                    >
                                                                        {currentLocal === "ru" ? section.name_ru : currentLocal === "en" ? section.name_en : section.name_kk}
                                                                    </Button>
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>

                                                    </div>
                                                ))}
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                :
                                <a href={`/${category.slug}`}>
                                    <Button variant={"ghost"} className="hover:text-primary">
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

"use client"
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu"
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";


export default function Navbar({ categories }: { categories: any }) {
    const currentLocal = useLocale();
    const pathname = usePathname();
    const t = useTranslations("Header");

    return (
        <nav className="border-b sticky top-0 z-50 backdrop-blur-lg bg-background/70 hidden lg:block">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex">
                    <a href={`/`}>
                        <Button 
                            variant={"ghost"} 
                            className={`
                                text-base rounded-none border-b-transparent border-b-4 hover:border-b-primary hover:text-primary
                                ${pathname === `/${currentLocal}` && "border-b-primary"}
                            `}
                        >
                            {t("nav.items.title")}
                        </Button>
                    </a>
                    {categories.map((category: any) => (
                        <React.Fragment key={category.id}>
                            {category.children.length > 0 ?
                                <NavigationMenu key={category.id}>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="text-base bg-transparent rounded-none border-b-transparent border-b-4 hover:border-b-primary hover:text-primary">
                                                {currentLocal === "ru" ? category.name_ru : currentLocal === "en" ? category.name_en : category.name_kk}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="flex">
                                                {category.children.map((sub_category: any) => (
                                                    <div key={sub_category.id}>
                                                        <div className="p-4">
                                                            <h1 className="text-xl font-semibold whitespace-nowrap px-4 pb-2 text-foreground">
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
                                                                        className="text-base justify-start w-full text-neutral-500 hover:text-primary"                                                                    >
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
                                    <Button 
                                        variant={"ghost"} 
                                        className="text-base rounded-none border-b-transparent border-b-4 hover:border-b-primary hover:text-primary"
                                    >
                                        {currentLocal === "ru" ? category.name_ru : currentLocal === "en" ? category.name_en : category.name_kk}
                                    </Button>
                                </a>
                            }
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </nav>
    )
}

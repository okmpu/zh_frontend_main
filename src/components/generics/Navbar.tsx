"use client"

import { navLinks, resourceLinks } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Equal } from "lucide-react";
import Settings from "./Settings";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter();

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
                                    <Button variant={"ghost"} key={item.id} className="justify-start">
                                        <Link href={item.src}>{item.label}</Link>
                                    </Button>
                                )}
                            </DialogDescription>
                            <DialogTitle className="text-neutral-900 dark:text-neutral-100">Сілтемелер</DialogTitle>
                            <DialogDescription>
                                {navLinks.map(item =>
                                    <Button variant={"ghost"} key={item.id} className="justify-start">
                                        <Link href={item.src}>{item.label}</Link>
                                    </Button>
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
                    {navLinks.map(item => (
                        <React.Fragment key={item.id}>
                            {item.dropdown ?
                                <NavigationMenu key={item.id}>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="bg-transparent">{item.label}</NavigationMenuTrigger>
                                            <NavigationMenuContent className="flex flex-col">
                                                {item.subLinks?.map(sub_item => (
                                                    <NavigationMenuLink key={sub_item.id} href={sub_item.src}>
                                                        <Button variant={"ghost"} className="justify-start w-full text-neutral-500">
                                                            {sub_item.label}
                                                        </Button>
                                                    </NavigationMenuLink>
                                                ))}
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                :
                                <Button variant={"ghost"}>
                                    <Link href={item.src}>{item.label}</Link>
                                </Button>
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

"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { Languages, LaptopMinimal, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes"
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { locales } from "@/data/links";


export default function Settings() {
    const { setTheme } = useTheme();
    const router = useRouter();
    const currentLocal = useLocale();
    const pathname = usePathname();
    
    function onSelectLanguage(event: any) {
        const nextLocale = event.target.id;
        router.replace(
            {pathname},
            {locale: nextLocale}
        );
    }

    return (

        <div className="hidden md:block">
            {/* Search */}
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"ghost"} className="px-3">
                        <Search size={20} strokeWidth={1.5} />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-neutral-900 dark:text-neutral-100">Жылдам іздеу</DialogTitle>
                        <DialogDescription className="py-4 relative">
                            <Search size={20} strokeWidth={1.5} className="absolute top-6 left-3" />
                            <Input placeholder="Не іздедіңіз?" className="pl-10" />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            {/* Languages */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="px-3">
                        <Languages size={20} strokeWidth={1.5} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Тілді таңдау</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {locales.map(local => 
                        <DropdownMenuCheckboxItem 
                            key={local.id}
                            id={local.prefix}
                            checked={currentLocal === local.prefix}
                            onClick={onSelectLanguage}
                        >
                            {local.title}
                        </DropdownMenuCheckboxItem>)
                    }
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="px-3">
                        <Sun size={20} strokeWidth={1.5} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Персонализация</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => setTheme("system")}
                        className="flex gap-2 text-neutral-500"
                    >
                        <LaptopMinimal size={20} strokeWidth={1.5} />
                        <span>Жүйелік</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setTheme("light")}
                        className="flex gap-2 text-neutral-500"
                    >
                        <Sun size={20} strokeWidth={1.5} />
                        <span>Күн</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setTheme("dark")}
                        className="flex gap-2 text-neutral-500"
                    >
                        <Moon size={20} strokeWidth={1.5} />
                        <span>Түн</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
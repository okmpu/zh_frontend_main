import { legacyLinks, footerLinks, resourceLinks, facultiesLinks } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useLocale, useTranslations } from "next-intl";


export default function Footer() {
    const currentLocal = useLocale();
    const t = useTranslations("Footer");


    return (
        <footer className="border-t">
            <div className="container mx-auto">
                <div className="pt-8 pb-4 flex gap-8 flex-col lg:flex-row">
                    <div className="relative">
                        <Link href={"/"} className="min-w-32">
                            <Image
                                src={"/logo.png"} width={1709} height={366} alt="Logo image" priority={true}
                                className="w-32"
                            />
                        </Link>
                        <span className="block my-2 text-sm">&copy; 2024 Zhanibekov, University</span>
                        <ul className="flex">
                            <li>
                                <Button variant={"ghost"} className="px-3 hover:text-primary">
                                    <Link href={"/"}>
                                        <Instagram size={20} strokeWidth={1.5} />
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant={"ghost"} className="px-3 hover:text-primary">
                                    <Link href={"/"}>
                                        <Facebook size={20} strokeWidth={1.5} />
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant={"ghost"} className="px-3 hover:text-primary">
                                    <Link href={"/"}>
                                        <Youtube size={20} strokeWidth={1.5} />
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-4 md:flex md:flex-1 md:justify-between">
                        <div className="relative">
                            <h1 className="font-bold text-neutral-900 dark:text-neutral-100 px-4">{t("nav.title")}</h1>
                            <ul className="mt-2">
                                {footerLinks.map(item => (
                                    <li key={item.id}>
                                        <Link href={item.src}>
                                            <Button variant={"link"} className="text-neutral-500">
                                                {currentLocal === "ru" ? item.label_ru : currentLocal === "en" ? item.label_en : item.label}
                                            </Button>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative">
                            <h1 className="font-bold text-neutral-900 dark:text-neutral-100 px-4">{t("faculties.title")}</h1>
                            <ul className="mt-2">
                                {facultiesLinks.map(item => (
                                    <li key={item.id}>
                                        <Button variant={"link"}>
                                            <Link href={item.src} className="text-neutral-500">{item.label}</Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Resources */}
                        <div className="relative">
                            <h1 className="font-bold text-neutral-900 dark:text-neutral-100 px-4">{t("resources.title")}</h1>
                            <ul className="mt-2">
                                {resourceLinks.map(item => (
                                    <li key={item.id}>
                                        <Link href={item.src}>
                                            <Button variant={"link"} className="text-neutral-500">
                                                {currentLocal === "ru" ? item.label_ru : currentLocal === "en" ? item.label_en : item.label}
                                            </Button>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Policy */}
                        <div className="relative">
                            <h1 className="font-bold text-neutral-900 dark:text-neutral-100 px-4">{t("policy.title")}</h1>
                            <ul className="mt-2">
                                {legacyLinks.map(item => (
                                    <li key={item.id}>
                                            <Link href={item.src}>
                                                <Button variant={"link"} className="text-neutral-500">
                                                    {currentLocal === "ru" ? item.label_ru : currentLocal === "en" ? item.label_en : item.label}
                                                </Button>
                                            </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pt-4 pb-8 flex justify-between border-t"></div>
            </div>
        </footer>
    )
} 
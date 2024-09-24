"use client"
import { resourceLinks } from "@/data/links";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Settings from "./Settings";
import BurgerMenu from "./BurgerMenu";


export default function Header({ categories, }: { categories: any }) {
    const currentLocal = useLocale();

    return (
        <header className="border-b sticky top-0 z-10 bg-background lg:relative">
            <section className="hidden md:block bg-amber-500">
                <div className="container mx-auto py-2 flex justify-between">
                    {resourceLinks.map(item => (
                        <Link
                            key={item.id} href={item.src}
                            target="_blank"
                            className="text-white text-base block px-2 transition-all hover:opacity-70"
                        >
                            {currentLocal === "ru" ? item.label_ru : currentLocal === "en" ? item.label_en : item.label}
                        </Link>
                    ))}
                </div>
            </section>

            <section className="container mx-auto py-2 flex justify-between items-center">
                <a href={"/"} className="min-w-32">
                    <Image
                        src={"/logo.png"} width={1709} height={366} alt="Logo image" priority={true}
                        className="w-32 lg:w-44 xl:w-48"
                    />
                </a>

                <div
                    style={{ backgroundImage: "url('/blockquot.png')" }}
                    className="max-w-xl w-full h-32 overflow-hidden rounded-lg hidden lg:block"
                >
                    <Image
                        src={"/blockquot.png"} width={1920} height={480} alt="Image"
                        className="w-full h-full"
                    />
                </div>

                <div className="hidden lg:block">
                    <Settings />
                </div>
                <div className="block lg:hidden">
                    <BurgerMenu
                        resourceLinks={resourceLinks}
                        categories={categories}
                    />
                </div>
            </section>
        </header>

    )
}
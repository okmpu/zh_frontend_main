import { resourceLinks } from "@/data/links";
import { useLocale } from "next-intl";
import Link from "next/link";


export default function Header() {
    const currentLocal = useLocale();

    return (
        <header className="hidden md:block bg-amber-500">
            <div className="container mx-auto py-2 flex">
                {resourceLinks.map(item => (
                    <Link 
                        key={item.id} href={item.src}
                        target="_blank"
                        className="text-white text-sm block px-2 transition-all hover:opacity-70"
                    >
                        {currentLocal === "ru" ? item.label_ru : currentLocal === "en" ? item.label_en : item.label}
                    </Link>
                ))}
            </div>
        </header>

    )
}
import { resourceLinks } from "@/data/links";
import Link from "next/link";


export default function Header() {
    return (
        <header className="hidden md:block bg-amber-500">
            <div className="container mx-auto py-2 flex">
                {resourceLinks.map(item => (
                    <Link 
                        key={item.id} href={item.src}
                        target="_blank"
                        className="text-white text-sm block px-2 font-light transition-all hover:opacity-70"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </header>

    )
}
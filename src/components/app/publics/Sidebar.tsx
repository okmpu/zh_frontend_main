"use client"
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function PublicSidebar() {
    const pathname = usePathname();
    const currentLocale = useLocale();

    return (
        <div className="w-full max-w-64">
                <Link href={"/publics/news"}>
                    <Button
                        variant={"ghost"}
                        className={`
                            w-full justify-start hover:text-primary
                            ${pathname === `/${currentLocale}/publics/news` && "bg-secondary text-primary"}
                        `}
                    >
                        Жаңалықтар
                    </Button>
                </Link>
                <Link href={"/publics/announcements"}>
                    <Button
                        variant={"ghost"}
                        className={`
                            w-full justify-start hover:text-primary
                            ${pathname === `/${currentLocale}/publics/announcements` && "bg-secondary text-primary"}
                        `}
                    >
                        Хабарландырулар
                    </Button>
                </Link>
                <Link href={"/publics/all-events"}>
                    <Button
                        variant={"ghost"}
                        className={`
                            w-full justify-start hover:text-primary
                            ${pathname === `/${currentLocale}/publics/all-events` && "bg-secondary text-primary"}
                        `}
                    >
                        Іс-шаралар
                    </Button>
                </Link>
            </div>
    )
}
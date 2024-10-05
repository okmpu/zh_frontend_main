"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function PublicSidebar() {
    const pathname = usePathname();
    const currentLocale = useLocale();
    const t = useTranslations("Publics");

    return (
        <React.Fragment>
            <div className="w-full max-w-64 hidden lg:block">
                <Link href={"/publics/news"}>
                    <Button
                        variant={"ghost"}
                        className={`
                            w-full text-base justify-start hover:text-primary
                            ${pathname === `/${currentLocale}/publics/news` && "bg-secondary text-primary"}
                        `}
                    >
                        {t("news.title")}
                    </Button>
                </Link>
                <Link href={"/publics/announcements"}>
                    <Button
                        variant={"ghost"}
                        className={`
                            w-full text-base justify-start hover:text-primary
                            ${pathname === `/${currentLocale}/publics/announcements` && "bg-secondary text-primary"}
                        `}
                    >
                        {t("announcements.title")}
                    </Button>
                </Link>
                <Link href={"/publics/all-events"}>
                    <Button
                        variant={"ghost"}
                        className={`
                            w-full text-base justify-start hover:text-primary
                            ${pathname === `/${currentLocale}/publics/all-events` && "bg-secondary text-primary"}
                        `}
                    >
                        {t("events.title")}
                    </Button>
                </Link>
            </div>
        </React.Fragment>
    )
}
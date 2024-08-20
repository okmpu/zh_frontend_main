"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";


export default function DepartmentNavbar({ slug }: { slug: string }) {
    const currentLocale = useLocale();
    const t = useTranslations("FacultyPage");
    const pathname = usePathname();
    
    return (
        <div className="flex">
            <Link href={`/${currentLocale}/university/departments/${slug}`}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none text-base border-b-4 border-b-background hover:border-primary
                    ${pathname === `/${currentLocale}/university/departments/${slug}` && "border-b-primary"}
                `}
                >
                    {t("nav.home")}
                </Button>
            </Link>
            <Link href={`/${currentLocale}/university/departments/${slug}/programs`}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none text-base border-b-4 border-b-background hover:border-primary
                    ${pathname === `/${currentLocale}/university/departments/${slug}/programs` && "border-b-primary"}
                `}
                >
                    {t("nav.programs")}
                </Button>
            </Link>
            <Link href={`/${currentLocale}/university/departments/${slug}/projects`}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none text-base border-b-4 border-b-background hover:border-primary
                    ${pathname === `/${currentLocale}/university/departments/${slug}/projects` && "border-b-primary"}
                `}
                >
                    {t("nav.projects")}
                </Button>
            </Link>
            <Link href={`/${currentLocale}/university/departments/${slug}/personals`}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none text-base border-b-4 border-b-background hover:border-primary
                    ${pathname === `/${currentLocale}/university/departments/${slug}/personals` && "border-b-primary"}
                `}
                >
                    {t("nav.personals")}
                </Button>
            </Link>
            <Link href={`/${currentLocale}/university/departments/${slug}/publics`}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none text-base border-b-4 border-b-background hover:border-primary
                    ${pathname === `/${currentLocale}/university/departments/${slug}/publics` && "border-b-primary"}
                `}
                >
                    {t("nav.publics")}
                </Button>
            </Link>
            <Link href={`/${currentLocale}/university/departments/${slug}/about`}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none text-base border-b-4 border-b-background hover:border-primary
                    ${pathname === `/${currentLocale}/university/departments/${slug}/about` && "border-b-primary"}
                `}
                >
                    {t("nav.about")}
                </Button>
            </Link>
        </div>
    )
}
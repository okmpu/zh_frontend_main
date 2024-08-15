"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";


export default function FacultyNavbar({ slug }: { slug: string }) {
    const currentLocal = useLocale();
    const t = useTranslations("FacultyPage");
    const pathname = usePathname();
    
    return (
        <div className="flex">
            <Link href={`/${currentLocal}/university/faculties/${slug}`}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none border-b-2 border-b-background hover:border-primary
                    ${pathname === `/${currentLocal}/university/faculties/${slug}` && "border-b-primary"}
                `}
                >
                    {t("nav.home")}
                </Button>
            </Link>
            <Link href={`/${currentLocal}/university/faculties/${slug}/programs`}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none border-b-2 border-b-background hover:border-primary
                    ${pathname === `/${currentLocal}/university/faculties/${slug}/programs` && "border-b-primary"}
                `}
                >
                    {t("nav.programs")}
                </Button>
            </Link>
            <Link href={`/${currentLocal}/university/faculties/${slug}/projects`}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none border-b-2 border-b-background hover:border-primary
                    ${pathname === `/${currentLocal}/university/faculties/${slug}/projects` && "border-b-primary"}
                `}
                >
                    {t("nav.projects")}
                </Button>
            </Link>
            <Link href={"#"}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none border-b-2 border-b-background hover:border-primary
                    ${pathname === `/${currentLocal}/university/faculties/${slug}/asd` && "border-b-primary"}
                `}
                >
                    {t("nav.departments")}
                </Button>
            </Link>
            <Link href={"#"}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none border-b-2 border-b-background hover:border-primary
                    ${pathname === `/${currentLocal}/university/faculties/${slug}/asd` && "border-b-primary"}
                `}
                >
                    {t("nav.personals")}
                </Button>
            </Link>
            <Link href={"#"}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none border-b-2 border-b-background hover:border-primary
                    ${pathname === `/${currentLocal}/university/faculties/${slug}/asd` && "border-b-primary"}
                `}
                >
                    {t("nav.publics")}
                </Button>
            </Link>
            <Link href={"#"}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none border-b-2 border-b-background hover:border-primary
                    ${pathname === `/${currentLocal}/university/faculties/${slug}/asd` && "border-b-primary"}
                `}
                >
                    {t("nav.about")}
                </Button>
            </Link>
            <Link href={"#"}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none border-b-2 border-b-background hover:border-primary
                    ${pathname === `/${currentLocal}/university/faculties/${slug}/asd` && "border-b-primary"}
                `}
                >
                    {t("nav.contact")}
                </Button>
            </Link>
        </div>
    )
}
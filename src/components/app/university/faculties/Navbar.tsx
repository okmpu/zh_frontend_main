"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";


export default function FacultyNavbar({ slug }: { slug: string }) {
    const currentLocal = useLocale();
    const pathname = usePathname();
    
    return (
        <div className="flex">
            <Link href={"#"}>
                <Button
                    variant={"ghost"}
                    className={`
                    rounded-none border-b-2 border-b-background hover:border-primary
                    ${pathname === `/${currentLocal}/university/faculties/${slug}` && "border-b-primary"}
                `}
                >
                    Басты бет
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
                    Бағдарламалар
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
                    Жобалар
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
                    Кафедралар
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
                    Персоналдар
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
                    Публикациялар
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
                    Факультет жайлы
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
                    Контакт
                </Button>
            </Link>
        </div>
    )
}
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Info } from "lucide-react";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";


// Types
type PropsData = {
    params: {
        program_slug: string
    }
}


// Metadata
export async function generateMetadata({ params, }: PropsData): Promise<Metadata> {
    const program_slug = params.program_slug;
    const locale = await getLocale();

    const data = await fetch(
        `${process.env.BACKEND_URL}/api/main/program/${program_slug}/`
    ).then((res) => res.json())

    if (data.program) {
        const program = data.program;
        return {
            title: `${locale === "ru" ? program.name_ru : locale === "en" ? program.name_en : program.name_kk} - Zhanibekov university`
        }
    } else {
        return {
            title: `${locale === "ru" ? "Страница не найдена" : locale === "en" ? "Page not found" : "Бұндай бет табылмады"}`
        }
    }
}


// Actions
async function getProgramData({ program_slug, }: { program_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/program/${program_slug}/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}



export default async function Admission({ params, }: PropsData) {
    const data = await getProgramData(params);
    const currentLocale = await getLocale();
    const t = await getTranslations("Programs");

    if (!data) {
        notFound();
    }
    const { program } = data;

    return (
        <div className="">
            <div className="container mx-auto py-10 grid gap-10">
                <div className="">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
                        {/* This code will be edit */}
                        {currentLocale === "ru" ? program.name_ru : currentLocale === "en" ? program.name_en : program.name_kk}
                    </h1>
                    <div>
                        {currentLocale === "ru" ? program.name_ru : currentLocale === "en" ? program.name_en : program.name_kk} 
                        <span> бойынша білім беру бағдарламаларының тізімі</span>
                    </div>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>{t("head.code")}</TableHead>
                            <TableHead>{t("head.name")}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {program.program_items.map((item: any) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.code}</TableCell>
                                <TableCell>
                                    {currentLocale === "ru" ? item.name_ru : currentLocale === "en" ? item.name_en : item.name_kk}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div className="flex items-center flex-col md:flex-row gap-2 border rounded-lg p-4 bg-secondary">
                    <Info size={20} strokeWidth={1.5} className="text-primary" />
                    <span className="flex-1">
                        Білім беру бағдарламалар, емтихан күндері, қабылдау және оқуға түсуге қажетті 
                        құжаттар жайлы біздің талапкер сайтынан біле аласыздар:
                    </span>
                    <Link href={"https://talapker.okmpu.edu.kz/"} target="_blank">
                        <Button variant={"link"} className="px-0">talapker.okmpu.edu.kz</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
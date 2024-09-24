import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { useLocale, useTranslations } from "next-intl";


export default function ProgramsDepartment({ programs, }: { programs: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("DepartmentPage.detail");

    return (
        <div className="grid gap-4 my-10">
            <div className="flex">
                <h1 className="text-xl font-bold text-foreground">
                    {t("programs.head")}
                </h1>
            </div>

            <Tabs defaultValue="bachelor" className="w-full grid gap-4">
                <TabsList className="grid grid-cols-3 h-auto">
                    {programs.map((item: any) => (
                        <TabsTrigger key={item.id} value={item.slug}>
                            {currentLocale === "ru" ? item.name_ru : currentLocale === "en" ? item.name_en : item.name_kk}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {programs.map((item: any) => (
                    <TabsContent
                        key={item.id}
                        value={item.slug}
                    >
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{t("programs.list.code")}</TableHead>
                                    <TableHead>{t("programs.list.name")}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {item.program_items.map((specialty: any) => (
                                    <TableRow key={specialty.id}>
                                        <TableCell>{specialty.code}</TableCell>
                                        <TableCell>
                                            {currentLocale === "ru" ? specialty.name_ru : currentLocale === "en" ? specialty.name_en : specialty.name_kk}
                                        </TableCell>
                                    </TableRow>
                                ))}

                            </TableBody>
                        </Table>
                    </TabsContent>
                ))}
            </Tabs>
        </div>

    )
}

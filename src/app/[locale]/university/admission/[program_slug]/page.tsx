import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Info } from "lucide-react";
import Link from "next/link";


// Types
type PropsData = {
    params: {
        program_slug: string
    }
}


export default function Admission({ params, }: PropsData) {
    return (
        <div className="">
            <div className="container mx-auto py-10 grid gap-10">
                <div className="">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                        {/* This code will be edit */}
                        {params.program_slug === "bachelor" ? "Бакалвриат" : params.program_slug === "magistracy" ? "Магистратура" : "Докторантура"}
                    </h1>
                    <span>{params.program_slug} бойынша білім беру бағдарламаларының тізімі</span>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Шифр нөмері</TableHead>
                            <TableHead>Атауы</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">6В01101</TableCell>
                            <TableCell>Педагогика және психология</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">6В01101</TableCell>
                            <TableCell>Педагогика және психология</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">6В01101</TableCell>
                            <TableCell>Педагогика және психология</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">6В01101</TableCell>
                            <TableCell>Педагогика және психология</TableCell>
                        </TableRow><TableRow>
                            <TableCell className="font-medium">6В01101</TableCell>
                            <TableCell>Педагогика және психология</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">6В01101</TableCell>
                            <TableCell>Педагогика және психология</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">6В01101</TableCell>
                            <TableCell>Педагогика және психология</TableCell>
                        </TableRow><TableRow>
                            <TableCell className="font-medium">6В01101</TableCell>
                            <TableCell>Педагогика және психология</TableCell>
                        </TableRow>
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
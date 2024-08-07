"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";


export default function PublicSearchFilter() {
    const t = useTranslations("Publics");

        return (
            <div className="flex justify-between items-center pb-4">
                <Input
                    type="text" 
                    placeholder={`${t("search")}...`}
                    className="max-w-sm w-full" 
                />

                {/* <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={t("select")} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">admin</SelectItem>
                        <SelectItem value="dark">phys.math</SelectItem>
                        <SelectItem value="system">it_admin</SelectItem>
                    </SelectContent>
                </Select> */}
            </div>
        )
    }
"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";


const formSchema = z.object({
    searchNews: z.string().min(2).max(50),
})

export default function PublicsFilter() {
    const t = useTranslations("Publics");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchNews: "",
        },
    })

    function onSearch(values: z.infer<typeof formSchema>) {
        alert(JSON.stringify(values))
    }
    return (
        <div className="flex justify-between items-center pb-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSearch)} className="relative">
                    <FormField
                        control={form.control}
                        name="searchNews"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder={t("search")} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" variant={"ghost"} className="absolute right-0 top-0">
                        <Search size={20} strokeWidth={1.5} />
                    </Button>
                </form>
            </Form>

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={t("select")} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">admin</SelectItem>
                    <SelectItem value="dark">phys.math</SelectItem>
                    <SelectItem value="system">it_admin</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
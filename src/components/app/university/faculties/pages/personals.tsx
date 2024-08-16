"use client"
import { useLocale, useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";


export default function PersonalsFaculty({ personals }: { personals: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("FacultyPage.detail");


    return (
        <div className="grid gap-4 my-10">
            <div className="flex">
                <h1 className="text-xl font-bold text-foreground">
                    {t("personals.head")}
                </h1>
            </div>

            <Tabs defaultValue="management" className="w-full grid gap-4">
                <TabsList className="grid grid-cols-3 h-auto">
                    {personals.map((item: any) => (
                        <TabsTrigger key={item.id} value={item.type}>
                            {currentLocale === "ru" ? item.name_ru : currentLocale === "en" ? item.name_en : item.name_kk}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {personals.map((item: any) => (
                    <TabsContent
                        key={item.id}
                        value={item.type}
                    >
                        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {item.results.map((personal: any) => (
                                <div
                                    key={personal.id}
                                    className="border rounded-lg flex justify-center items-center flex-col gap-2 p-4"
                                >
                                    <Image
                                        src={personal.image ? personal.image : "/card.png"} width={512} height={512} alt="Image"
                                        className="w-36 h-36 rounded-full border"
                                    />

                                    <div className="text-center">
                                        <h1 className="text-foreground text-base font-semibold">
                                            {personal.user.first_name + " " + personal.user.last_name}
                                        </h1>
                                        <span>
                                            {currentLocale === "ru" ? personal.profession_ru : currentLocale === "en" ? personal.profession_en : personal.profession_kk}
                                        </span>
                                    </div>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant={"secondary"} className="w-full flex">{t("personals.link")}</Button>
                                        </DialogTrigger>
                                        <DialogContent className="flex flex-col max-w-2xl">
                                            <DialogHeader>
                                                <DialogTitle></DialogTitle>
                                                <DialogDescription></DialogDescription>
                                            </DialogHeader>
                                            <div className="text-center grid gap-4">
                                                <Image
                                                    src={personal.image ? personal.image : "/card.png"} width={512} height={512} alt="Image"
                                                    className="w-40 h-40 rounded-full border-2 mx-auto"
                                                />
                                                <div className="grid gap-2 border-b pb-4">
                                                    <h1 className="text-xl font-bold text-foreground">
                                                        {personal.user.first_name + " " + personal.user.last_name}
                                                    </h1>
                                                    <span>
                                                        {currentLocale === "ru" ? personal.profession_ru : currentLocale === "en" ? personal.profession_en : personal.profession_kk}
                                                    </span>
                                                    <div>
                                                        {personal.phone &&
                                                            <div className="flex justify-center items-center gap-2">
                                                                <Phone strokeWidth={1.5} size={20} />
                                                                <Button variant={"link"} className="h-auto p-0">{personal.phone}</Button>
                                                            </div>
                                                        }
                                                        {personal.email &&
                                                            <div className="flex justify-center items-center gap-2">
                                                                <Mail size={20} strokeWidth={1.5} />
                                                                <span>{personal.email}</span>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div>
                                                    {currentLocale === "ru" ? personal.about_ru : currentLocale === "en" ? personal.about_en : personal.about_kk}
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}
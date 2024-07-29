"use client"
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function AcademicEducation({ academics, }: { academics: any }) {
    const currentLocal = useLocale();
    const t = useTranslations("HomePage");

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="border-t">
                <div className="container grid gap-10 mx-auto py-10">
                    <div className="max-w-xl w-full text-center mx-auto">
                        <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                            {t("academic.title")}
                        </h1>
                        <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                        <span>{t("academic.sub_title")}</span>
                    </div>

                    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {academics.map((item: any) => (
                            <Link
                                key={item.id}
                                href={`/university/faculties/${item.slug}`}
                                className="p-4 grid gap-4 rounded-lg border transition-all hover:bg-secondary"
                            >
                                <div className="w-36 h-36 rounded-full border overflow-hidden mx-auto">
                                    <Image
                                        src={item.image ? item.image : "/card.png"} width={512} height={512} alt="Image"
                                        className="w-full h-full"
                                    />

                                </div>
                                <div className="grid gap-4 text-center">
                                    <h1 className="text-center font-semibold text-xl text-neutral-900 dark:text-neutral-100">
                                        {currentLocal === "ru" ? item.name_ru : currentLocal === "en" ? item.name_en : item.name_kk}
                                    </h1>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Link href={"/university/faculties"}>
                            <Button variant={"link"}>{t("academic.link")}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
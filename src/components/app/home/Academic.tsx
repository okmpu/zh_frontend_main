"use client"
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default function AcademicEducation({ academics, }: { academics: any }) {
    const currentLocal = useLocale();
    const t = useTranslations("HomePage");

    return (
        <div className="border-t">
            <div className="container grid gap-10 mx-auto py-10">
                <div className="max-w-xl w-full text-center mx-auto">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-foreground">
                        {t("academic.title")}
                    </h1>
                    <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                    <span>{t("academic.sub_title")}</span>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full mx-auto max-w-64 sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl"
                >
                    <CarouselContent>
                        {academics.map((item: any) => (
                            <CarouselItem
                                key={item.id}
                                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                            >
                                <Link
                                    href={`/university/faculties/${item.slug}`}
                                    className="p-6 grid gap-4 rounded-lg border transition-all text-foreground hover:bg-secondary"
                                >
                                    <div className="w-36 h-36 rounded-full border overflow-hidden mx-auto">
                                        <Image
                                            src={item.image ? item.image : "/card.png"} width={512} height={512} alt="Image"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="grid gap-4 text-center">
                                        <h1 className="text-center font-semibold text-xl line-clamp-1">
                                            {currentLocal === "ru" ? item.name_ru : currentLocal === "en" ? item.name_en : item.name_kk}
                                        </h1>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <div className="flex justify-center">
                    <Link href={"/university/faculties"}>
                        <Button variant={"link"} className="h-auto p-0 text-base">{t("academic.link")}</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
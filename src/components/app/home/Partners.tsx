"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"


export default function Partners() {
    const currentLocal = useLocale();
    const t = useTranslations("HomePage");
    
    return (
        <div className="border-t">
            <div className="container grid gap-10 mx-auto py-10">
                <div className="max-w-xl w-full text-center mx-auto">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                        {t("partner.title")}
                    </h1>
                    <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                    <span>{t("partner.sub_title")}</span>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full mx-auto max-w-64 sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                                <div className="border rounded-lg overflow-hidden">
                                    <Image 
                                        src={"/poster.png"} width={1920} height={1080} alt="Image"
                                        className="w-full"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

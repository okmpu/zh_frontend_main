"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

const partners = [
    {
        id: 1,
        link: "https://qazaqstanhalqyna.kz",
        image: "/partner-1.png"
    },
    {
        id: 2,
        link: "https://atau.kz",
        image: "/partner-2.png"
    },
    {
        id: 3,
        link: "https://tilmedia.kz",
        image: "/partner-3.png"
    },    
    {
        id: 4,
        link: "https://qujat.kz",
        image: "/partner-4.jpg"
    },    
    {
        id: 5,
        link: "https://qazcorpora.kz",
        image: "/partner-5.jpg"
    },
    {
        id: 6,
        link: "https://sozdikqor.kz",
        image: "/partner-6.jpg"
    },
    {
        id: 7,
        link: "https://termincom.kz",
        image: "/partner-7.jpg"
    },
    {
        id: 8,
        link: "https://emle.kz",
        image: "/partner-8.png"
    },
]

export default function Partners() {
    const currentLocale = useLocale();
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
                        {partners.map((partner: any) => (
                            <CarouselItem key={partner.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                                <Link 
                                    href={partner.link}
                                    target="_blank"
                                    className="border rounded-lg overflow-hidden block h-40">
                                    <Image 
                                        src={partner.image} width={1920} height={1080} alt="Image"
                                        className="w-full"
                                    />
                                </Link>
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

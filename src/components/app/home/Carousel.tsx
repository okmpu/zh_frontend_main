"use client"
import Heading from "@/components/generics/Heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export function CarouselContainer() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full container"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="w-full h-[480px] flex flex-col gap-2 items-center py-20">
                            <Image
                                src={"/logo.png"} width={1709} height={366} alt="Logo image" priority={true}
                                className="w-64"
                            />
                            <Heading sizeClass="text-4xl">Zhanibekov university</Heading>
                            <span className="block text-center">
                                Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті
                            </span>
                            <div className="flex gap-2 mt-2">
                                <Button>
                                    <Link href={"/products"}>Жылдам бастама</Link>
                                </Button>
                                <Link href={"/accounts/login"}>
                                    <Button variant={"secondary"}>Бізге қосылу</Button>
                                </Link>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}


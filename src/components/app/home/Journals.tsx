import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";


export default function Journals({ journals, }: {journals: any }) {
    const currentLocal = useLocale();
    const t = useTranslations("HomePage");

    return (
        <div
            style={{ backgroundImage: "url('/bg.jpeg')" }}
            className="bg-cover bg-center"
        >
            <div className="w-full h-full bg-primary/80">
                <div className="container mx-auto py-10">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full mx-auto max-w-64 sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl"
                    >
                        <CarouselContent>
                            {journals.map((item: any) => (
                                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <Link
                                        href={item.file}
                                        target="_blank"
                                        className="block bg-background rounded-lg overflow-hidden transition-all hover:bg-secondary"
                                    >
                                        <Image
                                            src={item.poster} width={480} height={700} alt="Image"
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
        </div>
    )
}
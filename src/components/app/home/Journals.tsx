import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";


export default function Journals() {
    const currentLocal = useLocale();
    const t = useTranslations("HomePage");

    return (
        <div
            style={{ backgroundImage: "url('/bg.jpeg')" }}
            className="bg-cover bg-center"
        >
            <div className="w-full h-full bg-primary/80">
                <div className="container grid gap-10 mx-auto py-10">
                    {/* <div className="max-w-xl w-full text-center mx-auto">
                        <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-foreground">
                            {t("events.title")}
                        </h1>
                        <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                        <span>{t("events.sub_title")}</span>
                    </div> */}

                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full mx-auto max-w-64 sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl"
                    >
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <Link
                                        href={`/publics/journals/${index}`}
                                        className="block bg-background rounded-lg overflow-hidden transition-all hover:bg-secondary"
                                    >
                                        <Image
                                            src={"/journal.jpeg"} width={480} height={700} alt="Image"
                                            className="w-full"
                                        />

                                        {/* <div className="px-4 py-4 grid gap-2">
                                                <h1 className="font-semibold line-clamp-2 text-foreground">
                                                    {currentLocal === "ru" ? event.title_ru : currentLocal === "en" ? event.title_en : event.title_kk}
                                                </h1>

                                                <div className="flex items-center gap-2 text-xs">
                                                    <Clock size={16} strokeWidth={1.5} />
                                                    <span>
                                                        {date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}
                                                        .{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}
                                                        .{date.getFullYear()} -
                                                        {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                                        :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                                    </span>
                                                </div>
                                            </div> */}
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    <Link href={"/publics/all-events"} className="flex justify-center">
                        <Button variant={"link"} className="text-secondary h-auto p-0 text-base">
                            {t("events.showAll")}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
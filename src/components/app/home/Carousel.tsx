"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';


export default function Carousel({ headliners, }: { headliners: any }) {
    const currentLocal = useLocale();
    const t = useTranslations("HomePage");
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                id="carousel"
                className="mySwiper"
            >
                {headliners.map((headliner: any) => (
                    <SwiperSlide
                        key={headliner.id}
                        className="h-full bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${headliner.poster ? headliner.poster : "/poster.png"})` }}
                    >
                        <div className="w-full h-full relative" id="shadow">
                            <div className="container h-full flex items-center relative z-10">
                                <div className="max-w-screen-md w-full grid gap-4">
                                    <h1 className="text-neutral-100 font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                                        {currentLocal === "ru" ? headliner.title_ru : currentLocal === "en" ? headliner.title_en : headliner.title_kk}
                                    </h1>
                                    <span className="text-neutral-200 line-clamp-3 sm:line-clamp-none">
                                        {currentLocal === "ru" ? headliner.about_ru : currentLocal === "en" ? headliner.about_en : headliner.about_kk}
                                    </span>

                                    <div className="flex">
                                        <Link href={headliner.src}>
                                            <Button variant={"default"}>{t("offer.button")}</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div id="bottom-shadow" className="absolute bottom-0 w-full h-28"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
}

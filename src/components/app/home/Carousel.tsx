"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';


export default function Carousel({ headliners, }: { headliners: any }) {
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
                modules={[Autoplay, Pagination]}
                className="mySwiper h-[360px] lg:h-[420px] xl:h-[480px] 2xl:h-[580px]"
            >
                {headliners.map((headliner: any) => (
                    <SwiperSlide
                        key={headliner.id}
                        className="h-full bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${headliner.poster ? headliner.poster : "/poster.png"})` }}
                    >
                        <div className="w-full h-full relative" id="shadow">
                            <div className="container h-full flex items-center relative z-10">
                                <div className="max-w-4xl mx-auto text-center grid gap-4">
                                    <h1 className="text-neutral-100 font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                                        {headliner.title_kk}
                                    </h1>
                                    <span className="text-neutral-200 line-clamp-3 sm:line-clamp-none">{headliner.about_kk}</span>

                                    <div className="flex justify-center flex-wrap gap-2 sm:flex-nowrap sm:gap-4">
                                        <Link href={"#"}>
                                            <Button variant={"default"}>Толығырақ қарап шығу</Button>
                                        </Link>

                                        <Link href={"#"}>
                                            <Button variant={"outline"}>Толығырақ қарап шығу</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 w-full h-1/3" id="bottom-shadow"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
}

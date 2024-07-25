"use client"
import { motion } from 'framer-motion';
import { Atom, FlaskConical, Globe, GraduationCap, SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';


const programs: {id: number, name: string, slug: string }[] = [
    {
        id: 1,
        name: "Бакалавриат",
        slug: "bachelor",
    },
    {
        id: 2,
        name: "Магистратура",
        slug: "magistracy",
    },
    {
        id: 3,
        name: "Докторантура",
        slug: "doctoral",
    },
]


function GetIcon({ slug, }: { slug: string }) {
    if (slug === "bachelor") {
        return <GraduationCap size={64} strokeWidth={1} />
    } else if (slug === "magistracy") {
        return <Atom size={64} strokeWidth={1} />
    } else {
        return <FlaskConical size={64} strokeWidth={1} />
    }
}


export default function OurProgramms() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container grid items-center gap-10 mx-auto py-10">
                <div className="max-w-xl w-full text-center mx-auto">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                        Қабылдау комиссиясы
                    </h1>
                    <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                    <span>
                        Біз педагогика саласындағы бакалавриат, магистратура және 
                        қосымша білім беру бағдарламаларын ұсынамыз
                    </span>
                </div>

                <div className="w-full">
                    <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {programs.map((item: any) => (
                            <Link
                                key={item.id}
                                href={`/university/admission/${item.slug}`} 
                                className="border rounded-lg flex flex-col justify-center items-center gap-2 p-5 md:p-10 transition-all text-neutral-900 dark:text-neutral-100 bg-secondary hover:bg-primary hover:text-neutral-100"
                            >
                                {GetIcon({slug: item.slug})}
                                <h1 className="text-base md:text-xl font-semibold">
                                    {item.name}
                                </h1>
                            </Link>
                        ))}
                        <Link
                            href={"https://talapker.okmpu.edu.kz/"}
                            target="_blank"
                            className="relative border rounded-lg flex flex-col justify-center items-center gap-2 p-5 md:p-10 transition-all text-neutral-900 dark:text-neutral-100 bg-secondary hover:bg-primary hover:text-neutral-100"
                        >
                            <SquareArrowOutUpRight size={20} strokeWidth={1} className="absolute top-2 right-2"/>
                            <Globe size={64} strokeWidth={1} />
                            <h1 className="text-base md:text-xl font-semibold">Талапкер</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
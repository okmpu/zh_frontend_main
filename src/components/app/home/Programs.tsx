"use client"
import { motion } from 'framer-motion';


export default function OurProgramms() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container grid gap-10 mx-auto py-10">
                <div className="max-w-xl w-full mx-auto text-center">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                        Біздің бағдарламалар
                    </h1>
                    <span>
                        Біз педагогика саласындағы бакалавриат, магистратура және қосымша білім беру
                        бағдарламаларын ұсынамыз
                    </span>
                </div>

                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    <div
                        className="h-52 rounded-lg border bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: "url('/card.png')" }}
                    >
                        <div className="w-full h-full bg-background/50 flex justify-center items-end">
                        </div>
                    </div>

                    <div
                        className="h-52 rounded-lg border bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: "url('/card.png')" }}
                    >
                        <div className="w-full h-full bg-background/50 flex justify-center items-end">
                        </div>
                    </div>

                    <div
                        className="h-52 rounded-lg border bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: "url('/card.png')" }}
                    >
                        <div className="w-full h-full bg-background/50 flex justify-center items-end">
                        </div>
                    </div>

                    <div
                        className="h-52 rounded-lg border bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: "url('/card.png')" }}
                    >
                        <div className="w-full h-full bg-background/50 flex justify-center items-end">
                        </div>
                    </div>

                    <div
                        className="h-52 rounded-lg border bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: "url('/card.png')" }}
                    >
                        <div className="w-full h-full bg-background/50 flex justify-center items-end">
                        </div>
                    </div>

                    <div
                        className="h-52 rounded-lg border bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: "url('/card.png')" }}
                    >
                        <div className="w-full h-full bg-background/50 flex justify-center items-end">
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
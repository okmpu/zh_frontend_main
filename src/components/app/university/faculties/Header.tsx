"use client"
import { useLocale } from "next-intl";
import Image from "next/image";



export default function FacultyHead({ faculty }: { faculty: any }) {
    const currentLocale = useLocale();

    return (
        <div
            style={{ backgroundImage: `url('${faculty.image}')` }}
            className="h-80 bg-cover bg-center"
        >
            <div className="flex justify-center h-full w-full backdrop-blur-lg bg-secondary/80">
                <div className="flex items-center justify-center gap-4">
                    <Image 
                        src={faculty.image ? faculty.image : "/card.png"} width={512} height={512} alt="Image" 
                        className="w-36 rounded-full"
                    />
                    <div>
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-neutral-900 dark:text-neutral-100">
                            {currentLocale === "ru" ? faculty.name_ru : currentLocale === "en" ? faculty.name_en : faculty.name_kk}
                        </h1>
                        <span>Факультет</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
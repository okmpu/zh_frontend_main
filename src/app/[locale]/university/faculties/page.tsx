import { Metadata } from "next"
import { getLocale, getTranslations, unstable_setRequestLocale } from "next-intl/server"
import Image from "next/image"
import Link from "next/link"


type Props = {
    params: {
        locale: string
    }
}

export const metadata: Metadata = {
    title: 'Факультеттер - Zhanibekov university',
    description: 'Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті',
}


async function getFacultiesData() {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/faculties/`, { cache: "no-store" })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export default async function Faculties({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);
    const currentLocale = await getLocale();
    const t = await getTranslations("FacultyPage");
    const data = await getFacultiesData();
    const { faculties } = data;
    
    return (
        <div>
            <div className="container flex flex-col gap-10 mx-auto py-10">
                
                <div className="flex flex-col gap-4 border-b pb-10">
                    <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        {t("title")}
                    </h1>

                    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {faculties.map((item: any) => (
                            <Link
                                key={item.id}
                                href={`/university/faculties/${item.slug}`}
                                className="p-4 grid gap-4 rounded-lg border transition-all hover:bg-secondary"
                            >
                                <div className="w-36 h-36 rounded-full border overflow-hidden mx-auto">
                                    <Image
                                        src={item.image ? item.image : "/card.png"} width={512} height={512} alt="Image"
                                        className="w-full h-full"
                                    />

                                </div>
                                <div className="grid gap-4 text-center">
                                    <h1 className="text-center font-semibold text-xl text-neutral-900 dark:text-neutral-100">
                                        {currentLocale === "ru" ? item.name_ru : currentLocale === "en" ? item.name_en : item.name_kk}
                                    </h1>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

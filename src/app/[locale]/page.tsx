import { CarouselContainer } from "@/components/app/home/Carousel";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";


type Props = {
    params: {
        locale: string
    }
}

export const metadata: Metadata = {
    title: 'Zhanibekov university',
    description: 'Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті',
}


export default function Home({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);

    return (
        <div>
            <CarouselContainer />

            <div className="border-t">
                <div className="container grid gap-10 mx-auto py-10">
                    <div className="max-w-xl w-full mx-auto text-center">
                        <h1 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">Факультеттер</h1>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Temporibus vitae ut facere earum magni a eveniet. Tenetur vel 
                            saepe facilis?
                        </span>
                    </div>

                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                        <div className="bg-neutral-100 h-56 rounded-lg shadow"></div>
                        <div className="bg-neutral-100 h-56 rounded-lg shadow"></div>
                        <div className="bg-neutral-100 h-56 rounded-lg shadow"></div>
                        <div className="bg-neutral-100 h-56 rounded-lg shadow"></div>
                        <div className="bg-neutral-100 h-56 rounded-lg shadow"></div>
                        <div className="bg-neutral-100 h-56 rounded-lg shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

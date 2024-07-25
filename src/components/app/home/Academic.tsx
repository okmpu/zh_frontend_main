import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const academics: {id: number, name: string, slug: string, img: string}[] = [
    {
        id: 1,
        name: "Жаратылыстану",
        slug: "nat-science",
        img: "/faculties/geo.png"
    },
    {
        id: 2,
        name: "Филология",
        slug: "philology",
        img: "/faculties/philology.png"
    },
    {
        id: 3,
        name: "Физика-математика",
        slug: "phis-math",
        img: "/faculties/phis-math.png"
    },
    {
        id: 4,
        name: "Тарих және педагогика",
        slug: "history",
        img: "/faculties/history.png"
    },    
]


export default function AcademicEducation() {
    return (
        <div className="border-t">
            <div className="container grid gap-10 mx-auto py-10">
                <div className="max-w-xl w-full text-center mx-auto">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                        Академиялық оқыту
                    </h1>
                    <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias voluptas dolor quibusdam ea fuga blanditiis asperiores
                        commodi modi, perspiciatis excepturi?
                    </span>
                </div>

                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {academics.map((item: any) => (
                        <Link
                            key={item.id}
                            href={`/university/faculties/${item.slug}`}
                            className="p-4 grid gap-4 rounded-lg border transition-all hover:bg-secondary"
                        >
                            <div className="w-36 h-36 rounded-full border overflow-hidden mx-auto">
                                <Image
                                    src={item.img} width={512} height={512} alt="Image"
                                    className="w-full h-full"
                                />

                            </div>
                            <div className="grid gap-4 text-center">
                                <h1 className="text-center font-semibold text-xl text-neutral-900 dark:text-neutral-100">
                                    {item.name}
                                </h1>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link href={"/university/faculties"}>
                        <Button variant={"link"}>Толығырақ қарап шығу</Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}
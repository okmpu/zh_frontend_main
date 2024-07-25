import Image from "next/image"
import Link from "next/link"

const faculites: { id: number, name: string, slug: string, img: string }[] = [
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
    {
        id: 5,
        name: "Өнер және білім",
        slug: "arts",
        img: "/faculties/arts.png"
    },
    {
        id: 6,
        name: "Дене шынықтыру және спорт",
        slug: "sport",
        img: "/faculties/sports.png"
    },
]

const magistries: { id: number, name: string, slug: string, img: string }[] = [
    {
        id: 1,
        name: "Жоғарғы оқу орнынан кейінгі институт ",
        slug: "magister",
        img: ""
    },
]

const colledges: { id: number, name: string, slug: string, img: string }[] = [
    {
        id: 1,
        name: "Ж.Аймауытов атындағы колледж",
        slug: "colledge",
        img: ""
    },
]

export default function Faculties() {
    return (
        <div>
            <div className="container flex flex-col gap-10 mx-auto py-10">
                
                <div className="flex flex-col gap-4 border-b pb-10">
                    <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        Факультеттер
                    </h1>

                    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {faculites.map((item: any) => (
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
                </div>

                <div className="flex flex-col gap-4 border-b pb-10">
                    <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        Жоғарғы оқу орнынан кейінгі институт 
                    </h1>

                    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {magistries.map((item: any) => (
                            <Link
                                key={item.id}
                                href={`/university/faculties/${item.slug}`}
                                className="p-4 grid gap-4 rounded-lg border transition-all hover:bg-secondary"
                            >
                                <div className="w-36 h-36 rounded-full border overflow-hidden mx-auto">
                                    <Image
                                        src={item.img ? item.img : "/card.png"} width={512} height={512} alt="Image"
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
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        Колледж 
                    </h1>

                    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {colledges.map((item: any) => (
                            <Link
                                key={item.id}
                                href={`/university/faculties/${item.slug}`}
                                className="p-4 grid gap-4 rounded-lg border transition-all hover:bg-secondary"
                            >
                                <div className="w-36 h-36 rounded-full border overflow-hidden mx-auto">
                                    <Image
                                        src={item.img ? item.img : "/card.png"} width={512} height={512} alt="Image"
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
                </div>
            </div>
        </div>
    )
}
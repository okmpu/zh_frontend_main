"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Atom, FlaskConical, FolderKanban, GraduationCap, Newspaper } from "lucide-react"
import Image from "next/image"
import { useLocale } from "next-intl"


function GetIcon(slug: string) {
    if (slug === "bachelor") {
        return <GraduationCap size={64} strokeWidth={1} />
    } else if (slug === "magistracy") {
        return <Atom size={64} strokeWidth={1} />
    } else if (slug === "doctoral") {
        return <FlaskConical size={64} strokeWidth={1} />
    }
}


export default function FacultyDetailMain({ programs, }: { programs: any}) {
    const currentLocale = useLocale();
    
    return (
        <div className="my-10 flex gap-10">
            <div className="flex-1 flex flex-col gap-4">
                {/* Programs */}
                <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {programs.map((item: any) => (
                        <div key={item.id} className="h-24 border rounded-lg flex gap-2 justify-center items-center text-neutral-900 dark:text-neutral-100">
                            {GetIcon(item.slug)}
                            <h1 className="font-semibold text-xl">
                                {currentLocale === "ru" ? item.name_ru : currentLocale === "en" ? item.name_en : item.name_kk}
                            </h1>
                        </div>
                    ))}
                </div>

                {/* Departments */}
                <div className="flex-1">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold text-xl text-neutral-900 dark:text-neutral-100">
                                Кафедралар
                            </h1>

                            <Link href={"#"}>
                                <Button variant={"link"}>Толығырақ</Button>
                            </Link>
                        </div>

                        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <div className="h-64 border rounded-lg flex flex-col gap-2 justify-center items-center">
                                <Image src={"/faculties/phis-math.png"} width={512} height={512} alt="Image"
                                    className="rounded-full w-36 h-36 border"
                                />
                                <div className="text-center">
                                    <h1 className="font-semibold text-xl text-neutral-900 dark:text-neutral-100">
                                        Математика
                                    </h1>
                                    <span>кафедрасы</span>
                                </div>
                            </div>

                            <div className="h-64 border rounded-lg flex flex-col gap-2 justify-center items-center">
                                <Image src={"/faculties/phis-math.png"} width={512} height={512} alt="Image"
                                    className="rounded-full w-36 h-36 border"
                                />
                                <div className="text-center">
                                    <h1 className="font-semibold text-xl text-neutral-900 dark:text-neutral-100">
                                        Физика
                                    </h1>
                                    <span>кафедрасы</span>
                                </div>
                            </div>

                            <div className="h-64 border rounded-lg flex flex-col gap-2 justify-center items-center">
                                <Image src={"/faculties/phis-math.png"} width={512} height={512} alt="Image"
                                    className="rounded-full w-36 h-36 border"
                                />
                                <div className="text-center">
                                    <h1 className="font-semibold text-xl text-neutral-900 dark:text-neutral-100">
                                        Информатика
                                    </h1>
                                    <span>кафедрасы</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div className="flex-1">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold text-xl text-neutral-900 dark:text-neutral-100">
                                Жобалар
                            </h1>

                            <Link href={"#"}>
                                <Button variant={"link"}>Толығырақ</Button>
                            </Link>
                        </div>

                        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                            <div className="flex gap-2 p-4 border rounded-lg text-neutral-900 dark:text-neutral-100">
                                <FolderKanban size={32} strokeWidth={1} />
                                <div className="flex-1">
                                    <h1 className="font-semibold text-base line-clamp-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, officiis.</h1>
                                    <span className="text-neutral-500">Информатика кафедрасы</span>
                                </div>
                            </div>

                            <div className="flex gap-2 p-4 border rounded-lg text-neutral-900 dark:text-neutral-100">
                                <FolderKanban size={32} strokeWidth={1} />
                                <div className="flex-1">
                                    <h1 className="font-semibold text-base line-clamp-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, officiis.</h1>
                                    <span className="text-neutral-500">Математика кафедрасы</span>
                                </div>
                            </div>

                            <div className="flex gap-2 p-4 border rounded-lg text-neutral-900 dark:text-neutral-100">
                                <FolderKanban size={32} strokeWidth={1} />
                                <div className="flex-1">
                                    <h1 className="font-semibold text-base line-clamp-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, officiis.</h1>
                                    <span className="text-neutral-500">Физика кафедрасы</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Departments */}
                <div className="flex-1">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold text-xl text-neutral-900 dark:text-neutral-100">
                                Персоналдар
                            </h1>

                            <Link href={"#"}>
                                <Button variant={"link"}>Толығырақ</Button>
                            </Link>
                        </div>

                        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                            <div className="border rounded-lg flex justify-center items-center flex-col gap-2 p-4">
                                <Image src={"/zh.jpg"} width={512} height={512} alt="Image"
                                    className="w-36 h-36 rounded-full border"
                                />

                                <div className="text-center">
                                    <h1 className="text-neutral-900 text-base dark:text-neutral-100 font-semibold">
                                        Жасұлан Шынжігіт
                                    </h1>
                                    <span>Информатика, Оқытушы</span>
                                </div>

                                <Button variant={"secondary"} className="w-full flex">Анықтама</Button>
                            </div>

                            <div className="border rounded-lg flex justify-center items-center flex-col gap-2 p-4">
                                <Image src={"/zh.jpg"} width={512} height={512} alt="Image"
                                    className="w-36 h-36 rounded-full border"
                                />

                                <div className="text-center">
                                    <h1 className="text-neutral-900 text-base dark:text-neutral-100 font-semibold">
                                        Жасұлан Шынжігіт
                                    </h1>
                                    <span>Информатика, Оқытушы</span>
                                </div>

                                <Button variant={"secondary"} className="w-full flex">Анықтама</Button>
                            </div>

                            <div className="border rounded-lg flex justify-center items-center flex-col gap-2 p-4">
                                <Image src={"/zh.jpg"} width={512} height={512} alt="Image"
                                    className="w-36 h-36 rounded-full border"
                                />

                                <div className="text-center">
                                    <h1 className="text-neutral-900 text-base dark:text-neutral-100 font-semibold">
                                        Жасұлан Шынжігіт
                                    </h1>
                                    <span>Информатика, Оқытушы</span>
                                </div>

                                <Button variant={"secondary"} className="w-full flex">Анықтама</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Publics */}
            <div className="w-full max-w-sm">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl text-neutral-900 dark:text-neutral-100">
                        Публикациялар
                    </h1>
                    <Link href={"#"}>
                        <Button variant={"link"}>Толығырақ</Button>
                    </Link>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="p-4 border rounded-lg flex gap-2 text-neutral-900 dark:text-neutral-100">
                        <Newspaper />
                        <div className="flex flex-col flex-1">
                            <h1 className="font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, beatae!</h1>
                            <span className="text-neutral-500">20.03.2024</span>
                        </div>
                    </div>

                    <div className="p-4 border rounded-lg flex gap-2 text-neutral-900 dark:text-neutral-100">
                        <Newspaper />
                        <div className="flex flex-col flex-1">
                            <h1 className="font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, beatae!</h1>
                            <span className="text-neutral-500">20.03.2024</span>
                        </div>
                    </div>

                    <div className="p-4 border rounded-lg flex gap-2 text-neutral-900 dark:text-neutral-100">
                        <Newspaper />
                        <div className="flex flex-col flex-1">
                            <h1 className="font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, beatae!</h1>
                            <span className="text-neutral-500">20.03.2024</span>
                        </div>
                    </div>

                    <div className="p-4 border rounded-lg flex gap-2 text-neutral-900 dark:text-neutral-100">
                        <Newspaper />
                        <div className="flex flex-col flex-1">
                            <h1 className="font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, beatae!</h1>
                            <span className="text-neutral-500">20.03.2024</span>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg flex gap-2 text-neutral-900 dark:text-neutral-100">
                        <Newspaper />
                        <div className="flex flex-col flex-1">
                            <h1 className="font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, beatae!</h1>
                            <span className="text-neutral-500">20.03.2024</span>
                        </div>
                    </div>

                    <div className="p-4 border rounded-lg flex gap-2 text-neutral-900 dark:text-neutral-100">
                        <Newspaper />
                        <div className="flex flex-col flex-1">
                            <h1 className="font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, beatae!</h1>
                            <span className="text-neutral-500">20.03.2024</span>
                        </div>
                    </div>

                    <div className="p-4 border rounded-lg flex gap-2 text-neutral-900 dark:text-neutral-100">
                        <Newspaper />
                        <div className="flex flex-col flex-1">
                            <h1 className="font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, beatae!</h1>
                            <span className="text-neutral-500">20.03.2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
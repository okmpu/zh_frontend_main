import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function Publics() {
    return (
        <div className="border-t">
            <div className="container grid gap-10 mx-auto py-10">
                <div className="max-w-xl w-full text-center mx-auto">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                        Публикациялар
                    </h1>
                    <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias voluptas dolor quibusdam ea fuga blanditiis asperiores
                        commodi modi, perspiciatis excepturi?
                    </span>
                </div>

                <Tabs defaultValue="news">
                    <TabsList className="flex-wrap">
                        <TabsTrigger value="news" className="hover:text-primary">Жаңалықтар</TabsTrigger>
                        <TabsTrigger value="announcement" className="hover:text-primary">Хабарландырулар</TabsTrigger>
                        <TabsTrigger value="vacancies" className="hover:text-primary">Вакансиялар</TabsTrigger>
                    </TabsList>
                    <TabsContent value="news">
                        <div className="grid mt-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">Жаңалықтар</h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">Жаңалықтар</h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">Жаңалықтар</h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">Жаңалықтар</h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </TabsContent>

                    <TabsContent value="announcement">
                        <div className="grid mt-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                        Хабарландырулар
                                    </h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                        Хабарландырулар
                                    </h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                        Хабарландырулар
                                    </h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                        Хабарландырулар
                                    </h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </TabsContent>

                    <TabsContent value="vacancies">
                        <div className="grid mt-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                        Вакансиялар
                                    </h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                        Вакансиялар
                                    </h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                        Вакансиялар
                                    </h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-lg border">
                                <Image src={"/card.png"}
                                    width={1080} height={1080} alt="Image"
                                    className="w-full"
                                />
                                <div className="px-4 pb-4">
                                    <h1 className="text-xl font-semibold line-clamp-1 text-neutral-900 dark:text-neutral-100">
                                        Вакансиялар
                                    </h1>

                                    <span className="line-clamp-2 mt-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Odio, quas assumenda ipsam voluptas quibusdam cupiditate
                                        deleniti autem sapiente atque exercitationem.
                                    </span>

                                    <div className="flex items-center gap-2 mt-2 text-xs">
                                        <Clock size={16} strokeWidth={1.5} />
                                        <span>20.07.2024 - 15:30</span>
                                    </div>

                                    <Link href={"#"}>
                                        <Button variant={"link"} className="px-0">Толығырақ қарап шығу</Button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}